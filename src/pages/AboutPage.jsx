import { SiEthereum } from "react-icons/si";
const AboutPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services">
      <SiEthereum fontSize={100} color="#fff" />
      <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient my-8">
        Về chúng tôi!
      </h1>
      <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Chào mừng đến với dịch vụ mua bán tín chỉ CO2 của chúng tôi - Giải pháp
        hoàn hảo cho việc giảm thiểu lượng khí thải carbon của bạn một cách dễ
        dàng và hiệu quả. Với sự hỗ trợ của công nghệ blockchain và các cơ chế
        chứng nhận tín dụng carbon, dịch vụ của chúng tôi giúp bạn mua và bán
        các tín chỉ CO2 một cách an toàn và đáng tin cậy. Đồng thời, bằng cách
        tham gia vào dịch vụ của chúng tôi, bạn cũng đóng góp vào việc bảo vệ
        môi trường và giảm thiểu ảnh hưởng của biến đổi khí hậu. Hãy đăng ký
        ngay với chúng tôi để trải nghiệm sự tiện lợi và ý nghĩa của dịch vụ mua
        bán tín chỉ CO2!
      </p>
      <h3 className="text-white text-3xl sm:text-5xl py-2 text-gradient my-8">
        Tín chỉ carbon là gì?
      </h3>
      <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Tín chỉ carbon (Carbon credits) là một cơ chế được sử dụng để hỗ trợ
        giảm thiểu lượng khí thải carbon của các tổ chức và cá nhân. Các tín chỉ
        này được cấp phép và quản lý bởi các tổ chức như Liên Hợp Quốc và được
        giao dịch trên thị trường quốc tế.
      </p>
      <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Quá trình hoạt động của tín chỉ carbon là các tổ chức đầu tư vào các dự
        án giảm khí thải carbon như đầu tư vào năng lượng tái tạo, sử dụng công
        nghệ xanh, và trồng rừng. Sau đó, các tổ chức sẽ nhận được các tín chỉ
        carbon tương ứng với lượng khí thải carbon đã giảm thiểu. Các tín chỉ
        này sau đó có thể được bán hoặc giao dịch trên thị trường toàn cầu.
      </p>
    </div>
  );
};

export default AboutPage;
