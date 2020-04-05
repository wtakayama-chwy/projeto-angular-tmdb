export interface Movie {

    id: number; // id
    title: string; // original_title = en-US
    original_title: string;
    release_date: Date; // release_date
    vote_average: number; // vote_average
    poster_path: string; // poster_path
    background_path: string; // backdrop_path
    // Others
    popularity: number;
    video: boolean;
    original_language: string;
    genre_ids: [];
    adult: boolean;
    overview: string;
}