import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { notion } from "./index";

export const fetchPageBlocks = async (pageId: string) => {
  return await notion.blocks.children.list({ block_id: pageId }).then((res) => res.results as BlockObjectResponse[]);
};
