/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

export class TaskPage {
  //Element - Locators
  elements = {
    image: () => cy.get('.jsx-488922165b21ea9d.container.text-white'),
    exploreOurLocations: () => cy.get('.jsx-488922165b21ea9d.btn.btn-primary.btn-lg'),
    windlerSquare: () => cy.get("a[href='/locations/schoen-rau-and-windler-square/']"),
    noParkingAvailable:()=> cy.xpath("//span[normalize-space()='No parking available']"),
    imageOfWindler: () => cy.xpath("//img[@alt='Schoen, Rau and Windler Square']"),
    publicAccessAvailable:()=> cy.xpath("//span[normalize-space()='Public access available']"),
    fourSeatTeamOffice: ()=> cy.get('tbody tr:nth-child(3)')

  }

  verifyTitle() {
    cy.title().should('eq', 'Contoso Spaces')
  }

  verifyImage() {
    this.elements.image().should('be.visible')
  }

  clickExploreOurLocations(){
    this.elements.exploreOurLocations().should('be.visible').click();
  }

  clickWindlerSquare(){
    this.elements.windlerSquare().should('be.visible').click();
  }

  verifyNoParking(noParkingAvailable) {
    this.elements.noParkingAvailable().invoke('text').then((text) => {
      expect(text).to.contain(noParkingAvailable);
    });
  }

  verifyWindler() {
    this.elements.imageOfWindler().should('be.visible')
  }

  verifyPublicAccessAvailable(publicAccessAvailable){
    this.elements.publicAccessAvailable().invoke('text').then((text)=>{
      expect(text).to.contain(publicAccessAvailable)
    })
  }

  verifyFourSeatTeamOffice(teamOfficeOfFour){
    this.elements.fourSeatTeamOffice().should('be.visible').invoke('text').then((text)=>{
      expect(text.trim()).to.contain(teamOfficeOfFour)
    })

  }

}

export const taskPage = new TaskPage()