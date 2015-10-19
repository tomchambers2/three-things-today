'use strict';

var React = require('react/addons');
var Checkbox = require('./Checkbox');
var LocalStorageMixin = require('react-localstorage');

require('../styles/thing.css')

var ThreeThingsTodayApp = React.createClass({
	mixins: [LocalStorageMixin],

	updateText: function(event) {
		this.setState({
			thing: event.target.value
		})
	},

	getInitialState: function() {
		return {
			thing: null
		}
	},

	render: function() {
		var checkbox;

		if (this.state.thing) {
			checkbox = (<div className="checkbox-container">
					<Checkbox
						localStorageKey={this.props.localStorageKey}
						onChange={this.props.onChange}
						checked={this.props.completed} />
			</div>)
		}

		return (
			<div className="thing">
				<div className="input-container">
					<input
						type="text"
						placeholder="to do"
						localStorageKey={this.props.id}
						className={this.props.completed && 'thing-completed'}
						value={this.state.thing}
						onChange={this.updateText} />
				</div>
				{checkbox}
			</div>
		);
	}
});

module.exports = ThreeThingsTodayApp;
