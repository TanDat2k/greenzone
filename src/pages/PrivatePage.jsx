import { SiEthereum, SiAdblock } from "react-icons/si";
const PrivatePage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services">
      <SiAdblock fontSize={100} color="#fff" className="my-5" />
      <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
        Chính sách bảo mật
      </h1>
      <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Blockchain là một công nghệ rất an toàn và bảo mật, được sử dụng trong
        nhiều lĩnh vực khác nhau, bao gồm cả Ethereum (ETH). Một trong những đặc
        điểm quan trọng nhất của Ethereum và blockchain là tính phi tập trung
        của chúng - không có một tổ chức hay cá nhân nào kiểm soát toàn bộ hệ
        thống. Thay vào đó, mỗi giao dịch được xác nhận và lưu trữ trên toàn bộ
        mạng lưới và phải được xác minh bởi các nút của mạng trước khi được chấp
        nhận.
      </p>
      <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Ngoài ra, Ethereum và blockchain còn sử dụng mã hóa để bảo vệ các giao
        dịch và dữ liệu trên hệ thống. Các thông tin trên blockchain được lưu
        trữ trong các block liên kết với nhau, và mỗi block đều có một mã hash
        duy nhất để đảm bảo tính toàn vẹn của dữ liệu. Bất kỳ sự thay đổi nào
        cũng sẽ làm thay đổi mã hash của block đó, làm cho mạng lưới không thể
        bị xâm nhập hoặc thay đổi dữ liệu một cách trái phép. Tóm lại, Ethereum
        và blockchain là những công nghệ rất an toàn và bảo mật, và đang được sử
        dụng rộng rãi trong nhiều lĩnh vực khác nhau.
      </p>
      <SiEthereum fontSize={100} color="#fff" className="my-5" />
    </div>
  );
};

export default PrivatePage;
