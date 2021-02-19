# Webpack demo with express

in development mode you use 2 terminal windows, in first one, you boot up webpack 

```
npm run dev:client
```

in another one, you bootup express server

```
npm run dev:server
```

when you need to deploy your application on cloud, you need to build your assets

```
npm run build
```

all files / images / css in `client` folder will be built in the `public` folder.

Remember to include this step in your CI/CD pipeline.

to start server on cloud, run

```
npm start
```
