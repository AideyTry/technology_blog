<template>
  <div>我的项目-埋点</div>
</template>

<script>
import { setPoint } from '@/api/buriedPoint'
import { setHeaders } from '@/utils/store'
export default {
  name: 'projects',
  mounted () {
    this.getBuriedPoint()
  },
  methods: {
    getBuriedPoint () {
      setHeaders('application/json;charset=UTF-8')
      setPoint().then((res) => {
        console.log('res=', res)
      })
    }
  }
}
</script>

<style>
</style>
