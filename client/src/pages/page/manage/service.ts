import request from '@/utils/request';

export async function fetchPageList() {
  return request('/api/page/list')
}
