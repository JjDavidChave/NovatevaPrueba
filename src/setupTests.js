// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom


/* import '@testing-library/jest-dom';




import React, { useEffect, useState } from 'react'



const App = () => {

  const [posts, setPosts] = useState(null);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts").then(res =>{
  return res.json()  
  }).then(res =>{
    console.log(res)
    setPosts(res)
  })

}, [])


  return (
    <div>
      {posts && posts.map(post => (
        <div key={post.id}>
          <h1 style={singStyle}>{post.id}</h1>
          <h2 style={twoStyle}>{post.title}</h2>
        </div>
      ))}
    </div>
  )
}

const singStyle = {
  color: 'yellow',
  alignItems: 'center',
  
}

const twoStyle = {
  color: 'blue',
}

export default App */
//
















/* 

import React from "react";
import Home from "./routes/Home";
import Products from './routes/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Rutas=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas; */


