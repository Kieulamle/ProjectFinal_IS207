import React from "react";
import { Card, Col, Row, Typography, Button } from "antd";
const { Title, Paragraph } = Typography;
export default function Contact() {
  return (
    <div className="w-full h-[100vh] relative bg-contact bg-cover after:content-[' '] after:absolute after:bg-black after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-10 after:opacity-40">
      <Col
        span={12}
        offset={12}
        className="absolute top-[18vh] left-0 right-0 bottom-0  z-20"
      >
        <Title className="text-[#ffc0cb] md:text-[2rem] text-[1.5rem] font-bold">
          Liên Hệ Với Chúng Tôi
        </Title>
        <div className="flex items-center">
          <Paragraph className="text-[#fff] pr-10 text-[0.9rem] md:text-[1.2rem] pr-10 font-normal ">
            Chúng tôi có thể giúp gì cho bạn? Liên hệ ngay:
            <Paragraph className="text-[#ffc0cb] text-[0.8rem] md:text-[1rem] mx-2 ">
              (+84) 079 555 555
            </Paragraph>
          </Paragraph>
        </div>
        <div className="flex h-[2.5rem] md:w-[15rem] w-[12rem] justify-between">
          <Button className="text-[#fff] bg-[#000000] md:w-[7rem] md:h-[2.4rem] w-[5rem] h-[2rem] flex justify-center items-center rounded-md ">
            Dịch vụ
          </Button>
          <Button className="text-[#E7596D] bg-[#fff] md:w-[7rem] md:h-[2.4rem] w-[5rem] h-[2rem] flex justify-center items-center rounded-md ">
            Liên hệ
          </Button>
        </div>
      </Col>
    </div>
  );
}
