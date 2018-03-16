# DnDashboard

A web-based toolset resource for use during D&D games, for players and GMs alike.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

TO DO: See deployment for notes on how to deploy the project on a live system.

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
PORT=3001 node bin/www
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

To be implemented:
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](http://mongoosejs.com/)

## Contributing

Not yet. Let me finish this thing first.

## Authors

* **Sean O'Daniels** - *Primary Author*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* TBD
