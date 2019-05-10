import React, { Component } from 'react'
import RouteMap from './map';
import Routes from './routes';

class RouteView extends Component {
    render() {
        const routes = this.props.routes ? this.props.routes : Routes
        return <div>
            <RouteMap routes={routes} />
        </div>
    }
}

export default RouteView