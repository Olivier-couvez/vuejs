<template>
  <div class="main container">
    <h1>Liste des tâches</h1>
    <div v-if="isEmpty">
      <el-alert
        title="Il n'y a aucune activité de prévue"
        type="info"
        :center="true"
        show-icon
        :closable="false"
      >
      </el-alert>
    </div>

    <div v-if="isWrongActivity" class="wrongNotification">
      <el-alert
        :title="errorMessage"
        type="error"
        :center="true"
        show-icon
        :closable="false"
      >
      </el-alert>
    </div>

    <Activity v-if="!isEmpty"></Activity>
    <Information-Section></Information-Section>
    <Input-Section></Input-Section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Activity from "./Activity";
import InformationSection from "./InformationSection";
import InputSection from "./InputSection";

export default {
  name: "Dashboard",
  components: {
    Activity,
    InformationSection,
    InputSection,
  },
  computed: {
    ...mapGetters({
      activities: "getActivities",
      errorMessage: "getErrorMessage",
    }),
    isEmpty() {
      return this.activities.length === 0;
    },
    isWrongActivity() {
      return this.errorMessage.length > 0;
    },
  },
};
</script>

<style>
.main {
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 10px;
  background-color: aquamarine;
}

.wrongNotification {
  margin-bottom: 0.2rem;
  width: 80%;
  margin-left: 10%;
  text-align: center;
  margin-top: 10px;
}
</style>
