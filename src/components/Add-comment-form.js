import axios from "axios";
import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { FormControl, FormLabel, Input} from "@chakra-ui/react";



function AddCommentForm ( props, postId ) {
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
        };
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/${props.postId}`,
            comment
        ).then( () => {
            props.getData();
        } );
    };
    return (
        <>
            <div className="add-comment-form">
                <h2>Say something 😁</h2>
                <FormControl onSubmit={handleSubmit}>
                    <div className="form-control2">
                        <input placeholder="Add Comment content" name="content"></input>
                    </div>
                    <Button variant="primary">Comment</Button>
                </FormControl>
            </div>
        </>
    );
}

export default AddCommentForm;