/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CopyToClipboard from "react-copy-to-clipboard";
import { useDisconnect, useSwitchNetwork } from "wagmi";
import {
  ArrowLeftOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Address, Balance, BlockieAvatar } from "~~/components/scaffold-eth";
import { useAutoConnect, useNetworkColor } from "~~/hooks/scaffold-eth";
import { getBlockExplorerAddressLink, getTargetNetwork } from "~~/utils/scaffold-eth";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const CustomConnect = () => {
  useAutoConnect();
  const networkColor = useNetworkColor();
  const configuredNetwork = getTargetNetwork();
  const { disconnect } = useDisconnect();
  const { switchNetwork } = useSwitchNetwork();
  const [addressCopied, setAddressCopied] = useState(false);

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(getTargetNetwork(), account.address)
          : undefined;

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="btn bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }

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
                <div className="flex justify-start items-center">
                  {/* <div className="flex flex-col items-center mr-1">
                    <span className="text-xs" style={{ color: networkColor }}>
                      {chain.name}
                    </span>
                  </div> */}

                  <button
                    className="btn bg-gradient-to-r from-red-500 to-orange-500 rounded-lg"
                    type="button"
                    onClick={() => disconnect()}
                  >
                    <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0 " /> <span>Disconnect</span>
                  </button>
                </div>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};
