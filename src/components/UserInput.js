import React, { useState } from "react";
import Card from "./Card";
import styles from "./UserInput.module.css";
import Button from "./Button";
import ErrorModule from "./ErrorModule";

const UserInput = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length < 3 || +enteredUserAge < 1) {
      setError({
        title:"Invalid Input",
        message:"Username must contain 3 or more character and age can`t equal to 0"
    });
      return;
    }
    console.log(enteredUserName, enteredUserAge);
    props.onAddUsers(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModule onDeleteError={errorHandler} title={error.title} message={error.message}/>}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={userAgeChangeHandler}
            value={enteredUserAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
