'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
var _ = require('lodash');

require('../styles/progress-bar.css');

var ProgressBar = React.createClass({
  render: function() {
    var total = this.props.things.length;
    var completed = _.filter(this.props.things, function(n) { return n; }).length;

    var style = {
        width: (completed / total) * 100 + '%'
    }

    return (
      <div className="progress-bar">
        <ReactCSSTransitionGroup transitionName="progress-bar" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <div key="progress-bar-element" className="progress-bar-element" style={style}></div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

module.exports = ProgressBar;
