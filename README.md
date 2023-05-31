# Wallet App

How to run that project:

```bash
git clone https://github.com/ericksoncst/Wallet-App.git
```

```bash
git checkout master
```

Package instalation:

```bash
yarn
```
or 

```bash
npm i
```

## Starting Json Server

My commits already have a db.json. Follow that config:

```bash
json-server --watch db.json -p 3000 -d 2000 --host [yourIp]
```

## Runing Project

```bash
yarn start
```


```bash
yarn android
```

## Note ⚠️ ⚠️:
Unfortunately that project was made based on Android config only

## To run tests:
```bash
yarn test
```

## Note 2 ⚠️ ⚠️:

Change API_URL on .env key


```typescript
return 'Please check it with love <3'
```

## Note 3 ⚠️ ⚠️:

Sorry about that animations 😂😂


## Final toughts:

- Why react-query: 
RQ provides me more control and performance do menage my api calls aand I can use it as state-menager.

- Why Typescript:
It's not my confort zone.

- Why Jest:
My knowledge doesn't not cover tests. So I tried to do my best. I lost a lot of time trying other libs...

- About animations:
Same as previous topic 😂

- What I miss?

I need to fix loadings order.
Theme of the app.
The flat list style. (SHAME).
Put types in a unique file.
Adjust Fonts.
Type my tests.
Create a custom https handler.
