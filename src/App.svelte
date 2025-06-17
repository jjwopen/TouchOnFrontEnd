<script>
  import Router from 'svelte-spa-router'
  import Home from './routes/Home.svelte'
  import Menu from './routes/Menu.svelte'

  import Order from './routes/Order.svelte'

  import Order from './routes/Order/Order.svelte'
  import OrderC from './routes/Order/OrderComplete.svelte'


  const routes = {
    '/': Home,
    '/menu': Menu,


    '/order': Order,
    '/order/orderA': Order,
    '/order/orderB': Order,
    '/orderC': OrderC

  }
</script>

<main class="h-screen flex justify-center items-center bg-gray-100">
  <div class="aspect-[9/16] h-full bg-white shadow-lg">
    <Router {routes} />
  </div>
</main>
