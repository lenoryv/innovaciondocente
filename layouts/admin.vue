<template>
  <div>
    <Navbar/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <Sidebar/>
        </div>
        <div class="col-md-10">
          <nuxt/>
          <footer>
            <ul>
              <li>
                © 2018
                <a href="https://www.utpl.edu.ec/">UTPL</a>
              </li>
              <li>
                InDevelopmentCompany
                <a class="footer-heart"
                   href=""
                   title="With love by InDevelopmentCompany">
                  <i class="fas fa-heart" />
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.cont {
  width: 100%;
  padding: 0;
  margin: 0;
}

footer {
  border-top: 1px #e1e4e8 solid;
  ul {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    justify-content: space-between !important;
    a {
      margin-left: 0.5rem;
    }
    li {
      font-size: 80%;
    }
  }
}
</style>
