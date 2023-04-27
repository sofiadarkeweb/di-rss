# RSS feed

A test case for DI-gruppen.

## Task

Use their RSS feed and create a simple website showcasing the latest 10 articles in a suitable way.

## Description

I wanted to do the project in React so went for setting it up in Create React App, which is the most straight forward way I know to create a React project for a small task like this. Create react app is built on node.js and I will be using plain CSS. I wanted a site that gave a good overview of the articles and showed them in a readable appealing way.

Even though its a small site I wanted it to be scalable and set up a basic component structure, making it easy to add to the project.

I made the site responsive using CSS grid and flexbox and media queries.

When fetching the content from the feed I had to convert it to Json to make it managable in the UI. I considered using some library or build the functionality on my own, but in the end went for an online converter URL, it seamed like the best solution for now. Using libaries is always adding a small risk factor and building it on my own would probably have taking a bit of time.

I deployed the site on Vercel, which is mainly a publishing tool for when you are working with Next.js but works really well with regular react sites as well.

## Features

- Display the latest news articles from the RSS feed.
- Responsive design

## Tech

- Create React App
- Node.js
- CSS
- RSS feed from www.di.se/rss
- Vercel (deploment)

## Link to deployed site

https://di-rss.vercel.app/

## How to run the project locally

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
