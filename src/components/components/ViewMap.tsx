import React from 'react'
import { DisplayTextProps } from '../interface'

export default class ViewMap extends React.PureComponent<DisplayTextProps> {

  state = {

  }

  onLoad = (e: any) => {
    
  }

  render() {
    const { amapKey } = this.props
    return (
      <iframe 
        onLoad={e => this.onLoad(e)} 
        className="map-iframe" 
        src={`https://m.amap.com/navi/?dest=116.470098,39.992838&destName=阜通西&hideRouteIcon=1&key=${amapKey}`} 
      />
    )
  }
}