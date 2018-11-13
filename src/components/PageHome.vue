<template>
  <div>
    <topbar></topbar>
    <logosearch></logosearch>
    <menunav></menunav>
    <banner></banner>
    <anli></anli>
    <tab></tab>
    <nineblock></nineblock>
    <footbar></footbar>
    <tooltip></tooltip>
  </div>
</template>

<script>
import topbar from './TopBar.vue';
import logosearch from './LogoSearch.vue';
import menunav from './MenuNav.vue';
import banner from './Banner.vue';
import anli from './AnLi.vue';
import tab from './Tabs.vue';
import nineblock from './NineBlock.vue';
import footbar from './FootBar.vue';
import tooltip from './ToolTip.vue';
export default {
    name: 'homepage',
    components: {topbar, logosearch, menunav, banner, anli, tab, nineblock, footbar, tooltip}
};
</script>
