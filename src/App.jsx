/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { tvShows } from './shows/data.js';
import ShowDetails from './shows/ShowDetails.jsx';
import { useState } from 'react';
import ShowSelection from './shows/ShowSelection.jsx';

export default function App() {
  const [selectedShow, setSelectedShow] = useState();
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
