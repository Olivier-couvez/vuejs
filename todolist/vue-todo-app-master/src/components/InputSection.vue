<template>
  <div>
    <el-row>
      <el-col :span="3">
        Tâche:
      </el-col>

      <el-col :span="8">
        <el-input
          placeholder="Saisissez la tâche"
          v-model="activity"
          size="mini"
        >
        </el-input>
      </el-col>
      <el-col :span="3">
        Date:
      </el-col>
      <el-col :span="8">
        <el-date-picker
          v-model="date"
          type="date"
          placeholder="Choisir une date"
        >
        </el-date-picker>
      </el-col>
    </el-row>
    <el-button
      type="primary"
      icon="el-icon-circle-plus-outline"
      circle
      @click="addActivityMethod()"
    >
    </el-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import uuid from "uuid/v4";

export default {
  name: "InputSection",
  data() {
    return {
      activity: "",
      date: "",
    };
  },
  methods: {
    ...mapActions(["addActivity", "setErrorMessageAction"]),
    addActivityMethod() {
      if (this.validateData() === true) {
        const activity = {
          name: this.activity,
          completed: false,
          date: this.date,
          id: uuid(),
        };
        this.setErrorMessageAction({ message: "" });

        this.addActivity({ activity });
        this.activity = "";
        this.date = "";
      } else {
        this.setMessageError();
      }
    },

    validateData() {
      if (this.activity !== "" && this.date !== "") {
        return true;
      } else {
        return false;
      }
    },

    setMessageError() {
      let error = "";
      if (this.activity === "" && this.date === "") {
        error = "La tâche && la date sont vides !";
      } else {
        if (this.activity === "") {
          error = "La tâche est vide !";
        } else {
          error = "Saisissez la date !";
        }
      }

      this.setErrorMessageAction({ message: error });
    },
  },
};
</script>

<style></style>
