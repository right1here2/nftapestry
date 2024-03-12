const axios = require('axios');
const Web3 = require('web3');

class NFTapestry {
    constructor(providerUrl) {
        this.web3 = new Web3(providerUrl);
        this.apiBase = 'https://api.opensea.io/api/v1';
    }

    async fetchCollection(collectionSlug) {
        try {
            const response = await axios.get(`${this.apiBase}/collection/${collectionSlug}`);
            return response.data.collection;
        } catch (error) {
            console.error('Failed to fetch collection:', error);
            return null;
        }
    }

    async fetchNFTs(collectionSlug, limit = 10) {
        try {
            const response = await axios.get(`${this.apiBase}/assets?collection_slug=${collectionSlug}&limit=${limit}`);
            return response.data.assets;
        } catch (error) {
            console.error('Failed to fetch NFTs:', error);
            return null;
        }
    }
}

module.exports = NFTapestry;
