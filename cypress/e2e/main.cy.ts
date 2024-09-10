describe('Main UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('should display default values on load', () => {
    cy.get('#start_at').should('be.visible').and('have.value', '0');
    cy.get('#step').should('be.visible').and('have.value', '1');
    cy.get('.current_count').should('contain', '0');
  });

  it('should increment the counter by the step value when button is clicked', () => {
    cy.get('.count_button').click();
    cy.get('.current_count').should('contain', '1');
  });

  it('should update the counter based on custom start value and step value', () => {
    cy.get('#start_at').clear().type('5');
    cy.get('#step').clear().type('2');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '7');
  });

  it('should update the counter based on negative start value and custom step value', () => {
    cy.get('#start_at').clear().type('-5');
    cy.get('#step').clear().type('2');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '-3');
  });

  it('should update the counter based on custom start value and negative step value', () => {
    cy.get('#start_at').clear().type('5');
    cy.get('#step').clear().type('-2');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '3');
  });

  it('should update the counter based on negative start value and negative step value', () => {
    cy.get('#start_at').clear().type('-5');
    cy.get('#step').clear().type('-2');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '-7');
  });

  it('should not increment if the step is set to zero', () => {
    cy.get('#start_at').clear().type('10');
    cy.get('#step').clear().type('0');
    cy.get('.count_button').click();
    cy.get('.current_count').should('contain', '10');
  });

  it('should handle decimal start correctly', () => {
    cy.get('#start_at').clear().type('1.5');
    cy.get('#step').clear().type('0');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '1.5');
  });

  it('should handle decimal steps correctly', () => {
    cy.get('#start_at').clear().type('0');
    cy.get('#step').clear().type('1.5');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '1.5');
  });

  it('should handle negative decimal start correctly', () => {
    cy.get('#start_at').clear().type('-1.5');
    cy.get('#step').clear().type('0');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '-1.5');
  });

  it('should handle negative decimal steps correctly', () => {
    cy.get('#start_at').clear().type('0');
    cy.get('#step').clear().type('-1.5');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '-1.5');
  });

  it('should handle negative decimal steps correctly', () => {
    cy.get('#start_at').clear().type('1e2');
    cy.get('#step').clear().type('1e2');
    cy.get('body').click(0, 0);
    cy.get('.current_count').should('contain', '200');
  });
});
