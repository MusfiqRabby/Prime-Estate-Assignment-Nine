import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);
    console.log(card);

    return (
        <div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:mb-5">
        <div>
          <img src={card.image} alt="" />
        </div>
        <div>
          <h1 className="text-4xl font-bold lg:mb-2 text-indigo-500 hover:text-slate-400">
            {card.estate_title}
          </h1>
          <hr />
          <p className="my-2">Status <span className='font-bold text-lg'>: {card.status} </span> </p>
          <hr />
          <h4 className="mt-4">
            <span className="font-bold ">Description:</span> {card.description}
          </h4>
          <div>
          <div>
             <p className="font-medium lg:mb-3">Price: {card.price}</p>
          </div>
          </div>
          <hr />
          <div className="flex gap-8 mt-2">
            <div>
              <p className="opacity-80 mb-1">Area: </p>
              <p className="opacity-80 mb-1">Facilities: </p>
              <p className="opacity-80 mb-1">Location: </p>
              <p className="opacity-80 mb-1">Segment-Name: </p>
            </div>
            <div>
              <p className="font-bold mb-1">{card.area}</p>
              <p className="font-bold mb-1">{card.facilities.map(idx => <span className="text-[#23BE0A] lg:mr-2 ">{idx}</span>)}</p>
              <p className="font-bold mb-1">{card.location}</p>
              <p className="font-bold mb-1">{card.segment_name}</p>
            </div>
          </div>
       
        </div>
      </div>


        </div>
    );
};

export default Details;