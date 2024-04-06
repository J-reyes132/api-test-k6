import http from 'k6/http';
import { sleep, check} from 'k6';

//Estableciento las opciones de la prueba
export const options = {
    stages: [
    {vus: 10, duration: '30s', target: 30},
    
    ],
    "http_req_duration": ["p(95)<100"]
    };

//Ejecutando la prueba
export default function() {
    let response;
    response = http.get('https://rickandmortyapi.com/api/character/?status=alive');
    check(response, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}