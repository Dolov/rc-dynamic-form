import React from 'react';
import styles from './index.css';
import Form from '../components'
import '../components/style'
import config from './data/config'
import value from './data/value'


export default class Index extends React.PureComponent {

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
      <Form 
        help
        editable
        value={value}
        isView={isView}
        config={config}
        onSave={this.onSave}
        focusId={focusId}
        onCancel={this.onCancel}
        onItemEdit={this.onItemEdit}
      />
    )
  }
}

