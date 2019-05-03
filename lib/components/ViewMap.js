function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
export default class ViewMap extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "onLoad", e => {});
  }

  render() {
    const {
      amapKey,
      value: {
        location,
        name
      }
    } = this.props;
    return React.createElement("iframe", {
      onLoad: e => this.onLoad(e),
      className: "map-iframe",
      src: `https://m.amap.com/navi/?dest=${location}&destName=${name}&hideRouteIcon=1&key=${amapKey}`
    });
  }

}