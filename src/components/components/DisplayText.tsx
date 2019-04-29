import React from 'react'
import { DisplayTextProps } from '../interface'
import { isMainLess } from '../utils'

const E = "-"
export default class DisplayText extends React.PureComponent<DisplayTextProps> {

  state = {

  }

  render() {
    const { value } = this.props
    const val = isMainLess(value) ? E: `${value}`
    return (
      <div>{val}</div>
    )
  }
}