const util = require('util');
const fs = require('fs');
const path = require("path")
const uuid = require('uuid');


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


class store {

    read() {

        return readFileAsync(path.join(__dirname, "db.json"), "utf8")

    }
    write(note) {

        return writeFileAsync("db/db.json", JSON.stringify(note));



    }
    getNotes() {
        return this.read().then((notes) => {
            const noteList = JSON.parse(notes);
            console.log(notes)
            return noteList

        })

    }

    writeNotes() {

        return this.write().then((notes) => {
            let noteList = JSON.parse(notes);
            noteList.push(note);
            this.write(noteList)

            console.log(note)


        })
            .catch(() => {

                console.log(err)

            })

    }


    updateDb() {

        fs.writeFile("db/db.json", JSON.stringify(notes, "\t"), (err) => {

            if (err) throw err;
            return true;



        })



    }

    deleteNotes(note) {

        return this.read()
            .then((notes) => {

                notes.splice(req.params.id)
                this.updateDb()

            })

            .catch((err) => {

                console.log(err)

            })




    }


}
module.exports = new store()


