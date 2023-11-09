import './App.css'
import  { useState, useEffect } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character?page=1';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Info {
  count: number;
  next: string | null;
  prev: string | null;
}

interface Data {
  info: Info;
  results: Character;
}

//CEL: POBRANIE Z API DANYCH I WYŚWIETLENIE ICH
// 1. Przypisać do zmniennej API_URL
// 2. Wysłać request pod ten url - fetch()
// 2.1 Napisać funkcję fetchResponse(), która wysyła request
// 3. Wyciągąć dane z requesta
// 3.1 Uzyc .then.catch albo async await 
// 3.2 wylogowac te dane w konsoli

function App(): JSX.Element {

  const [charakters, setCharakters] = useState<Character[]>([])

  useEffect(() => { 
async function fetchResponse(): Promise<void> {
  try{
const response = await fetch(API_URL);
const {results}: Data = await response.json();

setCharakters(results);
  }catch (error) {
    console.log(error)
  }
}
fetchResponse();
}, []);


  return (
    <>
      <h1>Rick and Morty</h1>
     <ul className='charakters-container'>
      {charakters.map((charakter)  => {
        return (
          <div>
          <li key={charakter.id}>
         <p>{charakter.name}</p>
         <img src={charakter.image} alt={charakter.name} />
         </li>
         </div>
        )
      })}
     </ul>
     
    </>
  )
}

export default App
