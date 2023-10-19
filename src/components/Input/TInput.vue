<template>
  <div class="input">
    <label data-v-70fd1f3a="" class="add-modal-makh modal-lb"
      ><span data-v-70fd1f3a="">
        Họ tên:  <span data-v-70fd1f3a="" style="color: red">*</span></span
      ><input data-v-70fd1f3a="" type="text" class="modal-inp"
    /></label>
    <div>{{nameInput}}</div>
  </div>
</template>
<script>
export default {
  name: "TInput",
  props: ["nameInput"]
};
</script>
<style scoped>
.input{
  max-height: 100%;
}
</style>