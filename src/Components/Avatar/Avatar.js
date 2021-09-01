import React from "react";

// import defaultImage from "../../assets/images/user.png";

const Avatar = ({ size, userStatus, image, onClick }) => {
  return (
    <div className="ava-container">
      <img
        onClick={onClick}
        className={`${size === "small" ? "small" : "large"} `}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4zGSr25cTfr__JnNBlxju18g9geM7uir_g&usqp=CAU"
        alt="dp"
      />
      <i
        className={`${size === "small" && "small"} ${
          userStatus && userStatus
        }`}/>
    </div>
  );
};

export default Avatar;
