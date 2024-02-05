import React from "react";

function Star(props) {
  return (
    <svg
      width={53}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.5 0l6.174 19.002h19.98L36.49 30.746l6.174 19.002L26.5 38.004 10.336 49.748l6.174-19.002L.346 19.002h19.98L26.5 0z"
        fill="#F400EE"
      />
    </svg>
  );
}

export default Star;