import React from 'react'

export const getPosts = async () => {
  return await fetch("http://localhost:8000/")
    .then((response) => response.json())
    .then((payload) => {
      console.log(payload)
      return payload
    });
}

export const getPost = async ({id}) => {
  return await fetch(`http://localhost:8000/post/${id}`)
    .then((response) => response.json())
    .then((payload) => {
      console.log(payload)
      return payload
    });
}
