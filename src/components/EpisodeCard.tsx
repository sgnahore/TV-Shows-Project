import { IEpisode } from "./IEpisodeTypes";
import "../styles.css";
import episodes from "../episodes.json";

interface EpisodeCardProps {
  episode: IEpisode;
}

function seasonCode(season: number): string {
  let seasonCode: string;

  if (season < 10) {
    seasonCode = "S0" + season;
  } else {
    seasonCode = "S" + season;
  }

  return seasonCode;
}

function episodeCode(episodeNum: number): string {
  let episodeCode: string;

  if (episodeNum < 10) {
    episodeCode = "E0" + episodeNum;
  } else {
    episodeCode = "E" + episodeNum;
  }
  return episodeCode;
}

// console.log("here is the season code", EpisodeCode());

function EpisodeCard(props: EpisodeCardProps): JSX.Element {
  return (
    <>
      <div className="gridContainer">
        <div className="episodeFrame">
          <p>{props.episode.name}</p>
          <p>
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
