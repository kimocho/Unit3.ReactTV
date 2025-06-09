import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((currentShow) => (
        <a className="show" key={currentShow.name} onClick={() => { setSelectedShow(currentShow) }}>
          {currentShow.name}
        </a>
      )
      )}
    </nav >
  )
}
