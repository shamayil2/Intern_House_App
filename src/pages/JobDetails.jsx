import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import NavBar from "../components/NavBar"
const JobDetails = () => {
     const [jobsList,setJobsList] = useState();
  const [loading,setLoading] = useState(true);
  const[error,setError] = useState(false);
    const id = useParams();
    const jobId = id.id;
     useEffect(()=>{
    
        async function getJobs(){
          try{
             const res = await fetch("https://flux-jobs-portal-backend.vercel.app/jobs");
    
          if(res.ok){
            const data = await res.json();
            console.log(data)
            setJobsList([...data])
           
          }else{
            const err = await res.json();
            setError(true);
          }
          setLoading(false);
          }
          catch(error){
            console.log("Error Happened",error)
          }
    
        }
        getJobs()
    
    
    
      },[])

    return(
        <>
       <NavBar/>
       <main>
        <div className="container">
             {loading ? <h4>Loading...</h4>:jobsList.filter((job)=>job._id==jobId).map((job)=>(
                <>
                    <h1 className="m-4">{job.title}</h1>
                    <div className="card p-4">
                    <p><b>Company Name: </b>{job.company}</p>
                    <p><b>Location: </b>{job.location}</p>
                    <p><b>Salary: </b>{job.salary}</p>
                    <p><b>Job Type: </b>{job.jobType}</p>
                    <p><b>Description: </b>{job.description}</p>
                    <p><b>Qualifications: </b>
                        <ol>
                        {job.qualifications.split(". ").map((qual)=>(
                            <li>
                                {qual}
                            </li>
                        ))}
                        </ol>
                    </p>
                    </div>
                </>
                ))}
            
        </div>
       </main>
        </>
    )

}

export default JobDetails;