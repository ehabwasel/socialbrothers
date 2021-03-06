import { Card } from "react-bootstrap";

const Blog = ({ post }) => {
  const { img_url, created_at, category, title, content } = post;

  return (
    <Card
      style={{
        height: "300px",
        maxWidth: "230px",
        margin: "15px 5px",
        padding: "2px",
        border: "none",
        boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Card.Header
        className="blogImageCard bg-dark"
        style={{
          backgroundImage: `url(${img_url})`,
        }}
      >
        <div
          className="blogInfo d-flex justify-content-between align-items-end text-white
        "
        >
          <span>{created_at.substring(0, 10)}</span>
          <span>{category ? category.name : "Tech"}</span>
        </div>
      </Card.Header>
      <Card.Body
        style={{
          fontSize: "11px",
          overflow: "auto",
          height: "60%",
          textAlign: "center",
        }}
      >
        <Card.Title>
          <strong>{title}</strong>
        </Card.Title>
        <Card.Text as="div" className="py-3 ">
          {content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Blog;
