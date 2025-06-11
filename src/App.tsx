import { use, useState } from "react"
import TeamContainer, { type Team } from "./components/Football/TeamContainer"

function App() {
  const [selectedTeam, setSelectedTeam] = useState<Team|null>(null)

  return (
    <div className="grid grid-cols-2">
    <TeamContainer onChangeSelectedTeam={(team:Team)=>setSelectedTeam(team)}/>
    <div>
      <div>{selectedTeam?.shortName}</div>
      <div>{selectedTeam?.teamName}</div>
      <div>{selectedTeam?.teamIconUrl}</div>
    </div>
    </div>
  )
}

export default App
