import React from 'react'
import { Form, Icon, Tooltip } from 'antd'
import { FieldItemProps, fieldItem } from '../interface'
import Content from '../Content'
import DisplayText from './DisplayText'


export default class FieldItem extends React.PureComponent<FieldItemProps> {

  state = {

  }

  renderFormItemLabel(data: fieldItem) {
    const { label, name, help, editable } = data
    const { isView, editable: formEditable, undoable, onItemEdit } = this.context
    const undoableJsx = !isView&&undoable&&(
      <Tooltip title="撤销">
        <Icon type="undo" className="label-tool-icon" />
      </Tooltip>
    )
    const editableJsx = isView&&formEditable&&editable&&(
      <Tooltip title="编辑">
        <Icon onClick={() => onItemEdit(name)} type="edit" className="label-tool-icon" />
      </Tooltip>
    )
    const helpJsx = help&&(
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

  renderFormItemComponent(data: fieldItem) {
    const { isView } = this.context
    const { editable } = data
    if (isView || !editable) {
      return <DisplayText />
    }
    return <div>eidt</div>
  }

  static contextType = Content

  render() {
    const { form: {getFieldDecorator} } = this.context
    const { data } = this.props
    const { name } = data
    return (
      <Form.Item
        label={this.renderFormItemLabel(data)}
        className="form-item"
      >
        {getFieldDecorator(name, {

        })(
          this.renderFormItemComponent(data)
        )}
      </Form.Item>
    )
  }
}