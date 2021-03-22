const contentful = require("contentful");
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export const fetchEntries = async (query) => {
  const entries = await client.getEntries(query);
  if (!entries.items)
    `Couldn't find any item, maybe something went wrong ${entries.errors.reduce(
      (acc, err) => (acc.includes(err.message) ? acc : acc + `${err.message}`),
      ""
    )}`;
  return entries.items;
};
