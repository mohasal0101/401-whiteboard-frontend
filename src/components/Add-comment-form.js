import axios from "axios";
import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';


function AddCommentForm ( props ) {
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
                <form onSubmit={handleSubmit}>
                    <div className="form-control2">
                        <textarea placeholder="Add Comment content" name="content"></textarea>
                    </div>
                    <Button variant="primary">Comment</Button>
                </form>
            </div>
        </>
    );
}

export default AddCommentForm;