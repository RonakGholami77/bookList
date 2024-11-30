import React from "react";

function Book(props) {
  const { id, title, author, year } = props;
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{author}</td>
      <td>{year}</td>
    </tr>
  );
}

export default Book;
