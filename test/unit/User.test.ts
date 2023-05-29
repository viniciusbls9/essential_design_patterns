import User from "../../src/domain/entity/User"

test('Should to create a user', () => {
  const user = new User('John Doe', 'john.doe@gmail.com', '12345678', 30)

  expect(user.name).toBe('John Doe')
  expect(user.email).toBe('john.doe@gmail.com')
  expect(user.password).toBe('12345678')
  expect(user.age).toBe(30)
})

test('Should not to do signup with invalid name', async () => {
  expect(() => new User('John', 'john.doe@gmail.com', '12345678', 30)).toThrow(new Error('Invalid name'))
})