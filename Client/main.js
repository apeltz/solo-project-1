const React = require('react');
const ReactDOM = require('react-dom');
const url = 'https://wth.firebaseio.com/';


console.log("linked");
// App consists of one feed
const App = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState() {
    return {
      scoreData: null
    };
  },

  componentWillMount: function() {
    var ref = new Firebase("https://wth.firebaseio.com/items");
    this.bindAsArray(ref, "items");
  },

  render() {
    return (
      "Test"<div id="feed">
        <h1>Gallery</h1>
      </div>
    );
  },
});


// Render an <App> component to the #app div in the body
ReactDOM.render( <App /> , document.getElementById('app'));
