<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link text-primary" href="#" aria-label="Previous" :class="{disabled: !pagination.has_pre}"  @click.prevent="getPageProducts(page = pagination.current_page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pagination.total_pages" :key="page">
        <a
          class="page-link text-primary"
          href="#"
          @click.prevent="getPageProducts(page = page)"
          >{{ page }}</a
        >
      </li>
      <li class="page-item">
        <a class="page-link text-primary" href="#" aria-label="Next" :class="{disabled: !pagination.has_next}" @click.prevent="getPageProducts(page = pagination.current_page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pagination", "getPageProducts", "ordersPagination", "blogPagination", "getCoupons", "couponPagination"],

  data() {
    return {
      url: import.meta.env.VITE_API,
      api_path: import.meta.env.VITE_PATH,
    };
  },
};
</script>