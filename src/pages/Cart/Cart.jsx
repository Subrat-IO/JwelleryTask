import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import {
  Wrapper, Title, EmptyText, Item, Img, Info, Name, Price,
  QtyBox, QtyBtn, QtyInput, RemoveBtn, Footer, Total, CheckoutBtn, ClearBtn
} from "./styles";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart } = useContext(CartContext);
  const { valueOf } = useContext(CurrencyContext);

  const totalUSD = cart.reduce((s, it) => s + it.product.priceUSD * it.qty, 0);
  const total = valueOf(totalUSD);

  return (
    <Wrapper>
      <Title>YOUR CART</Title>

      {cart.length === 0 ? (
        <EmptyText>Your cart is empty ✨</EmptyText>
      ) : (
        <>
          {cart.map((it, idx) => {
            const p = it.product;
            const price = valueOf(p.priceUSD * it.qty);
            return (
              <Item key={idx}>
                <Img src={p.image} alt={p.title} />

                <Info>
                  <Name>{p.title}</Name>
                  <Price>{price.currency} {price.amount}</Price>
                </Info>

                <QtyBox>
                  <QtyBtn onClick={() => updateQty(idx, it.qty - 1)}>-</QtyBtn>
                  <QtyInput
                    value={it.qty}
                    readOnly
                  />
                  <QtyBtn onClick={() => updateQty(idx, it.qty + 1)}>+</QtyBtn>
                </QtyBox>

                <RemoveBtn onClick={() => removeFromCart(idx)}>✕</RemoveBtn>
              </Item>
            );
          })}

          <Footer>
            <Total>Total: {total.currency} {total.amount}</Total>

            <div>
              <CheckoutBtn onClick={() => alert("Mock checkout")}>
                Checkout
              </CheckoutBtn>
              <ClearBtn onClick={clearCart}>
                Clear Cart
              </ClearBtn>
            </div>
          </Footer>
        </>
      )}
    </Wrapper>
  );
}
