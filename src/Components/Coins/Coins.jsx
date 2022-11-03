import React, { useState, useEffect } from 'react';

import { coinApi } from '../../api/api';
import Coin from './Coin/Coin';

import './coins.scss';
import SearchBar from './../SearchBar/SearchBar';

const Coins = () => {

    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(keyword.toLowerCase())
    );

    useEffect(() => {
        const fetchAllExchanges = async () => {
            setLoading(true)
            const data = await coinApi.getAllExchanges(page);
            setCoins([...coins, ...data]);
            setLoading(false)
        };
        fetchAllExchanges(page)
    }, [page])

    const loadMore = () => {
        setPage(page + 1);
    }

    return (
        <div className='content'>
            <div className='header'>
                <h1>Welcome to the CoinBase</h1>
                <SearchBar keyword={keyword} setKeyword={setKeyword} />
            </div>
            {loading && !coins ? <h1>Loading...</h1> : filteredCoins.map((coin) => (
                <Coin coins={coin} key={coin.id} />
            ))}
            {loading ? <h1 style={{ margin: '3rem' }}>Loading...</h1> :
                !keyword ? <button className='btn' onClick={loadMore}>More coins</button> : null
            }
        </div>
    )
}

export default Coins