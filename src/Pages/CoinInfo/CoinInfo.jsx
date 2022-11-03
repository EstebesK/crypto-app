import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { coinApi } from '../../api/api';
import cryptos from '../../Images/cryptobckg.jpeg';
import './coinInfo.scss';
import { Link } from 'react-router-dom';

const CoinInfo = () => {

  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoinDetail = async () => {
      setLoading(true)
      const data = await coinApi.getCoinDetail(id);
      setItem(data);
      setLoading(false)
    };
    fetchCoinDetail()
  }, [id])


  return (
    <div className='banner' style={{ backgroundImage: `url(${cryptos})` }}>
      {loading ? <h1>Loading...</h1> :
        <div className='card content'>
          <h1 className='card-title'>{item.name?.toUpperCase()}</h1>
          <img src={item.image?.large} alt='coin' className='card-logo' />
          <div>
          </div>
          <div className='card-info'>
            <div className='card-info__names'>
              <p>Symbol: </p>
              <p>Current Price: </p>
              <p>Market Cap: </p>
              <p>Total Volume: </p>
              <p>Price Change 24h: </p>
            </div>
            <div className='card-info__values'>
              <p>{item.symbol}</p>
              <p>${item.market_data?.current_price.usd.toLocaleString()}</p>
              <p>${item.market_data?.market_cap.usd.toLocaleString()}</p>
              <p>${item.market_data?.total_volume.usd.toLocaleString()}</p>
              {item.market_data?.price_change_24h_in_currency.usd <= 0 ?
                <p className='card-info__values--red'>${item.market_data?.price_change_24h_in_currency.usd.toLocaleString()}</p>
                : <p className='card-info__values--green'>${item.market_data?.price_change_24h_in_currency.usd.toLocaleString()}</p>
              }
            </div>
          </div>
          <Link to={`/`}>
            <button>Back</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default CoinInfo