## Shopping Cart App

This is a small shopping cart app that I created because I wanted to work with the MERN stack.

#### _**IMPORTANT NOTE**_ -

This project does not have a mongoDB connection setup. Setup the connection based on the environments below.

- local development: create a .env file in the server folder, which sets MONGO_URL="your-db.uri" and JWT_SECRET="Your-Secret"

## Getting Started

Since this project will hold both the client application and the server application there will be node modules in two different places. You have to run `npm install` in both the client folder and the server folder

This app is not a production app, but me building and learning with the MERN stack

## Available Scripts

In the project directory, you can run:

### `CD client`

### `npm run dev`

Runs both the client app in development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view the client in the browser.

### `CD server`

### `npm run dev`

Runs the Server app in development mode.<br>

## File structure

#### `client` - Holds the client application

- #### `public` - This holds all of our static files
- #### `src`
  - #### `components` - This folder holds all of the different components that will make up our views
  - #### `hooks` - This folder holds the custom hooks
  - #### `localStorage` - This folder holds a file, with the functions that is used with setting and getting localStorage
  - #### `services` - This folder holds files with all of the axios requests
  - #### `App.js` - This is what renders all of our browser routes, different views and stores state context for cart and user state
  - #### `main.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client

#### `server` - Holds the server application

- #### `images` - This hold all the "uploaded" images for static download by UI (image filename is stored in MongoDB with every product)
- #### `src`

  - #### `controllers` - These hold all of the callback functions that each route will call
  - #### `middleware` - This hold the middleware that is used in some of the routes
  - #### `models` - This holds all of our data models
  - #### `index.ts` - Hold the express config, routes and mongoDB connection

- #### `.env` - I have stored my MongoDB URL and JWT-Secret in a .env file both are needed for this application to function (The .env file is not part of this repository)

#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README

#### `.gitignore` - Tells git which files to ignore

#### `README` - This file!
