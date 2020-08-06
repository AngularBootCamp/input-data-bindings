export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  before(() => {
    cy.visit('/');
  });
  it('should load with no order details being displayed', () => {
    cy.get('order-details > .card > .card-content').should(
      'contain',
      'Please select order to view details'
    );
  });
  it('should navigate to first order', () => {
    cy.get('.btn').first().click();
    cy.get('order-header > .card > .card-content').should(
      'contain',
      'Oasis Digital'
    );
    cy.get(
      'order-items > .card > .card-content > .collection > :nth-child(1)'
    ).should('contain', 'Widgets');
  });
  it('should navigate to second order', () => {
    cy.get('.btn').last().click();
    cy.get('order-header > .card > .card-content').should(
      'contain',
      'Paul'
    );
    cy.get(
      'order-items > .card > .card-content > .collection > :nth-child(1)'
    ).should('contain', 'Sprockets');
  });
});
