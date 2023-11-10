import React from "react";

const Service = () => {
  return (
    <div className="bg-sky-500">
      <video autoPlay loop muted>
        <source src="../../video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Service;
