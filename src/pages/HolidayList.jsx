import { useEffect, useState } from "react";
import urlcat from "urlcat";
import { BACKEND } from "../utils/utils";

function HolidayList() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch(urlcat(BACKEND, "/api/holidays/seed"))
      .then((response) => response.json())
      .then((data) => setHolidays(data));
  }, []);

  return (
    <>
      <ul>
        {holidays.map((holiday) => (
          <li key={holiday.id}>
            <a href="#">{holiday.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HolidayList;
