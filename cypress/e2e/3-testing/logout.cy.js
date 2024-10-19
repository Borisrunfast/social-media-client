describe("Logout Flow", () => {

    beforeEach(() => {
      cy.visit("/");
      cy.wait(2000)
  
      cy.get('button[data-auth="login"]:visible').click()
      cy.wait(2000)
      cy.get('#loginModal')
        
      cy.get('#loginModal input[name="email"]:visible').type("borguz00076@stud.noroff.no")
      cy.get('#loginModal input[name="password"]:visible').type("borapples8889")
  

      cy.get('#loginModal button[type="submit"]').click()

      cy.wait(2000)
      
      cy.url().should("not.include", "/login");
  
      cy.get('button[data-auth="logout"]').should("be.visible");
    });
  
    it("should allow the user to log out", () => {
      cy.get('button[data-auth="logout"]').click();
  
      cy.get('button[data-auth="login"]').should("be.visible");
  
      cy.url().should("not.include", "/dashboard");
    });
  });
  