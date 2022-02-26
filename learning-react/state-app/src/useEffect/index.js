import React, { useState, useEffect, useMemo, useCallback } from "react";

// const useJazzyNews = () => {
//   const [_posts, setPosts] = useState([]);
//   const addPost = post => setPosts(allPosts => [post, ...allPosts]);

//   const posts = useMemo(() => _posts, [_posts]);

//   useEffect(() => {
//     newPostChime.play();
//   }, [posts]);

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

// function newsFeed({ url }) {
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

// const useAnyKeyToRender = () => {
//   const [, forceRender] = useState();

//   useEffect(() => {
//     window.addEventListener("keydown", forceRender);
//     return () => window.removeEventListener("keydown", forceRender)
//   })
// }

// const word = ["sick", "powder", "day"];
// export function App() {
//   useAnyKeyToRender();

//   useEffect(() => {
//     console.log("fresh render");
//   }, [word]);

//   return <h1>Open the console</h1>;
// }


// function WordCount({ children = "" }) {
//   useAnyKeyToRender();

//   const words = useMemo(() => children.split(" "), [children]);

//   const fn = useCallback(() => {
//     console.log("hello");
//     console.log("world");
//   }, []);
  
//   useEffect(() => {
//     console.log("fresh render");
//     fn();
//   }, [fn]);

//   return (
//     <>
//       <p>{children}</p>
//       <p>
//         <strong>{words.length} - words</strong>
//       </p>
//     </>
//   );
// }

// export function App() {
//   return <WordCount>You are not going to believe this but...</WordCount>;
// }

