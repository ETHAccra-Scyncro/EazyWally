// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PhoneNumber {
    struct User {
        address walletAddress;
        string phoneNumber;
        bool isRegistered;
    }

    mapping(address => User) public users;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, 'Caller is not the owner of the contract');
        _;
    }

    function registerPhoneNumber(string memory _phoneNumber) external {
        require(!users[msg.sender].isRegistered, 'User is already registered');

        // You may add phone number format validation here.

        users[msg.sender] = User({
            walletAddress: msg.sender,
            phoneNumber: _phoneNumber,
            isRegistered: true
        });
    }

    function unregisterPhoneNumber() external onlyOwner {
        require(users[msg.sender].isRegistered, 'User is not registered');

        delete users[msg.sender];
    }
}
