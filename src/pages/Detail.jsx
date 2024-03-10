import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style/detail.css';
import { t } from 'i18next'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/slice/cartSlice';



const Detail = ({ addToCard }) => {
  const params = useParams();
  // const [product, setProduct] = useState(null);

  // async function getProduct() {
  //   const { data } = await axios.get(url + '/' + params.ProductId)
  //   console.log('Product Data:', data);
  //   setProduct(data)
  // }

  const {product, loading, error} = useSelector(state=> state.carts)
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct(params.ProductId))
  }, [dispatch, params.ProductId])



  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  if (!product) {
    return <h1>Cart data not available</h1>;
  }
  

  const handleAddToCart = (product) => {
    addToCard(product);
  };

  console.log(product);
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
              <img src={product.img} alt={product.name} />
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

