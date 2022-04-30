<template>
    <div class="vue-modal" v-show='open'>
        <div class="vue-modal-inner">
            <div class="vue-modal-content">
                <button type="button" @click="$emit('close')">X</button>
            <InspectionItem />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Inspection from '@/components/InspectionItem.vue';
import InspectionItem from './InspectionItem.vue';
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    components: { InspectionItem }
}

</script>

<style scoped>
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.vue-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
}
.vue-modal-inner {
    width: 1000px;
    height: 1000px;
    margin: 2rem auto;
}
.vue-modal-content {
    position: relative;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 2rem;
}
</style>