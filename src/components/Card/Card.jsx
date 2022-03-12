import "./Card.scss";

const Card = ({ card }) => {
  return (
    <a className="Card" href={card.url}>
      <div
        className="Card__img"
        style={{ backgroundImage: `url(${card.img})` }}
      ></div>
      <div className="Card__title">{card.title}</div>
    </a>
  );
};

export default Card;
