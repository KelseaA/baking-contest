import "./Details.scss";

const Details = () => {
  return (
    <section className="Details" id="details">
      <div className="Details__wrapper container">
        <div className="Details__img"></div>
        <div className="Details__text">
          <h3>Details</h3>
          <p>
            Gather your family, friends, and furbabies for some baking fun.
            We'll be making and decorating cupcakes inspired by whatever spring
            means to you. That could be flowers, cute critters, pastel swirls,
            etc.
          </p>
          <h5 className="Details__subtitle">How to Enter</h5>

          <p className="Details__sub">
            To enter the contest, post your best pic of your decorated cupcakes
            in the #baking-contest slack channel by EOD April 12th. There will
            be 3 categories and the winner of each will win PERK points!
          </p>

          <p>
            Feel free to post recipes and pics of your behind the scenes baking
            in the #general slack channel for all to enjoy!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
