const BlogId = ({ params }) => {
  const id = params.BlogId;

  return (
    <div className="detail-container">
      <img src={`/image${id}.jpg`} className="detail-image" />
      <p>This is the description for Blog {id}.</p>
    </div>
  );
};

export default BlogId;