interface News {
  id: string;
  title: string;
  description: string;
  alert: boolean;
  bias: string;
}

// todo: add source field later

export const NewsAlerts: News[] = [
  {
    id: "1",
    title: "First Alert",
    description: "This is the first alert message.",
    alert: true,
    bias: "5",
  },
  {
    id: "2",
    title: "Second Alert",
    description: "This is the second alert message.",
    alert: false,
    bias: " 7",
  },
  {
    id: "3",
    title: "Third Alert",
    description: "This is the third alert message.",
    alert: true,
    bias: "9",
  },
  {
    id: "4",
    title: "Fourth Alert",
    description: "This is the fourth alert message.",
    alert: false,
    bias: "6",
  },
  {
    id: "5",
    title: "Fifth Alert",
    description: "This is the fifth alert message.",
    alert: true,
    bias: "8",
  },
  {
    id: "6",
    title: "Sixth Alert",
    description: "This is the sixth alert message.",
    alert: false,
    bias: "10",
  },
  {
    id: "7",
    title: "Seventh Alert",
    description: "This is the seventh alert message.",
    alert: true,
    bias: "11",
  },
  {
    id: " 8",
    title: "Eighth Alert",
    description: "This is the eighth alert message.",
    alert: false,
    bias: "12",
  },
  {
    id: "9",
    title: "Ninth Alert",
    description: "This is the ninth alert message.",
    alert: true,
    bias: "13",
  },
  {
    id: "10",
    title: "Tenth Alert",
    description: "This is the tenth alert message.",
    alert: false,
    bias: "14",
  },
];
