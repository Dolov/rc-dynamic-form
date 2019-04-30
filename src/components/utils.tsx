

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



export const getViewValues = (values: any, config: config) => {
  const res: any = {}
  const { groups } = config
  groups.forEach(group => {
    const { items } = group
    items.forEach(item => {
      const { name } = item
      const fieldValue = values[name]
      if (!fieldValue || typeof fieldValue !== 'object') return 
      const { text, value } = fieldValue
      if (isMainLess(text)) {
        res[name] = value
      } else {
        res[name] = text
      }
    })
  })
  return res
}


export const getEditValues = (values: any, config: config) => {
  const momentTyps = ['DATE', 'MONTH', 'WEEK', 'TIMESTAMP', 'DATERANGE']
  const res: any = {}
  const { groups } = config
  groups.forEach(group => {
    const { items } = group
    items.forEach(item => {
      const { name, child: {compType} } = item
      const fieldValue = values[name]
      if (!fieldValue || typeof fieldValue !== 'object') return 
      const { value } = fieldValue
      if (!isMainLess(value)) {
        res[name] = value
        if (momentTyps.includes(compType)) {
          res[name] = moment(value)
        }
      }
    })
  })
  return res
}

