const contracts = {
  5: [
    {
      chainId: "5",
      name: "goerli",
      contracts: {
        UserRegistry: {
          address: "0x2A926AbDa9da96a2a78804aA61433c6200c9B78e",
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
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        UserRegistry: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
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
