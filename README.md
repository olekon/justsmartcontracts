## Description
This is source code of [justsmartcontracts.dev](https://justsmartcontracts.dev) website. 

[What is justsmartcontracts.dev?](https://medium.com/coinmonks/introducing-justsmartcontracts-dev-web-tool-for-interacting-with-ethereum-smart-contracts-da9b5dfe563c) Basically it is a web tool for interacting with Ethereum smart contracts. It was initially developed by my friend and me in order to provide a better experience for Ethereum smart contracts developers and blockchain enthusiasts.

## Prerequisites
Website was developed using Node.js 8.4.0.
## Running locally
Download the project and navigate to the root folder (the one with this file), then execute
 
`npm install`

`npm run dev`

Website will be accessible on http://localhost:8080/

If you want website to use https instead of http, execute

`npm run devs`

To build the bundle, execute

`npm run build`

### Using local API server
You may want to use local backend application (API server). In that case please visit its [repository](https://github.com/olekon/justsmartcontracts-api) and follow launch instructions. 

Then open this project's `config.js` file and locate `server` section. Set url to your local API server, for example

    server: {        
        url: 'http://localhost:3000'
    } 

## Contributing
Please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file for details


## Authors
* Oleg Kondrakhanov - [olekon](https://github.com/olekon)
* Alexey Kuzmin - [32kaa](https://github.com/32kaa)

## License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details
