import React from "react";
import { Client } from "@notionhq/client";


export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function query(params: any) {
  const { filter, sorts, pageLimit } = params;

  return await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: filter,
    sorts: sorts,
    page_size: pageLimit || 100,
  });
}

// const publishedFilter = {
//   property: "Published",
//   checkbox: {
//     equals: true,
//   },
// };

// export const fetchPages = async () => {
//   return await notion.databases.query({
//     database_id: process.env.NOTION_DATABASE_ID!,
//     // Filter out posts not checked to publish.
//     filter: {
//       and: [publishedFilter],
//     },
//     // Sort posts in descending order based on the Date column.
//     sorts: [
//       {
//         property: "Date",
//         direction: "descending",
//       },
//     ],
//   });
// };

// export const getPage = async (pageId:string) => {
//   const response = await notion.pages.retrieve({ page_id: pageId });
//   return response;
// };

// export const fetchPageBySlug = (slug: string) => {
//   return notion.databases
//     .query({
//       database_id: process.env.NOTION_DATABASE_ID!,
//       filter: {
//         property: "Slug",
//         rich_text: {
//           equals: slug,
//         },
//       },
//     })
//     .then((res) => res.results[0] as PageObjectResponse | undefined);
// };

// export const fetchPageBlocks = async (pageId: string) => {
//   return await notion.blocks.children.list({ block_id: pageId }).then((res) => res.results as BlockObjectResponse[]);
// };
