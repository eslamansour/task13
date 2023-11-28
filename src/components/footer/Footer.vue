<template>
  <div>

    <!-- footer -->
    <footer class="footer-section">
      <div class="container-fluid" >
        <div style="color:#1565D8;text-align:center">
          <b-row class="mt-4">
            <b-col lg="12" md="12" sm="12">
              <div class="">
                <p>Copyright ©</p>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import store from "../../store/index.js"
import { sendRequest }  from "../../utils/RequestHelper.js"

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
  }
};
</script>
<style scoped>
  .footer-section{
    width: 100%;
    text-align: center;
  }
  .footer-section p{
    color: #5A7184;
  }
</style>
