import React, { Component } from 'react';
import RouteMap from './map'
import Route from './routes'

class RouteView extends Component {
    render() {
        const routes = this.props.routes ? this.props.routes : Route
        return <RouteMap routes={routes}/>
    }
}

export default RouteView