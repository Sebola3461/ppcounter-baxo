export interface GameData {
  state: State;
  session: Session;
  settings: Settings;
  profile: Profile;
  beatmap: Beatmap;
  play: Play;
  leaderboard: ILeaderboard[];
  performance: Performance;
  resultsScreen: ResultsScreen;
  folders: Folders;
  files: Files;
  directPath: DirectPath;
}

export interface DirectPath {
  beatmapFile: string;
  beatmapBackground: string;
  beatmapAudio: string;
  beatmapFolder: string;
  skinFolder: string;
  collections: string;
  osudb: string;
  scoresdb: string;
}

export interface Files {
  beatmap: string;
  background: string;
  audio: string;
}

export interface Folders {
  game: string;
  skin: string;
  songs: string;
  beatmap: string;
}

export interface ResultsScreen {
  mode: State;
  score: number;
  name: string;
  hits: Hits2;
  mods: State;
  maxCombo: number;
  rank: string;
  createdAt: string;
}

export interface Performance {
  accuracy: Accuracy;
  graph: Graph;
}

export interface Graph {
  series: Series[];
  xaxis: number[];
}

export interface Series {
  name: string;
  data: number[];
}

export interface Accuracy {
  "95": number;
  "96": number;
  "97": number;
  "98": number;
  "99": number;
  "100": number;
}

export interface ILeaderboard {
  isFailed: boolean;
  position: number;
  team: number;
  name: string;
  score: number;
  accuracy: number;
  hits: Hits2;
  combo: Combo;
  mods: State;
  rank: string;
}

export interface Hits2 {
  "0": number;
  "50": number;
  "100": number;
  "300": number;
  geki: number;
  katu: number;
}

export interface Play {
  playerName: string;
  mode: State;
  score: number;
  accuracy: number;
  healthBar: HealthBar;
  hits: Hits;
  hitErrorArray: number[];
  combo: Combo;
  mods: State;
  rank: Rank;
  pp: Pp;
  unstableRate: number;
}

export interface Pp {
  current: number;
  fc: number;
  maxAchievedThisPlay: number;
}

export interface Rank {
  current: string;
  maxThisPlay: string;
}

export interface Combo {
  current: number;
  max: number;
}

export interface Hits {
  "0": number;
  "50": number;
  "100": number;
  "300": number;
  geki: number;
  katu: number;
  sliderBreaks: number;
}

export interface HealthBar {
  normal: number;
  smooth: number;
}

export interface Beatmap {
  time: Time;
  status: Mode;
  checksum: string;
  id: number;
  set: number;
  artist: string;
  artistUnicode: string;
  title: string;
  titleUnicode: string;
  mapper: string;
  version: string;
  stats: Stats;
}

export interface Stats {
  stars: Stars;
  ar: Ar;
  cs: Ar;
  od: Ar;
  hp: Ar;
  bpm: Bpm;
  objects: Objects;
  maxCombo: number;
}

export interface Objects {
  circles: number;
  sliders: number;
  spinners: number;
  holds: number;
  total: number;
}

export interface Bpm {
  common: number;
  min: number;
  max: number;
}

export interface Ar {
  original: number;
  converted: number;
}

export interface Stars {
  live: number;
  aim: number;
  speed: number;
  flashlight: number;
  sliderFactor: number;
  total: number;
}

export interface Time {
  live: number;
  firstObject: number;
  lastObject: number;
  mp3Length: number;
}

export interface Profile {
  userStatus: State;
  banchoStatus: State;
  id: number;
  name: string;
  mode: Mode;
  rankedScore: number;
  level: number;
  accuracy: number;
  pp: number;
  playCount: number;
  globalRank: number;
  countryCode: State;
  backgroundColour: string;
}

export interface Mode {
  number: number;
}

export interface Settings {
  interfaceVisible: boolean;
  replayUIVisible: boolean;
  chatVisibilityStatus: State;
  leaderboard: ILeaderboard;
  progressBar: State;
  bassDensity: number;
  resolution: Resolution;
  client: Client;
  scoreMeter: ScoreMeter;
  cursor: Cursor;
  mouse: Mouse;
  mania: Mania;
  sort: State;
  group: State;
  skin: Skin;
  mode: State;
  audio: Audio;
  background: Background;
  keybinds: Keybinds;
}

export interface Keybinds {
  osu: Osu;
  fruits: Fruits;
  taiko: Taiko;
  quickRetry: string;
}

export interface Taiko {
  innerLeft: string;
  innerRight: string;
  outerLeft: string;
  outerRight: string;
}

export interface Fruits {
  k1: string;
  k2: string;
  Dash: string;
}

export interface Osu {
  k1: string;
  k2: string;
  smokeKey: string;
}

export interface Background {
  dim: number;
  video: boolean;
  storyboard: boolean;
}

export interface Audio {
  ignoreBeatmapSounds: boolean;
  useSkinSamples: boolean;
  volume: Volume;
  offset: Offset;
}

export interface Offset {
  universal: number;
}

export interface Volume {
  master: number;
  music: number;
  effect: number;
}

export interface Skin {
  useDefaultSkinInEditor: boolean;
  ignoreBeatmapSkins: boolean;
  tintSliderBall: boolean;
  useTaikoSkin: boolean;
  name: string;
}

export interface Mania {
  speedBPMScale: boolean;
  usePerBeatmapSpeedScale: boolean;
}

export interface Mouse {
  rawInput: boolean;
  disableButtons: boolean;
  disableWheel: boolean;
  sensitivity: number;
}

export interface Cursor {
  useSkinCursor: boolean;
  autoSize: boolean;
  size: number;
}

export interface ScoreMeter {
  type: State;
  size: number;
}

export interface Client {
  updateAvailable: boolean;
  branch: number;
  version: string;
}

export interface Resolution {
  fullscreen: boolean;
  width: number;
  height: number;
  widthFullscreen: number;
  heightFullscreen: number;
}

export interface LeaderboardSettings {
  visible: boolean;
  type: State;
}

export interface Session {
  playTime: number;
  playCount: number;
}

export interface State {
  number: number;
  name: string;
}
