import { Spinner } from 'react-bootstrap';

const Loading = () => {
	return <Spinner animation="border" role="status" variant="dark">
      <span className="sr-only">Loading...</span>
   </Spinner>;
};

export default Loading;
