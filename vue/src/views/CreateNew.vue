<template>  
  <nav>
    <RouterLink to="/organshop">Store</RouterLink>    
    <RouterLink to="/createnew">New Listing</RouterLink>
    <RouterLink to="/login">Logout</RouterLink>
  </nav>

  <div class="createnew">
    <h1>Create New Listing</h1>
    <form class="reqs">
      <label for="name">Name:</label> <input type="text" id="name" v-model="name" />
      <label for="birthday">Birthday:</label>
      <input type="text" id="birthday" v-model="birthday" />
      <label for="description">Description:</label>
      <input type="description" id="description" v-model="description" />
      <label for="organ">Choose an Organ:</label>
        <select name="organ" id="organ" v-model="organ">
        <option value="heart">Heart</option>
        <option value="kidney">Kidney</option>
        <option value="brain">Brain</option>
        <option value="spleen">Spleen</option>
      </select>
      <label for="cost">Cost:</label>
      <input type="number" id="cost" v-model="cost" />
    </form>
    <button class="create" @click="Create()">Create!</button>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient.js'
const name = ref('')
const birthday = ref('')
const description = ref('')
const organ = ref('')
const cost = ref('')
const info = ref([])

async function pleasework() {
  let { data } = await supabase.from('gonnalosemymind').select('*')
  info.value = data
  console.log(data)
}

async function pleaseworkpt2() {
  let { data } = await supabase.from('costs').select('*')
  info.value = data
  console.log(data)
}

async function Create() {
  console.log('test')
  try {
    await supabase.from('gonnalosemymind').insert([
      {
        name: name.value,
        birthday: birthday.value,
        description: description.value,
        organ: organ.value,
        cost: cost.value,
      }
    ])
    info.value.push(name, birthday, description, organ, cost)
    console.log(info.value)
    name.value = ''
    birthday.value = ''
    description.value = ''
    organ.value = ''
    cost.value = ''
    console.log('try')
  } catch (error) {
    console.log('catch')

    console.log(error)
  }
}

onMounted(() => {
  pleasework(),
  pleaseworkpt2()
})

</script>

<style scoped>
.createnew {
  margin: auto;
  padding: 2rem;
  font-size: 6rem;
  font-family: 'Jaldi', sans-serif;
  background: var(--secondary);
  width: 60rem;
  border-radius: 3rem;
  color: var(--tertiary);
  border: 0.5rem solid var(--fourth);
  box-shadow: 0 20px 20px 10px rgba(0, 0, 0, 0.5);
}
.reqs{
  margin: auto;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--tertiary);
  margin-bottom: 0rem;
  font-weight: bold;
}
p {
  font-size: 2rem;
}
.create{
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 15px;
  width: 10rem;
  color: var(--tertiary);
}
#name,
#description,
#birthday,
#cost,
#organ {
  border: none;
  height: 40px;
}
</style>
