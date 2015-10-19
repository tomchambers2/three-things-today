'use strict';

var React = require('react/addons');
var ProgressBar = require('./ProgressBar');
var Thing = require('./Thing');
var ClearAll = require('./ClearAll');
var LocalStorageMixin = require('react-localstorage');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var ThreeThingsTodayApp = React.createClass({
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {
      things: [false, false, false],
      thingsText: []
    }
  },

  updateText: function(index) {
    return function(event) {
      var thingsText = this.state.thingsText;
      thingsText[index] = event.target.value;
      this.setState({
        thingsText: thingsText
      })
    }.bind(this)
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

  clearAll: function() {
    this.setState({
      thingsText: [],
      things: [false, false, false]
    })
  },

  render: function() {
    var clearAll;
    if (_(this.state.things).filter(function(n) { return n }).value().length >= 3) {
      console.log('STILL HERE', _(this.state.things).filter(function(n) { return n }).value().length)
      clearAll = <ClearAll onClick={this.clearAll} />;
    }

    return (
      <div className="main">
        <div className="top">
          <h1>3 things today</h1>
          <ReactCSSTransitionGroup transitionName="clear-all" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {clearAll}
          </ReactCSSTransitionGroup>
          <ProgressBar things={this.state.things} />
        </div>
        <div className="bottom">
            <Thing localStorageKey="0" text={this.state.thingsText[0]} placeholder="enter most important to do" completed={this.state.things[0]} onComplete={this.completeTask(0)} onChange={this.updateText(0)} />
            <Thing localStorageKey="1" text={this.state.thingsText[1]} placeholder="then the second most" completed={this.state.things[1]} onComplete={this.completeTask(1)} onChange={this.updateText(1)} />
            <Thing localStorageKey="2" text={this.state.thingsText[2]} placeholder="one more thing" completed={this.state.things[2]} onComplete={this.completeTask(2)} onChange={this.updateText(2)} />
        </div>
      </div>
    );
  }
});
React.render(<ThreeThingsTodayApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ThreeThingsTodayApp;
