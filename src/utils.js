import React from "react";

export const generateUniqColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const generateID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const getRandomNumber = (max) =>{
  return Math.floor(Math.random() * Math.floor(max))
}