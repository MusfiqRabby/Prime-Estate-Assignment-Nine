import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const RealEstate = () => {

    const [cards, setCards] = useState([]);

    useEffect(() =>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setCards(data))


    },[])


    return (
        <div className='my-16'>
            <div class="text-center py-2 border-y mx-auto items-center bg-base-200 my-4 ">
                <h4 class="text-xl lg:text-3xl font-extrabold">Real Estate</h4>
            </div>
            
        <div className='grid grid-cols-3 gap-7'>
      {
         cards.map(card => <Cards key={card.id} card={card}></Cards> )
     }

     </div>


        </div>
    );
};

export default RealEstate;