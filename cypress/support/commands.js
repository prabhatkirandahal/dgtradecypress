export const login = () => {

    cy.visit('baseUrl/login')
    cy.get('[name="username"]').type("PRABHAT")
    cy.get('[name="password"]').type("Dghub@2022")
    cy.get('.btn').click()
}

