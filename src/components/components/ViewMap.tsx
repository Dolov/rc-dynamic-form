import React from 'react'
import { DisplayTextProps } from '../interface'

export default class ViewMap extends React.PureComponent<DisplayTextProps> {

  state = {

  }

  onLoad = (e: any) => {
    
  }

  render() {
    const { amapKey, value: {location, name} } = this.props
    return (
      <iframe 
        onLoad={e => this.onLoad(e)} 
        className="map-iframe" 
        src={`https://m.amap.com/navi/?dest=${location}&destName=${name}&hideRouteIcon=1&key=${amapKey}`} 
      />
    )
  }
}