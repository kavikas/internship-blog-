'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBlogs } from '@/utils/blogStorage'; 

const Blog = () => {
  const defaultBlogs = [
    { id: 1, title: "Alstroemeria", image: "/image1.jpg" },
    { id: 2, title: "Calla Lily", image: "/image2.jpg" },
    { id: 3, title: "Daisy", image: "/image3.jpg" },
    { id: 4, title: "Gardenia", image: "/image4.jpg" },
    { id: 5, title: "Carnation", image: "/image5.jpg" },
    { id: 6, title: "Gerbera Daisy", image: "/image6.jpg" },
    { id: 7, title: "Orchid", image: "/image7.jpg" },
    { id: 8, title: "Tulip", image: "/image8.jpg" },
    { id: 9, title: "Peony", image: "/image9.jpg" },
    { id: 10, title: "Dahlia", image: "/image10.jpg" }
  ];

  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const createdBlogs = getBlogs(); 
    const combined = [...defaultBlogs, ...createdBlogs]; 
    setAllBlogs(combined);
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Blog;
