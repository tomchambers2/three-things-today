'use strict';

describe('ThreeThingsTodayApp', () => {
  let React = require('react/addons');
  let ThreeThingsTodayApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ThreeThingsTodayApp = require('components/ThreeThingsTodayApp.js');
    component = React.createElement(ThreeThingsTodayApp);
  });

  it('should create a new instance of ThreeThingsTodayApp', () => {
    expect(component).toBeDefined();
  });
});
