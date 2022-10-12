export const initialState ={

    user: {},
    token: '',
    isAuth: false,
    errorMessage: null,
    loading: false
}
console.log(initialState);

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...state,
                loading: true,
            };
            
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                token: action.payload.token,
                loading: false,
                isAuth: true,
            };
        case "LOGIN_FAILED":
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                isAuth: false,
            };

        default:
            throw new Error(`Unkown action type: ${action.type}`);
    }
}