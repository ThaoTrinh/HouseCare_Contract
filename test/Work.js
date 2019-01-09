var Work = artifacts.require("./Work.sol");

contract("Work", account => {
    it("Test set date", async() => {
        instance = await Work.deployed();
        await instance.setData("0x36c96C69AAF49A9FD76B56C9E2A648BEC0cfB4b0", "0x3C97934c41A283EDB04396056cD66aD82880a1B4", "1" , "Vo Van Ngan", "Cham soc tre", 50000, 360054 )

        data = await instance.getData.call();
        console.log(data);
    })
})