'use client';
import { useParams } from 'next/navigation';

const BlogId = () => {
  const { blogId } = useParams();

  return (
    <div className="detail-container">
      <img src={`/image${blogId}.jpg`} className="detail-image" />
      <p>This is the description for Blog {blogId}.</p>
    </div>
  );
};

export default BlogId;
