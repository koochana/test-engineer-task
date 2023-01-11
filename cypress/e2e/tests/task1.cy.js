/// <reference types="cypress" />

import {taskPage} from '../pages/task1.page.cy'

describe('task-1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Verify Title', () => {
    taskPage.verifyTitle();
  })

  it('Verify Home Page Image', () => {
    taskPage.verifyImage();
  })
  
  it('Verify Windler location details', () => {
    taskPage.clickExploreOurLocations();
    taskPage.clickWindlerSquare();
    taskPage.verifyNoParking('No parking available');
    taskPage.verifyWindler();
    taskPage.verifyPublicAccessAvailable('Public access available');
    taskPage.verifyFourSeatTeamOffice('Team Office$7,878.984')
  })




})
