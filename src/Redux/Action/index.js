import axios from 'axios'

export const getTodoList = () => (dispatch) => {
    axios
        .get(`https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list`)
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                dispatch({
                    type: "GET_TODO_LIST",
                    payload: response.data,
                });
            }
        })
        .catch((err) => console.log(err));
}

export const createTodoList = (body) => (dispatch) => {   
    dispatch({
        type: "CREATE_TODO_LIST",
        payload: body,
    });
}

export const deleteToDoList = (key) => (dispatch) => {   
    dispatch({
        type: "DELETE_TODO_LIST",
        payload: key,
    });
}