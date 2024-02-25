import React, { useEffect, useState } from 'react'
import './style/home.css'
import fashion1 from '../img/hero/dmitriy-7DD6tfTKqS4-unsplash 1.svg'
import fashion2 from '../img/hero/ionut-comanici-RDcEWH5hSDE-unsplash 1.svg'
import fashion3 from '../img/hero/Фото третьестепенное.svg'
import serviceImg from '../img/important/adam-winger-fI-TKWjKYls-unsplash 1.svg'
import ptichka from '../img/important/ptichka.svg'
import edit from '../img/important/edit.svg'
import arm from '../img/important/arm.svg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { t } from 'i18next'
const url = 'https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name';
const Home = () => {
  const [products, setProducts] = useState(null)
  const [service, setService] = useState([
    { img: ptichka, title: t("Качество"), description: t("Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества") },
    { img: edit, title: t("Скорость"), description: t("Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах") },
    { img: arm, title: t("Ответственность"), description: t("Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing") }
  ])
  async function getShop() {
    const { data } = await axios.get(url)
    setProducts(data)
  };

  useEffect(() => {
    getShop()
  }, [])

  if (products === null) {
    return <h1>Loading</h1>
  }
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="hero__block">

            <div className="hero__text__block">
              <h1>{t("Новые поступления")}<br /> {t("в этом сезоне")}</h1>

              <p>{t("Утонченные сочетания и бархатные")}<br /> {t("оттенки - вот то, что вы искали в этом")}<br /> {t("сезоне. Время исследовать.")}</p>

              <span className='hero__btns'>
                <button className='btn btn-secondary'><i className="bi bi-arrow-down"></i></button>
                <button className="btn btn-success"> <Link to='/'>{t("Открыть магазин")}</Link> </button>
              </span>

            </div>

            <div className="hero__img__block">
              <img className="fashion1" src={fashion1} alt="Fashion1" />
              <img className="fashion2" src={fashion2} alt="Fashion2" />
              <img className="fashion3" src={fashion3} alt="Fashion3" />
            </div>

          </div>
        </div>
      </section>

      <section className="product">
        <div className="container">

          <div className="product__block">
            <h1>{t("Новая коллекция")}</h1>

            <div className="product__block__section">
              <div className="product__block__one">
                {products.map((product) => (
                  <Link to={`/detail/${product.id}`} key={product.id}>
                    <div>
                      <img src={product.img} alt="product" />
                      <h3>{t(product.name)}</h3>
                      <p>{product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <span>
                <button className='btn btn-light'>{t("Открыть магазин")}</button>
              </span>
            </div>

          </div>
        </div>
      </section>

      <section className="service">
        <div className="container">
          <div className="service__block">
            <h1>{t("Что для нас важно")}</h1>
            <div className="service__block__section">
              {service.map((el) => (
                <div className='service__block__one' key={el.title}>
                  <img src={el.img} alt="" />
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="command">
        <div className="container">
          <div className="command__block">
            <h1>{t("Команда мечты Womazing")}</h1>
            <div className="command__block__section">
              <img src={serviceImg} alt="ServiceImg" />

              <span><i className="bi bi-arrow-right"></i></span>

              <div className="service__block__text">
                <h3>{t("Для каждой")}</h3>

                <p>{t("Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.")}<br /><br />
                  {t("Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.")}</p>

                <h5>{t("Подробнее о бренде")}</h5>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home