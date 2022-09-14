import axios from "axios";
import React from "react";


function addPostForm ( props ) {
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'img': e.target.img.value,
        };
        await axios.post(
            `https://server-401.herokuapp.com/post`,
            post
        ).then( () => {
            props.getData();
        } );
    };
    return (
        <>
            <div className="add-post-form">
                <h2>Add Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Title</label>
                        <input type="text" placeholder="Add Title" name="title" />
                    </div>
                    <div className="form-control">
                        <label>Content</label>
                        <textarea placeholder="Add Post content" name="content"></textarea>
                    </div>
                    <div className="form-control">
                        <label>Add Image</label>
                        <input type='text' placeholder="Add Image address" name="img"></input>
                    </div>
                    <div className="form-control">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default addPostForm;