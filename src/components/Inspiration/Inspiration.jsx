// import Masonry from "@mui/lab/Masonry";
import { inspirationImages } from "./inspirationImages";

import "./Inspiration.scss";

const Inspiration = () => {
  return (
    <section className="Inspiration" id="inspiration">
      <h3>Inspiration</h3>
      <p>
        Want some decorating ideas? Check out the pics below for cute spring
        cupcakes.
      </p>
      <div className="Inspiration__images">
        {inspirationImages.map((image, index) => (
          <div
            className="Inspiration__img"
            style={{ backgroundImage: `url(${image})` }}
            key={index}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Inspiration;
