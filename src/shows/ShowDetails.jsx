import "./shows.css";
import { useState } from 'react';
import EpisodeList from '../episodes/EpisodeList.jsx';
import EpisodeDetails from '../episodes/EpisodeDetails.jsx';

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisodeObj, setSelectedEpisodeObj] = useState();
  if (!show) return <p>Please select a show to learn more.</p>
  return (
    <div className="show-details">
      <EpisodeList name={show.name} episodes={show.episodes} selectedEpisode={selectedEpisodeObj} setSelectedEpisode={setSelectedEpisodeObj} />
      <EpisodeDetails episode={selectedEpisodeObj} />
    </div>
  )
}
