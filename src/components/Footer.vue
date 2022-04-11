<template>
    <footer>
        <div class="container">
                <div class="row">
                    <div class="text-center space-3">
                        <small class="text-muted"> 
                        © {{ date }} Jose Manuel Fernandez Gomez - All Rights Reserved. <a href="#" class="nav-link d-inline" target="_bank"><i class="bi bi-github"></i> Source</a>
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

