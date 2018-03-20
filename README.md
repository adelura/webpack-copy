``` sh
git clone git@github.com:adelura/webpack-copy.git
cd webpack-copy
npm i
npm run build
```

Expected: In dist directory there will be structure

```
├── app.js
├── app.js.map
└── themes
   ├── github
   |  └── theme.txt
   └── jetbrains
      └── theme.txt

```