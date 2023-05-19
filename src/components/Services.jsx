import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="w-full flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Chúng tôi không ngừng
          <br />
          nâng cao chất lượng dịch vụ
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          Sự lựa chọn hàng đầu để mua bán tín chỉ CO2 của bạn, với các dịch vụ
          cực kỳ thân thiện và bảo mật mà chúng tôi cung cấp.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Cam kết bảo mật"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Bảo mật được đảm bảo. Chúng tôi luôn giữ riêng tư và đảm bảo chất lượng sản phẩm của mình."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Tỷ giá hối đoái tốt nhất"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Tỷ giá hối đoái tốt nhất được đảm bảo, với sự biến động của đồng tín dụng của chúng tôi."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Giao dịch nhanh nhất"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Nơi để bạn có thể thực hiện các giao dịch một cách nhanh chóng và hiệu quả nhất, hãy tham gia ngay để trải nghiệm!"
        />
      </div>
    </div>
  </div>
);

export default Services;
