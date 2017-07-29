# React + Redux + Webpack 3 Boilerplate

Because it can be a headache to configure Webpack, I decided to create this boilerplate repository, which is not finished yet.

## Features
- [x] __Webpack v3__
- [x] __React v15__
- [x] __Live reload__
- [X] __EJS template__
- [ ] __Redux__
- [ ] __Json-server__
- [ ] __Test tools__

Please note I am mainly a backend developer and my advice is that front-end tools and organization is still a nightmare. That's why this boilerplate will try to follow Maven conventions for directories, with a minimum set of configuration files and a clear separation between source types. 

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

For Linux users, if hot reload does not work, try to increase the file watcher limit :
```sh
$ echo 100000 | sudo tee /proc/sys/fs/inotify/max_user_watches
```
I lost few hours to understand that was the problem and not my webpack configuration file !

