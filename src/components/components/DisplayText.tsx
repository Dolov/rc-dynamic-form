import React from 'react'
import { DisplayTextProps } from '../interface'
import { isMainLess, handleLine } from '../utils'
import Control from './Control'

const E = "-"
export default class DisplayText extends React.PureComponent<DisplayTextProps> {

  state = {

  }

  render() {
    const { value, compType } = this.props
    if (isMainLess(value)) return E
    if (compType === 'EMAIL') {
      return <a href={`mailto:${value}`}>{value}</a>
    }
    if (compType === 'URL') {
      return <a target="_blank" rel="noopener noreferrer" href={value}>{value}</a>
    } 
    if (compType === 'RATE') {
      return <Control {...this.props} disabled />
    }
    
    return (
      <div className="display-text">{handleLine(`${value}`)}</div>
    )
  }
}