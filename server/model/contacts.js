import {readFileSync} from 'fs'

// ideally the data would be fetched via an asyc call from a permanent store

// reading dummy data from json file 
let loadContatcs = () =>{
    let contatcs = JSON.parse(readFileSync('./data/data.json'));
    return contatcs;
}

export default loadContatcs