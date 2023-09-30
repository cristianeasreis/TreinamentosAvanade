
describe('Cenários de Testes de Login', () => {

  beforeEach(function(){

    cy.visit('https://opensource-demo.orangehrmlive.com')

  })

  it('Falha no Login', () => {

    cy.wait(10000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admins')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')    

    cy.contains('button', 'Login').click()

  })
 
  it('Login realizado com sucesso', () => {

    cy.wait(10000)

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')    

    cy.contains('button', 'Login').click()

  })
  
})







 

