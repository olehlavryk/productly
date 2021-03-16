import { v4 as uuidv4 } from "uuid";
import storyImg1 from "./images/story1.png";
import storyImg2 from "./images/story2.png";
import storyImg3 from "./images/story3.png";

import avatar1 from "./images/avatar1.png";
import avatar2 from "./images/avatar2.png";
import avatar3 from "./images/avatar3.png";
import avatar4 from "./images/avatar4.png";
import avatar5 from "./images/avatar5.png";

export const stories = [
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg1,
    author: "Abdullah",
    date: "03 March 2019",
    title: "Increasing Prosperity With Positive Thinking",
  },
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg2,
    author: "Abdullah",
    date: "09 March 2019",
    title: "Motivation Is The First Step To Success",
  },
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg3,
    author: "Abdullah",
    date: "15 March 2019",
    title: "Success Steps For Your Personal Or Business Life",
  },
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg1,
    author: "Abdullah",
    date: "03 March 2019",
    title: "Increasing Prosperity With Positive Thinking",
  },
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg2,
    author: "Abdullah",
    date: "09 March 2019",
    title: "Motivation Is The First Step To Success",
  },
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg3,
    author: "Abdullah",
    date: "15 March 2019",
    title: "Success Steps For Your Personal Or Business Life",
  },
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg1,
    author: "Abdullah",
    date: "03 March 2019",
    title: "Increasing Prosperity With Positive Thinking",
  },
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg2,
    author: "Abdullah",
    date: "09 March 2019",
    title: "Motivation Is The First Step To Success",
  },
  {
    id: uuidv4(),
    url: "/#",
    preview: storyImg3,
    author: "Abdullah",
    date: "15 March 2019",
    title: "Success Steps For Your Personal Or Business Life",
  },
];

export const members = [
  {
    id: uuidv4(),
    avatar: avatar1,
    thought: "I can take care of your pitch",
    thoughtDirection: "right",
  },
  {
    id: uuidv4(),
    avatar: avatar2,
    thought: "I can design you website",
    thoughtDirection: "right",
  },
  {
    id: uuidv4(),
    avatar: avatar3,
    thought: "I will define the profile of your users",
    thoughtDirection: "left",
  },
  {
    id: uuidv4(),
    avatar: avatar4,
    thought: "I can prototype your app",
    thoughtDirection: "left",
  },
  {
    id: uuidv4(),
    avatar: avatar5,
    thought: "I can help marketing strategy",
    thoughtDirection: "left",
  },
];

export const mainMenuList = ["Product", "Customers", "Pricing", "Resources"];
