# Prepare

Before doing the integration, we make some preparations, including:

- Store front-end (client) & back-end (server) templates in one folder
- Install packages Concurrently (server side)

```
npm i concurrently
```

- Add code below inside packagejson file (server side)

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
