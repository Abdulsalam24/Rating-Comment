import React, { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedstat">
      <p>({feedback.length}) Reviews</p>
      <p>Average Rating ({isNaN(average) ? 0 : average})</p>
    </div>
  );
}

export default FeedbackStats;
