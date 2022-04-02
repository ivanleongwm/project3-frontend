import { useState } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../utils/utils";

const url = urlcat(BACKEND, "/api/holidays");

function Create() {
  const [name, setName] = useState("");
  const [likes, setLikes] = useState(0);
  const [error, setError] =  useState("")

  const createHoliday = (holiday) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(holiday),
    })
      .then((response) => response.json())
      .then((data) => {
          if (data.error) {
              setError(data.error)
          }
      }).catch(error => console.log(error) );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const holiday = { name, likes }
    createHoliday(holiday)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        Likes:
        <input
          type="number"
          name="likes"
          value={likes}
          onChange={(event) => setLikes(event.target.value)}
        />
        <p>{error}</p>
        <br />
        <button>Create</button>
      </form>
    </>
  );
}

export default Create;
