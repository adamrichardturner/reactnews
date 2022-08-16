import axios from "axios";

type Data = {
    data: object;
}

export default async function serverArticles(req, res) {
  const {endpoint='top-headlines', topic='breaking-news', country='Any'} = req.query;
  const baseUrl = 'https://gnews.io/api/v4/';
  const key = process.env.GNEWS_API_KEY;
  const response = await axios.get(`${baseUrl}${endpoint}?token=${key}&lang=en&topic=${topic}&country=${country}`);
  if(response) {
    res.status(200).json({data: response.data})
  } else {
    res.status(404).send('Failed get request to GNews API')
  }
};