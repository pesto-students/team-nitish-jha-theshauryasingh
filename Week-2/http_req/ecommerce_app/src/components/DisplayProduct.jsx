import './DisplayProduct.css';

function DisplayProduct ({title, price, description, image}) {
    return(
        <div className="card" >
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} - {price}</h5>
                <p className="card-text">{description}</p>
                <a className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default DisplayProduct;