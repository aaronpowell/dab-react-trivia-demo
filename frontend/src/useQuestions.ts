import { graphql } from "./gql/gql";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { arrayRandomizer } from "./arrayRandomizer";
import { GetQuestionsQuery } from "./gql/graphql";

const getQuestionsDocument = graphql(/* GraphQL */ `
  query getQuestions {
    questions(first: 10) {
      items {
        id
        question
        correct_answer
        incorrect_answers
      }
    }
  }
`);

export type QuestionModel = Omit<
  GetQuestionsQuery["questions"]["items"][0],
  "incorrect_answers"
> & {
  answers: string[];
};

export const useQuestions = () => {
  const { data, loading } = useQuery(getQuestionsDocument);
  const [questions, setQuestions] = useState<QuestionModel[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (data) {
      setQuestions(
        data?.questions.items.map((question) => ({
          id: question.id,
          question: question.question,
          correct_answer: question.correct_answer,
          answers: arrayRandomizer(
            question.incorrect_answers.concat(question.correct_answer)
          ),
        }))
      );
    }
  }, [data]);

  return { questions, loading };
};
