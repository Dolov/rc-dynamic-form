import "antd/es/input-number/style/css";
import _InputNumber from "antd/es/input-number";
import "antd/es/rate/style/css";
import _Rate from "antd/es/rate";
import "antd/es/switch/style/css";
import _Switch from "antd/es/switch";
import "antd/es/slider/style/css";
import _Slider from "antd/es/slider";
import "antd/es/tree-select/style/css";
import _TreeSelect from "antd/es/tree-select";
import "antd/es/select/style/css";
import _Select from "antd/es/select";
import "antd/es/date-picker/style/css";
import _DatePicker from "antd/es/date-picker";
import "antd/es/checkbox/style/css";
import _Checkbox from "antd/es/checkbox";
import "antd/es/radio/style/css";
import _Radio from "antd/es/radio";
import "antd/es/input/style/css";
import _Input from "antd/es/input";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import IllegalFieldType from './IllegalFieldType';
const {
  TextArea
} = _Input;
const InputGroup = _Input.Group;
const RadioGroup = _Radio.Group;
const CheckboxGroup = _Checkbox.Group;
const {
  MonthPicker,
  RangePicker,
  WeekPicker
} = _DatePicker;
const style = {
  width: '100%'
};
const defaultOptions = [];
const Components = {
  RADIO(props) {
    const {
      options,
      ...otherProps
    } = props;
    return React.createElement(RadioGroup, _extends({
      options: options
    }, otherProps));
  },

  CHECKBOX(props) {
    const {
      options,
      ...otherProps
    } = props;
    return React.createElement(CheckboxGroup, _extends({
      options: options
    }, otherProps));
  },

  SELECT(props) {
    const {
      options,
      ...otherProps
    } = props;
    return React.createElement(_Select, otherProps, options.map(option => React.createElement(_Select.Option, {
      key: option.value,
      value: option.value
    }, option.label)));
  },

  MULTISELECT(props) {
    const {
      options,
      ...otherProps
    } = props;
    return React.createElement(_Select, _extends({
      mode: "multiple"
    }, otherProps), options.map(option => React.createElement(_Select.Option, {
      key: option.value,
      value: option.value
    }, option.label)));
  },

  SELECTTREE(props) {
    const {
      options,
      ...otherProps
    } = props;
    return React.createElement(_TreeSelect, _extends({
      treeData: options
    }, otherProps));
  },

  MULTISELECTTREE(props) {
    const {
      options,
      ...otherProps
    } = props;
    return React.createElement(_TreeSelect, _extends({
      treeCheckable: true,
      treeData: options
    }, otherProps));
  },

  TEXT(props) {
    const {
      options,
      ...otherProps
    } = props;
    return React.createElement(_Input, otherProps);
  },

  TEXTAREA(props) {
    return React.createElement(TextArea, _extends({
      autosize: true
    }, props));
  },

  TELPHON(props) {
    return React.createElement(_Input, props);
  },

  EMAIL(props) {
    return React.createElement(_Input, props);
  },

  URL(props) {
    return React.createElement(_Input, props);
  },

  RANGE(props) {
    const {
      value
    } = props;
    const val = Array.isArray(value) ? value : [];
    return React.createElement(_Slider, _extends({
      range: true
    }, props, {
      value: val
    }));
  },

  SWITCH(props) {
    const {
      value,
      ...otherProps
    } = props;
    return React.createElement(_Switch, _extends({}, otherProps, {
      checked: value
    }));
  },

  RATE(props) {
    return React.createElement(_Rate, props);
  },

  DATE(props) {
    return React.createElement(_DatePicker, _extends({
      style: style
    }, props));
  },

  TIMESTAMP(props) {
    return React.createElement(_DatePicker, _extends({
      showTime: true,
      style: style
    }, props));
  },

  MONTH(props) {
    return React.createElement(MonthPicker, _extends({
      style: style
    }, props));
  },

  WEEK(props) {
    return React.createElement(WeekPicker, _extends({
      style: style
    }, props));
  },

  DATERANGE(props) {
    return React.createElement(RangePicker, _extends({
      style: style
    }, props));
  },

  DOUBLE(props) {
    return React.createElement(_InputNumber, _extends({
      style: style
    }, props));
  },

  CURRENCY(props) {
    const {
      symbol = '￥'
    } = props;
    const reg = new RegExp(`${symbol}\s?|(,*)`, 'g');
    return React.createElement(_InputNumber, _extends({
      style: style,
      formatter: value => {
        if (value) {
          return `${symbol} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        return value;
      }
    }, props));
  },

  PERCENTAGE(props) {
    return React.createElement(_InputNumber, _extends({
      style: style,
      formatter: value => {
        if (value) {
          return `${value}%`;
        }

        return value;
      },
      parser: value => value.replace('%', '')
    }, props));
  },

  INT(props) {
    return React.createElement(_InputNumber, _extends({
      style: style
    }, props));
  }

};
export default class Control extends React.PureComponent {
  render() {
    const {
      compType,
      ...otherProps
    } = this.props;
    const Render = Components[compType] ? Components[compType](otherProps) : React.createElement(IllegalFieldType, null);
    return Render;
  }

}