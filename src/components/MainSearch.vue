<template>
    <div class="wrapper">
        <input type="text" placeholder="Search Staff Member" class="search" />
        <span class="icon">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-6"
            >
            <path stroke-linecap="round" 
                stroke-linejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </span>
    </div>
</template>

<style scoped lang="postcss">
    .wrapper {
        @apply flex w-full items-stretch;
        .search{
            @apply rounded-md border-2 border-p7 px-6 py-4 text-slate-700 placeholder-slate-400 outline-none focus:ring-yellow-500;
        }
        .icon {
            @apply absolute right-0 z-10 py-4 pr-8 text-slate-400;
        }
    }
</style>
    