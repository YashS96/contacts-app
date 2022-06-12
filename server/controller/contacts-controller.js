import loadContacts from '../model/contacts.js'

const getContacts = (request, response) => {
    let contactList = loadContacts();
    //  console.log(contactList)
    response.send(contactList) 
}

export default getContacts;