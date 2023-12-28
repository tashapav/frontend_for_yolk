import './Course.css';

function Course({course}) {

    return (
        <div className="course">
            <h3 >{course.course}</h3>
            <p>{course.description}</p>
        </div>
    );
}

export default Course;