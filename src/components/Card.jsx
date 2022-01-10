import List from './List';

function Card({ personToBeGifted }) {
  return (
    <div>
      <p>{personToBeGifted.name}</p>
      <List personToBeGifted={personToBeGifted} />
    </div>
  );
}

export default Card;
