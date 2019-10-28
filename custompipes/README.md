# Custom Pipes


You can create your very own custom pipes in Angular by following

1. Create a pipe
2. Register it in the *app.module.ts*
3. Use the pipe name wherever you want to transform any piece of data in your app

You can create a pipe file (and register it too) by using the Angular CLI. So, while you're still inside the project folder, do this on the command line

```
ng g p numtostars
```



# Additional notes

To add the Bootstrap CSS to the project, I added it via NPM

```
npm install bootstrap -save
```

Then in the project's *angular.json* config file, I added a reference to the Bootstrap CSS file, like this

```
  "architect": {
    "build": {
      "builder": "@angular-devkit/build-angular:browser",
      "options": {
        "outputPath": "dist/custompipes",
        "index": "src/index.html",
        "main": "src/main.ts",
        "polyfills": "src/polyfills.ts",
        "tsConfig": "tsconfig.app.json",
        "aot": false,
        "assets": [
          "src/favicon.ico",
          "src/assets"
        ],
        "styles": [
          "src/styles.css",
          "node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
        "scripts": []
      },
```