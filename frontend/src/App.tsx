import "./App.css";
import { useState } from "react";
import { Question } from "./Question";
import { useQuestions } from "./useQuestions";

function App() {
  const { questions, loading } = useQuestions();
  const [playerAnswers, setPlayerAnswers] = useState<Record<string, string>>(
    {}
  );
  const [message, setMessage] = useState<string>("");

  const answered = (questionId: string, answer: string) =>
    setPlayerAnswers((playerAnswers) => ({
      ...playerAnswers,
      [questionId]: answer,
    }));

  if (loading || !questions) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <div className="App">
        {questions.map((question) => (
          <Question question={question} answered={answered} key={question.id} />
        ))}
      </div>
      <div>
        <button
          disabled={Object.keys(playerAnswers).length !== questions.length}
          onClick={() => {
            let correctCount = 0;
            for (const question of questions) {
              if (playerAnswers[question.id] === question.correct_answer) {
                correctCount++;
              }
            }

            setMessage(
              `You got ${correctCount} out of ${questions.length} correct!`
            );
          }}
        >
          Check answers
        </button>
      </div>
      <div>{message}</div>
    </>
  );
}

export default App;
