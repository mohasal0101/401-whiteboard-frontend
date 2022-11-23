//create the post action

export const post = () => async (dispatch) => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_HEROKU_URL}`, {
        title: "test",
        description: "test",
        });
        dispatch({
        type: POST,
        payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};

// Path: src\reducers\postReducer.jsx