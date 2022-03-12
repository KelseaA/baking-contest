import "./Details.scss";

const Details = () => {
  return (
    <section className="Details">
      <div className="Details__img"></div>
      <div className="Details__text">
        <h3>Details</h3>
        <p>
          Gather your family, friends, and furbabies for some baking fun. We'll
          be making and decorating cupcakes inspired by whatever spring means to
          you. That could be flowers, cute critters, pastel swirls, (I want some
          masculine options too lol) etc.
        </p>
        <p>
          To enter the contest, post your best pic of your decorated cupcakes in
          the #baking-contest slack channel by EOD April 12th. There will be X
          (TBD) number of categories and the winner of each will receive X (TBD)
          amount of perk points!
        </p>
        <p>
          Feel free to post recipes and pics of your behind the scenes baking in
          the #general slack channel for all to enjoy!
        </p>
      </div>
    </section>
  );
};

export default Details;
