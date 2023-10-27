import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, last, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  private apiUrl = "http://localhost:8080/api/v1/";
  schedulings: BehaviorSubject<any[]> = new BehaviorSubject([]); 



  constructor(private http: HttpClient){
  
  }

 async fetchSchedulingByFilmId(filmId){
     try{
      const result:any = await lastValueFrom(this.getSchedulings(filmId));
      console.log(result)
      this.schedulings.next(result);
     }catch(err){
      console.log("errore",err)
     }
  }
  getSchedulings(filmId){
    return this.http.get(`${this.apiUrl}schedulings?filmId=${filmId}`)
  }
}
