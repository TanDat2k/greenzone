import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TransactionContext } from "../context/TransactionContext";
import logo from "../../images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
const NavBarItem = ({ title, classprops, link }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <NavLink to={link}>{title}</NavLink>
  </li>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const navItem = [
    { title: "Trang chủ", link: "/" },
    { title: "Chính sách bảo mật", link: "/chinh-sach-bao-mat" },
    { title: "Về chúng tôi", link: "/ve-chung-toi" },
  ];
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div
        className="md:flex-[0.5] flex-initial justify-center items-center"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial hidden">
        {navItem.map((item, index) => (
          <NavBarItem key={index} title={item.title} link={item.link} />
        ))}
        {!currentAccount && (
          <li
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <p className="text-white text-base font-semibold">
              Kết nối với ví của bạn
            </p>
          </li>
        )}
        {currentAccount && (
          <li className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <Link to="/chi-tiet-vi">Xem chi tiết tài khoản </Link>
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItem.map((item, index) => (
              <NavBarItem
                key={index}
                title={item.title}
                link={item.link}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
