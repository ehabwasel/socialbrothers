import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/postActions";
import Blog from "../component/BlogCard";
import Message from "../component/Message";
import Loader from "../component/Loader";
import Paginate from "../component/Pagination";

const BlogScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  useEffect(() => {
    dispatch(listPosts(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div className="blog-list-container">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="  d-flex justify-content-center ">
          <Col
            lg={10}
            style={{ margin: "50px 10px 50px 0px", backgroundColor: "white" }}
            md={10}
            xl={10}
            sm={10}
          >
            <Row
              sm={2}
              md={3}
              lg={5}
              xl={5}
              className="d-flex justify-content-center "
            >
              {posts &&
                posts.length &&
                posts.map((post) => <Blog key={post.id} post={post} />)}
            </Row>
            <div>
              <Paginate pages={10} page={pageNumber} />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default BlogScreen;
