const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TeTherium", function () {
  it("Should return owner of token", async function () {
    const [owner] = await ethers.getSigners();
    const TeTherium = await ethers.getContractFactory("TeTherium");
    const teTherium = await TeTherium.deploy();
    await teTherium.deployed();
const owneraddress = await teTherium.owner();

expect(owneraddress).to.equal(owner.address);
  });
});
