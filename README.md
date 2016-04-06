# koa-simple-json2csv
A simple json to csv module to support koa.

<p align="center">
  <a href="https://npmjs.org/package/koa-simple-json2csv">
    <img src="https://img.shields.io/npm/v/koa-simple-json2csv.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/solee0524/koa-simple-json2csv">
    <img src="https://img.shields.io/coveralls/solee0524/koa-simple-json2csv.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/solee0524/koa-simple-json2csv">
    <img src="https://img.shields.io/travis/solee0524/koa-simple-json2csv.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/koa-simple-json2csv">
    <img src="http://img.shields.io/npm/dm/koa-simple-json2csv.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/solee0524/koa-simple-json2csv.svg">
    <img src="https://david-dm.org/solee0524/koa-simple-json2csv.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/solee0524/koa-simple-json2csv/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/koa-simple-json2csv.svg?style=flat-square"
         alt="License">
  </a>
</p>

## Usage

```
var json2csv = require('koa-simple-json2csv');

var authors = [{
  name: 'solee',
  homepage: 'http://solee.me',
  repo: {
    url: 'https://github.com/solee0524/koa-simple-json2csv.git',
    type: 'git'
  },
  keys: ['coo"l', 'lol']
}, {
  name: 'solee_clone',
  homepage: 'http://solee.me',
  repo: {
    url: 'https://github.com/solee0524/koa-simple-json2csv.git',
    type: 'git'
  },
  keys: ['clone', 'myth']
}];

var options = {
  data: authors,
  fields: ['name', 'homepage', 'repo.url', 'keys']
}

var csv = yield json2csv(options);
```

`data` and `fields` in `options` must be **Array**

## License
MIT © Bo Li ([solee.me](http://solee.me))