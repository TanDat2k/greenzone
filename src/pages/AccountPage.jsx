import { Transactions } from "../components";
import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { shortenAddress } from "../utils/shortenAddress";

import { TransactionContext } from "../context/TransactionContext";
const AccountPage = () => {
  const { currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex flex-col w-full justify-center items-center bg-black">
      <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
        <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fff" />
            </div>
            <BsInfoCircle fontSize={17} color="#fff" />
          </div>
          <div>
            <a
              className="text-white font-light text-sm"
              href={`https://sepolia.etherscan.io/address/${currentAccount}`}
            >
              <p> {shortenAddress(currentAccount)}</p>
            </a>
            <p className="text-white font-semibold text-lg mt-1">Ethereum </p>
          </div>
        </div>
      </div>
      {/* <Transactions /> */}
    </div>
  );
};

export default AccountPage;
