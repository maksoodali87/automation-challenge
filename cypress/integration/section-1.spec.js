context('Assertions', () => {
  beforeEach(() => {
    cy.visit('http://192.168.2.180:8080/section-1')
  })


describe('Problem 1', () => {
	
it('.should() - make an assertion about the current subject', () => {
//Assert that the table is not visible.
cy.get('.alaya-table').should('not.exist')
})
})

it('.should() - make an assertion about the current subject', () => {
//After clicking the "Show table" button, assert the table is visible.
cy.get('.table-toggle-button').click(
cy.get('#alaya-table').should('be.hidden').invoke('show') .should('be.visible')
)

//Assert that the table is 5 columns wide
cy.get('#alaya-table > tbody > tr.table-header').children().should('have.length', 5)

//Assert that the table is 10 rows long, excluding the first (header) row
cy.get('#alaya-table > tbody').children().not('#alaya-table > tbody > tr.table-header').should('have.length', 10)

//Assert that an admin has the ID of 1.(check conditional logic).
cy.get('#alaya-table > tbody > tr:nth-child(2) > th:nth-child(5)').each(($e1, index, $list) => {
	var text = $e1.text()
	if(text.includes('admin'))
		cy.get('#alaya-table > tbody > tr:nth-child(2) > th:nth-child(1)').eq(index).then(function(ID){
			var getID = ID.text()
			expect(getID.trim()).to.equal('1')
		})

//Assert that at least 5 entries have the role "user".
cy.get('#alaya-table > tbody').children().contains('user')

/*
cy.get('alaya-table > tbody > tr.table-header').each(($e1, index, $list) => {
  const text = $e1.text();
  if (text.includes('user')) {
    cy.get('alaya-table > tbody > tr.table-header')
      .eq(index)
      .then(function(Field) {
      const Fieldtext = Field.text();
      expect(Fieldtext).to.equal("user");
    })
}
})

//Assert there are exactly 3 people older than 60 years old.

*/
})
})
 

describe('Problem 2', () => {
it('.should() - make an assertion about the current subject', () => {

//Assert that the form is not visible.
cy.get('.alaya-form').should('not.exist')

//After clicking the "Show form" button, assert that the form is visible.
cy.get('.form-toggle-button').click(
cy.get('#alaya-form').should('be.hidden').invoke('show') .should('be.visible'))

//Fill in the "Name" and "Age" inputs, and assert that both inputs are filled.
cy.get('#fullName').type('Eliane Ali')
cy.get('#fullName').invoke('val').should('not.be.empty')
cy.get('#age').type('27')
cy.get('#age').invoke('val').should('not.be.empty')

//Select "Female" from the select option, and assert that the value is "female".
cy.get('#gender').select('female').should('have.value', 'female')

//Tick the "Nurse" checkbox and assert that the value "nurse" is true.
cy.get('[type="checkbox"]').check()
cy.get('#alaya-form').find('[name="nurse"]').check()

//Click on the "Submit" button and assert that there is an alert window showing with the text "Form submitted!".
cy.get('#submit').click({})
it('Verify alert and its text content', function(){    
    cy.get('#submit').click({})
    cy.on ('window:alert', 'Form submitted!')    

})

}) 
})

})
