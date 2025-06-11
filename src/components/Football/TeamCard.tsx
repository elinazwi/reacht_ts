import React from 'react'

type Props = {
    name: string,
    shortName?: string,
    icon: string,
    onPress: () => void
}

export default function TeamCard({name, shortName, icon, onPress}: Props) {
  return (
    <div className='border-b border-gray-200 hover:bg-pink-200 hover:cursor-pointer'
    onClick={onPress}
    >
        <div>{name}</div>
        <div>{shortName}</div>
        <img src={icon} width={"20px"}/>
    </div>
  )
}