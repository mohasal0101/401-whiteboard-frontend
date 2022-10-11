export const newState = [];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
        return [...state, action.payload];
        case "REMOVE":
        return state.filter((item) => item.id !== action.payload);
        default:
        return state;
    }
    }

    const userInfo = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {};
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';


        export const initialState = {
        currentUser: userInfo,
        user: userInfo,
        token: token,   
        isAuth: token ? true: false,
        loading: false
    };