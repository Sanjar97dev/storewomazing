import React from 'react';
import './style/cart.css';
import { Link } from 'react-router-dom';
import { t } from 'i18next'

const Cart = ({ cart, removeFromCart, addPlusCart, addMinusCart, total }) => {
  const formattedTotal = isNaN(total) ? '$0.00' : total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });


  return (
    <section className='cart'>
      <div className="container">
        <div className="cart__block">

          <div className="cart__block__title">
            <h1>{t("Корзина")}</h1>
            <span><Link to='/'>{t("Главная")}</Link></span>
            -
            <span><Link to='/shop'>{t("Корзина")}</Link></span>
          </div>

          <div className="cart__block__section">

            <div className="cart__block__menu">
              <h4>{t("Товар")}</h4>
              
              <h4>{t("Количество")}</h4>
              <h4>{t("Всего")}</h4>
            </div>
            <br />
            <hr />

            <div className="cart__block__counts">
              {cart.map(item => (
                <div className='cart__block__count' key={item.id}>
                  <button id='countBtn' className='btn btn-light' onClick={() => removeFromCart(item.id)}>x</button>
                  <img src={item.img} alt="Product" />
                  <h5>{item.name}</h5>
                  <span onClick={() => addPlusCart(item)} className='btn btn-light'>+</span>
                  <span id='countBtn'>{item.count || 0} </span>
                  <span onClick={() => addMinusCart(item)} className='btn btn-light'>-</span>
                  <h5>{(item.count * item.price ||0).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h5>
                </div>
              ))}
            </div>

            <div className="cart__block__cupon">
              <input type="text" placeholder={t("Введите купон")} />
              <button className='btn btn-light'>{t("Применить купон")}</button>
              <button className='btn btn-light'>{t("Обновить корзину")}</button>
            </div>

            <div className="cart__section__total">
              <div className="cart__block__total">
                <h3>{t("Подытог:")} {formattedTotal}</h3>
                <div className="total__pod">
                  <div className='total'><h3>{t("Итого:")} {formattedTotal}</h3></div>
                  <button className='btn btn-light'>{t("Оформить заказ")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
