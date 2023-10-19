<template>
  <header>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <div class="header__left">
      <div class="header__sidebar">
        <i class="fas fa-bars"></i>
      </div>
      <div class="header__logo"></div>
    </div>
    
    <div class="header__right">
      <div class="header__account">
        <div class="header__avatar"></div>
        <div class="header__username">Lưu Văn Tùng</div>
        <div class="header__option">
          <span class="material-symbols-outlined">
            <i class="fas fa-ellipsis-h"></i>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "THeader",
  props: [],
  data(){
    return{
      name:"Lưu Văn Tùng"
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --color-primary: rgb(80, 184, 60);
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

html {
  font-size: 14px;
  overflow: hidden;
}

body {
  width: 100vw;
  height: 100vh;
  font-family: "Noto Sans", sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 10vh 90vh;
}

header {
  grid-column: 1 / span 2;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
}

.header__left {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-left: 1rem;
}

.fa-bars {
  font-size: 2rem;
}

.header__logo {
  flex: 1;
  width: 10.5rem;
  height: 5rem;
  background-image: url("./cukcuk-logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.header__account {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;
}

.header__avatar {
  width: 3rem;
  height: 3rem;
  background-image: url(./carrot.png);
  background-size: contain;
  border-radius: 50%;
}

.header__username {
  font-weight: 600;
  font-size: 1.1rem;
}
</style>