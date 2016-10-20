import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let steps = [

      {name:'turkish shimmy quarter', 'dvd': '9', 'location':'devyani p1' },
      {name:'chico circle', 'dvd': '9', 'location':'devyani p1' },
      {name:'chico circle diagonal', 'dvd': '9', 'location':'devyani p1' },
      {name:'choochoo arc', 'dvd': '9', 'location':'devyani p1' },
      {name:'sunanda duet', 'dvd': '9', 'location':'devyani p1' },
      {name:'aswat duet', 'dvd': '9', 'location':'devyani p2' },
      {name:'turkish shimmy cross-over', 'dvd': '9', 'location':'devyani p2' },
      {name:'wrap around drop', 'dvd': '9', 'location':'devyani p2' },
      {name:'alabama twister', 'dvd': '9', 'location':'devyani p2' },
      {name:'duelling duet', 'dvd': '9', 'location':'FCBD part1' },
      {name:'rush hour', 'dvd': '9', 'location':'FCBD part1' },
      {name:'reshamka spin', 'dvd': '9', 'location':'FCBD part1' },
      {name:'level drop', 'dvd': '9', 'location':'FCBD part1' },
      {name:'duelling duet', 'dvd': '9', 'location':'FCBD part1' },
      {name:'passing', 'dvd': '9', 'location':'FCBD part2' },
      {name:'turkish passing', 'dvd': '9', 'location':'FCBD part2' },
      {name:'camel walk passing', 'dvd': '9', 'location':'FCBD part2' },
      {name:'camel walk trio', 'dvd': '9', 'location':'FCBD part2' },
      {name:'chico passing', 'dvd': '9', 'location':'FCBD part2' },
      {name:'sahra turn passing', 'dvd': '9', 'location':'FCBD part2' },
      {name:'wrap around turn passing', 'dvd': '9', 'location':'FCBD part2' },
      {name:'barrel turn passing', 'dvd': '9', 'location':'FCBD part3' },
      {name:'barrel turn circle', 'dvd': '9', 'location':'FCBD part3' },
      {name:'turkish duet passing', 'dvd': '9', 'location':'FCBD part3' },
      {name:'torso twist passing', 'dvd': '9', 'location':'FCBD part3' },
      {name:'arabic flourish with fade', 'dvd': '9', 'location':'FCBD part3' },
      {name:'arabic do-si-do', 'dvd': '9', 'location':'FCBD part3' },
      {name:'box step', 'dvd': '9', 'location':'ghawazi part1' },
      {name:'push forward and back', 'dvd': '9', 'location':'ghawazi part1' },
      {name:'push forward and back duet', 'dvd': '9', 'location':'ghawazi part1' },
      {name:'egyptian sevillana', 'dvd': '9', 'location':'ghawazi part2' },
      {name:'egyptian sevillana circle', 'dvd': '9', 'location':'ghawazi part2' },
      {name:'egyptian sevillana duet', 'dvd': '9', 'location':'ghawazi part2' },
      {name:'triangle step', 'dvd': '9', 'location':'ghawazi part2' },
      {name:'arabic double spin', 'dvd': '9', 'location':'ghawazi part3' },
      {name:'pulse turn', 'dvd': '9', 'location':'ghawazi part3' },
      {name:'rainbow', 'dvd': '9', 'location':'ghawazi part3' }

    ];
    return {steps};
  }
}
