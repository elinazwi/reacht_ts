import type { Person } from "./types"

type Props = {
   person:Person

 
}

export default function PeopleCard({person }: Props) {
  return (
    <div>
      <div className='border grid grid-cols-2 h-40'>
        <div className="p-4">
          <h2 className="font-bold text-xl">{person.name}</h2>
          <h4>{person.jobtitle}</h4>
        </div>
        <div className="bg-green-300 w-full">
          <img src={person.avatar} alt='' className="object-cover w-full h-full"/>
        </div>
      </div>
    </div>
  )
}