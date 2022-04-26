<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ notes.totalNotesCounts }}</td>
                </tr>
                <tr>
                    <td>Number of Characters (of all notes)</td>
                    <td>{{ notes.totalCharactersCounts }}</td>
                </tr>
                
            </tbody>
        </table>
        <input
            v-model="textInput"
            class="input"
            placeholder="Do you love noteballs?"
            type="text"
            v-autofocus
        />
    </div>
</template>

<script setup>
// Imports
    import { ref } from 'vue'
    import { useStoreNotes } from '@/stores/storeNotes'
    import { vAutofocus } from '@/directives/vAutofocus'
    import { useWatchCharacters } from '@/use/useWatchCharacters'
// store
    const notes = useStoreNotes()
// input text
    const textInput = ref('')
    useWatchCharacters(textInput, 20)
</script>