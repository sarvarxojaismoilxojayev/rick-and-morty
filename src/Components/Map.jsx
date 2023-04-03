<div className="items">
     {product.map((i) => {
       const active = () => {
         if (i.status === "Alive") {
           return "green";
         } else if (i.status === "Dead") {
           return "dead";
         } else if (i.status === "unknown") {
           return "uncown";
         }
       };
       return (
         <div className="catalog" key={crypto.randomUUID()}>
           <img src={i.image} alt="" className="img-item" width="260px" />
           <div className="inf">
             <span className={active()}>{i.status}</span>
             <span className="name h2 d-block">{i.name}</span>
             <span className="location d-block mt-4">Last Location</span>
             <span className="d-block h5 mt-1">{i.location?.name}</span>
             <Link className="link text-decoration-none btn btn-primary">
               More
             </Link>
           </div>
         </div>
       );
     })}
   </div> 