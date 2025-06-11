import React, { useEffect, useState } from 'react'
import TeamCard from './TeamCard'
import { useFetcher } from 'react-router';

export interface Team{
    teamId: number;
    teamName: string;
    shortName: string;
    teamIconUrl: string;
    
}
type Props = {
    onChangeSelectedTeam: (team: Team) => void;
}

export default function TeamContainer({onChangeSelectedTeam}: Props) {
    const [teams, setTeams] = useState<Team[]>([]);
    const[selectedTeam, setSelectedTeam] = useState<Team|null>(null);

    console.log(selectedTeam);
    
    
    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2024").then(
          res => res.json()).then(data => {
            setTeams(data);
          });
      }, []);

      console.log(teams);

  return (
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
        {teams.map((team: Team) => <TeamCard key={team.teamId} name={team.teamName} icon={team.teamIconUrl} onPress={() => 
            onChangeSelectedTeam(team)
            }/>)}
        </div>
    </div>
  )
}