# ReactNews | Next.js TypeScript News App

ReactNews features a responsive grid of articles on a variety of topics from over 60,000 news vendors.

The articles are sourced via the [GNews API](https://gnews.io/).

This web application is written in TypeScript, with Sass styling and no external CSS frameworks.

API calls are made via the Next.js [getServerSideProps](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) (Server-Side Rendering) function.

## Preview

![](preview.png)

You can view a live demo of this [project here](https://reactnews.app).

## Getting Started

Clone the repository and run

```bash
npm install
```

Visit and register at [GNews API](https://gnews.io/), verify your email address and obtain your API key.

Place your API key in a .env.local file in the root directory as follows:

```
GNEWS_API='API_KEY_HERE'
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
