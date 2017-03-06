# Flix-Herst

This is a Pinterest like app that allows register users to create cards with an image and tagline that unregister and register users can view but only register users can vote. oAuth is used through twitter for user register and login using Passport.js.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Things you need to install the software and how to install them

####Node.js
####MongoDB
####NPM

### Installing


Download all dependencies

```
npm install
```

Create an environment variable and set it to developement

```
export NODE_ENV=development
```

Create an env directory in the root of the project

```
mkdir env
```

Create a twitter-env.json file in the env directory

```
touch env/twitter-env.json
```

You will now add the credentials that you would get from your twittter developer account 

```javascript
{
  "consumerKey": "YOUR_CONSUMER_KEY",
  "consumerSecret": "YOUR_CONSUMER_SECRET",
  "callbackURL": "YOUR_CALL_BACK"
}
```

Run webpack to build the code

```
webpack
```

Make sure you have a mongoDB server running in a separate terminal

```
mongod
```

Now star the web server with nodemon and app should be available on localist:3000

```
nodemon
```


## Running the tests

Enter the following command in the root of the project to run tests

```
npm run test
```

## Built With

* [Node.js](https://nodejs.org/en/) - Server-side language
* [React.js](https://facebook.github.io/react/) - UI Library
* [MongoDB](https://www.mongodb.com/) - NoSql Database
* [Express](https://expressjs.com/) - Web Framework





## Authors

* **Alemneh Asefa** - *Initial work* - [Alemneh](https://github.com/alemneh)

See also the list of [contributors](https://github.com/alemneh/book-swap/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
