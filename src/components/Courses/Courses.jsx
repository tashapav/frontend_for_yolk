import { useState, useCallback, useEffect } from 'react';
import './Courses.css';
import Course from '../Course/Course';
import axios from 'axios';

function Courses({setError}) {
    const [courseName, setCourseName] = useState("")
    const [courses, setCourses] = useState([])

    const AddCourse = useCallback(async (course_name) => {
        try {
            /*await axios.get('https://hsse-study.ru/students/description/', 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Key': 'Authorization',
                    'Value': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZXhwIjoyMX0.rMRyOfTuP2T3S2_0-wYNKU_6UlNhq83kYXLHEdSrvHY'
                },
                params: {course_name}
            })
            .then(res => setCourses([...courses, res.data]))
            .then(() => setCourseName(""))
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.message)
                }
            })*/
            setCourseName("")
            setCourses([...courses, {
                course: "Math",
                description: "New math course"
            }])
        } catch (err) {
            console.log(err)
        }
    }, [courses])

    const getAllCouses = useCallback(async () => {
        try {
            /*await axios.get('url', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {userId}
            })
            .then(res => setCourses(res.data))*/
        } catch (err) {
            console.log(err)
        }
    }, [/*userId*/])

    
    /*useEffect(() => {
        getAllCouses()
    }, [])*/

    return (
        <div className="courses">
            <div className="add-course">
                <label htmlFor='courseName' className='my-label'>Введите кодовое слово для регистрации на курс</label>
                <input type='text' id='courseName' className='my-input' value={courseName} onChange={(e) => setCourseName(e.target.value)}></input>
                <button className='my-button' onClick={() => AddCourse(courseName)}>Зарегистрироваться</button>
            </div>
            <h2>Ваши курсы</h2>
            <div className="courses-list">
            {
                courses.map(course => <Course key={course.course} course={course}/>)
            }
            </div>
        </div>
    );
}

export default Courses;