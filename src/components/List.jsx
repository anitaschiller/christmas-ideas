function List({ personToBeGifted }) {
  return (
    <ul>
      {personToBeGifted.ideas.map((idea, index) => (
        <li key={index}>{idea}</li>
      ))}
    </ul>
  );
}

export default List;
