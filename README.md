# ul-whitelabel

This repository holds code and configuration required to validate the pages visually using cypress and percy.

Tools used:
1. npm
2. cypress
3. percy
4. Cypress dashboard (if required)
5. Mocha

Steps:
1. Get the percy token for your project from Percy Dashboard
2. Clone the repo to you local
3. Set the project key using export PERCY_TOKEN="VALUE" or SET PERCY_TOKEN="VALUE"
4. Execute npm run percy:cypress


Test data:
The url's of pages needs to be specified in json file under the path ul-whitelabel\cypress\fixtures\.

Example : ul-whitelabel\cypress\fixtures\whitelabel.json

In the above example urls of homepage and 2 product pages are specified to be validate visually. The productpages are specified as array.

To visually validate the paage sample script as in file ul-whitelabel\cypress\integration\whitelabel.js needs to be specified. The beforeeach block needs to have the coide to read the fixtures.
Separate test needs to be written for homepage and productpage. The skeletal structure remains same but the url changes
