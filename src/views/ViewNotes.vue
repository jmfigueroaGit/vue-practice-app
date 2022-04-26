<template>
    <div class="notes">
        <NoteTextarea
          v-model="newNote"
          placeholder="Add a new note"
          ref="addEditNoteRef"
        >
            <template #buttons>
                <button
                    @click="note"
                    :disabled="!newNote"
                    class="button is-link has-background-success"
                >
                    Add New Note 
                </button> 
            </template>
        </NoteTextarea>
        <Note
          v-for="note in storeNotes.notes"
          :key="note"
          :note="note"
        />
    </div>

</template>

<script setup>
// imports
    import { ref } from 'vue'
    import Note from '@/components/Notes/Note.vue'
    import NoteTextarea from '@/components/Notes/NoteTextarea.vue'
    import { useStoreNotes } from '@/stores/storeNotes'
    import { useWatchCharacters } from '@/use/useWatchCharacters'

// store
    const storeNotes = useStoreNotes()
    const { addNote } = storeNotes
// notes
    const newNote = ref('')
    const addEditNoteRef = ref(null)

    const note = () => {
        addNote(newNote.value)
        newNote.value = ""
        addEditNoteRef.value.focusTextarea()
    }

    useWatchCharacters(newNote, 100)


</script>