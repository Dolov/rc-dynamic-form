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
    console.log(focusId, 'focusId')
    this.setState({
      isView: false,
      focusId,
    })
  }

  render() {
    const { isView, focusId } = this.state
    return (
      <Form 
        editable
        isView={isView}
        config={config}
        onItemEdit={this.onItemEdit}
        focusId={focusId}
      />
    )
  }
}

