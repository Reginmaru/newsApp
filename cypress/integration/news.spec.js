import News from "../../src/components/news";


describe('format', function(){
    
    it('sees the date of the news', function(){
        cy.visit('/');
        
        cy.get('#Heading').should('contain','25/07/2021')
    })
    it('see the type of news of my news', function(){
        cy.intercept("https://content.guardianapis.com/*",{ fixture : "news.json"})
        cy.visit('/');
        
        cy.get('#type-0').should('contain','News article')
    })
    it('see the headings of my news', function(){
        cy.intercept("https://content.guardianapis.com/*",{ fixture : "news.json"})
        cy.visit('/');
        
        cy.get('#body-1').should('contain','Doctors warn over increasing number of young people with Covid in ICU')
    })
    it('see the picture of my news', function(){
        cy.intercept("https://content.guardianapis.com/*",{ fixture : "news.json"})
        cy.visit('/');
        
        cy.get("#image-2").should("be.visible")
    })
})