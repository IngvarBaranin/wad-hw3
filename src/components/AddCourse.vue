<template>
        <span id="add-course">
            <input class="input" type="text" placeholder="Course title" ref="title" id="title">
            <input class="input" type="number" min="1" max="8" placeholder="Semester" ref="semester" id="semester">
            <input class="input" type="number" min="0" max="100" placeholder="Grade" ref="grade" id="grade">
            <button @click="clickSave" class="green-button" id="save-course">Save</button>
            <button @click="clickCancel" class="grey-button" id="cancel-course">Cancel</button>
        </span>
</template>

<script>
    import Course from '../models/Course'

    export default {

       methods: {
           clickCancel () {
               this.$refs['title'].value = "";
               this.$refs['semester'].value = "";
               this.$refs['grade'].value = "";
               this.$emit('cancelled')
           },

           clickSave () {
               this.$emit('addCourse',new Course(this.$refs['title'].value,this.$refs['semester'].value,this.$refs['grade'].value));
               this.clickCancel();
           }
       }

    }

</script>