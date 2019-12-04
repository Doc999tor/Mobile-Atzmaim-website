require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragma": "h" }],
    ["babel-plugin-transform-require-ignore",{ extensions: [".styl"] }]
  ],
});
require("./server");