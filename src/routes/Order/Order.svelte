<script>
    import Router from 'svelte-spa-router'

    import OrderForHereToGo from './OrderForHereToGo.svelte'
    import OrderCoupon from './OrderCoupon.svelte'
    import OrderPay from './OrderPay.svelte'
    import {orderInfo} from "../../store.js";

    const routes = {
        '/order/orderA': OrderForHereToGo,
        '/order/orderB': OrderCoupon,
        '/order/orderC': OrderPay
    }

    $: {
        const updated = { ...$orderInfo };

        updated.total = updated.menus.reduce((total, item) => {
            let itemTotal = item.price * item.count;

            if (item.detail?.isSet && item.detail.details?.length) {
                const detailTotal = item.detail.details.reduce((subTotal, detailItem) => {
                    return subTotal + (detailItem.price * detailItem.count);
                }, 0);
                itemTotal += detailTotal * item.count;
            }
            if (updated.coupon.applied) return total + itemTotal - updated.coupon.discount;
            else return total + itemTotal;
        }, 0);

        // store에 total 업데이트
        orderInfo.set(updated);
    }

    let modalType = null;
    const closeModal = () => modalType = null;

    function openModal(type) {
        modalType = type;
    }




</script>

<!-- Full-Screen -->
<div id="background-top" class="h-3/4 bg-gray-500">
    <div id="header-pay" class="h-1/4 bg-white content-center">
        <p class="text-center text-4xl">결제하기</p>
    </div>

    <header>
        <button on:click={() => { window.location.href = "/#/menu" }} id="button-back" class="ml-2 mt-1">뒤로가기</button>
    </header>
    <header>
        <p class="text-center text-3xl -translate-y-2">주문정보</p>
    </header>
    <hr class="m-2">

    <div id="order-menu-p" class="flex flex-col m-2">
        <!--        order-menu-->
        {#each $orderInfo.menus as info (info.id)}
            {#if info.count>0}
                <div>
                    <div class="order_menu flex-between">
                        <div class="menu_img aspect-square w-1/4 align-middle content-center border-2 rounded-2xl mr-2 bg-gray-400">
                            <img src="{info.id}.png" alt="{info.id}" class="w-auto">
                        </div>
                        <div class="menu_detail flex flex-col w-full pr-2">
                            <div class="menu_detail_top flex-between items-center h-6">
                                <p class="menu_name font-medium">{info.name}</p>
                                <div class="flex-items-center">
                                    <div class="flex-between mr-2 items-center">
                                        <button on:click={() => {
                                    if (info.count > 1) info.count --;
                                 }} class="button_menu_count_minus h-5 w-5 p-1 border-l-2 border-y-2 rounded-l-lg flex-center text-center bg-white">
                                            <img src="minus.png" alt="-">
                                        </button>
                                        <div class="menu_count h-5 w-5 p-1 border-2 flex-center text-center bg-white">{info.count}</div>
                                        <button on:click={()=>{ info.count ++; }} class="button_menu_count_plus h-5 w-5 p-1 border-r-2 border-y-2 rounded-r-lg flex-center text-center bg-white">
                                            <img src="plus.png" alt="+">
                                        </button>
                                    </div>
                                    <button on:click={()=>{ info.count = 0; }} class="button_menu_delete">
                                        <img src="x.png" alt="X" class="w-6">
                                    </button>
                                </div>
                            </div>
                            <hr class="my-1 border-gray-600">
                            <div class="flex-between">
                                <div class="menu-options text-sm">
                                    {#if info.detail.isSet}
                                        {#each info.detail.details as detail (detail.id)}
                                            <div class="menu-option flex-items-center">
                                                <img src="dot.png" alt="Dot" class="w-2 h-2 mr-2">
                                                <p>{detail.tag}: {detail.name}</p>
                                            </div>
                                        {/each}
                                    {/if}
                                </div>
                                <button class="menu-option-edit h-full p-2 border-2 rounded-xl bg-white">수정하기</button>
                            </div>
                            <hr class="my-1 border-gray-600">
                            <p class="text-right text-xl">
                                {(info.price * info.count +
                                (info.detail?.details?.reduce((sum, d) => sum + d.price * d.count, 0) || 0) * info.count).toLocaleString()}원
                            </p>
                        </div>
                    </div>
                </div>

            {/if}
        {/each}
    </div>
</div>

<div id="background-bottom" class="bg-red-200 h-1/4 flex flex-col">
    <div id="order-price" class="text-2xl text-right p-2.5">결제 금액: {$orderInfo.total.toLocaleString()}원</div>
    <hr>
    <Router {routes} />
</div>

<div class="relative h-[600px] w-full bg-gray-100 p-4">
    <OrderCoupon openModal={(type) => modalType = type} />

    {#if modalType}
        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div class="bg-white w-3/4 h-3/4 p-6 rounded-xl">
                {#if modalType === 'coupon'}
                    <h2 class="text-xl font-bold mb-4">정보 모달</h2>
                    <p>이건 info 모달입니다.</p>
                {:else if modalType === 'confirm'}
                    <h2 class="text-xl font-bold mb-4">확인 모달</h2>
                    <p>이 작업을 진행하시겠습니까?</p>
                {:else}
                    <p>알 수 없는 모달 타입입니다: {modalType}</p>
                {/if}

                <button on:click={closeModal} class="mt-6 bg-red-500 text-white px-4 py-2 rounded">닫기</button>
            </div>
        </div>
    {/if}
</div>