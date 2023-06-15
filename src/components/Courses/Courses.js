import React from 'react'
import "./courses.css"
import { Link } from 'react-router-dom'


export default function Courses() {
  return (
    <div className="courses">
        <Link to="/courses-bought" id="bought" className="course_btn">COURSES BOUGHT</Link>
        <Link to="/courses-selled" id="selled" className="course_btn">COURSES SELLED</Link>
    </div>
  )
}
