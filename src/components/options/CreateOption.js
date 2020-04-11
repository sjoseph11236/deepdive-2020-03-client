import React, { useState } from 'react';
import { useInput } from '../../hooks/useInput'
import axios from 'axios';

const CreateOption = () => {
  // const [body, setBody] = useState("");
  // const [instructions, setInstructions] = useState("");
  const { value: body, bind: bindBody, reset: resetBody } = useInput('');
  const { value: imageUrl, bind: bindImageUrl, reset: resetImageUrl } = useInput('');
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(body, imageUrl);
    // await axios.post('/api/questions', {
    //   body,
    //   instructions
    // });
    // setBody("");
    // setInstructions("");
    resetBody();
    resetImageUrl();
  }

  return (
    <div className= "question-create">
      <div className="question_create_header">
        <h2>Create A New Option</h2>
      </div>
      <form className="question-create_input-body">
        <label>
          Please enter a option:
        </label>
        <input
          className="question-create_input-body"
          type="text"
          {...bindBody}
        />
        <label>
          Please enter imageUrl:
        </label>
        <input
          className="question-create_input-instructions"
          type="text"
          {...bindImageUrl}
        />
        <input
          className="question-create_input-submit"
          type="submit"
          value="Add My Option"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default CreateOption;