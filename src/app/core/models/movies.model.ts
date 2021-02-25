import { MovieModel } from './movie.model';

export interface MoviesModel{
    count: number;
    next: string;
    previous: string;
    results: Array<MovieModel[]>;
}