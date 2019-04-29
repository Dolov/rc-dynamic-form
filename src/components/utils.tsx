

import moment from 'moment'
import { group } from './interface'
import { config } from './interface'

export const getGroupTitle = (groups: Array<group>) => {
  if (Array.isArray(groups)) {
    return groups.map(group => group.title)
  }
  return []
}


export const isMainLess = (value: any) => {
  if (
    value === null || 
    value === undefined ||
    value === ""
  ) {
    return true
  }
  return false
}



export const getViewValues = (values: any) => {
  const res: any = {}
  Object.keys(values).forEach(key => {
    const value = values[key] || {}
    const { text: t, value: v } = value
    const viewVal = isMainLess(t) ? v: t
    if (viewVal) {
      res[key] = viewVal
    }
  })
  return res
}


export const handleMomentProps = (props: any) => {
  const { value } = props
  if (!value) return props
  if (moment.isMoment(value)) {
    return props
  }
  return Object.assign(props, {value: moment(value)})
}