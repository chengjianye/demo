const defaultProps = {
    homeList: []
}

const homeReducers = (state = defaultProps, action) => {
    const { type, payload } = action
    switch (type) {
        case 'UPDATE':
            return { ...state, homeList: [...payload] }
        default:
            return state
    }
}

export default homeReducers