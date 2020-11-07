<template>
    <div id="Button"> {{ text }} </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String
    }
}
</script>

<style scoped>
    #Button {
        padding: 10px;
        padding-left: 80px;
        padding-right: 80px;
        border-radius: 40px;
        background-color: #FF6F64;
        display: inline-block;
        color: #fff;
        cursor: pointer;
        transition: .3s ease;
    }
    #Button:hover {
      box-shadow: 0px 5px 20px rgba(255, 111, 100,0.5);
    }
    @media only screen and (max-width: 500px) {
      #Button {
        padding-left: 40px;
        padding-right: 40px;
      }
    }
</style>
