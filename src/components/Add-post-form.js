import axios from "axios";
import React from "react";
import cookies from "react-cookies";
import { Box, FormLabel, Input, Button } from "@chakra-ui/react";

function addPostForm(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title: e.target.title.value,
      content: e.target.content.value,
      img: e.target.img.value,
      userID: cookies.load("user_id"),
    };
    await axios
      .post(`${process.env.REACT_APP_HEROKU_URL}/post`, post, {
        headers: {
          Authorization: `bearer ${cookies.load("token")}`,
        },
      })
      .then(() => {
        props.getData();
      });
  };
  return (
    <>
      <div className="add-post-form">
        <h2>Add Post</h2>
        <Box  bgGradient="linear(to-t, green.200, pink.500)" onSubmit={handleSubmit}>
          <div className="form-style">
            <FormLabel>Title</FormLabel>
            <Input type="text" placeholder="Add your title" name="title" />
          </div>
          <div className="form-style">
            <FormLabel>Content</FormLabel>
            <textarea placeholder="Add some content" name="content"></textarea>
          </div>
          <div className="form-style">
            <FormLabel>Add Image</FormLabel>
            <Input
              type="text"
              placeholder="Add image link address"
              name="img"
            ></Input>
          </div>
          <button className="form-button3">Submit</button>

          <div className="update-post-form">
            <h2 className="form-button3">Update Post</h2>
            <button className="form-button3" onSubmit={props.rerender}>Update</button>
          </div>
        </Box>
      </div>
    </>
  );
}

export default addPostForm;
