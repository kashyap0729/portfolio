import ProjectChild from "./ProjectChild";
import {useState} from 'react';
import CanvaComicsImage from "../assets/images/CanvaComics.png";
import VividVibesImage from "../assets/images/VividVibes.png";
import AED from "../assets/images/AED.png";
import Qiskit from "../assets/images/Qiskit.png"

function Projects(){
    let [arr,setArr]=useState([
        {
            title: "Web site",
            designation:"Canva Comics",
            technologies:"HTML, CSS",
            description: 'CanvaComics is a platform for showcasing and sharing creative comics online. This navbar for effortlessly browsing amongst the various areas. ',
            image:CanvaComicsImage,
            link:"https://kashyap0729.github.io/CanvaComics/"
          },
          {
            title: "An event management Webiste",
            designation:"Vivid Vibes",
            technologies:"Mongo, Express JS, React JS, Node JS",
            description: "Vivid Vibes is a platform where user can book for event online with User Login, Payment API, Session Management and Data Integrity",
            image:VividVibesImage,
            link:"https://github.com/kashyap0729/VividVibesProject"
          }
    ])
    let [arr2,setArr2]=useState([
      {
          title: "Java Application",
          designation:"Making a Difference",
          technologies:"Java with DB4O, Bcrypt, Chart libraries",
          description: "Communication Ecosystem for Multi-Party Applications acts as a bridge between NGO, Government, Hospital and Logistics with Chart and Analysis",
          image:AED,
          link:"https://github.com/kashyap0729/EcoSystem"
        },
        {
          title: "Quantum Computing using Qiskit",
          designation:"QKD Algorithm BB84 Protocol",
          technologies:"Qiskit, Python",
          description: "This protocol that uses the principles of quantum mechanics to secure communication by generating and sharing encryption keys that are inherently immune to eavesdropping",
          image:Qiskit,
          link:"https://www.irjet.net/archives/V7/i8/IRJET-V7I8438.pdf"
        }
  ])
    function newArray(event){
        event.preventDefault();
        var newArr=arr.map(e=>{
            return {
                ...e,
                description:"Double"+e.description,

            }
        })
        setArr(newArr)
    }
    return(
      <div>
        <div className="main-con" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {arr.map(e=>{
            return(
            <ProjectChild className="cards-container" image={e.image} title={e.title} designation={e.designation} technologies={e.technologies}description={e.description}link={e.link}></ProjectChild>
            )
        })}
       </div>
       <div className="main-con" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {arr2.map(e=>{
            return(
            <ProjectChild className="cards-container" image={e.image} title={e.title} designation={e.designation} technologies={e.technologies}description={e.description}link={e.link}></ProjectChild>
            )
        })}
       </div>
       </div>

    );
}
export default Projects;