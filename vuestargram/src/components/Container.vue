<template>
    <div>
        <div v-if="step === 0"><Post :data="data[i]" v-for="(a, i) in data" :key="i" /></div>

        <div v-else-if="step === 1">
            <div :class="choiceFilter" class="upload-image" :style="`background-image: url(${imgUrl})`"></div>
            <div class="filters">
                <FilterBox :imgUrl="imgUrl" :filter="filter" v-for="filter in filters" :key="filter">
                    {{filter}}
                </FilterBox>
            </div>
        </div>

        <div v-else>
            <div :class="choiceFilter" class="upload-image" :style="`background-image: url(${imgUrl})`"></div>
            <div class="write">
                <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea>
            </div>
        </div>
    </div>
</template>

<script>
import FilterBox from './FilterBox.vue'
import Post from './Post.vue'
export default {
    components: { Post, FilterBox },
    props: {
        data: Array,
        step: Number,
        imgUrl: String,
    },
    data() {
        return {
            filters: [
                "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
            ],
            choiceFilter: ''
        }
    },
    mounted() {
        this.emitter.on('changeFilter', x => {
            this.choiceFilter = x
        })
    },
}
</script>

<style>
.upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
}
.filters{
    overflow-x:scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>