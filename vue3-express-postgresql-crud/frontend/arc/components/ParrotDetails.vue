<template>
  <div v-if="currentParrot.id" class="edit-form">
    <h4>Parrot</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentParrot.name"
        />
      </div>
      <div class="form-group">
        <label for="age">Age (years)</label>
        <input
          type="text"
          class="form-control"
          id="age"
          v-model="currentParrot.age"
        />
      </div>

      <div class="form-group">
                    <label for="color">Color</label>
                    <input
                      class="form-control"
                      id="color"
                      required
                      v-model="currentParrot.color"
                      name="color"
                    />
                  </div>


                              <div>
                                             <label for="sold">Sold </label>
                              <br>


                                <select  id="sold"
                                                                           required
                                                                           v-model="currentParrot.sold"
                                                                           name="sold" >
                                    <option value="true">True</option>
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
         v-model="currentParrot.datOfBringingToTheStore"
            name="datOfBringingToTheStore"
             />
       </div>

       <div class="form-group">
                    <label for="areaOfOrigin">Area Of Origin</label>
                    <input
                      class="form-control"
                      id="areaOfOrigin"
                      required
                      v-model="currentParrot.areaOfOrigin"
                      name="areaOfOrigin"
                    />
                  </div>
       <div>
                      <label for="gender">Gender </label>
       <br>


         <select  id="gender"
                                  required
                                  v-model="currentParrot.gender"
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
                       v-model="currentParrot.sizeAtMaturity"
                       name="sizeAtMaturity"
                     />
                   </div>
        <div class="form-group">
                     <label for="specificFood">Specific Food</label>
                     <input
                       class="form-control"
                       id="specificFood"
                       required
                       v-model="currentParrot.specificFood"
                       name="specificFood"
                     />
                   </div>

                    <div>
                                         <label for="canImitateOtherAnimals">Can Imitate Other Animals </label>
                          <br>


                            <select   id="canImitateOtherAnimals"
                                                            required
                                                            v-model="currentParrot.canImitateOtherAnimals"
                                                            name="canImitateOtherAnimals">

                                <option value="true">True</option>
                                <option value="false">False</option>

                            </select>
                                       </div>

</form>



<br>
<br>

    <button type="submit" class="styled-button" @click="updateParrot">

      Update
    </button>
    <br>
    <br>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ParrotDataService from "@/services/ParrotDataService";
import Parrot from "@/types/Parrot";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "parrot",
  data() {
    return {
      currentParrot: {} as Parrot,
      message: "",
    };
  },
  methods: {
    getParrot(id: any) {
      ParrotDataService.get(id)
        .then((response: ResponseData) => {
          this.currentParrot = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },





    updateParrot() {
     ParrotDataService.update(this.currentParrot.id, this.currentParrot)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.message = "The parrot was updated successfully!";
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },


  },
  mounted() {
    this.message = "";
    this.getParrot(this.$route.params.id);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
.styled-button {
background-color: #009879;
    color: #ffffff;
    text-align: left;
}
</style>
