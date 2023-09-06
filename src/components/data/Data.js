import React, { useEffect, useState } from "react";
import { Container } from "../../globalStyles";
import { Card, CardBody, CardTitle } from "./StyledData";

export default function Data() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <Container>
      {posts?.map((item) => (
        <Card key={item.id}>
          <CardTitle>{item.title}</CardTitle>
          <CardBody>{item.body}</CardBody>
        </Card>
      ))}
    </Container>
  );
}
