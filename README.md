# React + Redux + Webpack 3 Boilerplate

Because it can be a complicated to configure Webpack I decided to create this boilerplate repository, which is not finished yet.

## Features
- [x] Webpack v3
- [x] React v15
- [x] Live reload
- [X] EJS template
- [X] Redux
- [X] Json-server
- [X] Configure webpack to act as proxy (with Json-server)
- [X] Karma + Istanbul (running but with dumb tests, still not finished)

## Conventions
I am mainly a back-end developer and in my opinion front-end tools and organization are still a nightmare in 2017. That's why this boilerplate will try to follow Maven/Java-style conventions with a minimum set of configuration files. For example :
 - have a clear __separation of source types__ (JS Vs SCSS, src Vs tests...)
   - CSS is for STYLE, not JS. CSS classes should describe object natures only, forget classes like 'middle' or 'align-left'. In SASS, the __key word @Extend__ should be our best friend. This bring us to often construct a different directory structure.   
 - use __camelCase__ everywhere, except for CSS
 - use __singular__ everywhere, plural brings confusion
 - SASS variable naming should be __generic first__ (if you define a color, you variable should start with 'color-') 
 
## Json-server
Start the server API (to mock back-end)
```sh
$ npm run api
```
Check mocked urls :
 - [http://localhost:3000/api/consumer/jira?query=query1](http://localhost:3000/api/consumer/jira?query=query1)
 - [http://localhost:3000/api/jenkins/monitoring](http://localhost:3000/api/jenkins/monitoring)

## Development
Run the local webpack-dev-server with auto-compile and live-reloading on [http://localhost:8080/](http://localhost:8080/)
```sh
$ npm run dev
```

![Screenshot](/screenshot.png)


## Production
Build the current application for production
```sh
$ npm run prod
```
You can check the production build with http-server on [http://localhost:8080/](http://localhost:8080/)
```sh
$ npm run serve
```


## Tips and Tricks

### Hot reload on Linux
For Linux users, if hot reload does not work, try to increase the file watcher limit :
```sh
$ echo 100000 | sudo tee /proc/sys/fs/inotify/max_user_watches
```
I lost few hours to understand that was the problem and not my webpack configuration file !

Also, please be careful about the 'watchOptions' section in webpack configuration. On Linux (maybe on other OS too), sometimes changes are not detected without this configuration.
