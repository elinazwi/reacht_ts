import { useEffect, useState } from "react";
import type { Person, Filter } from "./types";
import PeopleCard from "./PeopleCard";



export default function PeopleContainer() {
  const [people, setPeople] = useState<Person[]>([]);
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);

  

  useEffect(() => {
    fetch("https://67b84573699a8a7baef35cfb.mockapi.io/person").then(
      res => res.json()).then(data => {
        setPeople(data);
        setFilteredPeople(data);
      })
  }, [])

  const filterPeople = (filter: Filter['searchTerm']) => {
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())); 
    setFilteredPeople(filtered);
  }

  return (
    <div className="w-screen">
      <div className="fixed border mb-4 bg-white w-full h-28 p-8">
        <input className="border p-4" type="text" placeholder="Search" onChange={(element)=>{
          console.log(element.target.value);
          filterPeople(element.target.value);
        }}/>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32">
        {filteredPeople.map((person:Person) => {
          return <PeopleCard key={person.id} person={person}/>
        })}
      </div>
    </div>
  )
}