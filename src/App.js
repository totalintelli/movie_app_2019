import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "http://www.maangchi.com/wp-content/uploads/2014/06/Kimchi_f.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "http://foodkoreaguide.com/wp-content/uploads/2016/03/Food-Korea-Guide-Aged-Pork-Belly-%EC%88%99%EC%84%B1%EC%82%BC%EA%B2%B9%EC%82%B4.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580_960_720.jpg",
    rating: 3
  },
  {
    id: 4,
    name: "Kimbap",
    image:
      "http://recipe.ezmember.co.kr/cache/recipe/2016/06/29/e83ce1d994ff9b5ffcd1981c8971119d1.jpg",
    rating: 3.5
  },
  {
    id: 5,
    name: "Jokbal",
    image:
      "https://curationblog.files.wordpress.com/2014/09/e18489e185b3e1848fe185b3e18485e185b5e186abe18489e185a3e186ba-2014-09-27-e1848be185a9e18492e185ae-11-21-54-e18487e185a9e186a8e18489e185a1.jpg",
    rating: 5
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
