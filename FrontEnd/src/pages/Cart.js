import { Col, Row, InputNumber, Button, Image, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import order1 from "../images/products/order1.png";
import order2 from "../images/products/order2.png";
import Product from "../components/productInCart/product";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCard } from "../reducer/product/productSlice";
import { PurchaseApi } from "../api/PurchaseApi";
import emptyCart from "../images/empty-cart.svg";
import { getKhuyenMaiAction } from "../reducer/admin/khuyenmai/khuyenmaiAction";

const { Meta } = Card;

const calculateCartValues = (items, selectedKhuyenmai) => {
  const sumWithInitial = items.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0);
  const giaKM = sumWithInitial - (sumWithInitial * (selectedKhuyenmai?.phantramKM || 0)) / 100;
  const gia = (sumWithInitial * (selectedKhuyenmai?.phantramKM || 0)) / 100;

  return {
    prevKM: sumWithInitial,
    priceKM: gia,
    totalCart: giaKM,
  };
};

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, updateStatus, isLoading } = useSelector(
    (state) => state.user
  );
  const { selectedKhuyenmai, khuyenmais } = useSelector(
    (state) => state.khuyenmai_admin
  );
  const [quantityProduct, setQuantityProduct] = useState(1);
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems_state, setCarrItems_state] = useState(cartItems);
  const [totalCart, setTotalCart] = useState(0);
  const [priceKM, setPriceKM] = useState(0);
  const [phanTramKM, setPhanTramKM] = useState(0);
  const [prevKM, setPrevKM] = useState(0);
  var arrayInput = [];
  cartItems.map((item) => {
    if (item.MaPL !== 1) {
      arrayInput.push({
        MaSP: item.id,
        SoLuong: item.quantity,
        MaPL: item.MaPL,
      });
    } else {
      arrayInput.push({
        MaSP: item.id,
        SoLuong: item.quantity,
        MaPL: item.MaPL,
      });
    }
  });

  const handleClickCheckOut = async () => {
    if (user.role !== "khachhang") {
      var formData = { MaKH: user.id, list: arrayInput };
      console.log(formData);
      await PurchaseApi(formData);
      localStorage.removeItem("cartItems");
      navigate("/admin/hoadon");
    } else {
      navigate(`/purchase`, {
        state: { totalCart: totalCart, giaKM: priceKM, prevKm: prevKM },
      });
    }
  };

  const handleClickBuyNow = async () => {
    navigate("/sanpham");
  };

  useEffect(() => {
    dispatch(getKhuyenMaiAction());
  }, []);

  useEffect(() => {
    const { prevKM, priceKM, totalCart } = calculateCartValues(cartItems_state, selectedKhuyenmai);
    setPrevKM(prevKM);
    setPriceKM(priceKM);
    setTotalCart(totalCart);
  }, [cartItems_state, selectedKhuyenmai]);

  const handleDeleteItem = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCarrItems_state(updatedCartItems);
    dispatch(addProductToCard(updatedCartItems.length));

    const { prevKM, priceKM, totalCart } = calculateCartValues(updatedCartItems, selectedKhuyenmai);
    setPrevKM(prevKM);
    setPriceKM(priceKM);
    setTotalCart(totalCart);
  };

  const handleChangeItem = (cartItems_state, value, id) => {
    const { prevKM, priceKM, totalCart } = calculateCartValues(cartItems_state, selectedKhuyenmai);
    setPrevKM(prevKM);
    setPriceKM(priceKM);
    setTotalCart(totalCart);
  };

  return (
    <div className="container w-full mx-auto max-w-[900px] mb-10">
      <Breadcrumb className="pt-20 mb-5">
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/sanpham">Sản phẩm</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={2} className="text-black">
        Giỏ hàng
      </Title>

      <Row gutter={35} className="h-full">
        <Col className="h-full mb-10 " span={16}>
          <Row className="w-full h-[10vh] border-y-[0.01rem] border-solid border-[#CFCFCF] text-[#ABABAB] flex items-center justify-center ">
            <Col span={12}>PRODUCT DETAILS</Col>
            <Col className="flex justify-center" span={4}>
              QUANTITY
            </Col>
            <Col className="flex justify-center" span={4}>
              TOTAL
            </Col>
            <Col className="flex justify-center" span={4}>
              REMOVE
            </Col>
          </Row>
          {cartItems_state.map((item, index) => (
            <Product
              handleDeleteItem={handleDeleteItem}
              key={index}
              handleChangeItem={handleChangeItem}
              cartItems={cartItems}
              item={item}
              id={item.id}
              HinhAnh={item.HinhAnh}
            />
          ))}
          {cartItems_state.length === 0 && (
            <div className="flex flex-col justify-center items-center">
              <Image
                preview={false}
                className="w-[500px] h-[400px]"
                src={emptyCart}
              />
              <Button
                onClick={handleClickBuyNow}
                className="bg-[#E7596D] w-[150px] h-[75px] rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[1.25rem] font-bold"
              >
                MUA NGAY
              </Button>
            </div>
          )}
        </Col>
        <Col className="h-full " span={8}>
          <div className="w-full px-6 h-[75vh] border-[1px] border-solid border-[#F5F5F6] bg-[#F5F5F6] rounded-2xl ">
            <Title
              className="border-b-[0.01rem] border-solid border-[#C6BDBD] py-3 mt-3"
              level={5}
            >
              ORDER SUMMARY
            </Title>
            <div className="w-full border-b-[0.01rem] pb-16 border-solid border-[#C6BDBD] ">
              <div className="w-full flex mt-10 justify-between ">
                <p>Tổng Cộng</p>
                <p>{prevKM.toLocaleString()}</p>
              </div>
              <div className="w-full flex mt-10 justify-between ">
                <p>Khuyến mãi</p>
                <p>
                  {totalCart > 0 && selectedKhuyenmai && selectedKhuyenmai.phantramKM > 0
                    ? priceKM.toLocaleString()
                    : "__"}
                </p>
              </div>
            </div>
            <div className="w-full flex mt-10 justify-between ">
              <p>Thanh Toán</p>
              <p>{totalCart.toLocaleString()} VND</p>
            </div>
            {totalCart > 0 && (
              <Button
                onClick={handleClickCheckOut}
                className="bg-[#e7596d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold"
              >
                CHECKOUT
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
