import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-scheduling',
  templateUrl: './delete-scheduling.component.html',
  styleUrls: ['./delete-scheduling.component.css']
})
export class DeleteSchedulingComponent implements OnInit {
  schedulings: any[];
  selectedSchedulingId: number | undefined;

  constructor(private http: HttpClient) {
    
    this.http.get<any>('http://localhost:8080/api/v1/schedulings').subscribe((data) => {
      this.schedulings = data;
      
      
    });
  }
  ngOnInit() {
    this.fetchSchedulings();
  }
  fetchSchedulings() {
    this.http.get<any[]>('http://localhost:8080/api/v1/schedulings').subscribe((data) => {
      this.schedulings = data;
    });
  }


 

  deleteScheduling() {
    if (this.selectedSchedulingId) {
      this.http.get(`http://localhost:8080/api/v1/deleteScheduling/${this.selectedSchedulingId}`).subscribe({
        next: () => {
          console.log('Programmazione eliminata con successo');
          
        },
        error: (error) => {
          console.error('Errore durante l\'eliminazione della programmazione', error);
        }
      });
    } else {
      console.log('Nessuna programmazione selezionata');
    }
  }

  getSchedulingId(event: Event): void {
    const selectedSchedulingId = (event.target as HTMLSelectElement).value;
    console.log(selectedSchedulingId)
    this.selectedSchedulingId = selectedSchedulingId ? Number(selectedSchedulingId) : undefined;
  }
}
