    const [allenamento, setAllenamento] = useState([]);
    const {user} = UseAuthContext()


    const workOutCall = async () => {
        try {
          const response = await fetch(`https://fitness-center-khaki.vercel.app/api/workouts/${user.user_id}`, {mode:'cors'});
          const allenamento = await response.json();
          setAllenamento(allenamento)

          console.log({ allenamento})
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        if(user){
           workOutCall();
        }

      }, [user])

      console.log({ allenamento})