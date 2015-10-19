'use strict';

var React = require('react/addons');

var Checkbox = React.createClass({
	render: function() {
		var classes = ['fa', 'fa-check', 'completed-check'];

		if (this.props.checked) {
			classes.push('checked')
		}

		return (
			<div className="checkbox">
				<i className={classes.join(' ')} onClick={this.props.onChange}></i>
			</div>
		);
	}
});

module.exports = Checkbox;
