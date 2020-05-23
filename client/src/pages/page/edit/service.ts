import request from "@/utils/request";
import { Page } from "@/pages/page/type/page";

export async function fetchPage(id: number): Promise<any> {
  return request(`/api/page/findById?id=${id}`);
}

export async function updatePage(data: Page): Promise<any> {
  console.log(data)
  return request(`/api/page/updateById`, {
    method: "POST",
    data: data,
    requestType: "json"
  });
}
