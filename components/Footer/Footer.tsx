import Link from 'next/link'

const Footer = () => {
  // Store in date our date for the footer
  const date = new Date().getFullYear()
  return (
    <footer className='footer'>
      <p>
        Made by
        <Link href='https://adamrichardturner.dev'> Adam Turner</Link>
      </p>
    </footer>
  )
}

export default Footer
