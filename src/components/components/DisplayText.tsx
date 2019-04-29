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
    const formateVal = val.replace(/\n|\r\n|↵/g, "\n")
    return (
      <div className="display-text">{formateVal}</div>
    )
  }
}