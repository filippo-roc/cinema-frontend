import { Component } from '@angular/core';

interface Movie {
  title: string;
  description: string;
}

@Component({
  selector: 'app-dettaglio-film',
  templateUrl: './dettaglio-film.component.html',
  styleUrls: ['./dettaglio-film.component.css']
})
export class DettaglioFilmComponent {
  movies: Movie[] = [
    {
      title: 'Inception',
      description: 'Un ladro esperto di estrarre informazioni segrete ruba segreti corporate inserendosi nei sogni delle persone.'
    },
    {
      title: 'The Shawshank Redemption',
      description: 'La storia di Andy Dufresne, un banchiere che è stato condannato all\'ergastolo per l\'omicidio di sua moglie e del suo amante.'
    },
    {
      title: 'The Godfather',
      description: 'La storia della famiglia Corleone, con particolare attenzione sul figlio più giovane, Michael, che prende la guida della famiglia.'
    },
    {
      title: 'The Dark Knight',
      description: 'Il Cavaliere Oscuro si trova a combattere una minaccia mortale proveniente da Gotham City, rappresentata dal Joker.'
    },
    {
      title: 'Schindler\'s List',
      description: 'La storia di Oskar Schindler, un uomo d\'affari tedesco che ha salvato la vita a molti ebrei polacchi durante l\'Olocausto.'
    },
    {
      title: 'Pulp Fiction',
      description: 'Una serie di storie intrecciate che ruotano attorno a due criminali, una moglie del boss e un pugile incallito.'
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      description: 'Frodo e Sam si avvicinano al Monte Fato per distruggere l\'Unico Anello, mentre l\'esercito di Aragorn si prepara per la battaglia.'
    }
    
  ];

  selectedMovie: Movie | undefined; 

  constructor() {
   
    this.selectedMovie = this.movies[0];
  }

}
