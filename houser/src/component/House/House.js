import React from "react";
import "./House.css";
import deleteLogo from "../../assets/delete_button.png";

// export default function House() {
//   return (
//     <div>
//       <h1> House</h1>
//     </div>
//   );
// }

const House = props => {
  // console.log(props);
  return (
    <div className="house">
      <div className="house_detail_box">
        <img className="house_img" src={props.img} alt="house pic" />
      </div>
      <div className="house_detail_box">
        <p> Property Name: {props.propertyName}</p>
        <p> Address: {props.address}</p>
        <p> State: {props.state}</p>
        <p> Zip: {props.zip}</p>
      </div>
      <div className="house_detail_box">
        <p> Monthly Mortgage: {props.mortgage}</p>
        <p> Desired Rent: {props.rent}</p>
      </div>
      <button
        className="house_delete_btn"
        onClick={() => props.deleteHouse(props.id)}
      >
        <img src={deleteLogo} alt="delete" />
      </button>
    </div>
  );
};

export default House;
