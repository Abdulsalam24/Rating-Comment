import { useContext } from "react";

import FeedbackContext from "./context/FeedbackContext";
import Card from "./shared/Card";
// import { FaDelete,FaEdit } from "react-icons/Fa";
import {FaEdit , FaTimes} from 'react-icons/fa'

function FeedbackItem({ item }) {
  const { handleDelete, editFeedback } = useContext(FeedbackContext);


  

  return (
    <Card reverse={false}>
      <p className="rating">{item.rating}</p>
      <p>{item.text}</p>
      <br />
      <div className="icons">
        <div onClick={() => handleDelete(item.id)}><FaTimes/></div>
        <div onClick={() => editFeedback(item)}><FaEdit/></div>
      </div>
    </Card>
  );
}

export default FeedbackItem;
