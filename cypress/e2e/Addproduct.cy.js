describe('Add products to cart', () => {
    it('Verify Products are Added to Cart When Products are Clicked on', () => {
        cy.visit('https://coffee-cart.app/')
        cy.get('[data-cy="Espresso-Macchiato"]').click()
        cy.get('[data-cy="Cappuccino"]').click()
        cy.get("a[aria-label='Cart page']").click()
      })
    })