'use client';
import { useEffect, useState } from 'react';
import { getBlogs, saveBlogs } from '@/utils/blogStorage';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const handleCreate = () => {
    if (!title || !image) return alert("Enter title and image");
    const newBlog = {
      id: blogs.length + 1,
      title,
      image
    };
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    saveBlogs(updatedBlogs);
    setTitle('');
    setImage('');
    alert('Blog created!');
  };

  return (
    <div className="create-container">
      <h2>Create Blog</h2>
      <input className="create-input" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input className="create-input" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <button className="create-btn" onClick={handleCreate}>Create</button>

      <h3>All Blogs:</h3>
      <div className="preview-section">
        {blogs.map((b, i) => (
          <div key={i} className="preview-card">
            <img src={b.image} alt={b.title} className="preview-image" />
            <h4>{b.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateBlog;
