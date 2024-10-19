describe("Login Flow", () => {

    beforeEach(() => {
      cy.visit("/")
      cy.wait(2000)
    })
  
    it("should allow the user to log in with valid credentials", () => {
        cy.wait(2000)
        cy.get('button[data-auth="login"]:visible').click()
        
        cy.get('#loginModal')
        cy.wait(2000)
        cy.get('#loginModal input[name="email"]').type("valid@example.com")
        cy.get('#loginModal input[name="password"]').type("validPassword")
    

        cy.get('#loginModal button[type="submit"]').click()

        cy.wait(2000)

        cy.url().should("not.include", "/login")

        cy.get('button[data-auth="logout"]')
    });
  
    it("should not allow the user to log in with invalid credentials and show an error message", () => {
      cy.get('button[data-auth="login"]:visible').click()
      cy.wait(2000)
      cy.get('#loginModal')
  
      cy.get('#loginModal input[name="email"]').type("invalid00076@stud.noroff.no")
      cy.get('#loginModal input[name="password"]').type("wrongPassword")
  
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains("Invalid credentials")
      })
  
      cy.get('#loginModal button[type="submit"]').click()
  
      cy.url().should("not.include", "/login")
    });
  })
  
  
  