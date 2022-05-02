<template>
    <div class="vue-modal" v-show='open'>
        <div class="close" @click="$emit('close')"></div>
        <div class="vue-modal-inner">
            <div class="vue-modal-content">
                <InspectionItem2 class="inspection" />
                <!-- <button type="button" @click="$emit('close')">X</button> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import InspectionItem2 from './InspectionItem2.vue';
export default {
    props: {
        open: {
            type: Boolean,
            required: true
        }
    },
    components: {
        InspectionItem2
    },
    methods: {
        closeOut() { }
    }
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
    z-index: 2;
}

.close {
    width: 100%;
    height: 100%;
    /* background-color: rgba(20, 0, 134, 0.611); */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;

}

/* .inspection {
    z-index: 2;
} */

.vue-modal-inner {
    max-width: 80%;
    margin: 6vh auto;
    z-index: 1;
}

.vue-modal-content {
    margin: auto;
    position: relative;
    /* background-color: rgba(255, 255, 255, 0); */
    /* border: 1px solid rgba(0, 0, 0, 0.3); */
    padding: 2rem;
}
</style>