import {
    // Importing login
    login
}from "/cypress/support/commands.js"
import cypressConfig from "../../cypress.config"

describe("Client Module", ()=>{

    it("Login", ()=>{
// Calling login.cy.js from commands.js
        login()

    })

    it("Client Module", ()=>{
        login()
        // disabling the hover feature of side menu bar

        cy.get('.c-switch-slider').click()
        
        // cy.get('.c-header-toggler.ml-3 > .c-header-toggler-icon')
        // cy.get('.c-sidebar-nav-dropdown-toggle').click()
        // cy.get('#OAz\+TV25sfgHLqd4w8KvGw\=\=').click()

    })
})