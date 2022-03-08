<template>
  <div>
    <p>
      It has two SPAs, MAIN and ADMIN
    </p>
    <textarea class="form-control" rows="20" v-model="vue_config_js">
    </textarea>
    <textarea class="form-control" rows="20" v-model="desc">
    </textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: 'Desc 1',
      vue_config_js: `Desc 2 `,
    };
  },
};
</script>
