export default function episodeCode(episodeNum: number): string {
  let episodeCode: string;

  if (episodeNum < 10) {
    episodeCode = "E0" + episodeNum;
  } else {
    episodeCode = "E" + episodeNum;
  }
  return episodeCode;
}
