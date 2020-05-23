package services

import javax.inject.Inject
import model.dao.PageRepository

class PageService @Inject()(pageRepository: PageRepository) {
  def getPageByShop(id:Int) = pageRepository.findByShopId(id)
}
