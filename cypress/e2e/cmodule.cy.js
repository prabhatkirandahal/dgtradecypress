import {
    login
}from "cypress\support\commands.js"
import cypressConfig from "../../cypress.config"

describe("Client Module", ()=>{

    it("Login", ()=>{

        login()

    })

    it("Client Module", ()=>{
        
        cy.get('.c-show > .c-sidebar-nav-dropdown-toggle > .c-sidebar-nav-icon').click()

    })
})