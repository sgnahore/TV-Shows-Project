import { IEpisode } from "./IEpisodeTypes";
import "../styles.css";
import seasonCode from "../utils/seasonCode";
import episodeCode from "../utils/episodeCode";

interface EpisodeCardProps {
  episode: IEpisode;
}

function EpisodeCard(props: EpisodeCardProps): JSX.Element {
  return (
    <>
      <div className="gridContainer">
        <div className="episodeFrame">
          <p className="episodeTitle">{props.episode.name}</p>
          <p className="seasonAndEpisode">
            {seasonCode(props.episode.season)}
            {episodeCode(props.episode.number)}
          </p>
          <img src={props.episode.image.medium} alt="episode" />
          <p>{props.episode.summary}</p>
        </div>
      </div>
    </>
  );
}

export default EpisodeCard;
