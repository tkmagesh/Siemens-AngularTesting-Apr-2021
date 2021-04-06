import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { BugApiService } from './bugApi.service';
import { bugsTestData } from '../mock-data/bugs';

describe("BugApi Service", () => {

    let bugApiService : BugApiService;
    let httpTestingController : HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [
                BugApiService
            ],
            imports : [
                HttpClientTestingModule
            ]
        });
        bugApiService = TestBed.inject(BugApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
         httpTestingController.verify();
    })

    it("When retrieving all the bugs it should make a get request and return the data from the server", () => {
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
    it("Should return 1 bug by id", () => {

        bugApiService
            .getById(1)
            .subscribe( bug => {
                expect(bug).toBeTruthy('No bugs are returned')
                expect(bug.name).toBe('Data integrity checks failed');
            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs/1');
        expect(req.request.method).toBe('GET');
        req.flush(bugsTestData.find(bug => bug.id === 1));
    });

    it("Shoult make POST requests when bug id is 0", () => {
        const bugData = {
            id : 0,
            name : 'Dummy bug',
            isClosed : false,
            createdAt : new Date()
        };
        bugApiService
            .save(bugData)
            .subscribe( bug => {
                expect(bug).toBeTruthy('No bugs are returned')
                expect(bug.id).toBe(100);
            }, (err) => {

            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs');
        expect(req.request.method).toBe('POST');
        req.flush({
            id : 100,
            name : 'Dummy bug',
            isClosed : false,
            createdAt : new Date()
        });
    })

    it("Shoult throw an error when deleting a bug that doesn't exist", () => {
        const bugData = {
            id : 300,
            name : 'Dummy bug',
            isClosed : false,
            createdAt : new Date()
        };
        bugApiService
            .remove(bugData)
            .subscribe( bug => {
                expect(bug).toBeTruthy('No bugs are returned')
                expect(bug.id).toBe(100);
            }, (err) => {
                console.log(err);
                expect(err).toBeTruthy();
                expect(err.error.type).toBe('Bug does exist')
            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs/300');
        expect(req.request.method).toBe('DELETE');
        ErrorEvent
        req.error(new ErrorEvent("Bug does not exist"))
    })
})
