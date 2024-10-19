import { login } from '../api/auth/login'
import { save } from '../storage/save'

global.fetch = jest.fn()

jest.mock('../storage/save', () => ({
  save: jest.fn(),
}))

describe("Auth function", () => {
  beforeEach(() => {
    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
    localStorage.clear() 
  })

  test("should save the token when login is successful", async () => {
    const mockResponse = {
      ok: true,
      json: async () => ({ accessToken: "mocked_token" }),
    }

    global.fetch.mockResolvedValue(mockResponse)


    await login("valid@example.com", "validPassword")

    expect(save).toHaveBeenCalledWith("token", "mocked_token")
    expect(save).toHaveBeenCalledWith("profile", expect.any(Object))
  })

  test("should throw an error and not save the token when login fails", async () => {
    const mockResponse = {
      ok: false,
      statusText: "Unauthorized",
    }

    global.fetch.mockResolvedValue(mockResponse)

    await expect(login("invalid@example.com", "invalidPassword")).rejects.toThrow("Unauthorized")

    expect(localStorage.setItem).not.toHaveBeenCalled()

    expect(save).not.toHaveBeenCalled()
  })
})
