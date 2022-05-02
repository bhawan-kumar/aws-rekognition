import {useState} from "react"
import './App.css';

function App() {
  const [data, setData] = useState({file: null})

  const upload = () => {
    if(!data.file) {
      alert("Upload any file to recognise...")
      return
    }
    const formData = new FormData()
    formData.add("image", data.file)
    
  }

  return (
    <div className="App">
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">Upload any file</label>
        <input className="form-control" type="file" id="formFile" onChange={e => setData({file: e.target.files[0]})}/>
      </div>
      <button className='btn btn-dark'>Upload</button>
    </div>
  );
}

export default App;
