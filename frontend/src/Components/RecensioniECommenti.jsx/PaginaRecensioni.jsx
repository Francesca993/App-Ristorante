import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LasciaUnCommento from "./LasciaUnCommento";
import VisualizzaRecensioni from "./VisualizzaRecensioni";
import { getPosts } from "../../Services/api";
import { useState } from "react";
import "./recensioniEcommenti.css";

export default function PaginaRecensioni() {
  const [posts, setPosts] = useState([]);
  const [limit] = useState(5);

  const fetchPosts = async (page = 1) => {
    try {
      const response = await getPosts(page, limit);
      console.log(response);
      setPosts(response.posts);
    } catch (err) {
      console.error("Errore nella visualizzazione di tutti i post");
    }
  };
  return (
    <>
      <VisualizzaRecensioni fetchPosts={fetchPosts} posts={posts} />
      <LasciaUnCommento fetchPosts={fetchPosts} />
    </>
  );
}
