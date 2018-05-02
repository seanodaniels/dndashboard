# DnDashboard

A web-based toolset resource for use during D&D games, for players and GMs alike.

A live demo of this app can be found at http://dndash.herokuapp.com/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

TO DO: See deployment for notes on how to deploy the project on a live system.

## Browser Requirements for a Local Build

For local installations only, running this app in Chrome will throw a CORS error. I recommend installing the "Allow-Control-Allow-Origin" Chrome Extension: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en and enabling it for the following:

1. http://127.0.0.1/*
2. http://localhost/*

### Installing

A step by step series of examples that tell you have to get a development env running.

Install what needs to be installed: Node, React, Redux, Mongoose, MongoDB.

Clone the repository on your local machine.

```
git clone https://www.github.com/seanodaniels/dndashboard
```

Update all the things.

```
cd ./dndashboard
npm install
```

Run MongoDB. From the root directory:

```
mongod -dbpath ./data/db
```

Run the Express server. From the root directory:

```
npm start
```

Run the React app. From the root directory:

```
cd client
npm start
```


## Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [React Router Dom](https://github.com/reactjs/react-router-redux)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)

## Contributing

Not yet. Let me finish this thing first.

## Authors

* **Sean O'Daniels** - *Primary Author*

## Acknowledgments

* TBD
