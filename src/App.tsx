import { IEpisode } from "./IEpisodeTypes";
import episodes from "./episodes.json";
import "./styles.css"
//import { IEpisode } from "./IEpisodeTypes";

// console.log(`Imported ${episodes.length} episode(s)`);
// console.log(`First episode's name is ${episodes[0].name}`);


function App(): JSX.Element {
  
  const allEpisodes = episodes.map((episode:IEpisode) => (<EpisodeCard key={episode.id} episode={episode}/>))


  return (
    <>
    {allEpisodes}
    </>
  );
}

interface EpisodeCardProps {
  episode: IEpisode;
}

function EpisodeCard(props: EpisodeCardProps): JSX.Element {
  return (
    <>
  <div className="episodeFrame">
    <p>{props.episode.name}</p>
    <p>S {props.episode.season}</p>
    <p>E {props.episode.number}</p>
    <img src={props.episode.image.medium} alt="episode"/>
    <p>{props.episode.summary}</p>

  </div>
  </>
  )
}

export default App;
