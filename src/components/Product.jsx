import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { addToCart, removeFromCart } from "../redux/cart";
import { handleLike } from "../redux/favorite";

const ProductBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 250px;
  width: 100%;
  height: 480px;
`;

const ProductImg = styled.img`
  width: 100%;
  max-height: 300px;
  height: 100%;
  margin-bottom: 1em;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 0.5em;
  text-transform: capitalize;
  color: #17171a;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductInfo = styled.p`
  font-size: 18px;
  color: #000;
`;

const ProductBtn = styled.button`
  width: 100%;
  height: 50px;
  border: ${({ select }) => (select ? "3px solid #618a53" : "#f5f5ef ")};
  background: ${({ select }) => (select ? "#f5f5ef" : "#39672a ")};
  color: ${({ select }) => (select ? "#618a53" : "#f5f5ef ")};
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 500;
  cursor: pointer;
  transition: 0.4s;
  margin-top: auto;
`;

const ProductButtonLike = styled.button`
  position: absolute;
  top: 3%;
  right: 5%;
  font-size: 22px;
  border: none;
  outline: none;
  background: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #618a53;
  cursor: pointer;
`;

const Product = ({ data, select, like }) => {
  const dispatch = useDispatch();

  const handleSelected = () => {
    dispatch(select ? removeFromCart(data.id) : addToCart(data));
  };
  const handleSelectLike = () => dispatch(handleLike(data));

  return (
    <ProductBlock key={data.id}>
      <ProductButtonLike onClick={handleSelectLike}>
        {like ? <AiFillHeart /> : <AiOutlineHeart />}
      </ProductButtonLike>
      <ProductImg src={data.img} alt="" />
      <ProductText>{data.name}</ProductText>
      <ProductItem>
        <ProductInfo>{data.info}</ProductInfo>
        <ProductPrice>{data.price} сум</ProductPrice>
      </ProductItem>
      <ProductBtn select={select} onClick={handleSelected}>
        {select ? "added" : "В корзину"}
      </ProductBtn>
    </ProductBlock>
  );
};

export default Product;
