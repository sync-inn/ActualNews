interface News {
  id: string;
  title: string;
  description: string;
  alert: boolean;
  Source: string;
  bias: string;
}

// todo: add source field later

export const NewsAlerts: News[] = [
  {
    id: "1",
    title: "Error",
    description:
      "there is a problem from our side, so the news could not load. very sorry, we will resolve this as soon as possible",
    alert: true,
    Source: "",
    bias: "100",
  },
];
