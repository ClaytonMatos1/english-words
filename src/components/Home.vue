<template>
    <v-container fluid>
        <v-form>
            <v-file-input
                label="Selecione as legendas"
                prepend-icon="mdi-message-text"
                append-outer-icon="mdi-send"
                multiple
                chips
                :model="files"
                @click="processSubtitles()"
            ></v-file-input>
        </v-form>
        <div class="cards">
            <card v-for="word in groupedWords" :key="word.name"
                :name="word.name"
                :amount="word.amount"
            ></card>
        </div>
    </v-container>
</template>

<script>
const { ipcRenderer } = window.require('electron');
// import { ipcRenderer } from 'electron';
import Card from './Card';
export default {
    data() {
        return {
            files: [],
            groupedWords: [
                { name: 'you', amount: 900 },
                { name: 'he', amount: 1234 },
                { name: 'i', amount: 853 }
            ]
        }
    },
    components: {
        Card,
    },
    methods: {
        processSubtitles() {
            console.log('here')
            ipcRenderer.send('test', 'ping');
            ipcRenderer.on('test', (event, res) => {
                console.log(res);
            });
        }
    },
}
</script>

<style>
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>