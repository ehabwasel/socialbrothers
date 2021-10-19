import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/postActions";
import Blog from "../component/BlogCard";
import Message from "../component/Message";
import Loader from "../component/Loader";
import MessageForm from "../component/Form";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;
  const [loadMore, setLoadMore] = useState(false);

  const loadMoreHandler = () => {
    setLoadMore(!loadMore);
  };
  useEffect(() => {
    dispatch(listPosts(1));
  }, [dispatch]);

  return (
    <div className="blog-list-container">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row
          className="  d-flex justify-content-center "
          style={{ margin: "0px" }}
        >
          <Col
            lg={5}
            style={{ margin: "50px 10px 50px 0px" }}
            md={10}
            xl={4}
            sm={10}
          >
            <Row
              className="  d-flex justify-content-center  "
              md={12}
              xl={12}
              sm={10}
            >
              <MessageForm />
            </Row>
          </Col>
          <Col
            style={{ margin: "50px 0px 50px 10px", backgroundColor: "white" }}
            lg={6}
            md={10}
            xl={5}
            sm={10}
          >
            <Row
              xl={2}
              lg={2}
              className={
                loadMore
                  ? "blogRowLoadMore d-flex justify-content-center "
                  : "blogRowLoadLess  d-flex justify-content-center"
              }
            >
              {posts && posts.length && !loadMore
                ? posts
                    .slice(6)
                    .map((post) => <Blog key={post.id} post={post} />)
                : posts.map((post) => <Blog key={post.id} post={post} />)}
            </Row>
            <Row className=" mt-2 d-flex justify-content-center ">
              <Button
                style={{
                  backgroundColor: "coral",
                  width: "200px",
                }}
                className=" rounded-pill mb-3"
                onClick={loadMoreHandler}
              >
                {loadMore ? "Laat Minder Zien" : "Meer Laden"}
              </Button>
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
