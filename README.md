# ReactNews | Next.js News App

ReactNews features a responsive NewsGrid of articles on a variety of topics sourced from over 60,000 news vendors. 

The articles are sourced via the [GNews API](https://gnews.io/) utilising Next.js Server Side Rendering.

You can view a live demo of this [project here](https://reactnews.app).

## Getting Started

Clone the repository and run 

```bash 
npm install
```

Visit and register at [GNews API](https://gnews.io/), verify your email address and obtain your API key.

Place your API key in a .env.local file in the root directory as follows: 

GNEWS_API_KEY='API_KEY_HERE'

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future Enhancements

- Individual page view - it would be useful to allow users to read more content before visiting the news source.
- Unit and Integration Testing