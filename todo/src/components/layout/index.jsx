import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'store/actions'

class Layout extends Component {
    deleteUnderway(index, underway) {
        this.props.removeUnderway(index, underway)
    }

    deleteCompleted(index, completed) {
        this.props.removeCompleted(index, completed)
    }

    completed(e, underway, completed, index) {
        const newTitle = e.target.nextSibling.innerHTML;
        this.props.addCompleted(newTitle, underway, completed, index)
    }

    underway(e, completed, underway, index) {
        const newTitle = e.target.nextSibling.innerHTML;
        this.props.addUnderway(newTitle, underway, completed, index)
    }

    render() {
        const { children, underway, completed } = this.props;
        return <section>
            <div className='content'>
                <h2>
                    正在进行
                    <span>{underway.length}</span>
                </h2>
                <ul className="ongoing" ref='no'>
                    {
                        underway.length === 0 ? '' : underway.map((item, index) => {
                            return <li key={index}>
                                <input type="checkbox" onClick={(e) => {
                                    this.completed(e, underway, completed, index)
                                }} />
                                <p>{item.title}</p>
                                <div className="remove" onClick={() => {
                                    this.deleteUnderway(index, underway)
                                }}>
                                    -
                                </div>
                            </li>
                        })
                    }
                </ul>
                <h2>
                    已经完成
                    <span>{completed.length}</span>
                </h2>
                <ul className="complete">
                    {
                        completed.length === 0 ? '' : completed.map((item, index) => {
                            return <li key={index}>
                                <input type="checkbox" ref='yes' defaultChecked onClick={(e) => {
                                    this.underway(e, completed, underway, index)
                                }} />
                                <p>{item.title}</p>
                                <div className="remove" onClick={() => {
                                    this.deleteCompleted(index, completed)
                                }}>
                                    -
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
            {children}
        </section>


    }
}

const mapStateToProps = (state) => {
    return state.TodoList
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeUnderway(payload, underway) {
            underway.splice(payload, 1)
            dispatch(actions.underway(underway))
        },
        removeCompleted(payload, completed) {
            completed.splice(payload, 1)
            dispatch(actions.completed(completed))
        },
        addUnderway(payload, underway, completed, index) {
            underway.push({ title: payload })
            completed.splice(index, 1)
            dispatch(actions.completed(completed))
        },
        addCompleted(payload, underway, completed, index) {
            completed.push({ title: payload })
            underway.splice(index, 1)
            dispatch(actions.completed(completed))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)