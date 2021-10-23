import { useState} from "react"

export default function Test(){
    const[character,setCharacter] = useState([])
    function char(){
        let i=0;
        while(i<672){
        fetch (`https://rickandmortyapi.com/api/character/${i}`)
           .then((r)=>r.json())
           .then((e)=>{
               const character = {
                   id: e.id,
                   name:e.name,
                   status:e.status,
                   species:e.species,
                   gender:e.gender,
                   image:e.image,
                   origin:e.origin.name
               };
               return setCharacter(character);
           })      
       }
    }
    console.log(character)
    return (
        <div>
            <button onClick={char}>click</button>
        </div>
    )
}