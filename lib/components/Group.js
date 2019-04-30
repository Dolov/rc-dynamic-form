function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import FieldItem from './FieldItem';
export default class Group extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    const {
      items
    } = this.props;
    return items.map(item => React.createElement(FieldItem, {
      key: item.name,
      data: item
    }));
  }

}