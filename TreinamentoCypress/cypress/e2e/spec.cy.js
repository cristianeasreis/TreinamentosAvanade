describe('Cenários de Testes de Login', () => {
  const url = 'https://opensource-demo.orangehrmlive.com';
  const usernameInput = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
  const passwordInpput = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';

  beforeEach(() => {
    cy.visit(url);
    cy.wait(10000);
  });

  it('Falha no Login', () => {
    cy.get(usernameInput).type('Admins');
    cy.get(passwordInpput).type('admin1234');
    cy.contains('button', 'Login').click();
  });

  it('Login realizado com sucesso', () => {
    cy.get(usernameInput).type('Admin');
    cy.get(passwordInpput).type('admin123');
    cy.contains('button', 'Login').click();
  });
});

