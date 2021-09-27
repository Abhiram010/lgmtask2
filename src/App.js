import Card from "./components/Card";
import React, { useState, useEffect } from "react";
// import axios from "axios";
function App() {
  const [users, setusers] = useState(undefined);
  const [isClick, setClick] = useState(false);
  const fetchUsers = (res) => {
    setClick(res);
  };
  const loader = (result) => {
    if (result) {
      return null;
    }
  };

  useEffect(() => {
    if (isClick) {
      setTimeout(function () {
        fetch("https://reqres.in/api/users?page=1", {method: "get",})
        .then((res) => res.json())
          .then((result) => { setusers(result.data);});
      }, 500);
    }
  }, [isClick]);
  return (
    <>
      <div className="App">
        <button onClick={fetchUsers}> Get the Api</button>
        {users ? (
          <div className="container">
            {users.map((user) => {
              return (
                <Card
                  key={user.id}
                  lname={user.first_name}
                  fname={user.last_name}
                  email={user.email}
                  avatar={user.avatar}
                />
              );
            })}
          </div>
        ) : (
          loader(isClick)
        )}
      </div>
    </>
  );
}

export default App;
