<template>
  <div>
    <h1>creation</h1>
    <div>
      <input type="text">
    </div>
    <select>
      <option value="js">js</option>
      <option value="vue">vue</option>
      <option value="react">react</option>
      <option value="node">node</option>
      <option value="flutter">flutter</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'writing',
  data () {
    return {
      formData: {
        article: '',
        classify: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
