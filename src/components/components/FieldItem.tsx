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

  }

  onItemEdit = () => {
    const { data: {name} } = this.props
    const { onItemEdit, setEditValue } = this.context
    setEditValue()
    onItemEdit(name)
  }

  onItemUndo = () => {
    const { data: {name} } = this.props
    const originalValue = this.getFieldOriginalValue()
    const { form: {setFieldsValue} } = this.context
    setFieldsValue({
      [name]: originalValue,
    })
  }

  renderFormItemLabel() {
    const { data } = this.props
    const { label, help: fieldHelp, editable: fieldEditable, undoable: fieldUndoable } = data
    const isChanged = this.getFieldValueIsChanged()
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

  getFieldOriginalValue() {
    const { data: {name} } = this.props
    const { config, value } = this.context
    const originalValues = getEditValues(value, config)
    return originalValues[name]
  }

  getFieldValueIsChanged() {
    const { data: {name, undoable: fieldUndoable} } = this.props
    const { undoable, form: {getFieldValue} } = this.context
    if (!undoable || !fieldUndoable) return false
    const currentValue = getFieldValue(name)
    const originalValue = this.getFieldOriginalValue()
    const isChanged = !isEqual(currentValue, originalValue)
    return isChanged
  }

  renderFormItemComponent() {
    const { isView, focusId } = this.context
    const { data } = this.props
    const { editable, child, name } = data
    if (isView || !editable) {
      return <DisplayText {...child} />
    }
    return <Control {...child} autoFocus={name===focusId} />
  }

  static contextType = Content

  render() {
    const { isView, form: {getFieldDecorator}} = this.context
    const { data: {name, decorator: {rules}} } = this.props
    const isChanged = this.getFieldValueIsChanged()
    return (
      <Form.Item
        label={this.renderFormItemLabel()}
        className={cls('form-item', {undoable:!isView&&isChanged, normal:!isChanged})}
      >
        {getFieldDecorator(name, {
          rules: !isView&&rules,
        })(
          this.renderFormItemComponent()
        )}
      </Form.Item>
    )
  }
}