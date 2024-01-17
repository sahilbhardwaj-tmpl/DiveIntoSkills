import React from "react";
import "./CardBuilderStyles.css";
function Card(props) {
  return (
    <div className="card">
      <div className="image_container">
        <img src={props.img} alt={"blog Image"} className="card-image" />
        <div class="category-text">{props.category}</div>
      </div>

      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <div className="card-footer">
          <div className="card-data">{props.date}</div>
          <div className="card-author">{props.author}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
