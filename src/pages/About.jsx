import React, { useState } from 'react'
import './style/about.css'
import { Link } from 'react-router-dom';
import ideaWomen from '../img/about/ideawomen.svg'
import magia from '../img/about/magia.svg'
import { t } from 'i18next'

const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="about__block">

          <div className="about__title">
            <h2>{t("O бренде")}</h2>
            <span><Link to='/'>{t("Главная")}</Link></span>
            -
            <span><Link to='/shop'>{t("O бренде")}</Link></span>
          </div>

          <div className="about__block__section">


            <div className="about__block__idea">
              <img src={ideaWomen} alt="" />
              

              <div className="about__idea__text">
                <h3>{t("Идея и женщина")}</h3>
              <p>{t("Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.")}<br /> {t("Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.")} </p>
              </div>
              
            </div>
            <div className="about__block__magia">
              
              <div className="about__magia__text">
                  <h3>{t("Магия в деталях")}</h3>
                  <p>{t("Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.")}<br/> {t("Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.")} </p>
              </div>
            
              <img src={magia} alt="" />
            </div>

          <div className='about-button'>
            <button className='btn btn-success'>{t("Перейти в магазин")}</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About