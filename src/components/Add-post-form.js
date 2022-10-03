import axios from "axios";
import React from "react";
import cookies from 'react-cookies';


function addPostForm ( props ) {
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'img': e.target.img.value,
            'userID': cookies.load( 'user_id' ),
        };
        await axios.post(
            `${process.env.HEROKU_URL}/post`,
            post, {
                headers: {
                    'Authorization': `bearer ${cookies.load('token')}`
                }
            }
        ).then( () => {
            props.getData();
        } );
    };
    return (
        <>
            <div className="add-post-form">
                <h2>Add Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-style">
                        <label >Title</label>
                        <input type="text" placeholder="Add your title" name="title" />
                    </div>
                    <div className="form-style">
                        <label>Content</label>
                        <textarea placeholder="Add some content" name="content"></textarea>
                    </div>
                    <div className="form-style">
                        <label>Add Image</label>
                        <input type='text' placeholder="Add image link address" name="img"></input>
                    </div>
                    <div className="form-style1">
                        <input type="submit"/>
                        </div>
                    <div className="update-post-form">
                            <h2>Update Post</h2>
                            <button onSubmit={props.rerender}>
                                Update
                            </button>

                    
                    </div>
                    
                </form>
            </div>
        </>
    );
}

export default addPostForm;