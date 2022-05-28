///<reference types="cypress"/>

describe('GET API test',function(){
    it('get users',function(){
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            hearders : {
                'Authorization' : 'Bearer c70ca5ab085dde1b0bc9b9816f2d612f32550ae1e8ae73450647d671ee2bad81'
            }
        }).then((res)=>{
            expect(res.status).to.equal(200)
            expect(res.name).toString("Chandraayan Kakkar")
        })
    })
})