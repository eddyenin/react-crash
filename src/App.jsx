import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, json} from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import AddJobPage from './pages/AddJobPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader} from './pages/JobPage'
import EditJobPage from './pages/EditJobPage'



const App = () => {

  const addJob = async(newJob) => {
    const url = 'http://localhost:8000/jobs'
    const res = await fetch(url, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }

  const updateJob = async(job) => {
    const url = `http://localhost:8000/jobs/${job.id}`
    const res = await fetch(url, {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(job)
    })
    return;
  }

  const deleteJob = async(id) => {
    const url = `http://localhost:8000/jobs/${id}`
    const res = await fetch(url, {
      method:'DELETE'
    })
    return;
  }



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path='/jobs' element={<JobsPage />}></Route>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />}></Route>
        <Route path='/jobs/:id' element={<JobPage  deleteJob={deleteJob}/>} loader={jobLoader}></Route>
        <Route path='/edit-job/:id' element={<EditJobPage  updateJobSubmit={updateJob}/>} loader={jobLoader}></Route>
        <Route path= '*' element={<NotFoundPage />}></Route>
      </Route>
    )
  )



  return <RouterProvider router={router} />
}

export default App
