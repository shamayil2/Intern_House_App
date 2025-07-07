import NavBar from "../components/NavBar"
import {useState} from "react"
const PostJob = () => {
    const [jobPosted,setJobPosted] = useState(false);
    const [jobObj,setJobObj] = useState({title:"",company:"",location:"",salary:0,jobType:"",description:"",qualifications:""})


    async function postJob(event){
        try{
            event.preventDefault()
            const res = await fetch("https://flux-jobs-portal-backend.vercel.app/jobs",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(jobObj)
                
            })

        if(res.ok){
            console.log("Job Posted");
            setJobPosted(true)
        }else{
            console.log("Error in Posting")
        }


        }
        catch(error){
            console.log(error)
        }
    }

    function jobDetails(event){
        const value = event.target.value;
       const inputName = event.target.id;
        setJobObj({...jobObj,[inputName]:value})
    }

    console.log(jobObj)

    return(
        <>
            <NavBar/>
            <main>
                <div className="container">
                <h2 className="m-2">Post a Job</h2>
                <form>
                <label htmlFor="title">Job Title:</label><br />
                <input id="title" onChange={(event)=>jobDetails(event)} type="text" className="form-control" />
                <label htmlFor="company">Company Name:</label><br />
                <input id="company" onChange={(event)=>jobDetails(event)} type="text" className="form-control" />
                <label htmlFor="location">Location:</label><br />
                <input id="location" onChange={(event)=>jobDetails(event)} type="text" className="form-control" />
                <label htmlFor="salary">Salary:</label><br />
                <input id="salary" onChange={(event)=>jobDetails(event)} type="number" className="form-control" />
                <label htmlFor="jobType">Job Type:</label><br />
                <select className="form-select" name="" id="jobType" onChange={(event)=>jobDetails(event)}>
                    <option value="">Select Job Type</option>
                    <option value="Full Time(On-Site)">Full Time(On-Site)</option>
                    <option value="Part Time(On-Site)">Part Time(On-Site)</option>
                    <option value="Full Time(Remote)">Full Time(Remote)</option>
                    <option value="Part Time(Remote)">Part Time(Remote)</option>
                </select><br />

                <label htmlFor="description">Job Description:</label><br />
                <input id="description" onChange={(event)=>jobDetails(event)} type="text" className="form-control" />
                <label htmlFor="qualifications">Job Qualifications:</label><br />
                <textarea id="qualifications" onChange={(event)=>jobDetails(event)}  className="form-control" />
                <button className="btn btn-primary my-4" onClick={(event)=>postJob(event)}>Post Job</button>
                </form>
                {jobPosted && <h2>Job is Posted!</h2>}
                </div>
            </main>
        </>
    )

}

export default PostJob;