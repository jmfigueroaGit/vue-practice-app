<template>
    <div class="edit-note">
        <NoteTextarea
          v-model="noteContent"
          bgColor="link"
          ref="addEditNoteRef"
          label="Edit Label"
          placeholder="Edit note"
        >
            <template #buttons>
                <button
                    @click="$router.back()"
                    class="button is-link is-light mr-3"
                >
                    Cancel
                </button> 
                <button
                    @click="handleSaveClicked"
                    class="button is-link has-background-link"
                    :disabled="!noteContent"
                >
                    Save Note
                </button> 
            </template>
        </NoteTextarea>
    </div>
</template>

<script setup>
// imports
    import { ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import NoteTextarea from '@/components/Notes/NoteTextarea.vue'
    import { useStoreNotes } from '@/stores/storeNotes'

// router
    const route = useRoute()
    const router = useRouter()

// store notes
    const storeNotes = useStoreNotes()

// note
    const noteContent = ref('')

    noteContent.value = storeNotes.getNoteContent(route.params.id)

// Save clicked
    const handleSaveClicked = () => {
        storeNotes.updateNote(route.params.id, noteContent.value)
        router.push('/')
    }
</script>