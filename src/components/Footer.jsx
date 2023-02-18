import React from 'react'
import { Card } from 'react-bootstrap'
import ParticlesBackground from './config/ParticlesBackground'


const Footer = () => {
  return (
    <div>
      <Card className="text-center">
      <Card.Footer className="text-muted">
        <p className='font-bold'>Code by || Carlos Bratini</p>
        <div className='flex justify-center gap-2 mt-1'>
        <a href="https://www.linkedin.com/in/carlos-bratini-008962246/" target="_blank"><i class="fa-brands fa-linkedin-in fa-xl" ></i></a>
        <a href="https://github.com/Bratini89?tab=repositories" target="_blank"><i class="fa-brands fa-github fa-xl"></i></a>
        </div>
        </Card.Footer>
    </Card>
    </div>
  )
}

export default Footer
