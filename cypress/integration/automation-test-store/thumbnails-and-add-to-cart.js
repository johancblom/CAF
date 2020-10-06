describe('Alias and invoke command', () => {
  it('home page has correct number of thumbnails', () => {
    cy.visit('https://automationteststore.com')
    cy.get('.thumbnail').as('nrOfThumbnails')
    cy.get('@nrOfThumbnails').should('have.length', 16)
    cy.get('@nrOfThumbnails')
      .find('.jumbotron a')
      .should('have.attr', 'title', 'Add to Cart')
    cy.get('@nrOfThumbnails').each(($el, $i, $list) => {
      cy.wrap($el)
    })
  })
})
