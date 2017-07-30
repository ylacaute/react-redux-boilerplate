# React + Redux + Webpack 3 Boilerplate

Because it can be a headache to configure Webpack, I decided to create this boilerplate repository, which is not finished yet.

## Features
- [x] Webpack v3
- [x] React v15
- [x] Live reload
- [X] EJS template
- [X] Redux
- [ ] Json-server
- [X] Karma (running but with dumb tests, still not finished)

## Conventions
I am mainly a back-end developer and my advice is that front-end tools and organization is still a nightmare in 2017. That's why this boilerplate will try to follow Maven/Java-style conventions with a minimum set of configuration files. For example :
 * have a clear **separation of source types** (JS vs SCSS, src vs tests)
 ** SCSS organization is not necessary the same as JS
 ** CSS is for STYLE, not JS. CSS classes should describe object natures only, forget classes like 'middle' or 'align-left'. In SASS, the **key word @Extend** will be your best friend.  
 * use **camelCase** everywhere
 * organize **main directories by function first** and then organize them by nature
 ** this should allow us to extract any module in a separate project when growing to much

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
