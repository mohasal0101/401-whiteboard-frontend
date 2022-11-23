//create a redux store 

import { configureStore } from '@reduxjs/toolkit';

import signinSlicer from './signinSlicer';
import signupSlicer from './signupSlicer';
import postSlicer from './postSlicer';

export default configureStore({
    reducer: {
        signin: signinSlicer,
        signup: signupSlicer,
        posts: postSlicer,
    }
});

// Path: src/redux/signinSlicer.js