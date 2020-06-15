import request from "@/utils/request";
import { Page, PageMode } from "@/pages/page/type/page";

export async function fetchPageList(id: number) {
  return request(`/api/page/list?id=${id}`);
}

export async function fetchCount(id: number) {
  return request(`/api/findId?id=${id}`);
}

export async function insertPages(page: Page) {
  return request("/api/page/insert", {
    method: "POST",
    data: {
      ...page,
      id: 0,
      shopId: 1,
      mode: PageMode.self
    }
  });
}

export async function deletePage(id: number) {
  return request(`/api/page/delete?id=${id}`);
}
