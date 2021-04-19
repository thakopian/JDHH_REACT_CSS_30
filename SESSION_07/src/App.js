import React from "react";
import "./styles.css";

function CommentList({ comments }) {
  return (
    <ul>
      {comments.map(({ text }, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}

export default function App() {
  // ## Array Cardio Day 2
  const [commentId, setCommentId] = React.useState();
  const [commentIdToDelete, setCommentIdToDelete] = React.useState();

  const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 }
  ];
  const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 }
  ];
  const renderPeople = people.map(({ name, year }, index) => (
    <li key={index}>
      Name: {name}, Year: {year}{" "}
    </li>
  ));

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const currentYear = new Date().getFullYear();
  const isAtLeastNineteen = (person) => currentYear - person.year >= 19;
  const isAtLeastOnePersonNineteenOrOlder = people.some(isAtLeastNineteen);

  // Array.constprototype.every() // is everyone 19 or older?
  const isEveryPersonAtLeastNineteen = people.every(isAtLeastNineteen);

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const foundComment =
    comments.find(({ id }) => commentId === id.toString())?.text || "not found";

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const indexOfCommentToDelete = comments.findIndex(
    ({ id }) => commentIdToDelete === id.toString()
  );
  const isThereACommentToDelete = indexOfCommentToDelete !== -1;
  const filteredComments = isThereACommentToDelete
    ? [
        ...comments.slice(0, indexOfCommentToDelete),
        ...comments.slice(indexOfCommentToDelete + 1)
      ]
    : comments;

  return (
    <div>
      <ul>{renderPeople}</ul>
      <h1>is at least one person 19 or older?</h1>
      <p>{isAtLeastOnePersonNineteenOrOlder.toString()}</p>
      <h1>is everyone 19 or older?</h1>
      {isEveryPersonAtLeastNineteen.toString()}
      <h1>Comments</h1>
      <CommentList comments={comments} />
      <h3>Find practice</h3>
      <input
        value={commentId}
        type="text"
        onChange={(e) => setCommentId(e.target.value)}
      />
      <p>{foundComment}</p>
      <h3>Find index practice</h3>
      <input
        value={commentIdToDelete}
        type="text"
        onChange={(e) => setCommentIdToDelete(e.target.value)}
      />
      <CommentList comments={filteredComments} />
    </div>
  );
}
