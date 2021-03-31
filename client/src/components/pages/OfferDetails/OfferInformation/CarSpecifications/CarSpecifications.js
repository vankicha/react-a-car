import './CarSpecifications.scss';

const CarSpecifications = ({ offer }) => {
    return (
        <div className='car-specifications'>
            <p>
                Brand: <span>{offer.brand}</span>
            </p>
            <p>
                Model: <span>{offer.model}</span>
            </p>
            <p>
                Year: <span>{offer.year}</span>
            </p>
            <p>
                Price: <span>${offer.pricePerHour}/hour</span>
            </p>
            <p>
                Status:
                <span className={`status ${!offer.isAvailable && 'forbidden'}`}>
                    {!offer.isAvailable && 'NOT'} AVAILABLE
                </span>
            </p>
        </div>
    );
};

export default CarSpecifications;
