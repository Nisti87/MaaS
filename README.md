# Welcome to the repo of OMS-Mobility as a Service!

## THE TEAM

Our team consists of five passionated guy with different backgrounds.

 - Christian: originator and backend guru with SWAGGER
 - Stefan:    bridgebuilder between business & IT, with a taste of FronEnd note and a pinch of IOTA
 - Benedikt:  Stark-ish mechatronic-guy with a soft-spot for JAVA
 - Fei:       Multi-Ninja on the FrontEnd- and IOTA-side
 - Alex:      business practioneer with a passion of innovative technologies and a passion for Python 
 
 
## IDEA
We want to enable companies to enter the mobility market. Our idea is to develop a clear & crisp REST API to ease implementation on 
company and customer UI. Such way we hope more customer and mobility provider hook up in a distributed mobility ledger.

## TECHNOLOGY
We use the following technologies in pursuit of mobility happines:

 - Apache
 - Java
 - Node JS
 - React
 - IOTA JS SDK
 
## LIBRARY

 - SWAGGER
 - Spring Boot
 
## TOOLS

 - IntelliJ
 - NEOVIM

## ARCHITECTURE

## DATAFLOW

## IOTA

IOTA part provides 3 APIs

1. publishing provider mobility offer to IOTA tangle net

`
node iota/apiPublish.js --payload='{"name": "fei", "test":"again1", "provider": "bmw"}'
`

2. get payable provider address for end user to conduct transaction

`
// possible providers are bmw, vw and db 
node iota/apiGetAccount.js --provider=bmw
`

3. authorize and confirm payment

