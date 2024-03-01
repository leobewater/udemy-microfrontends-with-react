Video: https://www.udemy.com/course/microfrontend-course/learn/lecture/23206812

# To Run
```bash
> cd products (port: 8081)
> npm run start 

> cd container (port: 8080)
> npm run start

> cd cart (port: 8082)
> npm run start
```

Package version control
```
- React Module Federation only load "shared: []" package with the same major version.
- *** If the packages are differernt with the major version numbers, then both will be loaded.
- *** If this is specified shared: { faker: { singleton: true }, }, it only loads a single copy of the faker when there are two different major versions. It also shows a warning message in the browser's console.
```