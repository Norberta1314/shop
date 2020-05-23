import request from "@/utils/request";

export async function fetchPageList(id: number) {
  return request(`/api/page/list?id=${id}`);
}

export async function fetchCount(id: number) {
  return request(`/api/findId?id=${id}`);
}
