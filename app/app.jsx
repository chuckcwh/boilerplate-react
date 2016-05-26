var React = require('react');
var ReactDOM = require('react-dom');

var firstName = "Chuck";

var obj1 = {
    chuck: "yes",
    stupid: "hell no"
};

var obj2 = {
    antonio: "shit",
    ...obj1
};

console.log(obj2);

ReactDOM.render(
  <h1>Boilerplate with React and Webpack!</h1>,
  document.getElementById('app')
);