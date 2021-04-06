import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Bug } from '../models/bug';
import { Observable } from "rxjs";

@Injectable()
export class BugApiService{
    private serviceEndPoint: string = 'http://localhost:3000/bugs';

    constructor(private http : HttpClient){

    }

    public getAll() : Observable<Bug[]>{
        return this.http.get<Bug[]>(this.serviceEndPoint);
    }

    public getById(id : number) : Observable<Bug>{
        return this.http
            .get<Bug>(`${this.serviceEndPoint}/${id}`);
    }

    /* public getAllOpenBugs : Observable<Bug[]> {
        //get the bugs
        //filter the bugs
        //return the result
    } */

    public save(bugData : Bug) : Observable<Bug> {
        if (bugData.id === 0){
            return this.http.post<Bug>(this.serviceEndPoint, bugData);
        } else {
            return this.http.put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData);
        }
    }

    public remove(bugData : Bug) : Observable<any>{
        return this.http.delete<any>(`${this.serviceEndPoint}/${bugData.id}`);
    }
}