const baseURLCars = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urlsCars = {
    cars: {
        cars,
        byId:(id) => `${cars}/${id}`
    }
}

export {urlsCars, baseURLCars}
