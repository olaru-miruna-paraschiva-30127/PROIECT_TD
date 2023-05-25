<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="parrot.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="age">Age (years)</label>
        <input
          class="form-control"
          id="age"
          required
          v-model="parrot.age"
          name="age"
        />
      </div>
      <div class="form-group">
              <label for="color">Color</label>
              <input
                class="form-control"
                id="color"
                required
                v-model="parrot.color"
                name="color"
              />
            </div>

                        <div class="form-group">
                        <label for="sold">Sold </label>
                        <br>


                          <select   id="sold"
                                                               required
                                                               v-model="parrot.sold"
                                                               name="sold">

                              <option value="True">True</option>
                              <option value="false">False</option>

                          </select>
                                     </div>
<div class="form-group">
    <label for="datOfBringingToTheStore">Date of bringing to the store</label>
     <input

     class="form-control"
     type="date"
     id="datOfBringingToTheStore"
     required
   v-model="parrot.datOfBringingToTheStore"
      name="datOfBringingToTheStore"
       />
 </div>

 <div class="form-group">
              <label for="areaOfOrigin">Area Of Origin</label>
              <input
                class="form-control"
                id="areaOfOrigin"
                required
                v-model="parrot.areaOfOrigin"
                name="areaOfOrigin"
              />
            </div>
  <div>
               <label for="gender">Gender </label>
<br>


  <select  id="gender"
                           required
                           v-model="parrot.gender"
                           name="gender">

      <option value="male">Male</option>
      <option value="female">Female</option>

  </select>
             </div>
  <div class="form-group">
               <label for="sizeAtMaturity">Size At Maturity (cm)</label>
               <input
                 class="form-control"
                 id="sizeAtMaturity"
                 required
                 v-model="parrot.sizeAtMaturity"
                 name="sizeAtMaturity"
               />
             </div>
  <div class="form-group">
               <label for="specificFood">Specific Food</label>
               <input
                 class="form-control"
                 id="specificFood"
                 required
                 v-model="parrot.specificFood"
                 name="specificFood"
               />
             </div>

              <div>
                            <label for="canImitateOtherAnimals">Can Imitate Other Animals </label>
             <br>


               <select  id="canImitateOtherAnimals"
                                         required
                                         v-model="parrot.canImitateOtherAnimals"
                                         name="canImitateOtherAnimals">

                   <option value="true">True</option>
                   <option value="false">False</option>

               </select>
                          </div>
                          <br>
                          <br>
      <button @click="saveParrot" class="styled-button">Submit</button>
      <br>
      <br>
      <br>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="styled-button" @click="newParrot">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ParrotDataService from "@/services/ParrotDataService";
import Parrot from "@/types/Parrot";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "add-parrot",
  data() {
    return {
      parrot: {
        id: null,
        name: "",
        age: "",
        color: "",
        sold: false,
        datOfBringingToTheStore:"",
        areaOfOrigin: "",
       gender: "",
        sizeAtMaturity: "",
        specificFood: "",
        canImitateOtherAnimals: false,
      } as Parrot,
      submitted: false,
    };
  },
  methods: {
    saveParrot() {
      let data = {
        name: this.parrot.name,
        age: this.parrot.age,
         color: this.parrot.color,
         sold: this.parrot.sold,
          datOfBringingToTheStore: this.parrot.datOfBringingToTheStore,
           areaOfOrigin: this.parrot.areaOfOrigin,
            gender: this.parrot.gender,
             sizeAtMaturity: this.parrot.sizeAtMaturity,
              specificFood: this.parrot.specificFood,
               canImitateOtherAnimals: this.parrot. canImitateOtherAnimals

      };

      ParrotDataService.create(data)
        .then((response: ResponseData) => {
          this.parrot.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newParrot() {
      this.submitted = false;
      this.parrot = {} as Parrot;
    },
  },
});
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
.styled-button {
background-color: #009879;
    color: #ffffff;
    text-align: left;
}
</style>
