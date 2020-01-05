const SampleContract = artifacts.require('SampleContract');

module.exports = async function(deployer, network, accounts) {

    const oneEther = 1000000000000000000;

    const contract = await SampleContract.new(3);

    await contract.setMapData(accounts[1], 10);
    await contract.setMapData(accounts[2], 100);
    await contract.setMapDataArray([accounts[3], accounts[4], accounts[5]], [1001, 1002, 1003]);

    await contract.setOwner(accounts[1]);
    await contract.setOwner(accounts[0], {from:accounts[1]});

    await contract.setStringData('DATA');

    await contract.setBoolData(true, {from: accounts[3]});
    await contract.setBoolData(false, {from: accounts[2]});

    await contract.setUintData(105, {from:accounts[5]});
    await contract.setUintData(20100, {from:accounts[6]});

    await contract.pay(64, {from: accounts[9], value: oneEther});

    await contract.withdrawTo(accounts[0]);

    await contract.pay(64, {from: accounts[9], value: 2 * oneEther});

    console.log(`Deployed contract is ${contract.address}`);
}