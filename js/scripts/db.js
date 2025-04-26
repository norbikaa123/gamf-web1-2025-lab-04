const apiUrl= 'https//nettuts.hu/jms/norbikaa123/';

export const getAll = (enitity='users') => {
    return fetch (apiUrl + enitity).then (res => res.json());
};