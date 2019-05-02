import React from 'react'
import { Icon } from 'antd'


const IllegalFieldType = () => {
  let issue = null
  if (process.env.NODE_ENV === 'development') {
    issue = <a target="_blank" href="https://github.com/Dolov/rc-dynamic-form/issues">issue</a>
  }

  return (
    <div className="illegal-component">
      <Icon className="error" type="exclamation-circle" />
      <span>尚未支持的字段类型 {issue}</span>
    </div>
  )
}


export default IllegalFieldType