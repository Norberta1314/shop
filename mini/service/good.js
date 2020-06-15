import { requestBase } from './common';

export const getGoodListByIds = `${requestBase}/api/good/findListByIds`;
export const fetchGoodList = `${requestBase}/api/good/list?id=1`;
export const findGoodById = (id) => `${requestBase}/api/good/findById?id=${id}`;
