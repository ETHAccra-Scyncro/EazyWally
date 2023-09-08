const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        PhoneNumber: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_phoneNumber",
                  type: "uint256",
                },
              ],
              name: "registerPhoneNumber",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unregisterPhoneNumber",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "users",
              outputs: [
                {
                  internalType: "address",
                  name: "walletAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "phoneNumber",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isRegistered",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        UserRegistry: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "walletAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "phoneNumber",
                  type: "string",
                },
              ],
              name: "UserRegistered",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_phoneNumber",
                  type: "string",
                },
              ],
              name: "registerUser",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userData",
              outputs: [
                {
                  internalType: "address",
                  name: "walletAddress",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "phoneNumber",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
