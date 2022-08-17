describe("Testing API Endpoints Using Cypress", () => {
  it("Test GET Request", () => {
    cy.request("https://postman-echo.com/get").then((response) => {
        // cy.log(JSON.stringify(response, null, 4));
      expect(response.status).to.equal( 200);
    });
  });

  // it('Test POST Request', () => {
  //       cy.request({
  //            method: ‘POST’,
  //            url: ‘http://localhost:3000/api/posts’,
  //            body: {
  //                'id' : 2,
  //                'title':'Automation'
  //            }
  //       }).then((response) => {
  //               expect(response.body).has.property('title','Automation');
  //       })
  // })

  // it('Test PUT Request', () => {
  //       cy.request({
  //               method: ‘PUT’,
  //               url: ‘http://localhost:3000/api/posts/2’,
  //               body: {
  //                  'id': 2,
  //                  'title' : 'Test Automation'
  //               }
  //       }).then((response) => {
  //               expect(response.body).has.property('title',' Test Automation');
  //       })
  // })

  // it('Test DELETE Request', () => {
  //       cy.request({
  //                 method : ‘DELETE’,
  //                 url: ‘http://localhost:3000/api/post/2’
  //                 }).then((response) => {
  //                   expect(response.body).to.be.empty;
  //       })
  // })
});
