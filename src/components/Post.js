import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddCommentForm from "./Add-comment-form";
import React from 'react';




function Post ( props ) {
    const [ post, setPost ] = useState( [] );
    const getData = async () => {
        const response = await axios.get( `https://server-401.herokuapp.com/post` );
        setPost( response.data.posts );
    };


    const handleDelete = async ( id ) => {
        await axios.delete( `https://server-401.herokuapp.com/post/${id}` );
        getData();
    };

    const handleUpdate = async ( id, post ) => {
        await axios.put( `https://server-401.herokuapp.com/post/${id}`, post );
        getData();
    };
    

    useEffect( () => {
        getData();
    }, [props.rerender] );
    return (
        <>
            {post && post.map( ( post, idx ) => {
                return (
                    <div>

                        <button  onClick={() => {
                                handleUpdate( post.id );
                            }}>update data</button>
                         <div className="post-class" style={{ justifyContent: 'center', margin: '1rem' }} key={idx}>
                        <img src={post.img} alt={post.title} style={{ width: "15rem" }} />
                        
                        <div className="card-body">
                            <h1 className="card-title">{post.title}</h1>
                            <p className="card-text">{post.content}</p>
                           
                    </div>
                   
                        
                        <div>
                            {post.Comments &&
                                <h2>Comments</h2>
                            }
                            {post.Comments && post.Comments.map( ( comment, idx ) => {
                                return (
                                    <div className="card" style={{ justifyContent: 'center', margin: '1rem' }} key={idx}>
                                        <div className="card-body">
                                            <p className="card-text">{comment.content}</p>
                                        </div>
                                    </div>
                                );
                            }
                            )}
                              </div>
                              <AddCommentForm postId={post.id} getData={getData} />
                            <div>
                            <button  onClick={() => {
                                handleDelete( post.id );
                            }}>delete post</button>
                        </div>

                        </div>
                    </div>
                );
            }
            )}
        </>
    );
}
export default Post;