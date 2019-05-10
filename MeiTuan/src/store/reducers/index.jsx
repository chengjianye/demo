const defaultProps = {
    shopCarList: [{
        "id": 1,
        "name": "绿茶葱香烤鸡",
        "price": 36,
        "tit": "微辣 | 三黄鸡：450克肉质细嫩，茶香浓郁(辣不可免)",
        "img": "https://p1.meituan.net/wmproduct/7b8b42dff4fef46d74c7f92f1df7a85a255200.jpg",
        "count": 1,
        "isCheck": false
    }]
}

const ShopCarReducers = (state = defaultProps, action) => {
    const { type, payload } = action
    switch (type) {
        case "UPDATE":
            return { ...state, shopCarList: [...payload] }
        case "PLUS":
            return { ...state, shopCarList: [...payload] }
        case "MINUS":
            return { ...state, shopCarList: [...payload] }
        case "CHECKED":
            return { ...state, shopCarList: [...payload] }
        default:
            return state
    }
}

export default ShopCarReducers