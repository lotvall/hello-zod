<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';

import z from 'zod';

const userSchema = z.object({
  email: z.string().nonempty('Email is required').email({ message: 'Must be a valid email' }),
  password: z.string().nonempty('Password is required').min(8, { message: 'Password is way too short' }),
  age: z.number().min(18, { message: 'Must be over 18 years old' }).max(65, { message: 'Cannot be over 65 years old' })
})

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(userSchema),
});

const { value: email } = useField('email');

const { value: password } = useField('password');

const { value: age } = useField('age');

const onSubmit = handleSubmit((values) => {
  values.email
  values.password
  values.age

  values.profilePicture

  alert(JSON.stringify(values, null, 2));
});

</script>

<template>
  <form class="form" @submit="onSubmit">
    <div class="labelContainer">
      <span class="label">email</span>
      <span class="error">{{ errors.email }}</span>
    </div>

    <input name="email" v-model="email" type="email" />

    <div class="labelContainer">
      <span class="label">password</span>
      <span class="error">{{ errors.password }}</span>
    </div>

    <input name="password" v-model="password" type="password" />

    <div class="labelContainer">
      <span class="label">age</span>
      <span class="error">{{ errors.age }}</span>
    </div>

    <input name="age" v-model="age" type="number" />

    <button>Submit</button>
  </form>
</template>


<style>
.form {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.labelContainer {
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label {
  font-weight: 500;
  text-transform: uppercase;
}

.error {
  color: red;
  text-transform: lowercase;
}
</style>
