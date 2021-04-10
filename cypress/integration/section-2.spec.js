
context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://192.168.2.180:8080/section-2')
  })

describe('Problem 2', () => {
	
it('.should() - make an assertion about the current subject', () => {



cy.get('.network-call-button').click(
)

cy.request({
  url: 'http://localhost:8889'
}).then((resp) => {
  expect(resp.status).to.eq(200)

})


//test3
cy.request({
  url: 'http://localhost:8889'
}).then((resp) => {
  expect(resp.body).to.not.be.null

})


//test4
cy.request({
  url: 'http://localhost:8889'
}).then((resp) => {

it('Verify alert and its text content', function(){    

    cy.on ('window:alert', 'Alert!') 

})

})



//new tab

// cy.get('.new-tab-button').click(
 // cy.visit('http://192.168.2.180:8080/section-2'{
	 
	 // onBeforeLoad(win)
	 
	 // {
		 // cy.stub(win,'open').as(open)
	 // }
 // })

// )


cy.get('.file-download-button').click(

cy.getByHref(downloadPath)
      .should(`have.attr`, `target`, `_blank`)
      .click()
    cy.location(`pathname`).should(`eq`, pagePath)

)


})
})
})
