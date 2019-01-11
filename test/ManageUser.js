var ManageUser = artifacts.require("./ManageUser.sol");

contract("ManageUser", account => {
    it("Test", async() => {
        instance = await ManageUser.deployed();
        await instance.AddUser("0x36c96C69AAF49A9FD76B56C9E2A648BEC0cfB4b0")

        num = await instance.GetUserCount.call();
        assert.equal(1, num);
    })
})