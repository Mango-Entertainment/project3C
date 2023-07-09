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
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Credit Card Number</th>
            <th>Expiration Month</th>
            <th>Expiration Year</th>
            <th>CVC</th>
            <th>Credit Card Provider</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          {userData
            ? userData.map((user) => {
                console.log("user", user);
                let date = new Date(user.createdAt);
                return (
                  <tr key={user._id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.cardNumber}</td>
                    <td>{user.expirationMonth}</td>
                    <td>{user.expirationYear}</td>
                    <td>{user.cvcNumber}</td>
                    <td>{user.cardProvider}</td>
                    <td>{date.toLocaleDateString()}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default DataView;
