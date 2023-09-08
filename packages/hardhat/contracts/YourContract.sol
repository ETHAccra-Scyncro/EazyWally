pragma solidity ^0.8.0;

contract UserRegistry {
    struct UserData {
        address walletAddress;
        string phoneNumber;
    }

    mapping(address => UserData) public userData;

    event UserRegistered(address indexed walletAddress, string phoneNumber);

    function registerUser(string memory _phoneNumber) public {
        require(bytes(_phoneNumber).length > 0, "Phone number must not be empty");
        require(userData[msg.sender].walletAddress == address(0), "User already registered");

        UserData storage user = userData[msg.sender];
        user.walletAddress = msg.sender;
        user.phoneNumber = _phoneNumber;

        emit UserRegistered(msg.sender, _phoneNumber);
    }
}
