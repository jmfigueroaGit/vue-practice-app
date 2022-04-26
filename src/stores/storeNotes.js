import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: 'id1',
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In consequuntur aspernatur, illo at delectus itaque blanditiis repellat sed laborum.'
                },
                {
                    id: 'id2',
                    content: 'consequatur vitae dolore hic illum vero dolores necessitatibus dicta.Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                }]
        }
    },
    actions: {
        addNote(newNote) {
            let currentDate = new Date().getTime(),
                id = currentDate.toString()
            let note = {
                id,
                content: newNote
            }
            this.notes.unshift(note)
        },
        deleteNote(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        },
        updateNote(id, content) {
            let index = this.notes.findIndex(note => note.id === id)
            this.notes[index].content = content
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => note.id === id)[0].content
            }
        },
        totalNotesCounts: (state) => {
            return state.notes.length
        },
        totalCharactersCounts: (state) => {
            let count = 0;
            state.notes.forEach(note => {
                count += note.content.length
            })
            return count;
        }
    }
})
