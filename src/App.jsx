import NavBar from "./components/NavBar"
import {Link,NavLink} from "react-router-dom"
import {useState,useEffect} from "react";
const App = () => {
  const [jobsList,setJobsList] = useState();
  const [loading,setLoading] = useState(true);
  const[error,setError] = useState(false);
  const [deletedObj,setDeletedObj] = useState(false);

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



  },[jobsList])

  async function deleteJob(id){

    try{

      

      const res = await fetch(`https://flux-jobs-portal-backend.vercel.app/jobs/${id}`,{
        method:"DELETE",

      })


      if(res.ok){
        console.log("Job Deleted")
    
      }else{
        console.log("Error while deleting");
      }

    }
    catch(error){
      console.log(error)
    }

  }



  return(
    <>
    <NavBar/>
    <main className="container">
   {deletedObj &&    <p className="bg-primary">Job Deleted!</p>}
    <input type="text" onChange={(event)=>searchItems(event)} className="form-control mt-3" placeholder="Search By Job Title.."/>
    <h3 className="mt-3">All Jobs</h3>
    <div class="row">
      {loading ? <h3>Loading Jobs....</h3>: jobsList.map((job)=>(
         <div class="col-sm-4 mb-3 mb-sm-0 p-2">
    <div class="card ">
      <div class="card-body">
        <h4 class="card-title">{job.title}</h4>
        <p class="card-text"><b>Company Name: </b> {job.company} </p>
         <p class="card-text"><b>Location: </b> {job.location} </p>
          <p class="card-text"><b>Job Type: </b> {job.jobType} </p>
        <Link to ={`/jobdetails/${job._id}`}><a href="#" class="btn btn-primary mx-2 px-4">See Details</a></Link>
        <Link><a href="#" class="btn btn-danger mx-2 px-4" onClick={(id)=>deleteJob(job._id)}>Delete</a></Link>
      </div>
    </div>
  </div>
      ))}
 
  </div>
    </main>
    
    </>
  )
}

export default App;