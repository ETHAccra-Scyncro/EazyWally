// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PhoneNumber {
    address public owner;
    string public phoneNumber;
    address public walletAddress;
    mapping(address => bool) public isBoundToWalletAddress;

    constructor () 
        owner = msg.sender;
    }

    // This function is called by the owner of the contract to register a
    // phone number and link it to the wallet address of the user.
    function registerPhoneNumber(address _walletAddress, string memory _phoneNumber) external {
        // Check that the caller is the owner of the contract.
        require(msg.sender == owner, 'caller is not the owner of the contract');

        // Store the phone number and address of the wallet in the contract.
        walletAddress = _walletAddress;
        phoneNumber = _phoneNumber;
        isBoundToWalletAddress[walletAddress] = true;
    }

    // This function is called by the owner of the contract to unregister a
    // phone number from the wallet address of the user.
    function unregisterPhoneNumber() external {
        // Check that the caller is the owner of the contract.
        require(msg.sender == owner, 'caller is not the owner of the contract');
        
        // Delete the phone number from the mapping.
        delete isBoundToWalletAddress[walletAddress];
        walletAddress = address(0);
        phoneNumber = '';
    }
}
