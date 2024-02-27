import React from 'react';

interface LoadMoreButtonProps {
  setStart: React.Dispatch<React.SetStateAction<number>>;
  setEnd: React.Dispatch<React.SetStateAction<number>>;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ setStart, setEnd }) => {
  const handleClick = () => {
    setStart(prev => prev + 5);
    setEnd(prev => prev + 5);
  };

  return (
    <button  className="load-more-button button-font" onClick={handleClick}>Load More</button>
  );
};

export default LoadMoreButton;
