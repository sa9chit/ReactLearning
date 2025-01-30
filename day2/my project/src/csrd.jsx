function Card(prop) {
  
    return (
      <div className="card">
        <img src={prop.imagee} alt="Thumbnail" />
        <div className="cardData">
          <span className="name">{prop.rating}</span>
          <span className="rating">{prop.jobRole}</span>
          <span className="detail">{prop.resName}</span>
        </div>
      </div>
    );
  }
  export default Card