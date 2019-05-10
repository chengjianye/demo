const defaultProps = {
    searchList: []
}

const SearchReducers = (state = defaultProps, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE':
            return { ...state, searchList: [...payload] }
        case 'ADD':
            return { ...state, searchList: [...payload] }
        default:
            return state
    }
}

export default SearchReducers