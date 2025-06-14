<script>
    let {openModal} = $props();
    import {orderInfo} from "../../store.js";
</script>

<div class="flex flex-grow gap-4 p-4">
    <button onclick={() => {openModal('coupon')}} id="order-coupon" class="flex-grow basis-0 h-full gap-1 border-2 rounded-3xl border-red-500">
        <p class="font-bold text-3xl">쿠폰 적용</p>
        <p>-{$orderInfo.coupon.applied ? $orderInfo.coupon.discount : "0"}원</p>
    </button>
    <button class="flex-grow basis-0 h-full gap-1 border-2 rounded-3xl border-blue-500">
        <p class="font-bold text-3xl">다음</p>
        <p>Next</p>
    </button>
</div>