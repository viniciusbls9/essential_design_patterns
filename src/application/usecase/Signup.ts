import User from "../../domain/entity/User";
import UserRepository from "../repository/UserRepository";

export default class Signup {
  constructor(readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<void> {
    if (input.name.split(' ').length < 2) {
      throw new Error('Invalid name')
    }
    const user = new User(input.name, input.email, input.password, input.age)
    await this.userRepository.save(user)
  }
}

type Input = {
  name: string;
  email: string;
  password: string
  age: number
}