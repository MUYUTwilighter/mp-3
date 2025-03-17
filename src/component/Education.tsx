import {Link} from "react-router-dom";

export default function Education() {
    return <>
        <h1>Education Experience</h1>
        <hr/>
        <h2>Calendar</h2>
        <ul>
            <li>2020-2024: <Link to="https://www.ahu.edu.cn/">Anhui University</Link> in China</li>
            <li>2024-now: <Link to="https://www.bu.edu/met/">Metropolitan College of Boston University</Link></li>
        </ul>
        <h2>Achievements</h2>
        <ul>
            <li>2021, awarded with the school-level secondary honor for students' creativity and innovation</li>
            <li>2024, gained degree Bachelor of Engineering in Network Engineering</li>
        </ul>
    </>
}