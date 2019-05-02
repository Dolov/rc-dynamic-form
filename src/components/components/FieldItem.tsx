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

  onItemEdit = (name: string, e: any) => {
    const { onItemEdit, setEditValue } = this.context
    setEditValue()
    onItemEdit(name)
    e.stopPropagation()
  }

  onItemUndo = (name: string) => {
    const { originalValue } = this.state
    const { form: {setFieldsValue} } = this.context
    setFieldsValue({
      [name]: originalValue,
    })
    this.setState({
      isChanged: false,
    })
  }

  renderFormItemLabel(data: fieldItem) {
    const { isChanged } = this.state
    const { label, name, help, editable: fieldEditable, undoable: fieldUndoable } = data
    const { isView, editable: editable, help: formHelp, undoable } = this.context
    const undoableJsx = !isView&&undoable&&fieldUndoable&&isChanged&&(
      <Tooltip title="撤销">
        <Icon onClick={() => this.onItemUndo(name)} type="undo" className="label-tool-icon" />
      </Tooltip>
    )
    const editableJsx = isView&&fieldEditable&&editable&&(
      <Tooltip title="编辑">
        <Icon onClick={e => this.onItemEdit(name, e)} type="edit" className="label-tool-icon" />
      </Tooltip>
    )
    const helpJsx = help&&formHelp&&(
      <Tooltip title={help}>
        <Icon type="question-circle" className="label-tool-icon help-icon" />
      </Tooltip>
    )
    return (
      <div className="label-tools-wrapper">
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

  renderFormItemComponent(data: fieldItem) {
    const { isView } = this.context
    const { editable, child } = data
    if (isView || !editable) {
      return <DisplayText {...child} />
    }
    return <Control {...child} onChange={(e: any) => this.onChange(e, data)} />
  }

  static contextType = Content

  render() {
    const { form: {getFieldDecorator} } = this.context
    const { data } = this.props
    const { isChanged } = this.state
    const { name } = data
    return (
      <Form.Item
        label={this.renderFormItemLabel(data)}
        className={cls('form-item', {undoable:isChanged, normal:!isChanged})}
      >
        {getFieldDecorator(name, {

        })(
          this.renderFormItemComponent(data)
        )}
      </Form.Item>
    )
  }
}