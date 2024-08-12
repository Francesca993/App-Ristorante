import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LasciaUnCommento from "./LasciaUnCommento";
import VisualizzaRecensioni from "./VisualizzaRecensioni";
import { getPosts } from "../../Services/api";
import { useState } from "react";
import "./recensioniEcommenti.css";

export default function PaginaRecensioni() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await getPosts();
      setPosts(response.data);
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
