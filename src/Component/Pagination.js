import { Pagination, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page }) => {
  return (
    pages > 1 && (
      <Row className='pagination' >
        <Pagination className="d-flex justify-content-center">
        <LinkContainer
            key={Number(page) -1}
            to={`/blog/${Number(page) - 1}`}
          >
            <Pagination.Prev  active={Number(page) - 1 === page} />
            
          </LinkContainer>
          {[...Array(pages).keys()].map((x) => (
            
            <LinkContainer key={x + 1} to={`/blog/${x + 1}`}>
              <Pagination.Item>{x + 1}</Pagination.Item>
            </LinkContainer>
          ))}

          <LinkContainer
            key={Number(page) + 1}
            to={`/blog/${Number(page) + 1}`}
          >
            <Pagination.Next active={Number(page) + 1 === page} />
            
          </LinkContainer>
         
        </Pagination>
      </Row>
    )
  );
};

export default Paginate;
