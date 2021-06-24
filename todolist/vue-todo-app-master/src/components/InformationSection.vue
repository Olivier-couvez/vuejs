<template>
  <div>
    <div>
      <el-row type="flex" justify="center" class="counterSection">
        <el-col :span="4">
          Terminé :
        </el-col>
        <el-col id="fini" :span="2">
          {{ completed }}
        </el-col>
        <el-col :span="3">
          En cours :
        </el-col>
        <el-col id="encours" :span="2">
          {{ encours }}
        </el-col>
        <el-col :span="5">
          Total :
        </el-col>
        <el-col id="tot" :span="2">
          {{ total }}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "InformationSection",
  computed: {
    ...mapGetters({
      activities: "getActivities",
    }),
    completed() {
      return this.activities.filter((val) => val.completed === true).length;
    },
    encours() {
      return this.activities.filter((val) => val.completed === false).length;
    },
    total() {
      return this.activities.length;
    },
  },
};
</script>

<style>
.counterSection {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
#encours {
  color: rgb(255, 0, 0);
  font-weight: bold;
}
#fini {
  color: green;
  font-weight: bold;
}
#tot {
  font-weight: bold;
}
</style>
