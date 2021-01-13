import { generateID, getRandomNumber } from "../../utils";

import avatarIcon from "../../assets/video/offline.png";
import previewImage from "../../assets/video/offline.png";

const initialState = {
  id: generateID(),
  avatar: avatarIcon,
  fullname: "Nicko Sunnflower",
  chanelInfo: {
    name: "Sunflower chanel",
    followers: 211,
    smallDescription: "Developer && Gamer",
    description: `Hey!)My Name is Nick, I'm a 23-year-old Developer & I also like to play Video games :3
      In my free-time I like to play CS Go & Code some interesting app.
      I work with Language JS especially with Framework React, a little bit VueJs , Redux.
      welcome)`,
    previewImage: previewImage,
  },
  online: false,
  videos: [
    {
      id: generateID(),
      title: "test stream",
      tags: ["URL", "Programing"],
      text: "text from video",
      date: "13.01.2021 19:26",
      viewers: getRandomNumber(50),
      preview: previewImage,
      comments: [
        {
          id: generateID(),
          name: "fullname 1",
          text: `test comment 1`,
          date: "11.01.2021",
        },
      ],
    },
    {
      id: generateID(),
      title: "test stream 2",
      tags: ["URL", "Programing"],
      text: "text from video",
      date: "12.01.2021",
      viewers: getRandomNumber(50),
      preview: previewImage,
      comments: [
        {
          id: generateID(),
          name: "fullname 2",
          text: `test comment 2`,
          date: "13.01.2021 19:26",
        },
      ],
    },
    {
      id: generateID(),
      title: "test stream 3",
      tags: ["URL", "Programing"],
      text: "text from video",
      date: "13.01.2021",
      viewers: getRandomNumber(50),
      preview: previewImage,
      comments: [
        {
          id: generateID(),
          name: "fullname 2",
          text: `test comment 2`,
          date: "13.01.2021 19:26",
        },
      ],
    },
  ],
};

export const userReducer = (state = initialState, action) => {
  return state;
};
