describe('Remove Product from cart', () => {
    it('Verify Product is Removed from the Cart, when the X icon is clicked', () => {
        cy.visit('https://coffee-cart.app/')
        cy.get('[data-cy="Espresso-Macchiato"]').click()
        cy.get("a[aria-label='Cart page']").click()
        cy.get(".delete").click()
      })
    })