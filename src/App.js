import { useEffect, useState } from 'react';
import './App.css';
import Loading from './component/Loading/Loading';
import Tour from './component/Tour/Tour';

function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);
  console.log(tour.length);
  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
      .then(res => res.json())
      .then(data => {
        setTour(data);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const removeTour = id => {
    const newTour = tour.filter((t => t.id !== id));
    setTour(newTour);
  }
  const refresh = () => {
    window.location.reload(false);
  }
  if (tour.length === 0) {
    return (<main className='main-error container'>
      <h3>Not Yet Result</h3>
      <button onClick={refresh}>Refresh</button>
    </main>)
  }
  return (
    <main className='main-section'>
      <header>
        <div>
          <h2 className='header-text'>Our Tours</h2>
        </div>
      </header>
      <div className='container'>
        {
          tour.map(tourplace =>
            <Tour
              key={tourplace.id}
              tourplace={tourplace}
              removeTour={removeTour}
            ></Tour>
          )
        }
      </div>
    </main>
  );
}

export default App;
