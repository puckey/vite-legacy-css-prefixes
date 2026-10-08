# plugin-legacy strips `-webkit-` prefixes from the CSS

```sh
npm install
npm run repro
```

`src/style.css` is `.a { -webkit-user-select: none; user-select: none; }`. With `legacy()`, the built CSS loses `-webkit-user-select`, which every released Safari needs.
