<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="index.html" class="logo"><b>{{ name }}</b></a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
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