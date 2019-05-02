import React from 'react'
import { Modal } from 'antd'
import { ControlProps } from '../interface'


export default class SelectMap extends React.PureComponent<ControlProps> {

  state = {
    visible: false,
  }

  onCancel = () => {
    this.setState({
      visible: false,
    })
  }

  openMap = () => {
    this.setState({
      visible: true,
    })
  }

  componentDidMount() {
    window.addEventListener('message', this.handlePostMessage)
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.handlePostMessage)
  }

  handlePostMessage = (message: any) => {
    const { data } = message
    const { onChange } = this.props
    onChange(data)
    this.onCancel()
  }

  onLoad = (e: any) => {
    e.target.contentWindow.postMessage('hello', 'https://m.amap.com/picker/')
  }

  render() {
    const { value, amapKey } = this.props
    let name = '请选择位置'
    let location = null
    if (value && value.name) {
      name = value.name
    }
    if (value && value.location) {
      location = value.location
    }
    const { visible } = this.state
    return (
      <div>
        <span 
          onClick={this.openMap}
          className="select-map-value"
        >
          {name}
        </span>
        <Modal
          centered
          title="请选择位置"
          visible={visible}
          footer={null}
          width='95vw'
          onCancel={this.onCancel}
          wrapClassName="select-map-modal"
        >
          <iframe 
            onLoad={this.onLoad}
            className="select-map-iframe"
            src={`https://m.amap.com/picker/?center=${location}&key=608d75903d29ad471362f8c58c550daf`} 
          />
        </Modal>
      </div>
    )
  }
}