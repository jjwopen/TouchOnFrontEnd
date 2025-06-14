<script>
    import {orderInfo} from "../../store.js";
</script>
<div class="flex flex-grow gap-4 p-4">
    <button on:click={() => { $orderInfo.toGo = 0; window.location.href = "/#/order/orderb"; }} id="order-for-here" class="flex-grow h-full gap-1 border-2 rounded-3xl border-red-500">
        <p class="font-bold text-3xl">매장식사</p>
        <p>For Here</p>
    </button>
    <button on:click={() => { $orderInfo.toGo = 1; window.location.href = "/#/order/orderb"; }} id="order-to-go" class="flex-grow h-full gap-1 border-2 rounded-3xl border-blue-500">
        <p class="font-bold text-3xl">포장주문</p>
        <p>To Go</p>
    </button>
</div>