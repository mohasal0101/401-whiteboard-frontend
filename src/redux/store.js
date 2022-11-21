//create a redux store 

import { configureStore } from '@reduxjs/toolkit';

import signinSlicer from './signinSlicer';
import signupSlicer from './signupSlicer';

export default configureStore({
    reducer: {
        signin: signinSlicer,
        signup: signupSlicer
    }
});

// Path: src/redux/signinSlicer.js