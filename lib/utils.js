function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import moment from 'moment';
export const handleLine = value => value.replace(/\n|\r\n|↵/g, "\n");
export const getGroupTitle = groups => {
  if (Array.isArray(groups)) {
    return groups.map(group => group.title);
  }

  return [];
};
export const isMainLess = value => {
  if (value === null || value === undefined || value === "") {
    return true;
  }

  return false;
};
export const getViewValues = (values, config) => {
  const res = {};
  const {
    groups
  } = config;
  groups.forEach(group => {
    const {
      items
    } = group;
    items.forEach(item => {
      const {
        name,
        child: {
          compType,
          options
        }
      } = item;
      const fieldValue = values[name];

      if (isMainLess(fieldValue)) {
        res[name] = null;
        return;
      }

      res[name] = fieldValue;

      if (compType === 'WEEK') {
        res[name] = moment(fieldValue).format('YYYY-WW');
        return;
      }

      if (compType === 'DATERANGE') {
        if (Array.isArray(fieldValue) && fieldValue.length === 2) {
          res[name] = fieldValue.join(" ~ ");
        }

        return;
      }

      if (Array.isArray(options) && options.length > 0) {
        if (Array.isArray(fieldValue)) {
          res[name] = getLabels(fieldValue, options);
        } else {
          res[name] = getLabel(fieldValue, options);
        }
      }
    });
  });
  return res;
};
const momentTyps = ['DATE', 'MONTH', 'WEEK', 'TIMESTAMP', 'TIMEPICKER'];
export const getEditValues = (values, config) => {
  const res = {};
  const {
    groups
  } = config;
  groups.forEach(group => {
    const {
      items
    } = group;
    items.forEach(item => {
      const {
        name,
        child: {
          compType
        }
      } = item;
      const fieldValue = values[name];

      if (isMainLess(fieldValue)) {
        res[name] = null;
        return;
      }

      res[name] = fieldValue;

      if (momentTyps.includes(compType)) {
        res[name] = moment(fieldValue);
      }

      if (compType === 'DATERANGE') {
        if (Array.isArray(fieldValue) && fieldValue.length === 2) {
          const start = fieldValue[0];
          const end = fieldValue[1];
          res[name] = [moment(start), moment(end)];
        } else {
          res[name] = null;
        }
      }
    });
  });
  return res;
};

const getFieldConfig = (target, groups) => {
  for (const group of groups) {
    const {
      items
    } = group;

    for (const item of items) {
      const {
        name
      } = item;

      if (name === target) {
        return item;
      }
    }
  }
};

const momentFormatMap = {
  'DATE': 'YYYY-MM-DD',
  'MONTH': 'YYYY-MM',
  'WEEK': 'YYYY-MM-DD',
  'TIMESTAMP': 'YYYY-MM-DD HH:mm:ss',
  'DATERANGE': 'YYYY-MM-DD',
  'TIMEPICKER': 'YYYY-MM-DD HH:mm:ss'
};
export const formatValues = (values, config) => {
  const res = {};
  const {
    groups
  } = config;
  Object.keys(values).forEach(key => {
    const fieldValue = values[key];
    res[key] = fieldValue;
    const fieldConfig = getFieldConfig(key, groups);
    if (!fieldConfig) return;
    const {
      child: {
        compType,
        format
      }
    } = fieldConfig;

    if (moment.isMoment(fieldValue)) {
      const type = momentFormatMap[compType];
      res[key] = fieldValue.format(type);
    }

    if (compType === 'DATERANGE' && Array.isArray(fieldValue) && fieldValue.length === 2) {
      const type = format || momentFormatMap.DATERANGE;
      const start = fieldValue[0];
      const end = fieldValue[1];
      res[key] = [start.format(type), end.format(type)];
    }
  });
  return res;
};
export const getInstance = WrapperedComponent => {
  return props => {
    const {
      getInstance,
      ...otherProps
    } = props;
    return React.createElement(WrapperedComponent, _extends({
      ref: getInstance
    }, otherProps));
  };
};

const getLabels = (values, options) => values.map(val => getLabel(val, options));

const getLabel = (val, options) => {
  for (const option of options) {
    const {
      label,
      title,
      value,
      children,
      key
    } = option;

    if (val === value || val === key) {
      return label || title || value;
    }

    if (Array.isArray(children) && children.length > 0) {
      const label = getLabel(val, children);

      if (label) {
        return label;
      }
    }
  }

  return null;
};