<template>
    <footer>
        <div class="container">
                <div class="row">
                    <div class="text-center space-3">
                        <small class="text-muted">
                        © {{ date }} <b>Jack</b> - All Rights Reserved. <a href="https://github.com/Jackelino/portfolio-jack-dev" class="nav-link d-inline" target="_bank"><i class="bi bi-github"></i> Source</a>
                        </small>
                    </div>
                </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            date: 0,
        }
    },
    mounted() {
        this.date = new Date().getFullYear();
    },
};
</script>
<style>
</style>

