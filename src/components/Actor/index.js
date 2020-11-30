import React from "react";
import PropTypes from "prop-types";
import "./style.css";

//local imports
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../asserts/no_image.jpg";

const Actor = ({ actor }) => {
  const { cast_id: id, name, profile_path, charater } = actor;
  return (
    <div key={id} className="actor-card">
      <img
        src={
          profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
            : NoImage
        }
        alt={`${name}`}
      />
      <section className="card-info">
        <h3>
          <b>{name}</b>
        </h3>
        <p>
          starred as <span>{charater}</span>
        </p>
      </section>
    </div>
  );
};

Actor.propTypes = {
  actor: PropTypes.object,
};

export default Actor;
