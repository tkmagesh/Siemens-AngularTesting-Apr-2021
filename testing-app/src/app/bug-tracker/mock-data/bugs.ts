import { Bug } from '../models/Bug';

export const bugsTestData : Bug[] = [
    {
      "id": 1,
      "name": "Data integrity checks failed",
      "isClosed": false,
      "createdAt": new Date("2019-09-27T06:34:45.852Z")
    },
    {
      "id": 2,
      "name": "Server communication failure",
      "createdAt": new Date("2020-11-26T11:17:31.342Z"),
      "isClosed": false
    },
    {
      "id": 3,
      "name": "Salary not credited",
      "createdAt": new Date("2020-11-26T11:30:23.139Z"),
      "isClosed": true
    }
  ]