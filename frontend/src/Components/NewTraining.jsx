import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const NewTraining = () =>{

    const [title, setTitle] = useState('')
    const [loads, setLoad] = useState('')
    const [rest, setRest] = useState('')
    const [reps, setReps] = useState('')
    const [series, setSeries] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{

        e.preventDefault()

        const workout = {title, series, reps, rest, loads}

        const response = await fetch('https://fitness-center-khaki.vercel.app/api/workouts', {

            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json'
              }
        })


        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            alert("NOT OK")
        }

        if(response.ok){
            console.log('Aggiunto', json)
            setTitle('')
            setLoad('')
            setReps('')
            setRest('')
            setSeries('')
            setError(null)
        }


    }


    return (
    <div className="container py-5 bg-fitness">
      <div className="d-flex justify-content-center align-items-center py-5">
        <div className="bg-dark p-3 rounded w-75 text-white">
          <h2 className="text-white">Inserisci WorkOut</h2>
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="title">
                <strong>Esercizio</strong>
              </label>
              <input
                type="text"
                placeholder="Inserisci Esercizio"
                autoComplete="off"
                name="text"
                className="form-control rounded-0"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="reps">
                <strong>Ripetizioni</strong>
              </label>
              <input
                type="number"
                placeholder="Inserisci Ripezìtizioni"
                autoComplete="off"
                name="number"
                className="form-control rounded-0"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="series">
                <strong>Serie</strong>
              </label>
              <input
                type="text"
                placeholder="Inserisci Serie"
                autoComplete="off"
                name="number"
                className="form-control rounded-0"
                onChange={(e) => setSeries(e.target.value)}
                value={series}
              />
            </div>


            <div className="mb-3">
              <label htmlFor="rest">
                <strong>Riposo(Sec)</strong>
              </label>
              <input
                type="number"
                placeholder="Inserisci Riposo"
                autoComplete="off"
                name="text"
                className="form-control rounded-0"
                onChange={(e) => setRest(e.target.value)}
                value={rest}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="loads">
                <strong>Carico(Kg)</strong>
              </label>
              <input
                type="number"
                placeholder="Inserisci Carico"
                autoComplete="off"
                name="text"
                className="form-control rounded-0"
                onChange={(e) => setLoad(e.target.value)}
                value={loads}
              />
            </div>



            <button type="submit" className="btn btn-danger w-100 rounded-0 mt-3">
              Inserisci
            </button>
            {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
            </form>


        </div>
      </div>
    </div>

  );

}

export default NewTraining