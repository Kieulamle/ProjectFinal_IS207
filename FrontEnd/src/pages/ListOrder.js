import Title from "antd/lib/typography/Title";
import { AudioOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Breadcrumb,
  Card,
  Col,
  Pagination,
  Row,
  Typography,
  Input,
  Space,
} from "antd";
import Meta from "antd/lib/card/Meta";
import order1 from "../images/products/order1.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api/bookApi";
import { fetchProduct } from "../reducer/product/productAction";
import axios from "axios";
import Search from "antd/lib/input/Search";
import {
  onFilterProduct,
  onPhanLoai,
  searchFilterChanged,
} from "../reducer/product/productSlice";
import { getKhuyenMaiAction } from "../reducer/admin/khuyenmai/khuyenmaiAction";
const Img = styled.img`
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  &:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform-y: scale(1.2);
    overflow-y: hidden;
  }
`;
const ListOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, currentPage } = useSelector((state) => state.product);
  const [isTatcaActiveFilter, setIsTatcaActiveFilter] = useState(true);
  const [isLangHoaActiveFilter, setIsLangHoaActiveFilter] = useState(false);
  const [isBoHoaActiveFilter, setIsBoHoaActiveFilter] = useState(false);
  const [isKhacActiveFilter, setIsKhacActiveFilter] = useState(false);
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(getKhuyenMaiAction());
    console.log(products);
  }, []);

  const handleClickProduct = async (e) => {
    console.log(e.target.id);
    const idProduct = e.target.id;
    const baseUrl = `http://localhost:8000/api/sanpham`;
    const res = await axios.get(`${baseUrl}/${idProduct}`);
    console.log("nek", res.data.sanpham);
    if (res.data.status) {
      navigate(`/sanpham/${idProduct}`, {
        state: { infoProduct: res.data.sanpham },
      });
    }
  };
  const onSearch = (e) => {
    dispatch(searchFilterChanged(e.target.value));
    dispatch(onFilterProduct(e.target.value));
    console.log(e.target.value);
  };
  const OnPageChange = (page, pageSize) => {
    console.log(page, pageSize);
    dispatch(onPhanLoai(0));
    setIsTatcaActiveFilter(true);
    setIsLangHoaActiveFilter(false);
    setIsBoHoaActiveFilter(false);
    setIsKhacActiveFilter(false);
    dispatch(fetchProduct(page));
  };

  const handleClickTatCa = () => {
    dispatch(onPhanLoai(0));
    setIsTatcaActiveFilter(true);
    setIsLangHoaActiveFilter(false);
    setIsBoHoaActiveFilter(false);
    setIsKhacActiveFilter(false);
  };
  const handleClickLangHoa = () => {
    dispatch(onPhanLoai(1));
    setIsTatcaActiveFilter(false);
    setIsLangHoaActiveFilter(true);
    setIsBoHoaActiveFilter(false);
    setIsKhacActiveFilter(false);
  };
  const handleClickBoHoa = () => {
    dispatch(onPhanLoai(2));
    setIsTatcaActiveFilter(false);
    setIsLangHoaActiveFilter(false);
    setIsBoHoaActiveFilter(true);
    setIsKhacActiveFilter(false);
  };

  const handleClickKhac = () => {
    dispatch(onPhanLoai(3));
    setIsTatcaActiveFilter(false);
    setIsLangHoaActiveFilter(false);
    setIsBoHoaActiveFilter(false);
    setIsKhacActiveFilter(true);
  };
  return (
    <div className="container  h-full mx-auto pt-20 max-w-[1024px]">
      <div className="mb-10 ">
        <Breadcrumb>
          <Breadcrumb.Item className="text-base">
            <Link to="/">Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Sản phẩm</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row>
        <Col className="flex-col" span={4}>
          <Title className="text-[1.5rem]">Sản phẩm</Title>
          <p
            onClick={handleClickTatCa}
            className={`cursor-pointer text-[1rem] ${isTatcaActiveFilter ? "font-bold" : ""
              }`}
          >
            Tất cả
          </p>
          <p
            onClick={handleClickLangHoa}
            className={`cursor-pointer text-[1rem] ${isLangHoaActiveFilter ? "font-bold" : ""
              }`}
          >
            Lẵng hoa
          </p>
          <p
            onClick={handleClickBoHoa}
            className={`cursor-pointer text-[1rem] ${isBoHoaActiveFilter ? "font-bold" : ""
              }`}
          >
            Bó hoa
          </p>
          <p
            onClick={handleClickKhac}
            className={`cursor-pointer text-[1rem] ${isKhacActiveFilter ? "font-bold" : ""
              }`}
          >
            Khác
          </p>
        </Col>
        <Col className="overflow-hidden" span={20}>
          <div className="flex ">
            <Title level={2}>Featured</Title>

            <Search
              className="pt-2"
              placeholder="Tìm kiếm sản phẩm"
              onChange={(e) => onSearch(e)}
              style={{
                marginLeft: "40px",
                width: 300,
              }}
            />
          </div>
          <Row
            gutter={35}
            className="border-t-[1px] pt-1 border-solid border-[#ABABAB] "
          >
            {products.map((product) => {
              if (product.MaPL == 4) return;
              return (
                <Col
                  key={product.id}
                  id={product.id}
                  onClick={(e) => handleClickProduct(e)}
                  span={8}
                >
                  <Card
                    id={product.id}
                    hoverable
                    className="  mx-0 my-5 rounded-lg h-[23rem]  "
                    bordered={true}
                    cover={
                      <div className="h-[15rem] overflow-hidden ">
                        <Img
                          id={product.id}
                          className=" hover:overflow-hidden h-[17rem] object-fit "
                          alt="example"
                          src={product.HinhAnh}
                        />
                      </div>
                    }
                  >
                    <Meta
                      id={product.id}
                      title={
                        <p className="whitespace-normal mb-0 text-[1.1rem]">
                          {product.TenSP}
                        </p>
                      }
                      description={
                        <p className="text-[1rem]">
                          {product.Gia.toLocaleString()} VND
                        </p>
                      }
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>

        <Row className="h-full w-full flex justify-end">
          <Pagination
            className="h-[10rem]  py-10 overflow-y-visible"
            defaultCurrent={1}
            total={20}
            onChange={(page, pageSize) => OnPageChange(page, pageSize)}
          />
        </Row>
      </Row>
    </div>
  );
};

export default ListOrder;
