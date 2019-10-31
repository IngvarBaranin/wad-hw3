<template>
    <section id="container">
            <section id="main">
                <div class="content">
                    <div :class="{'active': activeTab == 1}" @click="activeTab = 1" id="profile-container" class="tab">
                        <div id="profile">
                            <div class="avatar">
                                <img src="../assets/me.png" id="picture" alt="My picture">
                            </div>
                            <div class="info">
                                <ul>
                                    <li id="name">John Doe</li>
                                    <li id="birthdate">11/10/1990</li>
                                    <li id="faculty">Software Engineering</li>
                                </ul>
                            </div>
                            <div id="gpa">
                                <strong>2.75</strong>
                            </div>
                            <div class="clear-fix"></div>
                        </div>
                    </div>
                    <div :class="{'active': activeTab == 2}" @click="activeTab = 2" id="courses-container" class="tab">
                        <h1 class="title">Courses</h1>
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
                            <tr>
                                <td>1</td>
                                <td>Agile software development</td>
                                <td>1</td>
                                <td>82</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>System modeling</td>
                                <td>1</td>
                                <td>85</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Object-oriented programming</td>
                                <td>2</td>
                                <td>99</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Estonian language Level A2</td>
                                <td>2</td>
                                <td>65</td>
                            </tr>
                            </tbody>
                        </table>
                        <br>
                        <br>
                        <div>
                            <button @click="addActive = !addActive" id="add-course-button" class="blue-button">+</button>
                            <component v-if="addActive" v-bind:is="component"></component>
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

export default {
    
    el: "#container",

    props: {
        activeTab: {
            type: Number,
            default: 1
        },

        addActive: {
            type: Boolean,
            default: false
        }
    },
    
    components: {
        'add-course': AddCourse
    },

    data() {
        return {
            component: 'add-course'
        }
    }
}
</script>
