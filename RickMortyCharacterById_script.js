import http from 'k6/http';
import { sleep, check} from 'k6';

export const options = {
    stages: [
    {vus: 10, duration: '30s', target: 30},
    // {vus: 100, duration: '30s', target: 20},
    // {vus: 10, duration: '30s', target: 10},
    ]
    };

export default function() {
    let response;
    for(let i = 1; i <= 10; i++) {
        response = http.get(`https://rickandmortyapi.com/api/character/${i}`);
        check(response, {
            'status is 200': (r) => r.status === 200,
        });
        sleep(1);
    }}