import React from 'react';

function AuthorCard(props) {
  return (
    <div className="col-4">
      <a href="#" className="card">
        <div className="image">
          <img className="card-img-top img-fluid" src={props.imageUrl} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{props.first_name + " " + props.last_name}</span>
          </h5>
          <small className="card-text">{props.books.length} books</small>
        </div>
      </a>
    </div>
  );
}

export default AuthorCard;
