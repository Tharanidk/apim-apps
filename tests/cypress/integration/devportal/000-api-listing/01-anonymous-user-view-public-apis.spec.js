
/*
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

describe("Anonymous view apis", () => {
    const username = 'admin'
    const password = 'admin'

    it.only("Anonymous view apis", () => {
        cy.loginToPublisher(username, password);
        cy.deploySampleAPI();
        cy.get('[data-testid="logout-menu-dropdown"]').click();
        cy.get('[data-testid="logout-menu-item"]').click();
        cy.get('#usernameUserInput').should('exist');
        cy.visit('/devportal/apis?tenant=carbon.super');
        cy.url().should('contain', '/logout?referrer=/apis?tenant=carbon.super');
        cy.url().should('contain', '/apis?tenant=carbon.super');
        cy.get('[title="PizzaShackAPI"]', { timeout: 30000 });
        cy.get('[title="PizzaShackAPI"]').should('exist');
    })
    it.only("Download client sdks", () => {
        cy.loginToDevportal();
        cy.visit('/devportal/apis?tenant=carbon.super');
        cy.url().should('contain', '/apis?tenant=carbon.super');
        cy.get('[title="PizzaShackAPI"]', { timeout: 30000 });
        cy.get('[title="PizzaShackAPI"]').click();
        cy.get('[data-testid="left-menu-sdk"]').click();
        // Download all sdks one by one
        cy.get('[data-testid="download-sdk-btn"]').each(($btn) => {
            const fileName = $btn.get()[0].getAttribute('data-download-file');
            cy.wrap($btn).click();
            // Downloading SDK
            const downloadsFolder = Cypress.config('downloadsFolder')
            const downloadedFilename = `${downloadsFolder}/${fileName}.zip`;

            cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
                .should(buffer => expect(buffer.length).to.be.gt(100));

        })
    })

    it.only("Login to devportal by supper tenant user", () => {
        cy.addNewTenant('wso2.com', 'admin');
        cy.portalLogin('admin@wso2.com', 'admin', 'devportal');
    })
})
