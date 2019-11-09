<template>
    <tr>
        <td>{{index}}</td>
        <td>{{title}}</td>
        <td>{{semester}}</td>
        <td>{{grade}}</td>
    </tr>
</template>

<script>
    import Course from "../models/Course";
    export default {
        name: "TableEntry",
        props: {
            index: {
                type: String
            },
            course: {
                type: Course
            }
        },
        data: function () {
            return {
                title: this.course.title,
                semester: this.course.semester,
                grade: this.course.grade
            }
        }
    }
</script>

<style scoped>

</style>