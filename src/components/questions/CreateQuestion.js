import React, { useState } from 'react';
import axios from 'axios';

const CreateQuestion = () => {
  const [body, setBody] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(body, instructions);
    await axios.post('/api/questions', {
      body,
      instructions
    });
    setBody("");
    setInstructions("");
  }

  return (
    <div className= "question-create">
      <div className="question_create_header">
        <h2>Create A New Question</h2>
      </div>
      <form className="question-create_input-body">
        <label>
          Please enter a question:
        </label>
        <input
          className="question-create_input-body"
          type="text"
          value={body}
          onChange={evt => setBody(evt.target.value)}
        />
        <label>
          Please enter additional instructions:
        </label>
        <input
          className="question-create_input-instructions"
          type="text"
          value={instructions}
          onChange={evt => setInstructions(evt.target.value)}
        />
        <input
          className="question-create_input-submit"
          type="submit"
          value="Add My Question"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default CreateQuestion;
