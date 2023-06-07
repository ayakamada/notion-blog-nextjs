import { query } from "./index";
import { filterByPublishedPage, filterBySlug } from "./filters";
import { sortByLatest } from "./sorts";

export const publishedPageBySlug = async (slug: string) => {
  const filter = {
    and: [filterByPublishedPage, filterBySlug(slug)],
  };
  const sorts = [sortByLatest];

  return await query({
    filter: filter,
    sorts: sorts,
  });
};
