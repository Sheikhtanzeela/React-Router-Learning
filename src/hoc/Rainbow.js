import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "pink", "orange", "green", "blue", "yellow"];
  const randcolor = colors[Math.floor(Math.random() * 5)];

  const className = randcolor + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
