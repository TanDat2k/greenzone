import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import { shortenAddress } from "../utils/shortenAddress";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  // const gifUrl = useFetch({ keyword });

  return (
    <>
      <div
        className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
      >
        <div className="flex flex-col items-center w-full mt-3">
          <div className="display-flex justify-start w-full mb-6 p-2">
            <a
              href={`https://sepolia.etherscan.io/address/${addressFrom}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white text-base">
                From: {shortenAddress(addressFrom)}
              </p>
            </a>
            <a
              href={`https://sepolia.etherscan.io/address/${addressTo}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white text-base">
                To: {shortenAddress(addressTo)}
              </p>
            </a>
            <p className="text-white text-base">Amount: {amount} ETH</p>
            {message && (
              <>
                <br />
                <p className="text-white text-base">Message: {message}</p>
              </>
            )}
          </div>
          <img
            src={keyword}
            alt="nature"
            className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
          />
          <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className="text-[#37c7da] font-bold">{timestamp}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <>
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
      <div className="flex w-full justify-center items-center 2xl:px-20 bg-transparent">
        <div className="flex flex-col md:p-12 py-12 px-4">
          {currentAccount ? (
            <h3 className="text-white text-3xl text-center my-2">
              Danh sách giao dịch
            </h3>
          ) : (
            <h3 className="text-white text-3xl text-center my-2">
              Kết nối với tài khoản để xem giao dịch gần nhất
            </h3>
          )}

          <div className="flex flex-wrap justify-center items-center mt-10">
            {[...transactions].reverse().map((transaction, i) => (
              <TransactionsCard key={i} {...transaction} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
