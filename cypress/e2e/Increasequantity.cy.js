describe('Increase product quantity', () => {
    it('Verify Quantity Increases When Plus Button is Clicked', () => {
        cy.visit('https://coffee-cart.app/')
        cy.get('[data-cy="Espresso-Macchiato"]').click()
        cy.get('[data-cy="Cappuccino"]').click()
      })
    })