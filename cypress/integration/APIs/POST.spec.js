///<reference types="cypress"/>

describe("POST method", function () {
  it("POST", function () {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      hearders: {
        "Content-Type": "aplication/json",
      },
      body: {
        'Name': 'Atish',
        'Surname': 'Chikhale',
        'Address': 'Kharadi'
      },
    }).then((res) => {
      expect(res.body).have.property("json");
      expect(res.status).to.equal(200)
      expect(res.body.json).to.deep.equal({
        "Name": "Atish",
        "Surname": "Chikhale",
        "Address": "Kharadi"       
      });
    });
  });
});
