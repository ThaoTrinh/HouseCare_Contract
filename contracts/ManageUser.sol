pragma solidity >=0.4.21 <0.6.0;

contract ManageUser{
    mapping(address => bool) public userMap;
    uint public userCount;
    address public manager;
    
    constructor() public {
        manager = msg.sender;
    }
    
    function AddUser(address user) public{
       require(userMap[user] == false);
       userMap[user] = true;
       userCount++;
    }
    
    function CheckUser(address user) public view returns(bool){
        require(userMap[user] == true);
        return true;
        require(userMap[user] == false);
        return false;
    }

    function GetUserCount() public view returns (uint){
        return userCount;
    }
}