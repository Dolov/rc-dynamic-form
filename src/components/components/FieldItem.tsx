import React from 'react'
import { Form, Icon, Tooltip } from 'antd'
import { isEqual } from 'lodash'
import cls from 'classnames'
import { FieldItemProps, fieldItem } from '../interface'
import { getEditValues } from '../utils'
import Content from '../Content'
import DisplayText from './DisplayText'
import Control from './Control'


export default class FieldItem extends React.PureComponent<FieldItemProps> {

  state = {
    isChanged: false,
    originalValue: null,
  }

  onItemEdit = () => {
    const { data: {name} } = this.props
    const { onItemEdit, setEditValue } = this.context
    setEditValue()
    onItemEdit(name)
  }

  onItemUndo = () => {
    const { data: {name} } = this.props
    const { originalValue } = this.state
    const { form: {setFieldsValue} } = this.context
    setFieldsValue({
      [name]: originalValue,
    })
    this.setState({
      isChanged: false,
    })
    
  }

  renderFormItemLabel() {
    const { data } = this.props
    const { isChanged } = this.state
    const { label, help: fieldHelp, editable: fieldEditable, undoable: fieldUndoable } = data
    const { isView, editable: editable, help, undoable } = this.context
    const undoableJsx = !isView&&undoable&&fieldUndoable&&isChanged&&(
      <Tooltip title="撤销">
        <Icon onClick={this.onItemUndo} type="undo" className="label-tool-icon" />
      </Tooltip>
    )
    const editableJsx = isView&&fieldEditable&&editable&&(
      <Tooltip title="编辑">
        <Icon onClick={this.onItemEdit} type="edit" className="label-tool-icon" />
      </Tooltip>
    )
    const helpJsx = help&&fieldHelp&&(
      <Tooltip title={fieldHelp}>
        <Icon type="question-circle" className="label-tool-icon help-icon" />
      </Tooltip>
    )
    return (
      <div className="label-tools-wrapper" onClick={e => e.preventDefault()}>
        <span>{label}{helpJsx}</span>
        {editableJsx}
        {undoableJsx}
      </div>
    )
  }

  onChange = (e: any, data: fieldItem) => {
    const { undoable, config, value } = this.context
    const { undoable: fieldUndoable, name } = data
    if (!undoable || !fieldUndoable) return 
    const params = getEditValues(value, config)
    const originalValue = params[name]
    const { target } = e
    let currentValue = null
    if (target && typeof target === 'object') {
      const { value } = target
      currentValue = value
    } else {
      currentValue = e
    }
    const isChanged = !isEqual(currentValue, originalValue)
    this.setState({
      isChanged,
      originalValue,
    })
  }

  renderFormItemComponent() {
    const { isView, focusId } = this.context
    const { data } = this.props
    const { editable, child, name } = data
    if (isView || !editable) {
      return <DisplayText {...child} />
    }
    return <Control {...child} autoFocus={name===focusId} onChange={(e: any) => this.onChange(e, data)} />
  }

  static contextType = Content

  render() {
    const { isView, form: {getFieldDecorator}} = this.context
    const { data: {name, decorator: {rules, initialValue}} } = this.props
    const { isChanged } = this.state
    return (
      <Form.Item
        label={this.renderFormItemLabel()}
        className={cls('form-item', {undoable:!isView&&isChanged, normal:!isChanged})}
      >
        {getFieldDecorator(name, {
          rules: !isView&&rules,
          // initialValue,
        })(
          this.renderFormItemComponent()
        )}
      </Form.Item>
    )
  }
}