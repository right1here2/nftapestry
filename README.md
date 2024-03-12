# NFTapestry

NFTapestry is a tool designed for the crypto community to easily fetch and explore NFT collections directly from the blockchain and OpenSea API.

## Features

- Fetch detailed information about any NFT collection.
- Retrieve a list of NFTs from a specified collection.

## Installation

```bash
npm install nftapestry

```

## Usage

```bash
const NFTapestry = require('nftapestry');
const tapestry = new NFTapestry('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Fetch a collection
tapestry.fetchCollection('collectionSlug').then(console.log);

// Fetch NFTs from a collection
tapestry.fetchNFTs('collectionSlug', 10).then(console.log);

```
DeviceVerifier ensures that every action taken by your IoT devices is authenticated and recorded, offering unparalleled security and transparency.