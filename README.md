# Prepare

## Server Side

Before doing the integration, we make some preparations, including:

- Store front-end (client) & back-end (server) templates in one folder
- Install packages Concurrently (server side)

```
npm i concurrently
```

- Add code below inside package.json file `server/package.json`

```javascript
...
"scripts": {
   "start": "nodemon server.js",
   "client": "npm start --prefix ../client",
   "dev": "concurrently \"npm start\" \"npm run client\""
},
...
```

- Run this code:

```
npm run dev
```

- Install package CORS

```
npm i cors
```

- Add code below inside index.js file `server/index.js`

```javascript
...
const port = 5000

app.use(express.json())
app.use(cors())
...

```

## Client Side

We need to install axios on your front end

```javascript
npm install axios
```

Create API config in client side `client/src/config/api.js`

```javascript
import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.commin["Authorization"];
  }
};
```
