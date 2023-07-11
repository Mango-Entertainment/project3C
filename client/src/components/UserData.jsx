import React from "react";

const UserData = ({data}) => {
  console.log("user", data);
  let date = new Date(data.createdAt);
  return (
    <React.Fragment>
      <div>{data.firstName}</div>
      <div>{data.lastName}</div>
      <div className="col-span-2">{data.cardNumber}</div>
      <div>
        {data.expirationMonth}/{data.expirationYear}
      </div>
      <div>{data.cvcNumber}</div>
      <div>{data.cardProvider}</div>
      <div>{date.toLocaleDateString()}</div>
    </React.Fragment>
  );
};

export default UserData;
