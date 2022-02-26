import React, { useState, useEffect, useMemo } from "react";

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

// const word = ["sick", "powder", "day"];
// export function App() {
//   useAnyKeyToRender();

//   useEffect(() => {
//     console.log("fresh render");
//   }, [word]);

//   return <h1>Open the console</h1>;
// }

function WordCount({ children = "" }) {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), [children]);

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}

export function App() {
  return <WordCount>You are not going to believe this but...</WordCount>;
}
