# cordova-plugin-boilerplate

An opinionated boilerplate for Cordova plugins including Swift compatibility, ESLint, Babel.

## Usage

Clone this repo :
```sh
$ mkdir myNewPluginProject && cd myNewPluginProject
$ git clone https://github.com/akofman/cordova-plugin-boilerplate.git .
```

Remove the boilerplate history :
```sh
$ git checkout --orphan temp
$ git commit -m 'initial commit'
$ git branch -D master
$ git branch -m master
```

Update your origin :
```sh
$ git remote remove origin
$ git remote add origin yourgitrepourl.git
```

Now you can code :)

## Supported Platforms

 - iOS
 - Android
 
## License

MIT © [Alexis Kofman](http://twitter.com/alexiskofman)
