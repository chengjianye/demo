import React, { Component } from 'react';
import { getRightList } from 'api/rightList'

class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rightList: [],
            id: 0
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id
        }, () => {
            this._getRightList()
        })
    }
    componentDidMount() {
        this._getRightList()
    }
    _getRightList() {
        const { id } = this.props
        getRightList(id).then((res) => {
            this.setState({
                rightList:res.data[0].list
            })
        })
    }
    render() {
        const { rightList } = this.state;
        return <div className="right">
               {
                   rightList.length && rightList.map((item,index)=>{
                        return <p key={index}>
                            {item.tit}
                        </p>
                   })
               }
        </div>
    }
}

export default Right;
