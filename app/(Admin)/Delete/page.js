'use client';
import { useEffect, useState } from 'react';
import { getBlogs, saveBlogs } from '@/utils/blogStorage';

const DeleteBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const handleDelete = () => {
    if (!selectedTitle) return alert("Please select a blog to delete");
    const filtered = blogs.filter(b => b.title !== selectedTitle);
    saveBlogs(filtered);
    setBlogs(filtered);
    alert("Blog deleted!");
    setSelectedTitle('');
  };

  return (
    <div className="create-container">
      <h2>Delete Blog</h2>
      <select className="create-input" value={selectedTitle} onChange={e => setSelectedTitle(e.target.value)}>
        <option value="">Select Title</option>
        {blogs.map(b => (
          <option key={b.id} value={b.title}>{b.title}</option>
        ))}
      </select>
      <button className="create-btn" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteBlog;
