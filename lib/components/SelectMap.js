import "antd/es/modal/style/css";
import _Modal from "antd/es/modal";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
export default class SelectMap extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false
    });

    _defineProperty(this, "onCancel", () => {
      this.setState({
        visible: false
      });
    });

    _defineProperty(this, "openMap", () => {
      this.setState({
        visible: true
      });
    });

    _defineProperty(this, "handlePostMessage", message => {
      const {
        data
      } = message;
      const {
        onChange
      } = this.props;
      onChange(data);
      this.onCancel();
    });

    _defineProperty(this, "onLoad", e => {
      e.target.contentWindow.postMessage('hello', 'https://m.amap.com/picker/');
    });
  }

  componentDidMount() {
    window.addEventListener('message', this.handlePostMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handlePostMessage);
  }

  render() {
    const {
      value,
      amapKey
    } = this.props;
    let name = '请选择位置';
    let location = null;

    if (value && value.name) {
      name = value.name;
    }

    if (value && value.location) {
      location = value.location;
    }

    const {
      visible
    } = this.state;
    return React.createElement("div", null, React.createElement("span", {
      onClick: this.openMap,
      className: "select-map-value"
    }, name), React.createElement(_Modal, {
      centered: true,
      title: "\u8BF7\u9009\u62E9\u4F4D\u7F6E",
      visible: visible,
      footer: null,
      width: "95vw",
      onCancel: this.onCancel,
      wrapClassName: "select-map-modal"
    }, React.createElement("iframe", {
      onLoad: this.onLoad,
      className: "select-map-iframe",
      src: `https://m.amap.com/picker/?center=${location}&key=608d75903d29ad471362f8c58c550daf`
    })));
  }

}