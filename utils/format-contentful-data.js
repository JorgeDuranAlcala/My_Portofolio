export const formatItems = (items, type) => {
  switch (type) {
    case "projects":
      return items.map((item) => ({
        title: item.fields.title,
        desc: item.fields.desc.content[0].content[0].value,
        imgUrl: `https:${item.fields.img.fields.file.url}`,
        link: item.fields.link,
      }));

    default:
      return items;
  }
};
