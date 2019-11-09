<template>
    <section id="container">
            <section id="main">
                <div class="content">
                    <div :class="{'active': activeTab == 1}" @click="activeTab = 1" id="profile-container" class="tab">
                        <profile v-bind:user=user></profile>
                    </div>
                    <div :class="{'active': activeTab == 2}" @click="activeTab = 2" id="courses-container" class="tab">
                        <h1 class="title">{{user.firstname}}</h1>
                        <table id="courses">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Course Title</th>
                                <th>Semester</th>
                                <th>Grade</th>
                            </tr>
                            </thead>
                            <tbody>
                            <TableEntry v-for="(course, index) in user.courses" v-bind:key="index" v-bind:course="course" v-bind:index="index"></TableEntry>
                            </tbody>
                        </table>
                        <br>
                        <br>
                        <div>
                            <button @click="addActive = !addActive" id="add-course-button" class="blue-button">+</button>
                            <component v-if="addActive" v-bind:is="component" @cancelled = cancelled @addCourse = addCourse></component>
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <button :class="{'active': activeTab == 1}" @click="activeTab = 1" id="profile-button" class="pill">Profile</button>
                    <button :class="{'active': activeTab == 2}" @click="activeTab = 2" id="courses-button" class="pill">Courses</button>
                </div>
            </section>
    </section>
</template>

<script>
import AddCourse from './AddCourse.vue'
import Profile from "./Profile"
import User from "../models/User";
import TableEntry from "./TableEntry";

export default {
    
    el: "#container",

    methods: {
        cancelled(){
            this.addActive = false;
        },

        addCourse(course) {
            this.$emit("addCourse",course)
        }
    },

    props: {
        user: {
            type: User
        }
    },
    
    components: {
        TableEntry,
        Profile,
        'add-course': AddCourse
    },

    data: function () {
        return {
            component: 'add-course',
            activeTab: 1,
            addActive: false
        }
    }
}
</script>
