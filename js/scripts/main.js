import { getAll } from "./db";

const generateTable = (data=[]) => {
    console.log(data);
};

getAll().then(data => generateTable(data));
