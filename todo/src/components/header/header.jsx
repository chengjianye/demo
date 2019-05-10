import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions'

class Header extends Component {
    addTodo(underway) {
        const val = this.refs.add.value;

        if (val === '') {
            alert('内容不能为空')
        } else {
            this.props.addTodo(val, underway)
            this.refs.add.value = ''
        }
    }

    render() {
        const { underway } = this.props;
        return <div className="header">
            <div>
                ToDoList
            </div>
            <div>
                <input type="text" placeholder="添加ToDo" ref='add' />
                <button onClick={() => { this.addTodo(underway) }}>添加</button>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return state.TodoList
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addTodo (payload,underway) {
            underway.push({title:payload})
            dispatch(actions.underway(underway))
            
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)