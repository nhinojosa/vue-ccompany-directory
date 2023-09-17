<script setup>
    import { ref } from 'vue'
    const brand = ref(' EJV.co Employee Directory ')
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
                <a href="#" class="menu-login">Logout</a>            
            </div>
        </div>
    </nav>
</template>

<style scoped lang="postcss">
    nav {
        @apply h-20 flex bg-p1 text-slate-200;
        .wrapper {
            @apply container mx-auto flex w-full items-center justify-between;
            .brand {
                &-title {
                    @apply text-2xl font-bold text-yellow-500;
                }
            }
            .menu {
                @apply flex gap-2;
                &-item{
                    @apply rounded-md px-4 py-2 hover:bg-yellow-500 hover:text-slate-900;
                }
                &-login{
                    @apply border-2 rounded-md bg-purple-900 px-4 py-2 text-red-100 hover:bg-red-700 hover:text-slate-900
                }
            }
        }
    }
</style>