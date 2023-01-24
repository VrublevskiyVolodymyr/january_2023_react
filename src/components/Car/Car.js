import {carService} from "../../services";

const Car = ({car, setUpdateCar, setCars}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async (id) => {
        await carService.deleteById(id)
        await carService.getAll().then(({data}) => setCars(data))
    };

    return (
        <div>
            <div>id: {id}</div>

            <div>brand: {brand}</div>

            <div>price: {price}</div>

            <div>year: {year}</div>

            <button onClick={() => setUpdateCar(car)}>update</button>

            <button onClick={() => deleteCar(id)}>delete</button>

        </div>
    );
};

export {Car};
