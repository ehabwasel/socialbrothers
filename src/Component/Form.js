import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { createPost } from "../actions/postActions";
import { listCategories } from "../actions/categoryActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader";

const MessageForm = () => {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState();
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const postCreate = useSelector((state) => state.postCreate);
  const { loading, error } = postCreate;

  const categoryList = useSelector((state) => state.categoryList);
  const {
    loading: categoryLoading,
    error: categoryError,
    categories,
  } = categoryList;

  const createPostHandler = (e) => {
    e.preventDefault();
    dispatch(
      createPost({ category_id: categoryId, title: title, content: content })
    );

    if (!loading) {
      setTitle("");
      setCategoryId();
      setContent("");
    }
    alert("Post Succesvol Aangemaakt");
  };

  // const findCategoryId = (e) => {
  //   const selectedCategory = categories.find(
  //     (category) => e.target.value === category.name
  //   );
  //   setCategoryId(selectedCategory.id);
  //   console.log(selectedCategory);
  // };

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Col className="p-5 bg-white " lg={12} md={12} xl={12} sm={12}>
          <h4>Plaats een blog bericht</h4>
          <Form>
            <Form.Group controlId="messageName">
              <Form.Label>Berichtnaam</Form.Label>
              <Form.Control
                type="text"
                placeholder="Geen title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Categorie</Form.Label>
              {categoryLoading ? (
                <Loader />
              ) : categoryError ? (
                <Message variant="danger">{categoryError}</Message>
              ) : (
                <Form.Control
                  as="select"
                  defaultValue="Geen categorie"
                  onChange={(e) =>
                    setCategoryId(e.target.options.selectedIndex)
                  }
                >
                  <option disabled={true}>Geen categorie</option>
                  {categories &&
                    categories.length > 0 &&
                    categories.map((category) => {
                      return (
                        <option key={category.id} id={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                </Form.Control>
              )}
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Header afbeelding</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Bericht</Form.Label>
              <Form.Control
                as="textarea"
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
          <Row className=" mt-3 d-flex justify-content-center">
            <Button
              style={{
                width: "200px",

                backgroundColor: "coral",
              }}
              type="submit"
              onClick={createPostHandler}
              disabled={!title || !categoryId || !content}
              className="button rounded-pill"
            >
              Bericht aanmaken
            </Button>
          </Row>
        </Col>
      )}
    </>
  );
};

export default MessageForm;
