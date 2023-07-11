import React, {useEffect, useState} from "react";

const DataView = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8080/api/userData");
      const data = await res.json();
      setUserData(data);
    };
    getData();
  }, []);
  return (
    <div className="grid grid-cols-7 justify-items-center	">
      <div>First Name</div>
      <div>Last Name</div>
      <div>Credit Card Number</div>
      <div>Expiration</div>
      <div>CVC</div>
      <div>Credit Card Provider</div>
      <div>Date Submitted</div>

      {userData
        ? userData.map((user) => {
            console.log("user", user);
            let date = new Date(user.createdAt);
            return (
              <React.Fragment key={user._id}>
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
                <div>{user.cardNumber}</div>
                <div>
                  {user.expirationMonth}/{user.expirationYear}
                </div>
                <div>{user.cvcNumber}</div>
                <div>{user.cardProvider}</div>
                <div>{date.toLocaleDateString()}</div>
              </React.Fragment>
            );
          })
        : null}
    </div>
  );
};

export default DataView;
