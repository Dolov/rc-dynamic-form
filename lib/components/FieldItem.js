import "antd/es/form/style/css";
import _Form from "antd/es/form";
import "antd/es/tooltip/style/css";
import _Tooltip from "antd/es/tooltip";
import "antd/es/icon/style/css";
import _Icon from "antd/es/icon";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { isEqual } from 'lodash';
import cls from 'classnames';
import { getEditValues } from '../utils';
import Content from '../Content';
import DisplayText from './DisplayText';
import Control from './Control';
export default class FieldItem extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "onItemEdit", () => {
      const {
        data: {
          name
        }
      } = this.props;
      const {
        onItemEdit,
        setEditValue
      } = this.context;
      setEditValue();
      onItemEdit(name);
    });

    _defineProperty(this, "onItemUndo", () => {
      const {
        data: {
          name
        }
      } = this.props;
      const originalValue = this.getFieldOriginalValue();
      const {
        form: {
          setFieldsValue
        }
      } = this.context;
      setFieldsValue({
        [name]: originalValue
      });
    });
  }

  renderFormItemLabel() {
    const {
      data
    } = this.props;
    const {
      label,
      help: fieldHelp,
      editable: fieldEditable
    } = data;
    const isChanged = this.getFieldValueIsChanged();
    const {
      isView,
      editable: editable,
      help
    } = this.context;
    const undoableJsx = isChanged && React.createElement(_Tooltip, {
      title: "\u64A4\u9500"
    }, React.createElement(_Icon, {
      onClick: this.onItemUndo,
      type: "undo",
      className: "label-tool-icon"
    }));
    const editableJsx = isView && fieldEditable && editable && React.createElement(_Tooltip, {
      title: "\u7F16\u8F91"
    }, React.createElement(_Icon, {
      onClick: this.onItemEdit,
      type: "edit",
      className: "label-tool-icon"
    }));
    const helpJsx = help && fieldHelp && React.createElement(_Tooltip, {
      title: fieldHelp
    }, React.createElement(_Icon, {
      type: "question-circle",
      className: "label-tool-icon help-icon"
    }));
    return React.createElement("div", {
      className: "label-tools-wrapper",
      onClick: e => e.preventDefault()
    }, React.createElement("span", null, label, helpJsx), editableJsx, undoableJsx);
  }

  getFieldOriginalValue() {
    const {
      data: {
        name
      }
    } = this.props;
    const {
      config,
      value
    } = this.context;
    const originalValues = getEditValues(value, config);
    return originalValues[name];
  }

  getFieldValueIsChanged() {
    const {
      data: {
        name,
        undoable: fieldUndoable
      }
    } = this.props;
    const {
      isView,
      undoable,
      form: {
        getFieldValue
      }
    } = this.context;
    if (!undoable || !fieldUndoable || isView) return false;
    const currentValue = getFieldValue(name);
    const originalValue = this.getFieldOriginalValue();
    const isChanged = !isEqual(currentValue, originalValue);
    return isChanged;
  }

  renderFormItemComponent() {
    const {
      isView,
      focusId
    } = this.context;
    const {
      data
    } = this.props;
    const {
      editable,
      child,
      name
    } = data;

    if (isView || !editable) {
      return React.createElement(DisplayText, child);
    }

    return React.createElement(Control, _extends({}, child, {
      autoFocus: name === focusId
    }));
  }

  render() {
    const {
      isView,
      form: {
        getFieldDecorator
      }
    } = this.context;
    const {
      data: {
        name,
        decorator: {
          rules
        }
      }
    } = this.props;
    const isChanged = this.getFieldValueIsChanged();
    return React.createElement(_Form.Item, {
      label: this.renderFormItemLabel(),
      className: cls('form-item', {
        undoable: isChanged,
        normal: !isChanged
      })
    }, getFieldDecorator(name, {
      rules: !isView && rules
    })(this.renderFormItemComponent()));
  }

}

_defineProperty(FieldItem, "contextType", Content);