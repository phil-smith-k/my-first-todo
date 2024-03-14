import { todoStoreConfig } from "@/stores/todos/todoStore";
import { StoreManager } from "@/core/stateManagement/storeManager";

const configs = [todoStoreConfig];

export const storeManager = new StoreManager(configs);