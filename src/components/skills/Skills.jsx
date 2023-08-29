import React from 'react'
import './skills.scss'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section container" id='skills'>
        <h2 className="section_title"><span className='title-span'>Skills</span></h2>
        <span className="section_subtitle">My technical level</span>
        <div className="skills_container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills
