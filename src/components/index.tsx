import React from 'react'
import { findDOMNode } from 'react-dom'
import { Form, Collapse, Button, Icon, Popover } from 'antd'
import { Provider } from './Content'
import { getGroupTitle, getViewValues, getEditValues, formatValues, getInstance } from './utils'
import { FormProps } from './interface'
import Group from './components/Group'

const { Panel } = Collapse

const clsPrefix = 'rc-dynamic-form'


class UserForm extends React.PureComponent<FormProps, any> {

  static defaultProps = {
    help: true,
    value: {},
    isView: true,
    focusId: null,
    editable: true,
    undoable: true,
    onItemEdit: () => {},
    collapseBordered: false,
  }

  state = {

  }

  componentDidMount() {
    const { isView } = this.props
    if (isView) {
      this.setViewValue()
    } else {
      this.setEditValue()
    }
  }

  setViewValue() {
    const { value, config, form: {setFieldsValue} } = this.props
    const params = getViewValues(value, config)
    setFieldsValue(params)
  }

  setEditValue = () => {
    const { value, config, form: {setFieldsValue} } = this.props
    const params = getEditValues(value, config)
    setFieldsValue(params)
  }

  moveToErrorField = (name: string) => {
    if (!this.formEle) return
    const formDOM = findDOMNode(this.formEle)
    if (!formDOM) return 
    const labelNode = formDOM.querySelector(`label[for="${name}"]`)
    if (!labelNode) return 
    labelNode.scrollIntoView(true)
  }

  renderError() {
    const { form: {getFieldsError} } = this.props
    const errors = getFieldsError()
    const errorList = Object.keys(errors).filter(errorName => errors[errorName])
    const { length } = errorList
    if (length === 0) return null
    return (
      <span className="error-message-wrapper">
        <Popover
          title='无法保存，这些字段包含错误'
          content={(
            <div>
              {errorList.map(name => (
                <div key={name} className="error" onClick={() => this.moveToErrorField(name)}>
                  <div className="error-message">{errors[name][0]}</div>
                  <div className="error-name">{name}</div>
                </div>
              ))}
            </div>
          )}
          overlayClassName="error-popover"
          trigger="click"
        >
          <Icon className="error-icon" type="exclamation-circle" theme="filled" />
          {length}
        </Popover>
      </span>
    )
  }

  onSave = () => {
    const { onSave, config, form: {validateFieldsAndScroll}} = this.props
    if (!onSave || typeof onSave !== 'function') return 
    validateFieldsAndScroll((err: any, params: object) => {
      if (err) {
        console.log(err, 'err')
        return
      } 
      onSave(formatValues(params, config))
    })
  }

  onCancel = () => {
    const { onCancel } = this.props
    if (onCancel && typeof onCancel === 'function') {
      this.setViewValue()
      onCancel()
    }
  }

  formEle: any = null

  render() {
    const { isView, config, collapseBordered } = this.props
    const groups = Array.isArray(config.groups) ? config.groups: []
    const formLayout = (typeof config.formLayout === 'string') ? config.formLayout: 'vertical'
    const defaultActiveKey = getGroupTitle(groups)
    return (
      <Provider value={{...this.props, setEditValue: this.setEditValue}}>
        <Form layout={formLayout} className={clsPrefix} ref={ele => {this.formEle=ele}}>
          <Collapse bordered={collapseBordered} defaultActiveKey={defaultActiveKey}>
            {groups.map((group, index) => {
              const { title, items } = group
              return (
                <Panel header={title} key={title}>
                  <Group items={items} />
                </Panel>
              )})}
          </Collapse>
          {!isView&&(<div className="footer-bar">
            {this.renderError()}
            <Button onClick={this.onCancel}>取消</Button>
            <Button onClick={this.onSave} type="primary">保存</Button>
          </div>)}
        </Form>
      </Provider>
    )
  }
}

const getInstanceWrapper = getInstance(UserForm)
const antdFormCreateWrapper = Form.create({

})(getInstanceWrapper)

export default antdFormCreateWrapper