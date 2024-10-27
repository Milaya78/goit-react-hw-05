import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      NotFoundPage
      <div>
        Back to the <Link to="/">Home</Link> page.
      </div>
    </div>
  );
};

export default NotFoundPage;
