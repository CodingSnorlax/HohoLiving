<template>
  <!-- pagination -->
  <nav class="d-flex justify-content-center">
    <ul class="pagination">
      <!-- previous -->
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          aria-label="Previous"
          @click.prevent="$emit('get-product-data', pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- 數字頁數 -->
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="'page'+ page"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link" @click.prevent="$emit('get-product-data', page)">{{ page }}</a>
      </li>
      <!-- next -->
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          aria-label="Next"
          @click.prevent="$emit('get-product-data', pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages']
}
</script>
