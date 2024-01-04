import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Ava1 from "../../images/avatar/avatar1.jpg";
import Ava2 from "../../images/avatar/avatar2.jpg";
import Ava3 from "../../images/avatar/avatar3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;
const Img = styled.img`
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  &:hover {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform-y: scale(1);
    overflow-y: hidden;
  }
`;
export default function Feedback() {
  return (
    <div className="w-full h-[100vh] bg-white flex-col justify-center">
      <div className="w-full py-8 ">
        <Title className="text-[#E7596D] text-[2rem] w-full mb-0  text-center">
          Phản Hồi Của Khách Hàng
        </Title>
      </div>

      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-[55vh]"
      >
        <SwiperSlide className="w-full bg-white">
          <div className="z-10  flex-col  ">
            <Img
              className=" hover:overflow-hidden w-[4rem] h-[4rem] lg:w-[7rem] lg:h-[7rem] rounded-full cursor-pointer mx-auto"
              alt="example"
              src={Ava1}
            />
            <Text className="text-[0.7rem] lg:text-[1rem] block text-center w-[auto] px-20 my-2 mx-auto lg:text-center">
              Sự tận tâm và chất lượng của hoa đã làm cho ngày của tôi trở nên đặc biệt. Cảm ơn cửa hàng rất nhiều!
            </Text>
            <div className="w-full  flex justify-center  text-center block">
              <Text
                italic={true}
                className="text-[0.8rem] lg:text-[1.1rem] font-normal text-[#E7596D] "
              >
                Kiều Lam
              </Text>
            </div>
          </div>
          <div className="w-full bg-black"></div>
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-white ">
          <div className="z-10 flex-col  ">
            <Img
              className=" hover:overflow-hidden w-[4rem] h-[4rem] lg:w-[7rem] lg:h-[7rem] rounded-full cursor-pointer mx-auto"
              alt="example"
              src={Ava2}
            />
            <Text className="text-[0.7rem] lg:text-[1rem] block text-center w-[auto] px-20 my-2 mx-auto lg:text-center">
              Hôm qua nhận được bó hoa của cửa hàng, thực sự ấn tượng với sự sáng tạo trong thiết kế. Hoa tươi lâu và thơm mát 😍😍
            </Text>
            <div className="w-full  flex justify-center  text-center block">
              <Text
                italic={true}
                className="text-[0.8rem] lg:text-[1.1rem] font-normal text-[#E7596D] "
              >
                Thanh Thảo
              </Text>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-white ">
          <div className="z-10  flex-col  ">
            <Img
              className=" hover:overflow-hidden w-[4rem] h-[4rem] lg:w-[7rem] lg:h-[7rem] rounded-full cursor-pointer mx-auto"
              alt="example"
              src={Ava3}
            />
            <Text className="text-[0.7rem] lg:text-[1rem] block text-center w-[auto] px-20 my-2 mx-auto lg:text-center">
              Tôi ấn tượng với sự chuyên nghiệp của Bloomsy, từ quá trình đặt hàng cho đến khi nhận hàng.
              Dịch vụ này không chỉ mang lại sự thỏa mãn với chất lượng sản phẩm mà còn với tầm nhìn sáng tạo và sự tận tâm đáng kể.
            </Text>
            <div className="w-full  flex justify-center  text-center block">
              <Text
                italic={true}
                className="text-[0.8rem] lg:text-[1.1rem] font-normal text-[#E7596D]"
              >
                Thanh Lam
              </Text>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}