import { Client } from "@notionhq/client";
import React from "react";
import { BlockObjectResponse, PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const fetchPages = async () => {
  // return notion.databases.query({
  //   database_id: process.env.NOTION_DATABASE_ID!,
  //   filter: {
  //     property: "Status",
  //     select: {
  //       equals: "Published",
  //     },
  //   },
  // });
  return await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    // Filter out posts not checked to publish.
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    // Sort posts in descending order based on the Date column.
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
};

export const fetchPageBySlug = async (slug: string) => {
  return await notion.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
};

export const fetchPageBlocks = async (pageId: string) => {
  return await notion.blocks.children.list({ block_id: pageId }).then((res) => res.results as BlockObjectResponse[]);
};
