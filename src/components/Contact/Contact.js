import React from 'react'
import { useParams } from 'react-router-dom';

function Contact() {
    let { userId } = useParams();
  return (
    <div>
      <h1>Welcome to Contact Page {userId}</h1>
    </div>
  )
}

export default Contact
