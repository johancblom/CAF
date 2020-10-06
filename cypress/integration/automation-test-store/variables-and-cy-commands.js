describe('Verifying variables, cypress commands and jquery commands', () => {
  it('Navigating to specific product pages', () => {
    cy.visit('https://automationteststore.com')
    const skincareLink = cy
      .get("a[href*='product/category&path=']")
      .contains('Skincare')

    skincareLink.click()

    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains('Makeup')
    makeupLink.click()
    cy.get('h1 .maintext').contains('Makeup')
    cy.get('h1 .maintext').should(($text) => {
      console.log($text.text())
      expect($text.text()).to.equal('Makeup')
    })
  })
})
