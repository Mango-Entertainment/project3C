import React, {useEffect, useState} from "react";
import UserData from "./UserData";

const DataView = () => {
  const [userData, setUserData] = useState([]);
  const [firstSorted, setFirstSorted] = useState(false);
  const [lastSorted, setLastSorted] = useState(false);
  const [numberSorted, setNumberSorted] = useState(false);
  const [providerSorted, setProviderSorted] = useState(false);
  const [subDateSorted, setSubDateSorted] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:8080/api/userData");
      const data = await res.json();
      setUserData(data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (firstSorted) {
      sortFirstName();
      setFirstSorted(false);
    }
    if (lastSorted) {
      sortLastName();
      setLastSorted(false);
    }
    if (numberSorted) {
      sortCardNumber();
      setNumberSorted(false);
    }
    if (providerSorted) {
      sortCardProvider();
      setProviderSorted(false);
    }
    if (subDateSorted) {
      sortSubmittedDate();
      setSubDateSorted(false);
    }
  }, [firstSorted, lastSorted, numberSorted, providerSorted, subDateSorted]);

  const sortFirstName = () => {
    setUserData(
      userData.sort((a, b) => {
        let keyA = a.firstName.toLowerCase();
        let keyB = b.firstName.toLowerCase();
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
      })
    );
  };

  const sortLastName = () => {
    setUserData(
      userData.sort((a, b) => {
        let keyA = a.lastName.toLowerCase();
        let keyB = b.lastName.toLowerCase();
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
      })
    );
  };

  const sortCardNumber = () => {
    setUserData(
      userData.sort((a, b) => {
        let keyA = a.cardNumber;
        let keyB = b.cardNumber;
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
      })
    );
  };

  const sortCardProvider = () => {
    setUserData(
      userData.sort((a, b) => {
        let keyA = a.cardProvider.toLowerCase();
        let keyB = b.cardProvider.toLowerCase();
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
      })
    );
  };

  const sortSubmittedDate = () => {
    setUserData(
      userData.sort((a, b) => {
        let keyA = a.createdAt;
        let keyB = b.createdAt;
        if (keyA < keyB) {
          return -1;
        }
        if (keyA > keyB) {
          return 1;
        }
      })
    );
  };

  return (
    <div className="grid grid-cols-7 justify-items-center	">
      <div className="cursor-pointer" onClick={() => setFirstSorted(true)}>
        First Name
      </div>
      <div className="cursor-pointer" onClick={() => setLastSorted(true)}>
        Last Name
      </div>
      <div className="cursor-pointer" onClick={() => setNumberSorted(true)}>
        Credit Card Number
      </div>
      <div>Expiration</div>
      <div>CVC</div>
      <div className="cursor-pointer" onClick={() => setProviderSorted(true)}>
        Credit Card Provider
      </div>
      <div className="cursor-pointer" onClick={() => setSubDateSorted(true)}>
        Date Submitted
      </div>

      {userData
        ? userData.map((user) => {
            return <UserData key={user._id} data={{...user}} />;
          })
        : null}
    </div>
  );
};

export default DataView;
