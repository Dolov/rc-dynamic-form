

import { group } from './interface'

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
    res[key] = isMainLess(t) ? v: t
  })
  return res
}