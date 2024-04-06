import http from 'k6/http';
import { sleep, check} from 'k6';

export const options = {
    stages: [
    {vus: 10, duration: '30s', target: 30},
    // {vus: 100, duration: '30s', target: 20},
    // {vus: 10, duration: '30s', target: 10},
    ],  
    "http_req_duration": ["p(95)<100"]
    };

    export default function() {
    let response;
    let name = 'Rick';
    let url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    
    response = http.get(url);
    check(response, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
    }
