'use client';
import { useEffect, useState } from 'react';
import { getBlogs, saveBlogs } from '@/utils/blogStorage';

const UpdateBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  const handleUpdate = () => {
    if (!selectedTitle || !newTitle || !newImage) return alert("Please fill all fields");
    const updated = blogs.map(b =>
      b.title === selectedTitle ? { ...b, title: newTitle, image: newImage } : b
    );
    saveBlogs(updated);
    setBlogs(updated);
    alert("Blog updated!");
    setSelectedTitle('');
    setNewTitle('');
    setNewImage('');
  };

  return (
    <div className="create-container">
      <h2>Update Blog</h2>
      <select className="create-input" value={selectedTitle} onChange={e => setSelectedTitle(e.target.value)}>
        <option value="">Select Title</option>
        {blogs.map(b => (
          <option key={b.id} value={b.title}>{b.title}</option>
        ))}
      </select>
      <input className="create-input" placeholder="New Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
      <input className="create-input" placeholder="New Image URL" value={newImage} onChange={e => setNewImage(e.target.value)} />
      <button className="create-btn" onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateBlog;
