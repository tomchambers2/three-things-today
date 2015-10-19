'use strict';

var React = require('react/addons');
var Checkbox = require('./Checkbox');
var LocalStorageMixin = require('react-localstorage');

require('../styles/thing.css')

var ThreeThingsTodayApp = React.createClass({
	mixins: [LocalStorageMixin],

	getInitialState: function() {
		return {
			thing: null
		}
	},

	render: function() {
		var checkbox;

		if (this.props.text) {
			checkbox = (<div className="checkbox-container">
					<Checkbox
						localStorageKey={this.props.localStorageKey}
						onChange={this.props.onComplete}
						checked={this.props.completed} />
			</div>)
		}

		return (
			<div className="thing">
				<div className="input-container">
					<input
						type="text"
						placeholder={this.props.placeholder}
						localStorageKey={this.props.id}
						className={this.props.completed && 'thing-completed'}
						value={this.props.text}
						onChange={this.props.onChange} />
				</div>
				{checkbox}
			</div>
		);
	}
});

module.exports = ThreeThingsTodayApp;
