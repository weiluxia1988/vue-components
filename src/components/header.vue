<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="index.html" class="logo"><b>{{ name }}</b></a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
    </nav>
  </header>
</template>
<script>
  export default{
    props: ['baseInfo'],
    computed: {
      name: function() {
        return this.baseInfo.name;
      }
    }
  };
</script>