import React from 'react'
import { Form, Collapse, Button } from 'antd'
import { Provider } from './Content'
import { getGroupTitle, getViewValues, getEditValues } from './utils'
import { FormProps } from './interface'
import Group from './components/Group'

const { Panel } = Collapse

const clsPrefix = 'rc-dynamic-form'


class UserForm extends React.PureComponent<FormProps, any> {

  static defaultProps = {
    help: false,
    value: {},
    isView: true,
    editable: true,
    undoable: false,
    onItemEdit: () => {},
    focusId: null,
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

  onSave = () => {
    const { onSave, form: {validateFieldsAndScroll}} = this.props
    if (!onSave || typeof onSave !== 'function') return 
    validateFieldsAndScroll((err: any, params: object) => {
      if (err) return 
      onSave(params)
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
            <Button onClick={this.onCancel}>取消</Button>
            <Button onClick={this.onSave} type="primary">保存</Button>
          </div>)}
        </Form>
      </Provider>
    )
  }
}


export default Form.create({

})(UserForm)