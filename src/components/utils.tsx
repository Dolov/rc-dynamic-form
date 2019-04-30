

import moment from 'moment'
import { group } from './interface'
import { config } from './interface'


export const handleLine = (value: any) => value.replace(/\n|\r\n|↵/g, "\n")

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
      const { name, child: {compType} } = item
      const fieldValue = values[name]
      if (!fieldValue || typeof fieldValue !== 'object') return 
      const { text, value } = fieldValue
      if (isMainLess(text)) {
        res[name] = value
      } else {
        res[name] = text
      }
      if (compType === 'RATE') {
        res[name] = value
      }
      if (compType === 'WEEK') {
        res[name] = moment(value).format('YYYY-WW')
      }
      if (compType === 'RANGE' || compType === 'DATERANGE') {
        if (Array.isArray(value) && value.length === 2) {
          res[name] = value.join(" ~ ")
        }
      }
    })
  })
  return res
}

const momentTyps = ['DATE', 'MONTH', 'WEEK', 'TIMESTAMP']
export const getEditValues = (values: any, config: config) => {
  
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
        if (compType === 'DATERANGE' && Array.isArray(value) && value.length === 2) {
          const start = value[0]
          const end = value[1]
          const dateRange = [moment(start), moment(end)]
          res[name] = dateRange
        }
      }
    })
  })
  return res
}


const getFieldConfig = (target: string, groups: Array<any>) => {
  for (const group of groups) {
    const { items } = group
    for (const item of items) {
      const { name } = item
      if (name === target) {
        return item
      }
    }
  }
}


const momentFormatMap: any = {
  'DATE': 'YYYY-MM-DD',
  'MONTH': 'YYYY-MM',
  'WEEK': 'YYYY-MM-DD',
  'TIMESTAMP': 'YYYY-MM-DD HH:mm:ss',
  'DATERANGE': 'YYYY-MM-DD',
}

export const formatValues = (values: any, config: config) => {
  const res: any = {}
  const { groups } = config
  Object.keys(values).forEach(key => {
    const fieldValue = values[key]
    res[key] = fieldValue
    const fieldConfig = getFieldConfig(key, groups)
    if (!fieldConfig) return 
    const { child: {compType, format} } = fieldConfig
    if (moment.isMoment(fieldValue)) {
      const type = momentFormatMap[compType]
      res[key] = fieldValue.format(type)
    }
    if (compType === 'DATERANGE' && Array.isArray(fieldValue) && fieldValue.length === 2) {
      const type = format || momentFormatMap.DATERANGE
      fieldValue[0] = fieldValue[0].format(type)
      fieldValue[1] = fieldValue[1].format(type)
    }
  })
  return res
}
