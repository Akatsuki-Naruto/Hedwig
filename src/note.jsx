import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([{}]);
  const [isFetching, setIsFetching] = useState(false);
  let limit = 5;
  let page = 1;

  const getPosts = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    setPosts(data);
    console.log(data);
  };

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  function getMorePosts() {
    setTimeout(() => {
      page++;
      setPosts([{ ...posts }], posts);
      setIsFetching(false);
    }, 2000);
  }

/*
  const getPosts = async () => {
    setIsFetching(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const data = await response.json();
    setPosts([...posts, ...data]);
    setIsFetching(false)
  };

  function getMorePosts() {
    setTimeout(() => {
      setPage(page++)
      getPosts();
    }, 2000);
  }
*/ 

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    () => {
      getPosts();
    },
    []
  );
  useEffect(() => {
    if (!isFetching) return;
    getMorePosts();
  }, [isFetching]);

  return (
    <div className="App">
      {posts.map((post, index) => (
        <div key={index} className="post">
          <div className="number">{post.id}</div>
          <div className="post-info">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        </div>
      ))}
      {isFetching && (
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      )}
    </div>
  );
}

export default App;