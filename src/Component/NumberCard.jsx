import React from "react";

const styley = {
  backgroundColor: "#025043",
  borderRadius: "50%",
  width: 150,
  height: 150,
  fontSize: "90px",
  fontWeight: "bold",
  color: "#fff",
  margin: 10
};

function NumCard(props) {
  return (
    <div className="text-center" style={styley}>
      {props.number}
    </div>
  );
}

export default NumCard;
