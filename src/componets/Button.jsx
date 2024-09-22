import React from "react";

const Button = ({ name, isBeam = false, btnClass }) => {
  return (
    <button className={`btn ${btnClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
