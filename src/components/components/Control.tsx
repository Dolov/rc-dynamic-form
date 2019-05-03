import React from 'react'
import { Input, Radio, Checkbox, Select, TreeSelect, Slider, Switch, Rate, DatePicker, InputNumber, Cascader, TimePicker, Transfer } from 'antd'
import { ControlProps } from '../interface'
import IllegalFieldType from './IllegalFieldType'
import SelectMap from './SelectMap'

const { TextArea } = Input
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
const { MonthPicker, RangePicker, WeekPicker } = DatePicker

const style = {width:'100%'}
const defaultArr: any = []

const Components: any = {

  RADIO(props: any) {
    const { options, ...otherProps } = props
    return (
      <RadioGroup options={options} {...otherProps} />
    )
  },

  CHECKBOX(props: ControlProps) {
    const { options, ...otherProps } = props
    return (
      <CheckboxGroup options={options} {...otherProps} />
    )
  },

  SELECT(props: ControlProps) {
    const { options, ...otherProps } = props
    return (
      <Select {...otherProps}>
        {options.map((option: any) => (
          <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
        ))}
      </Select>
    )
  },

  MULTISELECT(props: ControlProps) {
    const { options, ...otherProps } = props
    return (
      <Select
        mode="multiple"
        {...otherProps}
      >
        {options.map((option: any) => (
          <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
        ))}
      </Select>
    )
  },

  SELECTTREE(props: ControlProps) {
    const { options, ...otherProps } = props
    return (
      <TreeSelect treeData={options} {...otherProps} />
    )
  },

  MULTISELECTTREE(props: ControlProps) {
    const { options, ...otherProps } = props
    return (
      <TreeSelect treeCheckable treeData={options} {...otherProps} />
    )
  },

  TEXT(props: ControlProps) {
    const { options, ...otherProps } = props
    return <Input {...otherProps} />
  },

  TEXTAREA(props: ControlProps) {
    return <TextArea autosize {...props} />
  },

  TELPHON(props: ControlProps) {
    return <Input {...props} />
  },

  EMAIL(props: ControlProps) {
    return <Input {...props} />
  },

  URL(props: ControlProps) {
    return <Input {...props} />
  },

  RANGE(props: ControlProps) {
    const { value } = props
    const val = Array.isArray(value) ? value: []
    return <Slider range {...props} value={val} />
  },

  SWITCH(props: ControlProps) {
    const { value, ...otherProps } = props
    return <Switch {...otherProps} checked={value} />
  },

  RATE(props: ControlProps) {
    return <Rate {...props} />
  }, 

  DATE(props: ControlProps) {
    return <DatePicker style={style} {...props} />
  },

  TIMESTAMP(props: ControlProps) {
    return <DatePicker showTime style={style} {...props} />
  },

  MONTH(props: ControlProps) {
    return <MonthPicker style={style} {...props} />
  },

  WEEK(props: ControlProps) {
    return <WeekPicker style={style} {...props} />
  },

  DATERANGE(props: ControlProps) {
    return <RangePicker style={style} {...props} />
  },

  DOUBLE(props: ControlProps) {
    return <InputNumber style={style} {...props} />
  },

  CURRENCY(props: ControlProps) {
    const { symbol='￥', } = props
    const reg = new RegExp(`${symbol}\s?|(,*)`, 'g')
    return (
      <InputNumber 
        style={style} 
        formatter={(value: any) => {
          if (value) {
            return `${symbol} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          return value
        }}
        {...props} 
      />
    )
  },

  PERCENTAGE(props: ControlProps) {
    return (
      <InputNumber 
        style={style} 
        formatter={(value: any) => {
          if (value) {
            return `${value}%`
          }
          return value
        }}
        parser={(value: any) => value.replace('%', '')}
        {...props} 
      />
    )
  },

  INT(props: ControlProps) {
    return <InputNumber style={style} {...props} />
  }, 

  MAP(props: ControlProps) {
    return <SelectMap {...props} />
  },

  CASCADER(props: ControlProps) {
    return <Cascader {...props} />
  },

  TIMEPICKER(props: ControlProps) {
    return <TimePicker style={style} {...props} />
  },

  TRANSFER(props: ControlProps) {
    const { options, value, ...otherProps } = props
    const targetKeys = Array.isArray(value) ? value: defaultArr
    return <Transfer targetKeys={targetKeys} dataSource={options} {...otherProps} />
  },
  
}




export default class Control extends React.PureComponent<ControlProps> {


  
  render() {
    
    const { compType, ...otherProps } = this.props
    const Render = Components[compType] ? Components[compType](otherProps): <IllegalFieldType />
    return Render
  }
}






































