import { useEffect, useState } from "react";
import type { Person } from "./types";
import PeopleCard from "./PeopleCard";



export default function PeopleContainer() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://67b84573699a8a7baef35cfb.mockapi.io/person").then(
      res => res.json()).then(data => {
        setPeople(data);
      })
  }, [])



  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
      {people.map((person:Person) => {
        return <PeopleCard person={person}/>
      })}
    </div>
  )
}