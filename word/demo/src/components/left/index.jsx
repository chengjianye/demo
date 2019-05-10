import React, { Component } from 'react';

class Left extends Component {
    render() {
        const { leftList,getId } = this.props;
        return <div className="left">
            <ul>
                {
                    leftList.length && leftList.map((item, index) => {
                        return <li key={index} onClick={() => { getId(item.id) }}>
                            {item.name}
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

export default Left;
