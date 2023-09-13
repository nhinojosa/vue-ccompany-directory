<script setup>
import { faker } from '@faker-js/faker'
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const fullName = `${firstName} ${lastName}`  
</script>

<template>
    <div>
        <div class="card-image">
            <img :src="faker.internet.avatar()" alt="" srcset="" />
        </div>
        <div class="card-details">
            <p class="card-details-name">{{ fullName }} </p>
            <p class="card-details-job">{{ faker.name.jobTitle() }}, {{ faker.name.jobArea() }}</p>
            <p class="card-details-email"> {{ faker.internet.exampleEmail(firstName, lastName) }}</p>
            <p class="card-details-quote"> {{ faker.lorem.paragraph( ) }}</p>
        </div>
    </div>
</template>