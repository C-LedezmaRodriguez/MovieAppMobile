import {Movie} from './Movie.ts';

export interface MovieListProps {
  movies: Movie[];
  title?: string;
  subtitle?: string;
}
