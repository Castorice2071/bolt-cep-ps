<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { os, path } from "../lib/cep/node";
import {
    csi,
    evalES,
    openLinkInBrowser,
    subscribeBackgroundColor,
    evalTS,
} from "../lib/utils/bolt";
import "../index.css";

import LyHome from "./components/ly-home.vue";
import LySettings from "./components/ly-settings.vue";

const backgroundColor = ref("#535353");

const count = ref(0);

const currentTab = ref("Home");
const currentComponent = computed(() => {
    return currentTab.value === "Home" ? LyHome : LySettings;
});

const tabs = [
    {
        name: "Home",
        icon: "flaticon-home",
    },
    {
        name: "Settings",
        icon: "flaticon-texture",
    },
];

onMounted(() => {
    if (window.cep) {
        subscribeBackgroundColor((c: string) => (backgroundColor.value = c));
    }
});
</script>

<template>
    <div class="app" :style="{ backgroundColor: backgroundColor }">
        <aside class="w-10">
            <div class="relative overflow-hidden h-full">
                <ul class="tabs show-names">
                    <li
                        class="tab flex justify-center items-center cursor-pointer h-10 text-white"
                        v-for="tab in tabs"
                        :key="tab.name"
                        @click="currentTab = tab.name"
                    >
                        <i :class="tab.icon"></i>
                    </li>
                    <li
                        class="tab flex justify-center items-center cursor-pointer h-10 text-white"
                    >
                        <i class="tab-icon flaticon-texture"></i>
                    </li>
                </ul>
            </div>
        </aside>

        <main class="overflow-hidden p-4 flex-grow">
            <component :is="currentComponent" />
        </main>
    </div>
</template>
