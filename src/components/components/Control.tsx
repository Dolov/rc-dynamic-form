import React from 'react'
import { Icon } from 'antd'
import { ControlProps } from '../interface'
import DisplayText from './DisplayText'



const Components: any = {
  BOOLEAN(props: any) {
    return <div>boolean</div>
  },
  TEXT(props: any) {
    return <DisplayText {...props} />
  }
}

const IllegalComponent = () => (
  <div className="illegal-component">
    <Icon className="error" type="exclamation-circle" />
    <span>尚未支持的字段类型，请 issue</span>
  </div>
)

export default class Control extends React.PureComponent<ControlProps> {
  
  render() {
    const { child } = this.props
    const { compType, ...otherProps } = child
    const Render = Components[compType] ? Components[compType](otherProps): <IllegalComponent />
    return Render
  }
}






































