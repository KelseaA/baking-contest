import "./Nav.scss";

const Nav = () => {
  return (
    <header className="Nav">
      <div className="Nav__list">
        <a className="Nav__link" href="#details">
          Details
        </a>
        <a className="Nav__link" href="#inspiration">
          Inspiration
        </a>
        <a className="Nav__link" href="#recipes">
          Recipes
        </a>
        <a className="Nav__link" href="#faq">
          FAQ
        </a>
      </div>
    </header>
  );
};

export default Nav;
