import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { publishedPageBySlug } from "@/lib/notion/publishedPageBySlug";

export async function getPageBySlug(slug: string) {
  const response = await publishedPageBySlug(slug);
  return response.results[0];
}
