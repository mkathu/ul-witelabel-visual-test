let scrollToBottom = require("scroll-to-bottomjs");

describe("visual test of walls site page",function(){

    before(() => {
        // Block newrelic js outright due to issues with Cypress networking code.
        cy.log("Blocking NewRelic scripts");
        //Will block 
        //  https://js-agent.newrelic.com/nr-spa-1208.js
        cy.intercept(/\.*newrelic.*$/, (req) => {
            console.log("NEW RELIC INTERCEPTED");
            req.reply("console.log('Fake New Relic script loaded');");
        });
    });

    beforeEach(function()
    {
        cy.fixture("/walls/walls").then((data) =>{
            this.testdata=data
        }) 
    })

    it("open page for visual validation for walls",function(){
        let arrayOsPage=this.testdata.wallspage
        let i=0
        arrayOsPage.forEach(element => {
           cy.log(i)
            cy.visit(element).wait(5000)
          //  try{
            //    cy.get('button[id="onetrust-accept-btn-handler"]').then($element=>{
                 //   $element
                //})
               // cy.get(".c-content-panel--content+button").click({ force: true })
                //cy.get(".c-content-panel--content").then($element=>{
                 //   $element.siblings(0).trigger('click')
                //})
          //  }
           // catch(exception)
           // {
              //  console.info("msg:"+exception)
           // }
           
             cy.window().then(cyWindow => scrollToBottom({frequency: 10, timing: 5000 ,remoteWindow: cyWindow }));
         i=i+1
         cy.log(i)
       cy.percySnapshot("walls page "+i);
        });
       })
}) 
