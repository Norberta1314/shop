import request from "@/utils/request";
import { Page, PageHttp } from "@/pages/page/type/page";
import { Result } from "@/type/Result";


export async function fetchPage(id: number): Promise<any> {
  const data: Result<PageHttp> = await request(`/api/page/findById?id=${id}`);
  console.log(data);

  return new Promise((resolve, reject) => {
    resolve({
      ...data.data,
      components: data.data.components ? JSON.parse(data.data.components) : []
    });
  });
}

export async function updatePage(data: Page): Promise<any> {

  return request(`/api/page/updateById`, {
    method: "POST",
    data: {
      id: data.id,
      title: data.title,
      shopId: data.shopId,
      previewImg: data.previewImg,
      backgroundColor: data.backgroundColor,
      styleType: data.styleType,
      mode: data.mode,
      isDelete: data.isDelete,
      components: JSON.stringify(data.components)
    },
    requestType: "json"
  });
}
