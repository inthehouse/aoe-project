import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      bruh how did you end up here??????????????????????????????
      <button onClick={() => navigate("/")}> RUN HOME JACK!!</button>
    </div>
  );
};

export default NotFoundPage;
