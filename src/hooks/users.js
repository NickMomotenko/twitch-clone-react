import React, { useState, useEffect } from "react";

import { generateID, getRandomNumber } from "../utils";

export const useUsersData = () => {
  const [data, setData] = useState([]);

  const count = 5;
  const url = `https://randomuser.me/api/?results=${count}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setData([
          ...data.results.map((item) => ({
            ...item,
            id: generateID(),
            online: true,
            viewer: getRandomNumber(1000),
            category: "URL",
          })),
        ])
      );
  }, []);

  return { data };
};
