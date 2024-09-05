const sdk = require("@defillama/sdk");
const config = require("./config");


async function tvl(api) {
    const balances = {};
    const reservesList = await api.call({
        abi: config.ABI.getReservesList,
        target: config.POOL
    })

    const requests = []
    for(const reserve of reservesList) {
        requests.push(processTvlForReserve(reserve, api))
    }

    const responses = await Promise.all(requests);
    for(const response of responses) {
        sdk.util.sumSingleBalance(balances, response.underlyingAsset, response.amount, api.chain)
    }
    
    return balances;
}

async function processTvlForReserve(reserve, api) {
    const reserveData = await api.call({
        abi : config.ABI.getReserveData,
        params : [reserve],
        target : config.POOL
    })

    const aTokenAddress = reserveData.aTokenAddress;

    const underlyingAsset = await api.call({
        abi : config.ABI.underlyingAsset,
        target: aTokenAddress
    })

    const balanceOf = await api.call({
        abi : config.ABI.balanceOf,
        target: underlyingAsset,
        params : [aTokenAddress]
    })

    return {amount : balanceOf, underlyingAsset : underlyingAsset};
}

module.exports = {
    etlk: { tvl }
}