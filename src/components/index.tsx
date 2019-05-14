import React from 'react'
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

  renderError() {
    return (
      <span className="error-message-wrapper">
        <Popover
          title='无法保存，这些字段包含错误'
          content={<div>123</div>}
          overlayClassName="error-popover"
          trigger="click"
        >
          <Icon className="error-icon" type="exclamation-circle" theme="filled" />
          {12}
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

  render() {
    const { isView, config, collapseBordered } = this.props
    const groups = Array.isArray(config.groups) ? config.groups: []
    const formLayout = (typeof config.formLayout === 'string') ? config.formLayout: 'vertical'
    const defaultActiveKey = getGroupTitle(groups)
    return (
      <Provider value={{...this.props, setEditValue: this.setEditValue}}>
        <Form layout={formLayout} className={clsPrefix}>
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