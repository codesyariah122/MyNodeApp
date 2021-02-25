<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto text-white">
      <li class="nav-item active">
        <router-link active-class="active" exact :to="{name: 'Home'}">Home</router-link>
      </li>
      <li class="nav-item ml-3">
         <router-link active-class="active" exact :to="{name: 'About'}">About</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>

</script>

<style>
.active{
  color:rgba(0, 0, 0, 1) !important;
}
a {
  color: rgba(0, 0, 0, 0.5) !important;
}
</style>