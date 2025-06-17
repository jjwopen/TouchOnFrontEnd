<script>
  import Router from 'svelte-spa-router'
  import Home from './routes/Home.svelte'
  import Menu from './routes/Menu.svelte'
  import Order from './routes/Order.svelte'

  const routes = {
    '/': Home,
    '/menu': Menu,
    '/Order': Order
  }
</script>

<main class="h-screen flex justify-center items-center bg-gray-100">
  <div class="aspect-[9/16] h-full bg-white shadow-lg">
    <Router {routes} />
  </div>
</main>
