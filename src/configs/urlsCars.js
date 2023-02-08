
const cars = '/cars'

const urlsCars = {
    cars: {
        cars,
        byId:(id) => `${cars}/${id}`
    }
}

export {urlsCars}
