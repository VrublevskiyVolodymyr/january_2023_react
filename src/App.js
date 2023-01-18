import './Components/SimpsonComponent/SimpsonComponent.css'
import './Components/RickAndMortyComponent/RickAndMortyComponent.css'
import {SimpsonsComponent} from "./Components/SimpsonsComponent/SimpsonsComponent";
import {RickAndMortyComponent} from "./Components/RickAndMortyComponent/RickAndMortyComponent";
const App=()=> {
    return (
      <div className="wrap">
          {     /*1. Описати всю сім'ю сімпсонів (5 персонажів)*/}

        <SimpsonsComponent/>
          { /*2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі*/
              /*https://rickandmortyapi.com/*/
              /*https://rickandmortyapi.com/api/character*/
              /*Створити 6 персонажів*/}

          <RickAndMortyComponent
              id={'1'}
              name={'Rick Sanchez'}
              status={'Alive'}
              species= {'Human'}
              gender={ 'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
          />
          <RickAndMortyComponent
              id={'2'}
              name={'Morty Smith'}
              status={'Alive'}
              species= {'Human'}
              gender={ 'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
          />
          <RickAndMortyComponent
              id={'3'}
              name={'Summer Smith'}
              status={'Alive'}
              species= {'Human'}
              gender={ 'Female'}
              image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
          />
          <RickAndMortyComponent
              id={'4'}
              name={'Beth Smith'}
              status={'Alive'}
              species= {'Human'}
              gender={ 'Female'}
              image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
          />
          <RickAndMortyComponent
              id={'5'}
              name={'Jerry Smith'}
              status={'Alive'}
              species= {'Human'}
              gender={ 'Male'}
              image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}
          />
          <RickAndMortyComponent
              id={'6'}
              name={'Abadango Cluster Princess'}
              status={`Alive`}
              species= {'Alien'}
              gender={ 'Female'}
              image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}
          />

      </div>
  );
}
export {App};
