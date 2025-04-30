import React from 'react'
import Card from './Card'

const ProjectList = ({ projects }) => {
  return (
    <div className="grid 
                    grid-cols-1       /* 1 per row on mobile */ 
                    md:grid-cols-2    /* 2 per row on tablet */ 
                    lg:grid-cols-3    /* 3 per row on desktop */ 
                    gap-6">
      {projects.map((project, i) => (
        <Card key={i} {...project} />
      ))}
    </div>
  )
}

export default ProjectList
