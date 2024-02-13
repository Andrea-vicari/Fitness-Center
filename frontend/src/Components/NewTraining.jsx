import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useLocation } from "react-router-dom";
import NewWorkModal from "./NewWorkModal";
import logo from "./Common/logo_fitness.svg";

var userID

const NewTraining = () =>{

  let clicked = useLocation();

  userID = clicked.state


  var today = new Date().toDateString()//.split('T').shift()

  // new Date().toDateString().split('T').shift()
  console.log(today)
  // var today = arrayDate.join('')
  // console.log(today)


    const [title, setTitle] = useState('')
    const [loads, setLoad] = useState('')
    const [rest, setRest] = useState('')
    const [reps, setReps] = useState('')
    const [series, setSeries] = useState('')
    const [user, setUser] = useState('')
    const [date, setToday] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setemptyFields] = useState([])

    const handleSubmit = async (e) =>{

        e.preventDefault()

        setUser(userID)
        setToday(today)
        openModal()
        const workout = {today, user, title, series, reps, rest, loads}

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
            setemptyFields(json.emptyFields)
        }

        if(response.ok){
            console.log('Aggiunto', json)
            setToday('')
            setTitle('')
            setLoad('')
            setReps('')
            setRest('')
            setSeries('')
            setUser('')
            setError(null)
            setemptyFields([])
        }


    }

    function closeModal(){
      document.getElementById('modale_workout').classList.remove("d-block")
    }
    function openModal(){
      document.getElementById('modale_workout').classList.add("d-block")
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
                required={true}
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
                required={true}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="series">
                <strong>Serie</strong>
              </label>
              <input
                type="number"
                placeholder="Inserisci Serie"
                autoComplete="off"
                name="number"
                className="form-control rounded-0"
                onChange={(e) => setSeries(e.target.value)}
                value={series}
                required={true}
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
                required={true}
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
                required={true}
              />
            </div>



            <button type="submit" className="btn btn-danger w-100 rounded-0 mt-3" onClick={()=>setUser(userID)}>
              Inserisci
            </button>

            <Link to={`/elencoutenti/`} type="submit" className="btn btn-outline-danger w-100 rounded-0 mt-3">
              Torna Indietro
            </Link>
            {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
          </form>

          {/** MODALE */}
          <div className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog" id="modale_workout">
            <div className="modal-dialog-centered modal-xl bg-dark" role="document">
              <div className="modal-content rounded-4 shadow bg-dark" >
                <div className="modal-header d-flex justify-content-between">
                <img src={logo} className='img-fluid'></img>
                  <h2 className="modal-title text-white text-center">WORKOUT AGGIUNTO</h2>

                </div>
                <div className="modal-body py-3 text-white">

                <h4 className="text-white mt-3 fw-bold">Allenamento inserito correttamente!</h4>
                  </div>

                <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

                  <div className="modal-footer">
                    <button type="button" onClick={()=>closeModal()} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
                    <i className='fa fa-times px-2 fs-4'></i>Chiudi
                      </button>
                  </div>
                </div>
            </div>
          </div>
          </div>


        </div>
      </div>
    </div>

  );

}

export default NewTraining