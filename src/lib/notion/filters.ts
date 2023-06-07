export const filterBySlug = (slug: string) => {
  return {
    property: "Slug",
    rich_text: {
      equals: slug,
    },
  };
};

export const filterByPublishedPage = {
  property: "Published",
  checkbox: {
    equals: true,
  },
};
