package services

import javax.inject.Inject
import model.Good
import model.dao.GoodRepository

class GoodService @Inject()(goodRepository: GoodRepository) {
  def insert(data: Good) = goodRepository.insert(data)

  def findByShopId(id: Int) = goodRepository.findByShopId(id)

  def updateById(id: Int, data: Good) = goodRepository.updateById(id, data)
}
