const defaultProps = {
    ApplicationList: [{
        "cont": "新手选号",
        "icon": "iconfont icon-tengxunweibo21"
    }, {
        "cont": "用车选号",
        "icon": "iconfont icon-tengxunweibo21"
    }, {
        "cont": "新能源换车",
        "icon": "iconfont icon-tengxunweibo21"
    }, {
        "cont": "号牌号段公布",
        "icon": "iconfont icon-tengxunweibo21"
    }, {
        "cont": "备案非本人机动车",
        "icon": "iconfont icon-tengxunweibo21"
    }, {
        "cont": "机动车检验愉悦",
        "icon": "iconfont icon-tengxunweibo21"
    }],
    businessList: []
}

const Application = (state = defaultProps, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE':
            return { ...state, ApplicationList: [...payload] }
        case 'BUSINESS':
            return { ...state, businessList: [...payload] }
        case 'ADDLIST':
            return { ...state, ApplicationList: [...payload] }
        case 'DELLIST':
            return { ...state, ApplicationList: [...payload] }
        default:
            return state
    }
}

export default Application