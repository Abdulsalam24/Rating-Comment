import React, { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";

function Feedback() {
  const { isLoading, feedback } = useContext(FeedbackContext);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="feedback">
          {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default Feedback;
