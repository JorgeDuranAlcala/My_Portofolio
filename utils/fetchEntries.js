const contentful = require("contentful");
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_URI = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`;

export const fetchEntries = async (query) => {
  const res = await fetch(CONTENTFUL_URI, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const { data } = await res.json();
  return data;
};
