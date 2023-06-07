import { query } from "./index";
import { filterByPublishedPage } from "./filters";
import { sortByLatest } from "./sorts";

export const publishedPages = async ( pageLimit?: number) => {
  const filter = {
    and: [filterByPublishedPage],
  };
  const sorts = [sortByLatest];

  return await query({
    filter: filter,
    sorts: sorts,
    pageLimit: pageLimit,
  });
};
