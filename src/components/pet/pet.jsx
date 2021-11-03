import './pet.style.scss'

const Pet = () =>{
    

    return(
        <div className="container">
            <div className="image">
                
            </div>

            <i className="favorite"></i>
            <h3 className="pet-name">Alex</h3>
            <p className="race">Doberman</p>
            <div className="row">
                <p className="text">gender, years</p>
            </div>            

            <div className="location-container">
                <p className="location">Craiova</p>
            </div>
        </div>
    )
}

export default Pet;