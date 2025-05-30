describe('Remove Product from cart', () => {
    it('Verify Product is Removed from the Cart, when the X icon is clicked', () => {
        cy.visit('https://coffee-cart.app/')
        cy.get('[data-cy="Cappuccino"]').click()
        cy.get('[data-cy="Cappuccino"]').click()
        cy.get("a[aria-label='Cart page']").click()
        cy.get('[data-test="checkout"]').click()
        cy.get("#name").type("Orji")
        cy.get('#email').type("orjilo17@gmail.com")
        cy.get('#submit-payment').click()
      })
    })