import AboutChild from "./AboutChild";
import Skill from "./Skills";
import {useState} from 'react';

function About(){
    let [arr,setArr]=useState([
        {
            title: "Value Momentum",
            designation:"Marklogic Developer",
            technologies:"XQuery, Marklogic, Rest API, XML",
            description: "Developed REST services using Marklogic, implemented Corb job on 100,000+ files, and enhanced duplicate detection by 60%",
            image:"data:image/png;base64,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"
          },
          {
            title: "Augmented Byte",
            designation:"AR Developer(Intern)",
            technologies:"Unity, C#",
            description: "Wrote C# scripts in Unity to develop a user interface for computer-aided 3D model, Buddy, in augmented reality",
            image:"https://media.licdn.com/dms/image/C560BAQFYOmbsWDHOXQ/company-logo_200_200/0/1630594328472?e=2147483647&v=beta&t=TCHwShFD3iFQ5SP2Th42LVos8K09DF8QLsWCYEy3kHM"
          },
          {
            title: "Ganges Valley School",
            designation:"Graphic Designer",
            technologies:"Adobe Photoshop, Adobe Illustrator",
            description: "Designed styles, concepts, and sample layouts for 2nd-grade textbooks with layout principles and esthetic design",
            image:"https://play-lh.googleusercontent.com/N8qtDOI73mtz7A4A6GOMXODQkbAhaSq6qJN7JZNA4J6-_Caijzw_3W5X6-w4aFnA2Dhb"
          }
    ])
    let [arr2,setArr2]=useState([
          {
            title: "Masters of Science in Information Systems",
            designation:"",
            description: "Course Work: Application Engineering and Development, Web Design and User Experience Engineering",
            image:"https://ccweb.imgix.net/https%3A%2F%2Fwww.classcentral.com%2Fimages%2Flogos%2Finstitutions%2Fnortheastern-hz.png?auto=format&ixlib=php-4.1.0&s=89455dc789032233e86d76beb77448f7"
          },
          {
            title: "Bachelors in Technology, Computer Science",
            designation:"",
            description: "Course Work: C, Data Structures with C, C++, JAVA, Database Management Systems, Machine Learning, Cryptography",
            image:"https://image4.owler.com/logo/gitam-university_owler_20200319_172653_original.png"
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
        <Skill/>
        <div className="main-con"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {arr.map(e=>{
            return(
            <AboutChild className="cards-container" image={e.image} title={e.title} designation={e.designation} technologies={e.technologies}description={e.description}></AboutChild>
            )
        })}
       </div> 
       <div className="main-con" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {arr2.map(e=>{
            return(
            <AboutChild className="cards-container" image={e.image} title={e.title} designation={e.designation} description={e.description}></AboutChild>
            )
        })}
       </div> 
       </div>

    );
}
export default About;