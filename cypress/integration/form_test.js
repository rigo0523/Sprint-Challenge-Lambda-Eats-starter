describe ('testing our inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('tests name input', () => {
        cy.get('[data-cy=name]').type("testing name, input")
    })

    it('test input selection', () => {
        cy.get("[data-cy=selection]").type('should be a selected')
    })


    it('test check input', () => {
        cy.get("[data-cy=checkbox1]").check().should("be.checked")
    })
    it('test check input', () => {
        cy.get("[data-cy=checkbox2]").check().should("be.checked")
    })
    it('test check input', () => {
        cy.get("[data-cy=checkbox3]").check().should("be.checked")
    })
    it('test check input', () => {
        cy.get("[data-cy=checkbox1]").check().should("be.checked")
    })

    it('test form submit', () => {
        cy.get('[data-cy=submit]').submit()
    })
})