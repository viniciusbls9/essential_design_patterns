import User from "../../domain/entity/User";
import UserRepository from "../repository/UserRepository";

export default class Signup {
  constructor(readonly userRepository: UserRepository) {}

  async execute(input: Input): Promise<void> {
    const user = new User(input)
    this.userRepository.save(input)
  }
}

type Input = {
  name: string;
  email: string;
  password: string
  age: number
}