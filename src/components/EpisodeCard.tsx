import { IEpisode } from "./IEpisodeTypes";
import "../styles.css";
import episodes from "../episodes.json";


interface EpisodeCardProps {
  episode: IEpisode;
}

function EpisodeCard(props: EpisodeCardProps): JSX.Element {

    // function episodeCode(episodes: EpisodeCardProps){
    // }

return (
    <>
      <div className="gridContainer">
        <div className="episodeFrame">
          <p>{props.episode.name}</p>
          <p>S {props.episode.season}E {props.episode.number}</p>
          <img src={props.episode.image.medium} alt="episode" />
          <p>{props.episode.summary}</p>
        </div>
      </div>
    </>
  );
}

export default EpisodeCard;
