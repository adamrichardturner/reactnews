# ReactNews | GNews API App powered by React

This project was bootstrapped with create-react-app and the styling was primarily provided
by MaterialUI components which have been altered.

## Demo

To view a live demo of the project, hosted on GitHub, follow this URL:

https://adamrichardturner.dev/reactnews

## Getting Started

Clone the repository and add a .env file in the src directory. 

Visit and register at https://gnews.io/ to obtain an API key.

Place your API key in the env. file as follows:

REACT_APP_NEWSAPI_KEY="API KEY HERE"

## Functionality

This app serves up the latest headlines for the GB area, you can change the country code easily and 
there are a number of query parameters you can use. 

Refer to the documentation for full details on the content you can serve: https://gnews.io/docs/v4#introduction

The app uses MaterialUI components and features an AppDrawer which allows the user to select various
news topics  which subsequently alter the API call and the data served.

## Future Implementations

* Search Functionality that does not call the API on each change of input value, but serves up articles already called.
* Improve styling such that the cards are identical proportions regardless of content, use truncation where possible.