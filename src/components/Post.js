import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddCommentForm from "./Add-comment-form";
import React from 'react';
import cookies from 'react-cookies';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';





function Post ( props ) {
    const [ post, setPost ] = useState( [] );
    const getData = async () => {
        await axios.get( `${process.env.REACT_APP_HEROKU_URL}/post`, {
            headers: {
                Authorization: `Bearer ${cookies.load('token')}`
            }
        })
            .then( ( res ) => {
                setPost( res.data );
            } ).catch( ( err ) => {
                console.log( err );
            } );

    };



    const handleDelete = async ( id ) => {
        let confirm = prompt("Please type DELETE");
        if(confirm === "DELETE"){
            await axios.delete( `${process.env.REACT_APP_HEROKU_URL}/post/${id}` , {
                headers: {
                    'Authorization': `Bearer ${cookies.load('token')}`
                }
            } );
            getData();
        } else handleDelete()
    };
    const handleUpdate = async ( id ) => {
     
            await axios.put( `${process.env.REACT_APP_HEROKU_URL}/post/${id}` , {
                headers: {
                    'Authorization': `Bearer ${cookies.load('token')}`
                }
            } );
            getData();
         handleUpdate() 
    };

    useEffect( () => {
        getData();
    }, [props.rerender] );
    return (
        <div className="container-cards">
            {post && post.map( ( post, idx ) => {
                return (
                    <Card className="text-center" style={{width: '30%', margin: '10px'}}>
                        
                        
                        <img src={post.img} alt={post.title} style={{ width: "100%" }} />
                        
                        <div className="card-body">
                            <Card.Header className="card-title">{post.title}</Card.Header>
                            <Card.Title className="card-text">{post.content}</Card.Title> 
                    </div>
                    
                        <Card.Text>
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
                              <AddCommentForm postId={post.id} getData={getData} />
                              </Card.Text>

                            <div>
                            <Button  onClick={() => {handleDelete( post.id );}}variant="danger">delete post</Button>
                            <button  type="button" className="btn btn-warning" onClick={() => {handleUpdate( post.id );}}>update data</button>
                        
                        </div>

                    </Card>
                );
            }
            )}
        </div>
    );
}
export default Post;