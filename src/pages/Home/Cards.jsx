
const Cards = ({ card }) => {
    const { estate_title, image, status, price, area, location } = card;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img className="w-[420px] h-[210px] p-3 rounded-2xl" src={image} /></figure>
        
        <div className="card-body mx-0">
          <h2 className="card-title text-2xl">{estate_title}</h2>
          <hr />
         <div className="flex gap-10 text-lg font-semibold">
         <div>
         <p>status: <span>{status}</span></p>
         </div>
          <div>
          <p>Price: <span>{price}</span></p>
          </div>
          </div>
            <h5 className="text-lg font-semibold">area : {area}</h5>
            <hr />
            <p className="text-lg font-semibold">Location :- {location}</p>
          <div className="card-actions justify-end">
            <button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500">View Property</button>
          </div>
        </div>
      </div>
    );
};

export default Cards;