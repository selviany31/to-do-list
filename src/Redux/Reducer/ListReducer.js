const initialState = {
    dataList: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_TODO_LIST":
            return {
                ...state,
                dataList: action.payload,
            };
        case "CREATE_TODO_LIST":
            return {
                ...state,
                dataList: state.dataList.concat(action.payload)
            };
        case "DELETE_TODO_LIST":
            return {
                ...state,
                dataList: state.dataList.filter((data, i) => i == action.payload)
            };
        default:
            break;
    }
    return state;
}