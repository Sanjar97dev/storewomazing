import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style/contacts.css'
import axios from 'axios'
import {t} from 'i18next'

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
  
      if (response.status === 201) {
        setSuccessMessage('Сообщение успешно отправлено');
        console.log(response);
      } else {
        console.error('Error submitting form:', response.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__block">
          <div className="contacts__title">

            <h2>{t("Контакты")}</h2>
            <span><Link to='/'>{t("Главная")}</Link></span>
            -
            <span><Link to='/shop'>{t("Контакты")}</Link></span>
          </div>

          <div className="contacts__block__section">

            <div className="contacts__carta__block">
              <span>{t("Карта с любой точкой")}</span>
            </div>

            <div className="contacts__connect">
              <div className="contacts__phone">
                <h4>{t("Телефон")}</h4>
                <a href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a>
              </div>

              <div className="contacts__email">
                <h3>E-mail</h3>
                <a href="mailto:info@sitename.com">info@sitename.com</a>
              </div>

              <div className="contacts__address">
                <h3>{t("Адрес")}</h3>
                <address>{t("г. Москва, 3-я улица Строителей, 25")}</address>
              </div>
            </div>

            <div className="contacts__form">

              <h3>{t("Напишите нам")}</h3>

              <form onSubmit={handleSubmit}>
                <div className="contacts__word">
                  <input
                    type="text"
                    placeholder={t("Имя")}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <hr />
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <hr />
                  <input
                    type="tel"
                    placeholder={t("Телефон")}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <hr />
                  <input
                    type="text"
                    placeholder={t("Сообщение")}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <hr />

                  <button type="submit" className="btn btn-success">
                    {t("Отправить")}
                  </button>
                </div>
              </form>

              {successMessage && (
                <div className="successMessage">
                  <h4>{t(successMessage)}</h4>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts