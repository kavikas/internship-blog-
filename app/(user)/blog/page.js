'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogs } from '@/utils/blogStorage';

const Blog = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const blogs = getBlogs();  
    setAllBlogs(blogs);
  }, []);

  return (
    <div className="container">
      {allBlogs.map((blog) => (
        <div className="card" key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <img src={blog.image} alt={blog.title} className="image" />
          </Link>
          <h3>{blog.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Blog;
