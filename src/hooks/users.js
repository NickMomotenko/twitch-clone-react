// https://randomuser.me/api/?results=5000

import React, { useState, useEffect } from "react";

const fetchedUsers = () => {};

export const useUsersData = () => {
  const [data, setData] = useState([]);

  const count = 4;
  const url = `https://randomuser.me/api/?results=${count}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return { data };
};
