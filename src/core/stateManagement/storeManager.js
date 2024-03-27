import { defineStore, storeToRefs } from 'pinia';
import { ref } from 'vue';

export class StoreManager {
    #useStores;

    constructor(configs) {
        this.#useStores = {};

        configs.forEach((config) => {
            this.#useStores[config.id] = defineStore(config);
        });
    }

    act(id, action, val) {
        const store = this.#createStore(id);
        const fn = store[action];

        if (val) {
            fn(val);
        }
    }

    stateAsRef(id, name) {
        const store = this.#createStore(id);
        return storeToRefs(store)[name];
    }

    get(id, getter) {
        const store = this.#createStore(id);
        return store[getter];
    }

    getAsRef(id, getter) {
        const store = this.#createStore(id);
        return ref(store[getter]);
    }

    #createStore(id) {
        const useStore = this.#useStores[id];
        return useStore();
    }
}