import './pet.style.scss'

const Pet = ({key,name,age,gender,race,images,location}) =>{
    

    return(
        <div className="container">
            <div className="image">
                <img src={images[0]} alt="Poza" />
            </div>

            <i className="favorite"></i>
            <h3 className="pet-name">{name}</h3>
            <p className="race">{race}</p>
            <div className="row">
                <p className="text">{gender}, {age}</p>
            </div>            

            <div className="location-container">
                <p className="location">{location}</p>
            </div>
        </div>
    )
}

export default Pet;