import { requestBase } from './common';

export const pageList = `${requestBase}/api/page/findById?id=2`;
export const pageById = (id) => `${requestBase}/api/page/findById?id=${id}`;
