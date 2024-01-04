import React from "react";
import { Image, Breadcrumb, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import imgAboutme from "../images/cfco.jpg";
import { Link } from "react-router-dom";
import Story1 from "../images/stories/MoriiChuyen1.jpg"
import Story2 from "../images/stories/MoriiChuyen2.jpg"
import Story3 from "../images/stories/MoriiChuyen3.jpg"
import Story4 from "../images/stories/MoriiChuyen4.jpg"
const About = () => {
  return (
    <div className="w-full max-w-5xl mx-auto h-full ">
      <Breadcrumb className="pt-20 mb-5 text-base">
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Câu chuyện</Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-full mb-5">
        <img
          src={imgAboutme}
          alt="Ảnh blog"
          className="w-full h-[50vh] block object-cover"
        />
      </div>

      <Title level={2} className="mt-5 text-[#E7596D]">
        CÂU CHUYỆN CỦA BLOOMSY FLOWER SHOP
      </Title>
      <p>01/12/2023</p>
      <Title level={5} className="mt-5">
        Là "điểm đến" của những tâm hồn yêu hoa trên khắp thế giới,
        hoa tươi là một phần không thể thiếu trong cuộc sống
        hàng ngày của mọi người. Chúng tôi tin rằng việc bắt đầu
        một ngày mới với sự tinh tế của hoa tươi sẽ mang lại cho
        bạn không gian thoải mái và tận hưởng những giây phút yên bình.
      </Title>
      <div>
        <p className="text-[1rem]">
          Tại Bloomsy, chúng tôi không ngừng sáng tạo để mang đến cho khách
          hàng những trải nghiệm cảm xúc khác biệt về vẻ đẹp của hoa tươi
          Việt Nam. Sứ mệnh của chúng tôi là khơi dậy trí tưởng tượng và tạo
          nên những khoảnh khắc đẹp đẽ, phản ánh tâm huyết và sự sáng tạo
          của đội ngũ nhân viên chúng tôi.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>
          <Image
            className="w-4/5 mx-auto"
            src={Story1}
          />
        </p>
        <p className="text-[1rem]">
          Chúng tôi chọn lựa những bông hoa tươi tinh khôi,
          tinh tế và sắp xếp chúng một cách tự nhiên,
          tạo nên những bức tranh hoa tươi sống động như một tác phẩm nghệ thuật.
          Khám phá sự kết hợp của màu sắc, hương thơm quyến rũ, và vẻ đẹp tinh tế
          của hoa tươi mỗi ngày tại cửa hàng của chúng tôi.
        </p>
        <p>
          <img
            className="w-4/5 mx-auto"
            src={Story2}
          />
        </p>
        <p className="text-[1rem]">
          Bloomsy tự hào mang đến không gian ấm áp,
          tươi mới và tràn đầy sức sống qua từng bó hoa,
          lẵng hoa tươi mà chúng tôi tạo ra.
          Hãy đến và trải nghiệm không gian thú vị này,
          nơi chúng tôi lan tỏa và truyền cảm hứng bằng trái tim của mỗi thành viên.
          Hoa tươi của chúng tôi không chỉ là sản phẩm,
          mà là biểu tượng của sự tinh tế và sự đẹp đẽ,
          giúp bạn tận hưởng những khoảnh khắc đẹp nhất trong cuộc sống.
        </p>
        <p className="text-[1rem]">
          <img
            className="w-4/5 mx-auto"
            src={Story3}
          />
        </p>
        <p className="text-[1rem]">
          Ngoài ra, Bloomsy còn chú trọng đến việc tạo ra
          những trải nghiệm mua sắm độc đáo và đáng nhớ
          cho khách hàng. Không gian của cửa hàng được thiết
          kế như một ngôi nhà của những bông hoa, nơi bạn có
          thể lang thang giữa các loại hoa độc đáo và cảm nhận
          mùi hương dễ chịu của từng loại hoa.
        </p>
        <p className="text-[1rem]">
          <img
            className="w-4/5 mx-auto"
            src={Story4}
          />
        </p>
      </div>

      <div className="w-full text-[#E7596D] flex justify-end">
        <p>Bloomsy Flower Shop</p>
      </div>
    </div>
  );
};

export default About;
