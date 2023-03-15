export const Question = ({
  question,
  answered,
}: {
  question: {
    __typename?: "Question" | undefined;
    id: string;
    question: string;
    answers: string[];
  };
  answered: (questionId: string, answer: string) => void;
}) => {
  return (
    <>
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
        <ul>
          {question.answers.map((answer) => (
            <li key={answer}>
              <label>
                <input
                  type="radio"
                  name={question.id}
                  value={answer}
                  onChange={(e) => answered(question.id, e.target.value)}
                />
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <hr />
    </>
  );
};
