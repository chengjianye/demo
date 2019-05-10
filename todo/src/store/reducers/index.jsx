const defaultState = {
    underway: [], //正在进行
    completed: [] //已完成
}

const TodoList = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UNDERWAY":
            return { ...state, underway: [...payload] }
        case "COMPLETED":
            return { ...state, completed: [...payload] }
        default:
            return state
    }
}

export default TodoList