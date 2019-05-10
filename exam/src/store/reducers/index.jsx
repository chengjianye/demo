const defaultProps = {
    homeList: []
}

const Bookkeeping = (state = defaultProps, action) => {
    const { type, payload } = action
    switch (type) {
        case 'UPDATE':
            return { ...state, homeList: payload }
        case 'INCOME':
            return { ...state, homeList: [...payload] }
        case 'EXPENDITRUE':
            return { ...state, homeList: [...payload] }
        default:
            return state
    }
}

export default Bookkeeping