import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>{greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;