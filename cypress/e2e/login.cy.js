
describe('login', ()=> 
{
    // Check the title of the login page
    it("valid Title", ()=>{
        cy.visit('baseUrl/login')
        cy.title().should('eq', 'DG Trade')

    })
    // Enter the credentials to login
    it("User login", ()=>{
        cy.visit('baseUrl/login')
        cy.get('[name="username"]').type("PRABHAT")
        cy.get('[name="password"]').type("Dghub@2022")
        cy.get('.btn').click()
    })

})