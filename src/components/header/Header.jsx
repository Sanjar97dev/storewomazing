import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../img/icons/logo.svg'
import phone from '../../img/icons/telephone 1.svg'
import korzina from '../../img/icons/korzina.svg'
import { useTranslation } from 'react-i18next'

const Header = ({ cartCount, changeLang }) => {
    const { t } = useTranslation();
    return (
        <header className='header'>
            <div className="container">
                <div className="header__block">

                    <div className="header__logo">
                        <img src={logo} alt="Logo" />
                        <h1>Womazing</h1>
                    </div>

                    <div className="header__nav__block">
                        <ul>
                            <li><Link to='/'>{t("Главная")}</Link></li>
                            <li><Link to='/shop'>{t("Магазин")}</Link></li>
                            <li><Link to='/about'>{t("O бренде")}</Link></li>
                            <li><Link to='/contacts'>{t("Контакты")}</Link></li>
                        </ul>
                    </div>

                    <div className="header_korzina_block">
                        <span className='phone'>
                            <img src={phone} alt="Phone" />
                            +7 (495) 823-54-12
                        </span>

                        <Link to='/cart'><img className='korzinaImg' src={korzina} alt="Korzina" /><span className='korzina'>{cartCount || 0}</span></Link>

                    </div>

                    <div className="dropdown">
                        <button id='secondary' className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-globe"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a onClick={() => changeLang('en')} className="dropdown-item">English</a></li>
                            <li><a onClick={() => changeLang('ru')} className="dropdown-item">Russian</a></li>
                            <li><a onClick={() => changeLang('kg')} className="dropdown-item">Kyrgyz</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header