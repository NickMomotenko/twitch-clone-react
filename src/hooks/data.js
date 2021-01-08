import React, { useState } from "react";

import icon_1 from "../assets/top-games/1.png";
import icon_2 from "../assets/top-games/2.png";
import icon_3 from "../assets/top-games/3.png";
import icon_4 from "../assets/top-games/4.png";
import icon_5 from "../assets/top-games/5.png";
import icon_6 from "../assets/top-games/6.png";
import icon_7 from "../assets/top-games/7.png";
import icon_8 from "../assets/top-games/8.png";
import icon_9 from "../assets/top-games/9.png";

import fortineIcon from "../assets/top-games/fortnite.png";
import lolIcon from "../assets/top-games/lol.png";
import pubgIcon from "../assets/top-games/pubg.png";

const generateID = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const generateViewerLenght = (max = 1000) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const useData = () => {
  const [topGames, setTopGames] = useState([
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_1,
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_2,
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_3,
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_4,
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_5,
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_6,
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_7,
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_8,
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: icon_9,
    },
  ]);

  const [recommendedGames, setRecommendedGames] = useState([
    {
      id: generateID(),
      title: "Fornite",
      viewer: generateViewerLenght(),
      icon: fortineIcon,
      category: ["Shooter", "Battle royal"],
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: lolIcon,
      category: ["Moba"],
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: pubgIcon,
      category: ["Shooter"],
    },
    {
      id: generateID(),
      title: "Call of Duty: Black Ops",
      viewer: generateViewerLenght(),
      icon: fortineIcon,
      category: ["Shooter", "Battle royal"],
    },
    
  ]);

  return { topGames, recommendedGames };
};
