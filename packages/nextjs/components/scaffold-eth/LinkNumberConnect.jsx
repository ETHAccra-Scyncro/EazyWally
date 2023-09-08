/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
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

const LinkNumberConnect = () => {
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
          <div className={`flex justify-start items-center  ${!connected && "hidden"}`}>
            <button
              className={`btn bg-gradient-to-r from-cyan-500 to-slate-500 rounded-lg`}
              type="button"
              //   onClick={}
            >
              <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0 " /> <span>Link Number</span>
            </button>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default LinkNumberConnect;

const TransactForm = () => {
  return (
    <div>
      <h1>This is the transactions form</h1>
    </div>
  );
};
