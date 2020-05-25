package services

import javax.inject.Inject
import model.dao.ImageRepository

class ImageService @Inject()(imageRepository: ImageRepository) {
  def insert(name: String) = imageRepository.insertImage(name)
}
