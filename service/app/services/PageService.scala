package services

import javax.inject.Inject
import model.Page
import model.dao.PageRepository

class PageService @Inject()(pageRepository: PageRepository) {
  def findPageByShop(id: Int) = pageRepository.findByShopId(id)

  def findPageById(id: Int) = pageRepository.findById(id)

  def updateById(id: Int, page: Page) = pageRepository.updateById(id, page)

  def insert(page: Page) = pageRepository.insert(page)

  def delete(id: Int) = pageRepository.delete(id)
}
