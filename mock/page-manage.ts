import { Request, Response } from "express";

const pageList = (req: Request, res: Response) => {
  const page = {
    id: 0,
    title: '首页',
    previewImg: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
  }
  const list = {
    baseList: [{...page}],
    selfList: [{...page}, {...page, id: 1}, {...page, id: 2}, {...page, id: 3}, {...page, id: 4}, {...page, id: 5}]
  }
  const result = {
    result: list,
    success: 'OK'
  }
  setTimeout(() => {
    res.json(result)
  }, 1000)

}

export default {
  'GET /api/page/list': pageList,
}
