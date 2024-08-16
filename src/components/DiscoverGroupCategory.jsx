import React from 'react'
import DiscoverGroupItem from './DiscoverGroupItem'

export default function DiscoverGroupCategory({categoryName, categoryGroups}) {
  return (
    <div className='discoverGroupCategory'>
        <div className='discoverGroupCategory__header'>
           {categoryName}
        </div>
        <div className='discoverGroupCategory__content'>
          {categoryGroups.map(group=>(
            <DiscoverGroupItem name={group.name} key={group.id} uid = {group.id} desc = {group.description} category ={group.category} members ={group.members}/>
          ))}
            
        </div>
    </div>
  )
}
