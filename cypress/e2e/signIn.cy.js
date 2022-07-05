describe('My Test', () => {
    it('Login with valid creds', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username')
        .type('tomsmith')
        .should('have.value', 'tomsmith')

      cy.get('#password')
        .type('SuperSecretPassword!')
        .should('have.value', 'SuperSecretPassword!')

      cy.get('.fa')
        .click()

      cy.url().should('include', '/secure')
    });

    it('Login with invalid creds', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username')
        .type('test')
        .should('have.value', 'test')

      cy.get('#password')
        .type('test1234')
        .should('have.value', 'test1234')

      cy.get('.fa')
        .click()

      cy.get('#flash')
        .should('contain.text', 'Your username is invalid!')
    });

    it('Logout', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.get('#username')
        .type('tomsmith')
        .should('have.value', 'tomsmith')

      cy.get('#password')
        .type('SuperSecretPassword!')
        .should('have.value', 'SuperSecretPassword!')

      cy.get('.fa')
        .click()

      cy.get('.icon-2x')
        .click()

      cy.url().should('include', '/login')
     });
  });