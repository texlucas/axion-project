import React, { useState, useEffect } from 'react';
import style from './Home.module.css';
import logo from '../../imgs/assets/logo.png';
import List from '../../Components/List/List';

const Home = () => {
   const [currentPage, setCurrentPage] = useState('foods');
    const [allData, setAllData] = useState({
        people: [],
        foods: [],
        places: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [peopleRes, foodsRes, placesRes] = await Promise.all([
                    fetch('http://localhost:1337/pessoas'),
                    fetch('http://localhost:1337/comidas'),
                    fetch('http://localhost:1337/lugars')
                ]);

                const [peopleJson, foodsJson, placesJson] = await Promise.all([
                    peopleRes.json(),
                    foodsRes.json(),
                    placesRes.json()
                ]);

                  console.log('PESSOAS:', peopleJson);
                console.log('COMIDAS:', foodsJson);
                console.log('LUGARES:', placesJson);

                setAllData({
                    people: peopleJson.map(item => ({
                        name: item.name,
                        link: `http://localhost:1337${item.link[0]?.url}`
                    })),
                    foods: foodsJson.map(item => ({
                        name: item.name,
                        link: `http://localhost:1337${item.link[0]?.url}`
                    })),
                    places: placesJson.map(item => ({
                        name: item.name,
                        link: `http://localhost:1337${item.link[0]?.url}`
                    })),
                });
            } catch (err) {
                console.error('Erro ao buscar dados:', err);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div className={style.container}>
            <header className={style.header}>
                <img src={logo} alt="Logo" className={style.logo} />
                <div className={style.buttonsContainer}>
                    <button onClick={() => setCurrentPage('foods')} className={currentPage === 'foods' ? style.active : ''}>FOODS</button>
                    <button onClick={() => setCurrentPage('people')} className={currentPage === 'people' ? style.active : ''}>PEOPLE</button>
                    <button onClick={() => setCurrentPage('places')} className={currentPage === 'places' ? style.active : ''}>PLACES</button>
                </div>
            </header>

            <main className={style.body}>
                <List title={`List of ${currentPage}`} items={allData[currentPage]} />
            </main>
        </div>
    );
};

export default Home;