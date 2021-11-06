import './pet.style.scss';

const Pet = ({name,age,gender,race,images,location}) =>{
    

    return(
        <div className="container">
            <img className="image" src={images[0]} alt="Poza" />
            <i class="far fa-heart favorite"></i>
            <h3 className="pet-name">{name}</h3>
            <p className="race">{race}</p>
            
            <p className="row">{gender? "Female" : "Male"}, {age}</p>
                     

            <p className="location">{location}</p>
            
        </div>
    )
}

export default Pet;