import React from 'react'
import { Provider } from './Content'



export default class Index extends React.PureComponent {

  state = {

  }

  render() {
    return (
      <Provider value={{}}>
        <div>123</div>
      </Provider>
    )
  }
}