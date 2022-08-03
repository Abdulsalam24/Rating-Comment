import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "./context/FeedbackContext";
import FeedRating from "./FeedRating";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { feedbackAdd, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setDisabled(false);
    }
  }, [feedbackEdit]);

  const handleInputChange = (e) => {
    if (text === "") {
      setDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("text is less than 10 character");
      setDisabled(true);
    } else {
      setMessage(null);
      setDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const feedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, feedback);
        feedbackEdit.edit = false;
      } else {
        feedbackAdd(feedback);
      }
      setText("");
    }
  };

  return (
    <Card reverse={true}>
      <form onSubmit={handleSubmit}>
        <h2>What would you rate this website</h2>
        <FeedRating select={(rate) => setRating(rate)} />

        <div className="input">
          <input
            type="text"
            placeholder="Enter you review"
            onChange={handleInputChange}
            value={text}
          />

          <Button onClick={handleSubmit} type="submit" isDisabled={disabled}>
            {feedbackEdit.edit ? "edit" : "send"}
          </Button>
        </div>
        {message && <p> {message}</p>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
