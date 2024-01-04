import { Button, Col, Image } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import React from "react";
import Input from "antd/lib/input/Input";
import Logo from "../images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  DoubleRightOutlined,
  FacebookFilled,
  GithubFilled,
  GooglePlusSquareFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#000]">
      <Col span={22} offset={1} className="h-full">
        {/* <div className="flex items-center h-[35vh] border-b-[0.01px] border-[#1d1f23] border-solid border-opacity-95 ">
          <div className="w-1/2 ">
            <Title className="text-[#146d4d]">Morii Coffee</Title>
            <Text className="w-2/3 text-[#fff] opacity-80">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
            </Text>
          </div>
          <div className="w-1/2 flex h-[8vh]">
            <Input
              className="rounded-md bg-[#fff]"
              placeholder="Enter your Email"
              size="large"
            />
            <Button className="text-center rounded-md h-auto w-[40vh] ml-5 text-xl text-[#fff] bg-[#146d4d] flex items-center justify-center border-none">
              Subscribe
            </Button>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row  items-center justify-center">
          <Col span={24} md={9} className="flex flex-col items-center md:items-start justify-center">
            <Image
              preview={false}
              className="cursor-pointer w-[10rem] h-[4rem] my-5"
              src={Logo}
            />
            <Text className="text-[#fff] w-[auto] my-5 pr-0 md:pr-20 text-left md:text-left sm:text-center">
              Bloomsy là một lời nhắc nhẹ nhàng đối với những người đến thăm, rằng trong thế giới ngoài kia, giữa nhịp sống nhanh chóng và hỗn loạn, vẫn tồn tại những khoảnh khắc của vẻ đẹp và bình yên. Hãy để Bloomsy đem lại cho bạn những khoảnh khắc ấy.
            </Text>
            <div className="flex my-5 block">
              <FacebookFilled className="text-[#fff] text-2xl mr-8 " />
              <LinkedinFilled className="text-[#fff] text-2xl mr-8 " />
              <TwitterSquareFilled className="text-[#fff] text-2xl mr-8 " />
              <GooglePlusSquareFilled className="text-[#fff] text-2xl mr-8 " />
              <GithubFilled className="text-[#fff] text-2xl mr-8 " />
            </div>
          </Col>
          <Col span={24} md={5}>
            <Title level={3} className="text-[#fff] mb-10 mt-8">
              Dịch vụ
            </Title>
            <div className="flex-col md:flex-row justify-between my-7">
              <div className="flex-col flex">
                <div className=" flex items-center my-2">
                  <Link to="/aboutme">
                    <DoubleRightOutlined className="text-[#fff]" />
                    <Text className="text-[#fff] ml-2">Câu chuyện</Text>
                  </Link>
                </div>
                <div className=" flex items-center my-2">
                  <Link to="/sanpham">
                    <DoubleRightOutlined className="text-[#fff]" />
                    <Text className="text-[#fff] ml-2">Sản phẩm</Text>
                  </Link>
                </div>
              </div>
              <div className="flex-col">
                <div className="flex items-center my-2">
                  <Link to="/blog">
                    <DoubleRightOutlined className="text-[#fff]" />
                    <Text className="text-[#fff] ml-2">Blog</Text>
                  </Link>
                </div>
                <div className="flex items-center my-2">
                  <Link to="/contact">
                    <DoubleRightOutlined className="text-[#fff]" />
                    <Text className="text-[#fff] ml-2">Liên Hệ</Text>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col span={24} md={6} offset={0} className=" self-center  ">
            <Title level={3} className="text-[#fff] mb-10 mt-7">
              Thông tin liên hệ
            </Title>
            <div className="flex-col block my-8">
              <Text className="text-[#CCCCCC] my-2 ">
                Địa chỉ: Hẻm 12/24 Đ. số 9, Linh Trung, Thủ Đức, TPHCM
              </Text>
              <div className="my-4">
                <Text className="text-[#CCCCCC] mr-2  ">Hotline:</Text>
                <Text className="text-[#fff]">+(84) 123 456 789</Text>
              </div>
              <div className="my-4">
                <Text className="text-[#CCCCCC] mr-2  ">Email:</Text>
                <Text className="text-[#fff]">bloomsyshop@gmail.com</Text>
              </div>
            </div>
          </Col>
        </div>
      </Col>
    </div>
  );
};

export default Footer;
