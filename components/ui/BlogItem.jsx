import React from 'react';
import Image from './Image.jsx'

const BlogItem = ({image, text}) => (
  <div>
    <Image {...image} />
    <br/>
    <span>{text}</span>
  </div>
);

export default BlogItem;
