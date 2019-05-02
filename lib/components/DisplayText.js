function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { isMainLess, handleLine } from '../utils';
import Control from './Control';
const E = "-";
export default class DisplayText extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    const {
      value,
      compType
    } = this.props;
    if (isMainLess(value)) return E;

    if (compType === 'EMAIL') {
      return React.createElement("a", {
        href: `mailto:${value}`
      }, value);
    }

    if (compType === 'URL') {
      return React.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: value
      }, value);
    }

    if (compType === 'RATE' || compType === 'SWITCH' || compType === 'RANGE') {
      return React.createElement(Control, _extends({}, this.props, {
        disabled: true
      }));
    }

    if (Array.isArray(value)) {
      return React.createElement("div", null, value.join("、"));
    }

    return React.createElement("div", {
      className: "display-text"
    }, handleLine(`${value}`));
  }

}