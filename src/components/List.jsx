function List({ personToBeGifted }) {
  return (
    <ul>
      {personToBeGifted.ideas.map((idea) => (
        <li>{idea}</li>
      ))}
    </ul>
  );
}

export default List;
