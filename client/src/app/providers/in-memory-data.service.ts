import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let students = [
      { id: 1, name: 'Mahesh' },
      { id: 2, name: 'Anuradha' },
      { id: 3, name: 'Bandara' },
      { id: 4, name: 'Kumuduni' },
      { id: 5, name: 'Damayanthi' }
    ];
    return {students};
  }
}