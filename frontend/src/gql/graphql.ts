/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: any;
  ByteArray: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  /** The `Short` scalar type represents non-fractional signed whole 16-bit numeric values. Short can represent values between -(2^15) and 2^15 - 1. */
  Short: any;
  /** IEEE 754 32 bit float */
  Single: any;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

/** Input type for creating Question */
export type CreateQuestionInput = {
  /** Input for field correct_answer on type CreateQuestionInput */
  correct_answer: Scalars['String'];
  /** Input for field id on type CreateQuestionInput */
  id: Scalars['String'];
  /** Input for field incorrect_answers on type CreateQuestionInput */
  incorrect_answers: Array<Scalars['String']>;
  /** Input for field question on type CreateQuestionInput */
  question: Scalars['String'];
};

export type DefaultValue = {
  Boolean?: InputMaybe<Scalars['Boolean']>;
  Byte?: InputMaybe<Scalars['Byte']>;
  ByteArray?: InputMaybe<Scalars['ByteArray']>;
  DateTime?: InputMaybe<Scalars['DateTime']>;
  Decimal?: InputMaybe<Scalars['Decimal']>;
  Float?: InputMaybe<Scalars['Float']>;
  Int?: InputMaybe<Scalars['Int']>;
  Long?: InputMaybe<Scalars['Long']>;
  Short?: InputMaybe<Scalars['Short']>;
  Single?: InputMaybe<Scalars['Single']>;
  String?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new Question */
  createQuestion?: Maybe<Question>;
  /** Delete a Question */
  deleteQuestion?: Maybe<Question>;
  /** Updates a Question */
  updateQuestion?: Maybe<Question>;
};


export type MutationCreateQuestionArgs = {
  item: CreateQuestionInput;
};


export type MutationDeleteQuestionArgs = {
  _partitionKeyValue: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationUpdateQuestionArgs = {
  _partitionKeyValue: Scalars['String'];
  id: Scalars['ID'];
  item: UpdateQuestionInput;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Query = {
  __typename?: 'Query';
  /** Get a Question from the database by its ID/primary key */
  question_by_pk?: Maybe<Question>;
  /** Get a list of all the Question items from the database */
  questions: QuestionConnection;
};


export type QueryQuestion_By_PkArgs = {
  _partitionKeyValue?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryQuestionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<QuestionFilterInput>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<QuestionOrderByInput>;
};

export type Question = {
  __typename?: 'Question';
  correct_answer: Scalars['String'];
  id: Scalars['String'];
  incorrect_answers: Array<Scalars['String']>;
  question: Scalars['String'];
};

/** The return object from a filter query that supports a pagination token for paging through results */
export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  /** A pagination token to provide to subsequent pages of a query */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates if there are more pages of items to return */
  hasNextPage: Scalars['Boolean'];
  /** The list of items that matched the filter */
  items: Array<Question>;
};

/** Filter input for Question GraphQL type */
export type QuestionFilterInput = {
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<QuestionFilterInput>>>;
  /** Filter options for correct_answer */
  correct_answer?: InputMaybe<StringFilterInput>;
  /** Filter options for id */
  id?: InputMaybe<StringFilterInput>;
  /** Filter options for incorrect_answers */
  incorrect_answers?: InputMaybe<StringFilterInput>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<QuestionFilterInput>>>;
  /** Filter options for question */
  question?: InputMaybe<StringFilterInput>;
};

/** Order by input for Question GraphQL type */
export type QuestionOrderByInput = {
  /** Conditions to be treated as AND operations */
  and?: InputMaybe<Array<InputMaybe<QuestionOrderByInput>>>;
  /** Order by options for correct_answer */
  correct_answer?: InputMaybe<OrderBy>;
  /** Order by options for id */
  id?: InputMaybe<OrderBy>;
  /** Order by options for incorrect_answers */
  incorrect_answers?: InputMaybe<OrderBy>;
  /** Conditions to be treated as OR operations */
  or?: InputMaybe<Array<InputMaybe<QuestionOrderByInput>>>;
  /** Order by options for question */
  question?: InputMaybe<OrderBy>;
};

/** Input type for adding String filters */
export type StringFilterInput = {
  /** Case Insensitive */
  caseInsensitive?: InputMaybe<Scalars['Boolean']>;
  /** Contains */
  contains?: InputMaybe<Scalars['String']>;
  /** Ends With */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Equals */
  eq?: InputMaybe<Scalars['String']>;
  /** Not null test */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Not Equals */
  neq?: InputMaybe<Scalars['String']>;
  /** Not Contains */
  notContains?: InputMaybe<Scalars['String']>;
  /** Starts With */
  startsWith?: InputMaybe<Scalars['String']>;
};

/** Input type for updating Question */
export type UpdateQuestionInput = {
  /** Input for field correct_answer on type UpdateQuestionInput */
  correct_answer: Scalars['String'];
  /** Input for field id on type UpdateQuestionInput */
  id: Scalars['String'];
  /** Input for field incorrect_answers on type UpdateQuestionInput */
  incorrect_answers: Array<Scalars['String']>;
  /** Input for field question on type UpdateQuestionInput */
  question: Scalars['String'];
};

export type GetQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuestionsQuery = { __typename?: 'Query', questions: { __typename?: 'QuestionConnection', items: Array<{ __typename?: 'Question', id: string, question: string, correct_answer: string, incorrect_answers: Array<string> }> } };


export const GetQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"correct_answer"}},{"kind":"Field","name":{"kind":"Name","value":"incorrect_answers"}}]}}]}}]}}]} as unknown as DocumentNode<GetQuestionsQuery, GetQuestionsQueryVariables>;