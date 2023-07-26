import { IEpisode } from "./IEpisodeTypes";
import episodes from "./episodes.json";
//import { IEpisode } from "./IEpisodeTypes";

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);


function App(): JSX.Element {
 
  return (
    <>
      <EpisodeCard episode={episodes[0]} />
      <EpisodeCard episode={episodes[1]} />

    </>
  );
}

interface EpisodeCardProps {
  episode: IEpisode;
}

function EpisodeCard(props: EpisodeCardProps): JSX.Element {
  return (
  <>
  <div>
    <p>{props.episode.name}</p>
    {props.episode.summary}

  </div>
  </>
  )
}

export default App;
