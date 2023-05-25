<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by name"
          v-model="name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Parrots List</h4>

      <table class="styled-table">
       <thead   class="list-group">
              <tr>
                  <th>Name</th>
                  <th>Age (years)</th>
                  <th>Color</th>
                  <th>Sold</th>
                  <th>Data Of Bringing To The Store</th>
                  <th> Area Of Origin</th>
                  <th>Gender</th>
                  <th>Size At Maturity (cm)</th>
                  <th>Specific Food</th>
                  <th>Can Imitate Other Animals</th>
                  <th>Delete Current Parrot</th>
                  <th>Edit Current Parrot</th>

              </tr>
          </thead>
          <tbody  >
      <tr

class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(parrot, index) in parrots"
                :key="index"
                @click="setActiveParrot(parrot, index)"
      >
      <td>{{ parrot.name}}     </td>
      <td>{{ parrot.age }} </td>
       <td>{{ parrot.color }} </td>
        <td>{{ parrot.sold }} </td>
         <td>{{ parrot.datOfBringingToTheStore }} </td>
        <td>{{ parrot.areaOfOrigin }} </td>
        <td>{{ parrot.gender }} </td>
        <td>{{ parrot.sizeAtMaturity }} </td>
        <td>{{ parrot.specificFood }} </td>
        <td>{{ parrot.canImitateOtherAnimals }} </td>

        <td>

        <button class="styled-button" @click="deleteParrot">
                   Delete
                 </button>

                 </td>
                 <td>
 <div v-if="currentParrot.id">
 <button  class="styled-button-edit">
                 <router-link
                          :to="'/parrots/' + currentParrot.id"
                         class="styled-button-edit"
                          >Edit</router-link
                        >
</button>
</div>
<div v-else>
<button  class="styled-button-edit">
<router-link
                          :to="'/parrots'"
                         class="styled-button-edit"
                          >Edit</router-link
                        >
                        </button>
</div>

                             </td>
      </tr>
      </tbody>
      </table>

      <button class="styled-button" @click="removeAllParrots">
        Remove All
      </button>
    </div>
    <div class="col-md-6">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ParrotDataService from "@/services/ParrotDataService";
import Parrot from "@/types/Parrot";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "parrots-list",
  data() {
    return {
      parrots: [] as Parrot[],
      currentParrot: {} as Parrot,
      currentIndex: -1,
      name: ""
    };
  },
  methods: {
    retrieveParrots() {
      ParrotDataService.getAll()
        .then((response: ResponseData) => {
          this.parrots = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveParrots();
      this.currentParrot = {} as Parrot;
      this.currentIndex = -1;
    },

    setActiveParrot(parrot: Parrot, index = -1) {
      this.currentParrot = parrot;
      this.currentIndex = index;
    },

    removeAllParrots() {
      ParrotDataService.deleteAll()
        .then((response: ResponseData) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    searchName() {
      ParrotDataService.findByName(this.name)
        .then((response: ResponseData) => {
          this.parrots = response.data;
          this.setActiveParrot({} as Parrot);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    deleteParrot() {
          ParrotDataService.delete(this.currentParrot.id)
            .then((response: ResponseData) => {
              console.log(response.data);
              this.$router.push({ name: "parrots" });
              this.refreshList();
            })
            .catch((e: Error) => {
              console.log(e);
            });
        },


  },
  mounted() {
    this.retrieveParrots();
  },
});
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}



.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.styled-button {
background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-button-edit {
background-color: #ffffff;
    color:#009879;
    text-align: left;
}
</style>
