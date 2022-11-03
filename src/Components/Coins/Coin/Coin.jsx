import React from 'react'

import './coin.scss';
import { Link } from 'react-router-dom';
import CoinInfo from '../../../Pages/CoinInfo/CoinInfo';

const Coin = ({ coins }) => {
    return (
        <Link className='coin' to={`/${coins.id}`} element={<CoinInfo />} key={coins.id}>
            <div className='coin-label'>
                <img src={coins.image} alt='coin-logo' className='coin-image' />
                <div className='coin-name'>
                    <h4>{coins.name}</h4>
                    <h3>{coins.symbol.toUpperCase()}</h3>
                </div>
            </div>
            <div className='coin-info'>
                <p className='coin-price'>${coins.current_price.toLocaleString()}</p>
                {coins.price_change_percentage_24h > 0 ?
                    <p className='coin-change--green'>
                        {coins.price_change_percentage_24h.toFixed(2)}%</p> :
                    <p className='coin-change--red'>{coins.price_change_percentage_24h.toFixed(2)}%</p>}
                <p className='coin-total hide-mobile'>${coins.total_volume.toLocaleString()}</p>
                <p className='coin-cap hide-mobile'>${coins.market_cap.toLocaleString()}</p>
            </div>
        </Link>
    )
}

export default Coin