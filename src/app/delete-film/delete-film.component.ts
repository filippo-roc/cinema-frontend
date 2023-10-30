import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../model/Film';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-film',
  templateUrl: './delete-film.component.html',
  styleUrls: ['./delete-film.component.css']
})
export class DeleteFilmComponent implements OnInit {

  films: any[]; 
  selectedFilmId: number | undefined;
  

  constructor(private http: HttpClient) {
    // Recupera i film dal backend e assegnali alla variabile films
    this.http.get<any>('http://localhost:8080/api/v1/films').subscribe((data) => {
      this.films = data;
    });
  }
  ngOnInit() {
    this.fetchFilms();
  }
  fetchFilms() {
    this.http.get<any[]>('http://localhost:8080/api/v1/films').subscribe((data) => {
      this.films = data;
    });
  }

  deleteFilm() {
    if (this.selectedFilmId) {
      this.http.get(`http://localhost:8080/api/v1/deleteFilm/${this.selectedFilmId}`).subscribe({
        next: () => {
          console.log('Film eliminato con successo');
          this.fetchFilms();
        },
        error: (error) => {
          console.error('Errore durante l\'eliminazione del film', error);
        }
      });
    } else {
      console.log('Nessun film selezionato');
    }
  }

  getFilmId(event: Event): void {
    const selectedFilmId = (event.target as HTMLSelectElement).value;
    this.selectedFilmId = selectedFilmId ? Number(selectedFilmId) : undefined;
  }
}
