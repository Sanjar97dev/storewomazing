import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style/shop.css'
import { Link, NavLink } from 'react-router-dom'
import { t } from 'i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getShop } from '../redux/slice/shopSlice'


const Shop = () => {

  const { products, loading, error } = useSelector(state => state.shop)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getShop())
  }, [])

  console.log(products);



  if (products === null) {
    return <h1>Loading</h1>;
  }

  return (
    <section className='products'>
      <div className="container">
        <div className="products__block">

          <div className="products__title">
            <h1>{t("Магазин")}</h1>
            <span><Link to='/'>{t("Главная")}</Link></span>
            -
            <span><Link to='/shop'>{t("Магазин")}</Link></span>
          </div>


          <div className="products__block__menu">

            <div className="products__block__category">
              <button type="button" className="btn btn-light">{t("Все")}</button>
              <button type="button" className="btn btn-light">{t("Пальто")}</button>
              <button type="button" className="btn btn-light">{t("Свитшоты")}</button>
              <button type="button" className="btn btn-light">{t("Кардиганы")}</button>
              <button type="button" className="btn btn-light">{t("Толстовки")}</button>
            </div>

            <span className='products__shot'>{t("Показано: 9 из 12 товаров")}</span>

            <div className="products__img__section">
              <div className="products__block__img">
                {products.slice(0, 9).map((product) => (
                  <NavLink to={`/detail/${product.id}`} key={product.id}>
                    <div className='products__img'>
                      <img src={product.img} alt="ProductImg" />
                      <h3>{t(product.name)}</h3>
                      <p>{product.price} $</p>
                    </div>
                  </NavLink>
                ))}
              </div>

              <div className="products__block__img">
                {products.slice(0, 9).map((product) => (
                  <NavLink to={`/detail/${product.id}`} key={product.id}>
                    <div className='products__img'>
                      <img src={product.img} alt="ProductImg" />
                      <h3>{t(product.name)}</h3>
                      <p>{product.price} $</p>
                    </div>
                  </NavLink>
                ))}
              </div>

              <div className="products__block__img">
                {products.slice(0, 9).map((product) => (
                  <NavLink to={`/detail/${product.id}`} key={product.id}>
                    <div className='products__img'>
                      <img src={product.img} alt="ProductImg" />
                      <h3>{t(product.name)}</h3>
                      <p>{product.price} $</p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            <span className='products__shot'>{t("Показано: 9 из 12 товаров")}</span>

            <div className="products__button">
              <button className='btn btn-light'>1</button>
              <span>
                <button className='btn btn-light'>2</button>
                <button id='btnStrelka' className='btn btn-light'><i className="bi bi-arrow-right"></i></button>
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Shop