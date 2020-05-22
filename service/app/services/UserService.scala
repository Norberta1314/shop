package services

import javax.inject.Inject
import model.dao.UserRepository

class UserService @Inject() (userRepository: UserRepository) {
  def getUser(id: Int) = userRepository.findById(id)
}
