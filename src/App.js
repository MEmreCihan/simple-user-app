import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };
  return (
    <div>
      <UserInput onAddUsers={addUsersHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
