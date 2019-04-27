import React from 'react'
import { Form, Collapse, Button } from 'antd'
import { Provider } from './Content'
import { getGroupTitle } from './utils'
import { FormProps } from './interface'
import Group from './components/Group'
const { Panel } = Collapse




class UserForm extends React.PureComponent<FormProps, any> {

  static defaultProps = {
    value: {},
    isView: true,
    editable: true,
    undoable: false,
    onItemEdit: () => {},
    focusId: null,
  }

  state = {
    activeKey: [],
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  init() {
    
  }

  onCollapseChange = (activeKey:any) => {
    this.setState({activeKey})
  }

  onSave = () => {

    const { form: {validateFieldsAndScroll} } = this.props
    validateFieldsAndScroll((err, values) => {
      console.log(err, values, '---')
    })
  }

  render() {
    const { config, isView } = this.props
    const { activeKey } = this.state
    const groups = Array.isArray(config.groups) ? config.groups: []
    const formLayout = (typeof config.formLayout === 'string') ? config.formLayout: 'vertical'
    return (
      <Provider value={{
        isView,
      }}>
        <Form layout={formLayout}>
          <Collapse activeKey={activeKey} onChange={this.onCollapseChange}>
            {groups.map((group, index) => {
              const { title, items } = group
              return (
                <Panel header={title} key={title}>
                  <Group items={items} />
                </Panel>
              )})}
          </Collapse>
        </Form>
        <Button onClick={this.onSave}>保存</Button>
      </Provider>
    )
  }
}


export default Form.create({

})(UserForm)