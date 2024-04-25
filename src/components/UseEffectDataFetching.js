import axios from "axios";
import React, { useEffect, useState } from "react";

function UseEffectDataFetching() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectDataFetching;
