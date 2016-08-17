<template>
  <ul class="v-tree" role="tree-node">
    <li>
      <span class="v-tree-switcher v-tree-switcher-open"><v-icon type="sort-desc"></v-icon></span>
      <span class="v-tree-checkbox"><v-checkbox></v-checkbox></span>
      <a href="javascript:;" class="v-tree-title">1-1</a>
      <ul class="v-tree-child-tree v-tree-child-tree-open">
        <li>
          <span class="v-tree-switcher v-tree-switcher-open"><v-icon type="sort-desc"></v-icon></span>
          <span class="v-tree-checkbox"><v-checkbox></v-checkbox></span>
          <a href="javascript:;" class="v-tree-title">1-1-1</a>
          <ul class="v-tree-child-tree v-tree-child-tree-open">
            <li>
              <span class="v-tree-switcher v-tree-switcher-close"></span>
              <span class="v-tree-checkbox"><v-checkbox></v-checkbox></span>
              <a href="javascript:;" class="v-tree-title">1-1-1-1</a>
            </li>
            <li>
              <span class="v-tree-switcher v-tree-switcher-close"></span>
              <span class="v-tree-checkbox"><v-checkbox></v-checkbox></span>
              <a href="javascript:;" class="v-tree-title">1-1-1-2</a>
            </li>
          </ul>
        </li>
        <li>
          <span class="v-tree-switcher v-tree-switcher-close"></span>
          <span class="v-tree-checkbox"><v-checkbox></v-checkbox></span>
          <a href="javascript:;" class="v-tree-title">1-1-2</a>
        </li>
        <li>
          <span class="v-tree-switcher v-tree-switcher-close"></span>
          <span class="v-tree-checkbox"><v-checkbox></v-checkbox></span>
          <a href="javascript:;" class="v-tree-title">1-1-3</a>
        </li>
      </ul>
    </li>
    <li>
      <span class="v-tree-switcher v-tree-switcher-close"><v-icon type="sort-desc"></v-icon></span>
      <span class="v-tree-checkbox"><v-checkbox></v-checkbox></span>
      <a href="javascript:;" class="v-tree-title">1-2</a>
      <ul class="v-tree-child-tree">
        <li>
          <span class="v-tree-switcher v-tree-switcher-close"><v-icon type="sort-desc"></v-icon></span>
          <span class="v-tree-checkbox"><v-checkbox></v-checkbox></span>
          <a href="javascript:;" class="v-tree-title">1-1-1</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
  import './tree.scss';
  import vIcon from '../icon';
  import vCheckbox from '../checkbox';
  export default {
    components: { vIcon, vCheckbox },
    props: {},
  }
</script>