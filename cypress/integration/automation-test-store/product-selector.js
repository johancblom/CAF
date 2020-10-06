describe('Inspect Automation Test Store items using chain of commands', () => {
  it('Click on the first itme using item text', () => {
    cy.visit('https://www.automationteststore.com/')
    cy.get('.prdocutname')
      .contains('Skinsheen Bronzer Stick')
      .click()
      .then((itemHeaderText) => {
        console.log(itemHeaderText.text())
      })
  })
  it('Click on the first itme using index', () => {
    cy.visit('https://www.automationteststore.com/')
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
  })
})
