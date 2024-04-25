import axios from "axios";
import React, { useEffect, useState } from "react";

/*
Function Flow:
1) We give an id Input to the input text field.
2) On a click of button, that id will be included in the endpoint and we will get the desired results.
*/

function UseEffectDataFetchingTwo() {
  const [post, setPost] = useState({}); //For posts
  const [id, setId] = useState(1); //For input ID
  const [idFromButtonClick, setButtonId] = useState(1); //For Button ID

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((e) => console.log(e));
  }, [idFromButtonClick]);

  const getIdFromButton = () => {
    setButtonId(id);
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={getIdFromButton}>
        Fetch Data
      </button>
      <h2>{post.title}</h2>
    </div>
  );
}

export default UseEffectDataFetchingTwo;
