# Reddit Clone with UpVote and DownVotes


You can do online test in my Heroku [here](http://reddit-clone-demo.herokuapp.com/)

### Installation

This Repo requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ git clone 'repo-name'
$ cd 'repo-name'
$ npm install or yarn install
$ npm run start or yarn start
```

How to use:
  - Click on the card 'add new topic' for add new topic
  - Click thumbs up green icon for up vote the topic
  - Click thumbs down red icon for down vote the topic

### Tech

This repo uses a number of open source projects to work properly::

* [Reactstrap](http://reactstrap.github.io/)
* [Redux](https://github.com/reduxjs/redux)

This repo can also:
* Using session storage for saving the data, so when browser closed the data will be remove

### Help
If you need help to run this project, please visit the [help](http://reddit-clone-demo.herokuapp.com/help) page. I have provided some documentation that can help you to more easily use this project.

### Project Structure
````
repo-name/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.png
  src/
    actions/
        topicActions.js
        types.js
    assets/
        img/
          back_icon.svg
          help_icon.png
          logo.png
        main.scss  
    components/
        Help.js
        Homepage.js
        Navbar.js
        Topic.js
    reducers/
        index.js
        topicReducer.js
    App.js
    App.test.js
    index.js
    serviceWorker.js
    store.js
````
