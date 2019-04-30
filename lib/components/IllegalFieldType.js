import "antd/es/icon/style/css";
import _Icon from "antd/es/icon";
import React from 'react';

const IllegalFieldType = () => {
  let issue = null;

  if (process.env.NODE_ENV === 'development') {
    issue = React.createElement("a", {
      target: "_blank",
      href: "https://github.com/Dolov/react-dynamic-form/issues"
    }, "issue");
  }

  return React.createElement("div", {
    className: "illegal-component"
  }, React.createElement(_Icon, {
    className: "error",
    type: "exclamation-circle"
  }), React.createElement("span", null, "\u5C1A\u672A\u652F\u6301\u7684\u5B57\u6BB5\u7C7B\u578B ", issue));
};

export default IllegalFieldType;