import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './style/detail.css';
const url = 'https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name';
import { t } from 'i18next'



const Detail = ({ addToCard }) => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  async function getProduct() {
    const { data } = await axios.get(url + '/' + params.ProductId)
    console.log('Product Data:', data);
    setProduct(data)
  }

  useEffect(() => {
    getProduct();
  }, [])

  if (product === null) {
    return <h1> Loading </h1>
  }

  const handleAddToCart = (product) => {
    addToCard(product);
  };

  return (
    <section className='detail'>
      <div className="container">
        <div className="detail__block">
          <div className="detail__block__title">
            <h1>{product.name}</h1>
            <span><Link to='/'>{t("Главная")}</Link></span> - <span><Link to='/detail'>Свитшоты</Link></span> - <span>{product.name}</span>
          </div>

          <div className="detail__block__section">
            <div className="detail__section__product">
              <img src={product.img} alt="" />
              <div className="detail__block__text">
                <h4>{product.price}</h4>

                <div className="detail__block__button">
                  <h4>{t("Выберите размер")}</h4>
                  <div className='buttons__detail'>
                    <button className='btn btn-light'>S</button>
                    <button className='btn btn-light'>M</button>
                    <button className='btn btn-light'>L</button>
                    <button className='btn btn-light'>XL</button>
                    <button className='btn btn-light'>XL</button>
                  </div>

                </div>

                <div className="detail__color">
                  <h4>{t("Выберите цвет")}</h4>

                  <div className="color__detail">
                    <button className='brown'></button>
                    <button className='silver'></button>
                    <button className='pink'></button>
                    <button className='yellow'></button>
                  </div>

                </div>

                <div className="detail__corzin__btn">
                  <button id='rightArrow' className='btn btn-light'><i className="bi bi-arrow-right"></i></button>
                  <button onClick={()=>addToCard(product)} className='btn btn-light'>{t("Добавить в корзину")}</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;

