<script setup>
import { faker } from '@faker-js/faker'
const firstName = faker.name.firstName()
const lastName = faker.name.lastName()
const fullName = `${firstName} ${lastName}`  

const selectCard = () => {
    console.log(`${firstName} selected`)
}
</script>

<template>
    <div class="card" @click="selectCard">
        <div class="card-image">
            <img :src="faker.internet.avatar()" alt="" srcset="" />
        </div>
        <div class="card-details">
            <p class="card-details-name">{{ fullName }} </p>
            <p class="card-details-job">{{ faker.name.jobTitle() }}, {{ faker.name.jobArea() }}</p>
            <p class="card-details-email"> {{ faker.internet.exampleEmail(firstName, lastName) }}</p>
            <p class="card-details-quote"> "{{ faker.lorem.paragraph( ) }}"</p>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.card {
    @apply border-2 border-slate-900 cursor-pointer overflow-hidden rounded-md bg-slate-100 p-8 shadow-md transition-transform duration-300 hover:scale-125 hover:shadow-slate-800 hover:shadow-2xl;
    &-image {
        img{
            @apply mx-auto rounded-xl object-contain
        }
    }
    &-details {
        @apply flex flex-col gap-2 pt-6 text-center;
        &-name {
            @apply text-3xl font-thin tracking-wider text-slate-900;
        }
        &-job {
            @apply -mt-2 text-xs text-yellow-700;
        }
        &-email {
            @apply text-xs text-slate-700;
        }
        &-quote {
            @apply pt-4 text-lg italic text-slate-700;
        }
    }
}
</style>