<template>
  <aside>
    <div class="asdie">
      <a href="/home">
        <span class="material-symbols-outlined">
          <i class="far fa-chart-bar"></i>
        </span>
        <h3>Trang chủ</h3>
      </a>
      <a href="/report">
        <span class="material-symbols-outlined">
          <i class="fas fa-chart-line"></i>
        </span>
        <h3>Báo cáo</h3>
      </a>
      <a href="/customer">
        <span class="material-symbols-outlined">
          <i class="fas fa-user-friends"></i>
        </span>
        <h3>Khách hàng</h3>
      </a>
      <a href="/employee">
        <span class="material-symbols-outlined">
          <i class="fas fa-user-friends"></i
        ></span>
        <h3>Nhân viên</h3>
      </a>
      <a href="/settings">
        <span class="material-symbols-outlined">
          <i class="fas fa-cog"></i>
        </span>
        <h3>Cài đặt</h3>
      </a>
      <a href="/thuGon" class="aside-bottom">
        <span class="material-symbols-outlined">
          <i class="fas fa-chevron-left"></i>
        </span>
        <h3>Thu gọn</h3>
      </a>
    </div>
  </aside>
</template>
<script>
export default {
  name: "TSidebar",
};
</script>
<style>
asdie {
  /* display: flex; */
  grid-row: 2;
  grid-column: 1 / span 1;

  /* justify-content: space-between; */
}

aside div {
  height: 100%;
  background-color: #407136;
  padding: 1rem;
  border-radius: 3px;
  font-size: 2rem;
  flex-shrink: 0;
  flex-grow: 0;
}
asdie,
a {
  padding: 1rem 1rem;
  gap: 1rem;
  display: flex;
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.3rem;
}

aside a:hover {
  background-color: #50b83c;
  border-radius: 4px;
}
.fa-chart-bar,
.fa-chart-line,
.fa-user-friends,
.fa-cog,
.fa-chevron-left {
  font-size: 1.72rem;
}
</style>