/// <reference types="cypress"/>


describe('GraphQ with Cypress', () => {
  it('GraphQ with Cypress', () => {
    var queryString = `{
      getCityByName(
        name: "Sao Paulo"
      ){
        country
        weather{ 
          summary { title description }
          temperature{ actual feelsLike min max }
          wind{ speed }
          clouds{ all visibility humidity }
        }
      }
    }`
    cy.request({
      method: 'POST',
      url: 'https://graphql-weather-api.herokuapp.com/', 
      body: {
        query: queryString
      },
    })
  })
    
  it('GraphQ with Cypress 2', () => {
    const countryName = `
      query countryName {
          countries {
            name,
            code,
            capital
        }
      }`
      cy.request({
        method: 'POST',
        url: 'https://countries.trevorblades.com/', 
        body: {
          query: countryName
      },
      }).then(response => {
        for (var i = 0; i<10; i++){
          cy.log(response.body.data.countries[i].name)
        }
        expect(response.body.data.countries[0].name).to.be.eq("Andorra");
      })
    })  
})
