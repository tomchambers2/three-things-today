'use strict';

var React = require('react/addons');
var ProgressBar = require('./ProgressBar');
var Thing = require('./Thing');
var LocalStorageMixin = require('react-localstorage');

// CSS
require('normalize.css');
require('../styles/main.css');

var ThreeThingsTodayApp = React.createClass({
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {
      things: [false, false, false]
    }
  },

  completeTask: function(index) {
    return function() {
      var updatedThings = this.state.things;
      updatedThings[index] = !updatedThings[index]
      this.setState({
        things: updatedThings
      })
    }.bind(this)
  },

  render: function() {
    return (
      <div className="main">
        <div className="top">
          <h1>3 things today</h1>
          <ProgressBar things={this.state.things} />
        </div>
        <div className="bottom">
            <Thing localStorageKey="0" completed={this.state.things[0]} onChange={this.completeTask(0)} />
            <Thing localStorageKey="1" completed={this.state.things[1]} onChange={this.completeTask(1)} />
            <Thing localStorageKey="2" completed={this.state.things[2]} onChange={this.completeTask(2)} />
        </div>
      </div>
    );
  }
});
React.render(<ThreeThingsTodayApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ThreeThingsTodayApp;
