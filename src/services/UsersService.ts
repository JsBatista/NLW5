import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class UsersService{

  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepository);
  }
  async create(email: string){
    // Verificar se o usuário existe
    const userExists = await this.usersRepository.findOne({email})

    if(userExists){
      return userExists;
    }

    // Se não existir, salvar no BD

    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export {UsersService}