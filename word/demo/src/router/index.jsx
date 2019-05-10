import React, { Component } from 'react';
import Routers from './routers'
import RouteMap from './map'

class RouteView extends Component {
     render(){
         const routers = this.props.routers ? this.props.routers : Routers
         return <RouteMap routers={routers}/>
     }
}

export default RouteView