import Login from "../src/application/usecase/Login"
import Signup from "../src/application/usecase/Signup"
import UserRepositoryMemory from "../src/infra/repository/memory/UserRepositoryMemory"

test('Should to do signup', async () => {
  const userRepository = new UserRepositoryMemory()

  const signup = new Signup(userRepository)
  const inputSignup = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: '123345678',
    age: 30
  }

  await signup.execute(inputSignup)

  const login = new Login(userRepository)
  const inputLogin = {
    email: 'johndoe@gmail.com',
    password: '123345678',
  }
  const output = await login.execute(inputLogin)
  expect(output.name).toBe('John Doe')
  expect(output.token).toBe('123456')
})

test('Should not to do signup with invalid name', async () => {
  const userRepository = new UserRepositoryMemory()

  const signup = new Signup(userRepository)
  const inputSignup = {
    name: 'John',
    email: 'johndoe@gmail.com',
    password: '123345678',
    age: 30
  }

  expect(() => signup.execute(inputSignup)).rejects.toThrow(new Error('Invalid name'))
})

test('Should not to do signup with invalid email', async () => {
  const userRepository = new UserRepositoryMemory()

  const signup = new Signup(userRepository)
  const inputSignup = {
    name: 'John Doe',
    email: 'johndoe@gmail',
    password: '123345678',
    age: 30
  }

  expect(() => signup.execute(inputSignup)).rejects.toThrow(new Error('Invalid email'))
})