import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: '65%',
    minHeight: '65%',
    height: 'auto',
    overFlowY: 'scroll',
    textAlign: 'center',
    position: 'absolute',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image: {
    height: '240px',
    width: 'auto'
  },
  button: {
    background: '#D3D3D3'
  },
  closeParent: {
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginBottom: '10px'
  },
  close: {
    textAlign: 'right',
    display: 'block'
  }
}));

export default function SimpleModal({ display, closeModal, title, content, image, source }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const paperStyle = useMediaQuery('(min-width: 240px)')

  const handleClose = () => {
    closeModal()
  };

  const handleClick = () => {
    window.open(source)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.closeParent} >
        <CloseIcon onClick={handleClose} className={classes.close} />
      </div>
      <img src={image} alt={title} className={classes.image} />
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">
        {content}
      </p>
      <Button onClick={handleClick} className={classes.button}>Full Article</Button>
      <SimpleModal />
    </div>
  );

  return (
    <div className="modalCard">
      <Modal
        open={display}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}