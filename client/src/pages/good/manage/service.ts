import request from "@/utils/request";
import { Good } from "@/pages/good/type/good";
import { Result } from "@/type/Result";

export async function insertGood(good: Good): Promise<any> {
  return request("/api/good/insert", {
    method: "POST",
    data: {
      ...good,
      id: 0,
    }
  });
};

export async function fetchGoodList(): Promise<Result<any>> {
  const data = await request("/api/good/list?id=1");
  return new Promise((resolve, reject) => {
    resolve(data.data.map((item: Good) => {
      return {
        ...item,
        createTime: new Date(item.createTime).toLocaleString()
      };
    }));
  });
}

export async function updateGood(good: Good): Promise<any> {
  return request("/api/good/update", {
    method: "POST",
    data: {
      ...good,
      createTime: new Date()
    }
  });
}
