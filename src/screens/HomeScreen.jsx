import { useSelector } from 'react-redux';
import LandingPage from './LandingPage';

const HomeScreen = () => {
  const { playerInfo } = useSelector(state => state.auth);
    
  return (
      playerInfo 
        ? 
        <>
          <h1>Home Screen</h1> 

          <p>Que buscas?</p>

          <p>Tienes la pista alquilada y quieres gente para jugar</p>
          <p>o</p>
          <p>Quieres apuntarte como disponible para jugar</p>
        </>

        : <LandingPage />  
  )
}

export default HomeScreen;