import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import logo from '../../img/icons/logo.svg'
import visa from '../../img/important/visa-mastercard 1.svg'
import { t } from 'i18next'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">

      <div className="footer__block">

        <div className="footer__logo">  
          <img src={logo} alt="Logo" />
          <h1>Womazing</h1>
        </div>

        <div className="footer__nav__block">
          <ul>
            <li><Link to='/'>{t("Главная")}</Link></li>
            <li><Link to='/shop'>{t("Магазин")}</Link></li>
            <li><Link to='/about'>{t("O бренде")}</Link></li>
            <li><Link to='/contacts'>{t("Контакты")}</Link></li>
          </ul>
        </div>

        <div className="footer_korzina_block">
          <span className='phone'>
            +7 (495) 823-54-12
          </span>
        </div>

      </div>

      <div className="footer__text__block">
        <div className="footer__text__one">
          <h4>{t("© Все права защищены")}</h4>
          <h4>{t("Политика конфиденциальности")}</h4>
          <h4>{t("Публичная оферта")}</h4>
        </div>

        <div className="footer__text__two">
          <h5>{t("Пальто")}</h5>
          <h5>{t("Свитшоты")}</h5>
          <h5>{t("Кардиганы")}</h5>
          <h5>{t("Толстовки")}</h5>
        </div>

        <div className="footer__text__three">
          <a href="!#">hello@womazing.com</a>

          <div className="social">
            
            <a href="https://instagram.com/"><i className="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="bi bi-twitter"></i></a>
            
          </div>

          <img src={visa} alt="Visa" />
        </div>

      </div>
    </div>
    </footer >
  )
}

export default Footer