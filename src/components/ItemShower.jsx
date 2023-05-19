import React, { useContext } from "react";
import { SiEthereum } from "react-icons/si";
import { TransactionContext } from "../context/TransactionContext";

const Item = ({ title, image, amount, onClick }) => {
  return (
    <div className="w-full max-w-sm rounded overflow-hidden shadow-lg white-glassmorphism mx-5 text-white">
      <h1 className="text-3xl font-bold text-center py-2">{title}</h1>
      <img src={image} className="w-full h-56 object-cover" alt="" />
      <div className="flex flex-row justify-between m-2">
        <div className="flex flex-row justify-start items-center ">
          <SiEthereum fontSize={18} color="#fff" />
          <p className="font-bold mx-2">{amount} Ethereum</p>
        </div>
        <button
          className="flex flex-row justify-center items-center my-1 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white"
          onClick={() => onClick()}
        >
          Mua tín chỉ
        </button>
      </div>
    </div>
  );
};

const ItemShower = () => {
  const { sendTransaction } = useContext(TransactionContext);
  const handleBuy = async (addressTo, amount, keyword, message) => {
    if (!addressTo || !amount || !keyword || !message) return;
    await sendTransaction(addressTo, amount, keyword, message);
  };
  return (
    <div className="gradient-bg-services">
      <h1 className="text-3xl font-bold text-center text-white py-5">
        Tín chỉ CO2 hiện đang có trên thị trường
      </h1>
      <div className="flex w-full justify-center items-center ">
        {items.map((item, index) => (
          <Item
            key={index}
            {...item}
            onClick={() =>
              handleBuy(
                item.addressTo,
                parseFloat(item.amount).toString(),
                item.keyword,
                item.title
              )
            }
          />
        ))}
      </div>
    </div>
  );
};
const accountTo = "0x6a0099Db2f4d8A197F8a1516Cb566c9cDd7650D9";
const items = [
  {
    title: "Rừng tái sinh",
    keyword: "forest-credit",
    image:
      "https://ktmt.vnmediacdn.com/thumb_x600x/images/2021/05/12/31-1620832773-1-0915-20201104-73-182246.jpg",
    amount: "0.001",
    addressTo: accountTo,
  },
  {
    title: "Năng lượng mặt trời",
    keyword: "sun-credit",
    image:
      "https://nangluongxanh360.vn/uploads/Files/nang-luong-mat-troi-la-gi-cach-tao-ra-dien-nang-luong-mat-troi-1.jpg",
    amount: "0.001",
    addressTo: accountTo,
  },
  {
    title: "Cối xoay gió",
    keyword: "wind-credit",
    image:
      "http://media.tietkiemnangluong.com.vn/Images/Upload//User/minhtrang/2015/5/16/161639693.jpg",
    amount: "0.001",
    addressTo: accountTo,
  },
];
export default ItemShower;
