/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({ id, image, name, link }) => {
  return (
    <Link to={`${link}/${id}`}>
      <div className="card">
        <img src={image} alt="" />

        <b className="location-name">{name}</b>
      </div>
    </Link>
  );
};
