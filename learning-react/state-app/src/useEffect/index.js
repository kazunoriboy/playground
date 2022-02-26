import React, { useState, useEffect } from "react";

// const useJazzyNews = () => {
//   const [posts, setPosts] = useState([]);
//   const addPost = post => setPosts(allPosts => [post, ...allPosts]);

//   useEffect(() => {
//     newsFeed.subscribe(addPost);
//     return () => newsFeed.unsubscribe(addPost);
//   }, []);

//   useEffect(() => {
//     welcomeChime.play();
//     return () => goodbyeChime.play();
//   }, []);

//   return posts;
// }

// function NewsFeed({ url }) {
//   const posts = useJazzyNews();

//   return (
//     <>
//       <h1>{posts.length} articles</h1>
//       {posts.map(post => (
//         <Post key={post.id} {...post} />
//       ))}
//     </>
//   )
// }

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender)
  })
}

const word = ["sick", "powder", "day"];
export function App() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  }, [word]);

  return <h1>Open the console</h1>;
}
