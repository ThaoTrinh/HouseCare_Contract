var ManageUser = artifacts.require("./ManageUser.sol");

module.exports = function(deployer) {
  deployer.deploy(ManageUser);
};