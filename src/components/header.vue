<template>
  <header class="main-header">
    <v-affix>
      <!-- Logo -->
      <a href="/" class="logo"><b>{{ name }}</b></a>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
      </nav>
    </v-affix>
  </header>
</template>
<script>
  import vAffix from "../../components/affix";
  export default{
    components: { vAffix },
    props: ['baseInfo'],
    computed: {
      name: function() {
        return this.baseInfo.name;
      }
    }
  };
</script>