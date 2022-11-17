describe('Testing Google Search', () => {

    // To Pass the Test Case 1 

    it(['tag2'], 'I can search for Valid Content on Google', () => {
        let VAR = cy.request(Cypress.env('CYPRESS_INCLUDE_TAGS')) // points to a dynamic env var        
        console.log('VAR' + VAR)
        

         cy.visit('https://www.google.com');
         cy.get("input[title='Search']").type('Cypress').type('{enter}');
         cy.contains('https://www.cypress.io'); 

    });


    // To Fail the Test Case 2

    it(['tag2'], 'I can navigate to Wrong URL’', () => {
        // cy.visit('http://not-a-real-url');
        expect(false).to.be.true
    });
})