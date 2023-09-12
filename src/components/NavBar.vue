<script setup>
    import { ref } from 'vue'
    const brand = ref(' Fake Company Directory ')
</script>

<template>
    <nav>
        <div class="wrapper">
            <div class="brand">
                <span class="brand-title">{{ brand }}</span>
            </div>
            <div clase="menu">
                <a href="#" class="menu-item">Departments</a>
                <a href="#" class="menu-item">Settings</a>
                <a href="#" class="menu-item">Logout</a>            
            </div>
        </div>
    </nav>
</template>

<style scoped lang="postcss">
    nav {
        @apply h-20 bg-slate-900 text-slate-200;
        .wrapper {
            @apply flex items-center justify-between;
        }
    }
</style>