describe('Cenários de Testes de Login', () => {
  const url = 'https://opensource-demo.orangehrmlive.com';
  const usernameSelector = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
  const passwordSelector = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';

  beforeEach(() => {
    cy.visit(url);
    cy.wait(10000);
  });

  it('Falha no Login', () => {
    cy.get(usernameSelector).type('Admins');
    cy.get(passwordSelector).type('admin1234');
    cy.contains('button', 'Login').click();
  });

  it('Login realizado com sucesso', () => {
    cy.get(usernameSelector).type('Admin');
    cy.get(passwordSelector).type('admin123');
    cy.contains('button', 'Login').click();
  });
});

