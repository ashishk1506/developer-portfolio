// import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
// import five from '../assets/svg/projects/five.svg'
// import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
// import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Library Management API',
        projectDesc: 'Developed a containerized REST API using Golang Gin for book borrowing, integrated wallet functionality, and implemented JWT for admin authorization, utilizing Docker Compose for deployment.',
        tags: ['Golang', 'MySQL', 'Docker'],
        code: 'https://github.com/ashishk1506/Library-Managment-System',
        demo: 'https://github.com/ashishk1506/Library-Managment-System',
        image: seven
    },
    {
        id: 2,
        projectName: 'Mobile Robotics - India Skills Regionals',
        projectDesc: 'Designed a mobile robot for transporting medical waste, implementing DLOS and Semi-Autonomous modes in C++, and integrating sensors like Gyroscope and Ultrasonic with Arduino Mega for navigation',
        tags: ['C++', 'Robotics'],
        code: 'https://github.com/ashishk1506/MobileRobotics',
        demo: 'https://github.com/ashishk1506/MobileRobotics',
        image: two
    },
    {
        id: 3,
        projectName: 'Translator',
        projectDesc: 'This Webpage allows you to replace all Urdu occurrences with Hindi alternative present in the database dictionary',
        tags: ['Javascript', 'MySQL'],
        code: 'https://github.com/ashishk1506/Urdu-Hindi-Replacer',
        demo: 'https://github.com/ashishk1506/Urdu-Hindi-Replacer',
        image: three
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/