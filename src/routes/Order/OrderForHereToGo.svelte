<script>
    import {orderInfo} from "../../store.js";
</script>
<div class="flex flex-grow gap-4 p-4">
    <button on:click={() => {
        $orderInfo.toGo = 0;
        setTimeout(() => {window.location.href = "/#/order/orderb";}, 200)
    }} id="order-for-here" class="flex-grow h-full gap-1 border-2 rounded-3xl border-mcd-red shadow-xl active:shadow-2xl transition-shadow duration-300 ease-in-out">
        <p class="font-bold text-3xl">매장식사</p>
        <p>For Here</p>
    </button>
    <button on:click={() => {
        $orderInfo.toGo = 1;
        setTimeout(() => {window.location.href = "/#/order/orderb";}, 200)
    }} id="order-to-go" class="flex-grow h-full gap-1 border-2 rounded-3xl border-mcd-red shadow-xl active:shadow-2xl transition-shadow duration-300 ease-in-out">
        <p class="font-bold text-3xl">포장주문</p>
        <p>To Go</p>
    </button>
</div>