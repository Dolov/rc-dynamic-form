import "antd/es/form/style/css";
import _Form from "antd/es/form";
import "antd/es/button/style/css";
import _Button from "antd/es/button";
import "antd/es/collapse/style/css";
import _Collapse from "antd/es/collapse";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Provider } from './Content';
import { getGroupTitle, getViewValues, getEditValues, formatValues } from './utils';
import Group from './components/Group';
const {
  Panel
} = _Collapse;
const clsPrefix = 'rc-dynamic-form';

class UserForm extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "setEditValue", () => {
      const {
        value,
        config,
        form: {
          setFieldsValue
        }
      } = this.props;
      const params = getEditValues(value, config);
      setFieldsValue(params);
    });

    _defineProperty(this, "onSave", () => {
      const {
        onSave,
        config,
        form: {
          validateFieldsAndScroll
        }
      } = this.props;
      if (!onSave || typeof onSave !== 'function') return;
      validateFieldsAndScroll((err, params) => {
        if (err) return;
        onSave(formatValues(params, config));
      });
    });

    _defineProperty(this, "onCancel", () => {
      const {
        onCancel
      } = this.props;

      if (onCancel && typeof onCancel === 'function') {
        this.setViewValue();
        onCancel();
      }
    });
  }

  componentDidMount() {
    const {
      isView
    } = this.props;

    if (isView) {
      this.setViewValue();
    } else {
      this.setEditValue();
    }
  }

  setViewValue() {
    const {
      value,
      config,
      form: {
        setFieldsValue
      }
    } = this.props;
    const params = getViewValues(value, config);
    setFieldsValue(params);
  }

  render() {
    const {
      isView,
      config,
      collapseBordered
    } = this.props;
    const groups = Array.isArray(config.groups) ? config.groups : [];
    const formLayout = typeof config.formLayout === 'string' ? config.formLayout : 'vertical';
    const defaultActiveKey = getGroupTitle(groups);
    return React.createElement(Provider, {
      value: { ...this.props,
        setEditValue: this.setEditValue
      }
    }, React.createElement(_Form, {
      layout: formLayout,
      className: clsPrefix
    }, React.createElement(_Collapse, {
      bordered: collapseBordered,
      defaultActiveKey: defaultActiveKey
    }, groups.map((group, index) => {
      const {
        title,
        items
      } = group;
      return React.createElement(Panel, {
        header: title,
        key: title
      }, React.createElement(Group, {
        items: items
      }));
    })), !isView && React.createElement("div", {
      className: "footer-bar"
    }, React.createElement(_Button, {
      onClick: this.onCancel
    }, "\u53D6\u6D88"), React.createElement(_Button, {
      onClick: this.onSave,
      type: "primary"
    }, "\u4FDD\u5B58"))));
  }

}

_defineProperty(UserForm, "defaultProps", {
  help: false,
  value: {},
  isView: true,
  editable: true,
  undoable: false,
  onItemEdit: () => {},
  focusId: null,
  collapseBordered: false
});

export default _Form.create({})(UserForm);