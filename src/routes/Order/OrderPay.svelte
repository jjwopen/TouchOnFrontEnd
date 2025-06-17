<script>
    import { getContext } from "svelte";
    import {orderInfo} from "../../store.js";

    const openModal = getContext('openModal');
</script>

<div class="flex flex-grow gap-4 p-4">
    <button onclick={() => {openModal('coupon')}} id="order-coupon" class="flex-grow basis-0 h-full gap-1 border-2 rounded-3xl border-gray-50 shadow-xl active:shadow-2xl transition-shadow duration-300 ease-in-out">
        <p class="font-bold text-3xl">쿠폰 적용</p>
        {#if $orderInfo.coupon.applied}
            <p>-{$orderInfo.coupon.discount.toLocaleString()}원</p>
        {/if}

    </button>
    <button onclick={() => {openModal('pay')}} id="order-pay" class="flex-grow basis-0 h-full gap-1 border-2 rounded-3xl border-gray-50 shadow-xl active:shadow-2xl transition-shadow duration-300 ease-in-out">
        <p class="font-bold text-3xl">카드 결제 진행</p>
        <p>Pay with Card</p>
    </button>
</div>