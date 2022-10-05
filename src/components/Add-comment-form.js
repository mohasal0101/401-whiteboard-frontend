import axios from "axios";
import React from 'react';


function AddCommentForm ( props ) {
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
        };
        await axios.post(
            `https://whiteboarding-backend-401.herokuapp.com/comment/${props.postId}`,
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
                    <div className="button">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCommentForm;