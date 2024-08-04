import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? '★' : '☆');
  }

  return (
    <div className="star-rating">
      {stars.map((star, index) => (
        <span key={index} className="star">{star}</span>
      ))}
    </div>
  );
};

export default StarRating;
