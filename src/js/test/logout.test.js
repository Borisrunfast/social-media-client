import { logout } from '../api/auth/logout'
import { remove } from '../storage/remove'

jest.mock('../storage/remove', () => ({
  remove: jest.fn(),
}))

describe("Logout function", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test("should remove the token and profile from storage", () => {
    logout()

    expect(remove).toHaveBeenCalledWith("token")
    expect(remove).toHaveBeenCalledWith("profile")
    expect(remove).toHaveBeenCalledTimes(2)
  })
})
