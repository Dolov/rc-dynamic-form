import React from 'react'
import { Input, Icon, Radio, Checkbox, Select, TreeSelect, Slider, Switch, Rate } from 'antd'
import { ControlProps, child } from '../interface'
import DisplayText from './DisplayText'
import IllegalFieldType from './IllegalFieldType'

const { TextArea } = Input
const InputGroup = Input.Group
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group

const Components: any = {

  RADIO(props: child) {
    const { options, ...otherProps } = props
    return (
      <RadioGroup options={options} {...otherProps} />
    )
  },

  CHECKBOX(props: child) {
    const { options, ...otherProps } = props
    return (
      <CheckboxGroup options={options} {...otherProps} />
    )
  },

  SELECT(props: child) {
    const { options, ...otherProps } = props
    return (
      <Select {...otherProps}>
        {options.map((option: any) => (
          <Select.Option value={option.value}>{option.label}</Select.Option>
        ))}
      </Select>
    )
  },

  MULTISELECT(props: child) {
    const { options, ...otherProps } = props
    return (
      <Select
        mode="multiple"
        {...otherProps}
      >
        {options.map((option: any) => (
          <Select.Option value={option.value}>{option.label}</Select.Option>
        ))}
      </Select>
    )
  },

  SELECTTREE(props: child) {
    const { options, ...otherProps } = props
    return (
      <TreeSelect treeData={options} {...otherProps} />
    )
  },

  MULTISELECTTREE(props: child) {
    const { options, ...otherProps } = props
    return (
      <TreeSelect treeCheckable treeData={options} {...otherProps} />
    )
  },

  TEXT(props: child) {
    const { options, ...otherProps } = props
    return <Input {...otherProps} />
  },

  TEXTAREA(props: child) {
    const { options, ...otherProps } = props
    return <TextArea {...otherProps} />
  },

  TELPHON(props: child) {
    const { options, ...otherProps } = props
    return <Input {...otherProps} />
  },

  CELLPHONE(props: child) {
    const { options, ...otherProps } = props
    return (
      <InputGroup compact>
        <Input style={{ width: '40%' }} />
        <Input style={{ width: '60%' }} />
      </InputGroup>
    )
  },

  EMAIL(props: child) {
    return <Input />
  },

  URL(props: child) {
    return <Input />
  },

  RANGE(props: child) {
    const { options, ...otherProps } = props
    return <Slider range {...otherProps} />
  },

  SWITCH(props: child) {
    const { options, ...otherProps } = props
    return <Switch {...otherProps} />
  },

  RATE(props: child) {
    const { options, ...otherProps } = props
    return <Rate {...otherProps} />
  }
}



const defaultOptions: any = []
export default class Control extends React.PureComponent<ControlProps> {
  
  render() {
    const { child } = this.props
    const { compType, ...otherProps } = child
    const { options }  = child
    if (!Array.isArray(options)) {
      child.options = defaultOptions
    }
    const Render = Components[compType] ? Components[compType](otherProps): <IllegalFieldType />
    return Render
  }
}






































