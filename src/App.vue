<script setup>
import { Notivue, Notifications, useNotivue, pastelTheme } from "notivue";
import { vDraggable } from '@neodrag/vue'
import { useDragOptions } from './composables/UseDragOptions'

const getDragOptions = useDragOptions()
const config = useNotivue();

</script>

<template>
  <Notivue v-slot="item">
    <Notifications :item="item" :theme="pastelTheme" v-draggable="getDragOptions(item)" />
  </Notivue>
  <router-view />
</template>