import request from "@/utils/request";
import { Good } from "@/pages/good/type/good";

export async function insertGood(good: Good): Promise<any> {
  return request("/api/good/insert", {
    method: "POST",
    data: {
      ...good,
      id: 0,
      shopId: 1
    }
  });
};

export async function fetchGoodList(): Promise<Good[]> {
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

export async function getGoodListByIds(ids: number[]): Promise<Good[]> {
  const data = await request("/api/good/findListByIds", {
    method: "POST",
    data: ids
  });

  return new Promise((resolve, reject) => {
    resolve(data.data);
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
