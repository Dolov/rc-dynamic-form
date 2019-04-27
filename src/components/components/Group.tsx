import React from 'react'
import { Form, Input } from 'antd'
import Content from '../Content'
import { GroupProps } from '../interface'

export default class Group extends React.PureComponent<GroupProps> {

  state = {

  }


  render() {
    const { items } = this.props
    return items.map(item => {
      const { label } = item
      return (
        <Form.Item
          label={label}
        >
          <Input />
        </Form.Item>
      )
    })
  }
}