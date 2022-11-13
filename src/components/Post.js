import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddCommentForm from "./Add-comment-form";
import React from "react";
import cookies from "react-cookies";
import Card from "react-bootstrap/Card";
import "../App.css";
import CarouselComponent from "./Carousel";
import { Box, Image, Badge, Button } from "@chakra-ui/react";


function Post(props) {
  const [post, setPost] = useState([]);
  const getData = async () => {
    await axios
      .get(`${process.env.REACT_APP_HEROKU_URL}/post`, {
        headers: {
          Authorization: `Bearer ${cookies.load("token")}`,
        },
      })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    let confirm = prompt("Please type DELETE");
    if (confirm === "DELETE") {
      await axios.delete(`${process.env.REACT_APP_HEROKU_URL}/post/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies.load("token")}`,
        },
      });
      getData();
    } else handleDelete();
  };
  const handleUpdate = async (id) => {
    await axios.put(`${process.env.REACT_APP_HEROKU_URL}/post/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies.load("token")}`,
      },
    });
    getData();
    handleUpdate();
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-cards">
      {post ? (
        post.map((post, idx) => {
          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={post.img}
                alt={post.title}
                style={{ width: "100%" }}
              />
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New post
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  post &bull; category
                </Box>
              </Box>

              <div className="card-body">
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                className="card-title">{post.title}</Box>
                <Box 
                     mt='1'
                     fontWeight='semibold'
                     as='h4'
                     lineHeight='tight'
                     noOfLines={1}
                className="card-text">{post.content}</Box>
              </div>

              <Box>
                {!post.Comments && <h2>Comments</h2>}
                {post.Comments &&
                  post.Comments.map((comment, idx) => {
                    return (
                      <div
                        className="card"
                        style={{ justifyContent: "center", margin: "1rem" }}
                        key={idx}
                      >
                        <div className="card-body">
                          <p className="card-text">
                            {comment.content} key={idx}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                <AddCommentForm postId={post.id} getData={getData} />
              </Box>

              <div>
                <Button
                colorScheme='red'
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                >
                  delete post
                </Button>
                <Button
                 colorScheme='blue'
                 
                  onClick={() => {
                    handleUpdate(post.id);
                  }}
                >
                  update data
                </Button>
              </div>
            </Box>
          );
        })
      ) : (
        <h4>hello</h4>
      )}
    </div>
  );
}
export default Post;
