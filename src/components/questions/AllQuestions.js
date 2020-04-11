import React from 'react';
import axios from 'axios';

const AllQuestions = () => {
  // state in our functional component, with React hooks
  const [questions, setQuestions] = React.useState([]);

  const getQuestions = async () => {
    const { data } = await axios.get("/api/questions");
    setQuestions(data);
  }

  React.useEffect(() => {
    getQuestions();
  }, []);
  console.log('questions >>>', questions);

  return (
    <div className="question">
      <header className="question_header">
        <h2>Questions</h2>
      </header>
      <div>
        {questions.map(question =>
          <div className="question_item" key={question.id}>
            <div className="question_item-body">
              {question.body} {question.id}
            </div>
            <div className="question_item-instructions">
              {question.instructions}
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default AllQuestions;
