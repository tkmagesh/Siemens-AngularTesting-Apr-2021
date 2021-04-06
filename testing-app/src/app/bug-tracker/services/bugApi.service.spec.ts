import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { BugApiService } from './bugApi.service';
import { bugsTestData } from '../mock-data/bugs';

describe("BugApi Service", () => {

    it("When retrieving all the bugs it should make a get request and return the data from the server", () => {
        TestBed.configureTestingModule({
            providers : [
                BugApiService
            ],
            imports : [
                HttpClientTestingModule
            ]
        });
        const bugApiService = TestBed.inject(BugApiService);
        const httpTestingController = TestBed.inject(HttpTestingController);

        bugApiService
            .getAll()
            .subscribe( bugs => {
                expect(bugs).toBeTruthy('No bugs are returned')
                expect(bugs.length).toBe(3)
                const bug = bugs.find(bug => bug.id === 1);
                expect(bug).toBeDefined();
                expect(bug.name).toBe('Data integrity checks failed');
            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs');
        expect(req.request.method).toBe('GET');
        req.flush(bugsTestData);
    })
})
