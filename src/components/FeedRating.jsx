import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedRating({ select }) {
  const [current, setCurrent] = useState(1);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setCurrent(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleCurrent = (e) => {
    setCurrent(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="feed-rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="rating1"
          value="1"
          checked={current === 1}
          onChange={handleCurrent}
        />
        <label htmlFor="rating1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="2"
          id="rating2"
          checked={current === 2}
          onChange={handleCurrent}
        />
        <label htmlFor="rating2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="3"
          id="rating3"
          checked={current === 3}
          onChange={handleCurrent}
        />
        <label htmlFor="rating3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="4"
          id="rating4"
          checked={current === 4}
          onChange={handleCurrent}
        />
        <label htmlFor="rating4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="5"
          id="rating5"
          checked={current === 5}
          onChange={handleCurrent}
        />
        <label htmlFor="rating5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="6"
          id="rating6"
          checked={current === 6}
          onChange={handleCurrent}
        />
        <label htmlFor="rating6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="7"
          id="rating7"
          checked={current === 7}
          onChange={handleCurrent}
        />
        <label htmlFor="rating7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="8"
          id="rating8"
          checked={current === 8}
          onChange={handleCurrent}
        />
        <label htmlFor="rating8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="9"
          id="rating9"
          checked={current === 9}
          onChange={handleCurrent}
        />
        <label htmlFor="rating9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          value="10"
          id="rating10"
          checked={current === 10}
          onChange={handleCurrent}
        />
        <label htmlFor="rating10">10</label>
      </li>
    </ul>
  );
}

export default FeedRating;
