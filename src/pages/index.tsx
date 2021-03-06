import React from 'react';
import styles from './index.css';
import Form from '../components'
import '../components/style'
// import Form from 'rc-dynamic-form'
// import 'rc-dynamic-form/lib/style'
import config from './data/config'
import value from './data/value'
import S from './index.less'

export default class Index extends React.PureComponent {

  instance = null

  state = {
    isView: true,
    focusId: null,
  }

  onItemEdit = (focusId: string) => {
    this.setState({
      isView: false,
      focusId,
    })
  }

  componentDidMount() {
    console.log(this.instance)
  }

  onSave = (params: object) => {
    console.log(params, 'params')
  }

  onCancel = () => {
    this.setState({
      isView: true,
    })
  }

  render() {
    const { isView, focusId } = this.state
    return (
      <div className={S.wrapper}>
        <a target="_blank" href="https://github.com/Dolov/rc-dynamic-form">https://github.com/Dolov/rc-dynamic-form</a>
        <Form 
          help={true}
          editable={true}
          undoable={true}
          value={value}
          isView={isView}
          config={config}
          onSave={this.onSave}
          focusId={focusId}
          onCancel={this.onCancel}
          onItemEdit={this.onItemEdit}
          collapseBordered={false}
          getInstance={(instance:any) => {this.instance=instance}}
        />
      </div>
    )
  }
}

