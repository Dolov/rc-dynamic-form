import React from 'react'
import { Form, Collapse, Button } from 'antd'
import { Provider } from './Content'
import { getGroupTitle, getViewValues } from './utils'
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
    activeKey: [],
  }

  componentDidMount() {
    this.init()
  }



  init() {
    const { value, form: {setFieldsValue} } = this.props
    const params = getViewValues(value)
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
      onCancel()
    }
  }

  onCollapseChange = (activeKey: any) => {
    this.setState({activeKey})
  }

  render() {
    const { isView, config, collapseBordered } = this.props
    const { activeKey } = this.state
    const groups = Array.isArray(config.groups) ? config.groups: []
    const formLayout = (typeof config.formLayout === 'string') ? config.formLayout: 'vertical'
    return (
      <Provider value={this.props}>
        <Form layout={formLayout} className={clsPrefix}>
          <Collapse bordered={collapseBordered} defaultActiveKey={getGroupTitle(groups)} onChange={this.onCollapseChange}>
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