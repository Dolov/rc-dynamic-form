import React from 'react'
import { GroupProps } from '../interface'
import FieldItem from './FieldItem'

export default class Group extends React.PureComponent<GroupProps> {

  state = {

  }

  render() {
    const { items } = this.props
    return items.map(item => <FieldItem key={item.name} data={item} />)
  }
}