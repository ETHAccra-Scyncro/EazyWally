/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Spinner } from "../Spinner";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { LoaderIcon, toast } from "react-hot-toast";
import { useSwitchNetwork } from "wagmi";
import {
  ArrowLeftOnRectangleIcon,
  ArrowSmallRightIcon,
  ArrowTopRightOnSquareIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  LinkIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { Address, Balance, BlockieAvatar, CustomFillButton } from "~~/components/scaffold-eth";
import { useAutoConnect, useNetworkColor, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { getBlockExplorerAddressLink, getTargetNetwork } from "~~/utils/scaffold-eth";

const LinkNumberConnect = () => {
  const [addressCopied, setAddressCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [wallet, setWallet] = useState("");
  const [chain, setChain] = useState("");
  const [showWallet, setShowWallet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [hasSet, setHasSet] = useState(false);
  const [showTransac, setShowTransac] = useState(false);
  // interact with contract
  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "UserRegistry",
    functionName: "registerUser",
    args: [phone],

    // value: "0.01",

    blockConfirmations: 1,
    // The callback function to execute when the transaction is confirmed.
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(phone, wallet);

    if (phone === "" || wallet === "") {
      toast.error("all fields required");
      return;
    }
    setSubmitting(true);
    try {
      setTimeout(() => {
        setSubmitting(false);
        setShowModal(false);
        writeAsync();
        toast.success(`Address linked to ${phone}`);
        handleModalClose();
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  const showHandler = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setShowWallet(false);
    setPhone("");
    setWallet("");
  };

  const handleSetWallet = (wallet, chain) => {
    setLoading(true);
    setTimeout(() => {
      setWallet(wallet);
      setChain(chain);
      setHasSet(true);
      setLoading(false);
      toast.success("address set");
    }, 2000);
  };

  const transacModalhandler = () => {
    setShowTransac(true);
  };
  const configuredNetwork = getTargetNetwork();
  const { switchNetwork } = useSwitchNetwork();
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(getTargetNetwork(), account.address)
          : undefined;

        // if (chain.unsupported || chain.id !== configuredNetwork.id) {
        //   return (
        //     <div className="dropdown dropdown-end">
        //       <label tabIndex={0} className="btn btn-error btn-sm dropdown-toggle gap-1">
        //         <span>Wrong network</span>
        //         <ChevronDownIcon className="h-6 w-4 ml-2 sm:ml-0" />
        //       </label>
        //       <ul
        //         tabIndex={0}
        //         className="dropdown-content menu p-2 mt-1 shadow-center shadow-accent bg-base-200 rounded-box gap-1"
        //       >
        //         <li>
        //           <button
        //             className="btn-sm !rounded-xl flex py-3 gap-3"
        //             type="button"
        //             onClick={() => switchNetwork?.(configuredNetwork.id)}
        //           >
        //             <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" />
        //             <span className="whitespace-nowrap">
        //               Switch to <span style={{ color: networkColor }}>{configuredNetwork.name}</span>
        //             </span>
        //           </button>
        //         </li>
        //         <li>
        //           <button
        //             className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
        //             type="button"
        //             onClick={() => disconnect()}
        //           >
        //             <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" /> <span>Disconnect</span>
        //           </button>
        //         </li>
        //       </ul>
        //     </div>
        //   );
        // }
        return (
          <div className="flex justify-start items-center gap-5">
            <button
              className={`btn bg-gradient-to-r from-cyan-500 to-slate-500 rounded-lg ${!connected && "hidden"}`}
              type="button"
              onClick={() => showHandler()}
            >
              <LinkIcon className="h-6 w-4 ml-2 sm:ml-0 " /> <span>Link Number</span>
            </button>

            <button
              className={`btn bg-gradient-to-r from-cyan-500 to-slate-500 rounded-lg ${!connected && "hidden"}`}
              type="button"
              onClick={() => transacModalhandler()}
            >
              <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0 " /> <span>Make Transaction</span>
            </button>

            {showModal && (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-60">
                  <div className="relative my-6 mx-auto w-3/4 md:w-2/4 lg:w-1/4 ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold text-slate-700">EazyWally</h3>
                        <button className="outline-none focus:outline-none" onClick={handleModalClose}>
                          <XCircleIcon className="w-10 h-10 fill-red-600" />
                        </button>
                      </div>
                      {/*body*/}
                      <div className="form-control relative px-6 flex-auto flex flex-col g-3">
                        <label className="label ">
                          <span className="label-text text-gray-700">Phone Number</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your Phone Number"
                          className="p-2 rounded-lg text-gray-700 border-gray-300 input w-full bg-white border-2 "
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="flex gap-2 justify-between items-start flex-col w-full mt-5">
                        {!hasSet && (
                          <button
                            className="text-sky-700 place-self-center mb-4 cursor-pointer"
                            onClick={() => handleSetWallet(account.address, chain.name)}
                          >
                            {!loading ? (
                              <span>Use connected wallet</span>
                            ) : (
                              <span>
                                <LoaderIcon />
                              </span>
                            )}
                          </button>
                        )}
                      </div>

                      {/*footer*/}
                      <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={handleModalClose}
                        >
                          Close
                        </button>
                        <button
                          className="btn bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 disabled:bg-gray-500"
                          type="button"
                          disabled={submitting}
                          onClick={handleSubmit}
                        >
                          {!submitting ? (
                            <span>Link Address</span>
                          ) : (
                            <span>
                              <LoaderIcon />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {showTransac && (
              <div className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-60">
                <div className="relative my-6 mx-auto w-3/4 md:w-2/4 lg:w-1/4  bg-white h-[500px] float-right mr-7 mt-20">
                  <div className="flex justify-between">
                    <div className="px-5 mt-5">
                      <h1 className="text-3xl font-medium text-gray-700 my-0">EazyWally</h1>
                      <h3 className="text-sm font-light text-gray-600 my-0">simulaate transaction</h3>
                    </div>
                    <div>
                      <button className="outline-none focus:outline-none" onClick={() => setShowTransac(false)}>
                        <XCircleIcon className="w-10 h-10 fill-red-600" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full px-5 ">
                    <div className="flex flex-col gap-2 mt-5">
                      <label className="text-base font-medium text-gray-700 ">Phone number</label>
                      <input
                        type="text"
                        placeholder="(+233) 50 00000000"
                        className="input px-2 rounded-lg w-full bg-white border-2 border-gray-300 text-gray-700 "
                      />
                    </div>
                    <div className="w-full flex justify-end">
                      <button className="btn rounded mt-5">Transact</button>
                    </div>

                    <div className="w-full ">
                      <h1 className="text-sm font-medium text-gray-600">Addresses found:</h1>
                      <span className="text-gray-400 w-full flex flex-col bg-gray-100 rounded shadow px-2 py-1">
                        <span>{chain.name}</span>
                        <Address address={account.address} format="short" disableAddressLink={true} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default LinkNumberConnect;
