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
const momentTyps = ['DATE', 'MONTH', 'WEEK', 'TIMESTAMP'];
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
          const dateRange = [moment(start), moment(end)];
          res[name] = dateRange;
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
  'DATERANGE': 'YYYY-MM-DD'
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
      fieldValue[0] = fieldValue[0].format(type);
      fieldValue[1] = fieldValue[1].format(type);
    }
  });
  return res;
};

const getLabels = (values, options) => values.map(val => getLabel(val, options));

const getLabel = (val, options) => {
  for (const option of options) {
    const {
      label,
      title,
      value,
      children
    } = option;

    if (value === val) {
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