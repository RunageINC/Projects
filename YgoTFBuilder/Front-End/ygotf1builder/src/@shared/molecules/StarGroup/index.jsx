/* eslint-disable react/prop-types */
import { StarLevel } from "../../atoms/StarLevel";

import "./index.css";

export const StarGroup = ({ number }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < number; i++) {
      stars.push(<StarLevel />);
    }
    return stars;
  };

  return <div className="star-group">{renderStars()}</div>;
};
