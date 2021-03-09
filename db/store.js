const util = require('util');
const fs = require('fs');

const uuid = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class store {

    read() {

        return readFileAsync('db/db.json', 'utf8');
    }


    write(note) {

        return writeFileAsync('db/db.json', JSON.stringify(notes))

    }




    getNotes() {

        return this.read().then(notes => {

            let notesList;
            try {
                notesList = [].concat(JSON.parse(notes));

            }
            catch (err) {

                notesList = []
            }

            return notesList


        })
    }
    addNotes(note) {

        const { title, text } = note;
        const userNote = { title, text, id: uuid() }
        return this.getNotes()
            .then(notes => [...notes,userNote])
            .then(newNotes => this.write(newNotes))
            .then(() => userNote)





    }
    removeNotes(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== (id)))
            .then(deletedNotes => this.write(deletedNotes))



    }




}


module.exports = new store()


