import "antd/es/form/style/css";
import _Form from "antd/es/form";
import "antd/es/tooltip/style/css";
import _Tooltip from "antd/es/tooltip";
import "antd/es/icon/style/css";
import _Icon from "antd/es/icon";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import Content from '../Content';
import DisplayText from './DisplayText';
import Control from './Control';
export default class FieldItem extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "onItemEdit", (name, e) => {
      const {
        onItemEdit,
        setEditValue
      } = this.context;
      setEditValue();
      onItemEdit(name);
      e.stopPropagation();
    });
  }

  renderFormItemLabel(data) {
    const {
      label,
      name,
      help,
      editable
    } = data;
    const {
      isView,
      editable: formEditable,
      help: formHelp,
      undoable
    } = this.context;
    const undoableJsx = !isView && undoable && React.createElement(_Tooltip, {
      title: "\u64A4\u9500"
    }, React.createElement(_Icon, {
      type: "undo",
      className: "label-tool-icon"
    }));
    const editableJsx = isView && formEditable && editable && React.createElement(_Tooltip, {
      title: "\u7F16\u8F91"
    }, React.createElement(_Icon, {
      onClick: e => this.onItemEdit(name, e),
      type: "edit",
      className: "label-tool-icon"
    }));
    const helpJsx = help && formHelp && React.createElement(_Tooltip, {
      title: help
    }, React.createElement(_Icon, {
      type: "question-circle",
      className: "label-tool-icon help-icon"
    }));
    return React.createElement("div", {
      className: "label-tools-wrapper"
    }, React.createElement("span", null, label, helpJsx), editableJsx, undoableJsx);
  }

  renderFormItemComponent(data) {
    const {
      isView
    } = this.context;
    const {
      editable,
      child
    } = data;

    if (isView || !editable) {
      return React.createElement(DisplayText, child);
    }

    return React.createElement(Control, child);
  }

  render() {
    const {
      form: {
        getFieldDecorator
      }
    } = this.context;
    const {
      data
    } = this.props;
    const {
      name
    } = data;
    return React.createElement(_Form.Item, {
      label: this.renderFormItemLabel(data),
      className: "form-item"
    }, getFieldDecorator(name, {})(this.renderFormItemComponent(data)));
  }

}

_defineProperty(FieldItem, "contextType", Content);