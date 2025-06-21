<script>
    import Router from 'svelte-spa-router'
    import { setContext } from "svelte"

    import OrderForHereToGo from './OrderForHereToGo.svelte'
    import OrderPay from './OrderPay.svelte'
    import {orderInfo, coupons, shortScreen, resetAllCouponApplications, resetOrderInfoToInitial} from "../../store.js";
    import { get } from "svelte/store";

    const routes = {
        '/order/orderA': OrderForHereToGo,
        '/order/orderB': OrderPay,
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
            return total + itemTotal;
        }, 0);

        // store에 total 업데이트
        orderInfo.set(updated);
    }


    // let modalType = "pay";
    let modalType = null;
    const closeModal = () => {
        if (modalType === "pay") {
            resetOrderInfoToInitial();
            resetAllCouponApplications();

            setTimeout(() => {
                console.log(get(orderInfo));
                console.log(get(coupons));
                window.location.href = "/#/orderC";
            }, 500);

        }
        modalType = null;
    }

    function openModal(type) {
        modalType = type;
    }

    setContext('openModal', openModal);

    $shortScreen;

    function goBack() {
        if (window.location.hash.toLowerCase() === "#/order/ordera") {
            coupons.update(current => {
                return current.map(coupon => ({
                    ...coupon,
                    applied: false
                }))
            })

            orderInfo.update(current => {
                return {
                    ...current,
                    coupon: {
                        applied: false,
                        discount: 0
                    }
                }
            })
        }

        console.log($orderInfo);
        history.back();
    }


</script>

<!-- Full-Screen -->
{#if $shortScreen}
    <div class="h-3/8 bg-transparent"></div>
{/if}
<div id="background-top" class="flex flex-col {!$shortScreen ? 'h-3/4' : 'h-3/8'} bg-white">
    <div id="header-pay" class="h-10 content-center pb-2  border-b-4 border-x-4 border-none bg-amber-600 shadow-xl">
        <button onclick={goBack} id="button-back" class="absolute mt-2 ml-2 font-semibold text-white">뒤로가기</button>
        <p class="text-center text-2xl text-white font-semibold mt-1">결제하기</p>
    </div>

    <div class="bg-gray-100 pt-2 flex-1 flex flex-col flex-grow shadow-md {!$shortScreen ? 'max-h-[462.5px]' : 'max-h-[211.25px]'}">
        {#if !$shortScreen}
            <header>
                <p class="text-center text-3xl my-3">주문정보</p>
            </header>
            <hr class="m-2 border-1 rounded-full">
        {/if}

        <div id="order-menu-p" class="flex flex-col m-2 overflow-y-scroll flex-1 min-h-0" style="scrollbar-width: none">
            <!--        order-menu-->
            {#each $orderInfo.menus as info}
                {#if info.count>0}
                    <div>
                        <div class="order_menu flex-between">
                            <div class="menu_img w-1/4 h-fit align-middle content-center border-2 rounded-2xl mr-2 bg-gray-400 overflow-hidden">
                                <img src="{info.id}.png" alt="{info.id}" class="w-auto">
                            </div>
                            <div class="menu_detail flex flex-col w-full pr-2">
                                <div class="menu_detail_top flex-between items-center h-fit">
                                    <p class="menu_name font-medium break-keep max-w-[180px]">{info.name}</p>
                                    <div class="flex-items-center">
                                        <div class="flex-between mr-2 items-center">
                                            <button onclick={() => {
                                    if (info.count > 1) info.count --;
                                 }} class="button_menu_count_minus h-5 w-5 p-1 border-l-2 border-y-2 rounded-l-lg flex-center text-center bg-white">
                                                <img src="minus.png" alt="-">
                                            </button>
                                            <div class="menu_count h-5 w-5 p-1 border-2 flex-center text-center bg-white">{info.count}</div>
                                            <button onclick={()=>{ info.count ++; }} class="button_menu_count_plus h-5 w-5 p-1 border-r-2 border-y-2 rounded-r-lg flex-center text-center bg-white">
                                                <img src="plus.png" alt="+">
                                            </button>
                                        </div>
                                        <button onclick={()=>{ info.count = 0; }} class="button_menu_delete">
                                            <img src="x.png" alt="X" class="w-6">
                                        </button>
                                    </div>
                                </div>
                                <hr class="my-1 border-gray-400">
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
<!--                                    <button class="menu-option-edit h-full p-2 border-2 rounded-xl bg-white">수정하기</button>-->
                                </div>
                                {#if info.detail.isSet}
                                    <hr class="my-1 border-gray-400">
                                {/if}
                                <p class="text-right text-xl">
                                    {(info.price * info.count +
                                        (info.detail?.details?.reduce((sum, d) => sum + d.price * d.count, 0) || 0) * info.count).toLocaleString()}원
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr class="my-3 border-1 rounded-full">
                {/if}
            {/each}
        </div>
    </div>

</div>

<style>
    #card {
        animation-duration: 3s;
        animation-name: card;
        animation-iteration-count: infinite;
    }

    @keyframes card {
        0% {
            transform: translate(0, -30px);
        }

        15% {
            transform: translate(0, -30px);
        }

        60% {
            transform: translate(0, -120px);
        }

        100% {
            transform: translate(0, -120px);
        }
    }
</style>

{#if modalType}
    <div class="fixed inset-0 bg-black/50 flex {!$shortScreen ? 'items-center' : 'items-end'}  justify-center z-50">
        <div class="aspect-[9/16] h-5/6 bg-white rounded-xl shadow-lg flex flex-col justify-end">
            <div class="p-6 overflow-y-auto">
                {#if modalType === 'coupon'}
                    <h2 class="text-xl font-bold text-center mb-4">쿠폰 선택</h2>
                    <div class="flex flex-col justify-start gap-2">
                        {#each $coupons as currentCoupon (currentCoupon.code)}
                            <button onclick={() => {
                                let appliedCouponDiscount = 0; // 적용될 쿠폰의 할인 금액을 저장할 변수

                                // 1. 'coupons' 스토어 업데이트
                                coupons.update(allCoupons => {
                                    const updatedCoupons = allCoupons.map(c => {
                                        // 클릭된 쿠폰이라면 'applied' 상태를 토글합니다.
                                        if (c.code === currentCoupon.code) {
                                            const newAppliedState = !c.applied; // 쿠폰의 새로운 적용 상태
                                            if (newAppliedState) {
                                                // **쿠폰이 '적용' 상태가 될 때만** 해당 쿠폰의 'value'를 저장합니다.
                                                // (예: 10% 또는 1000원)
                                                appliedCouponDiscount = c.value;
                                            }
                                            return { ...c, applied: newAppliedState };
                                        } else {
                                            // 그 외의 모든 쿠폰은 'applied: false'로 설정하여 해제합니다.
                                            return { ...c, applied: false };
                                        }
                                    });

                                    // 2. 'orderInfo' 스토어 업데이트 (coupons 스토어 업데이트 후)
                                    orderInfo.update(info => {
                                        // 'appliedCouponDiscount' 값이 0보다 크면 쿠폰이 적용된 것이고, 아니면 해제된 것입니다.
                                        info.coupon.applied = (appliedCouponDiscount > 0);

                                        // 'appliedCouponDiscount' 값을 'discount' 속성에 할당합니다.
                                        info.coupon.discount = appliedCouponDiscount;

                                        // (선택 사항) 여기서 총 금액(info.total)도 업데이트할 수 있습니다.
                                        // info.total = calculateNewTotal(info.menus, info.coupon.discount);
                                        return info; // 업데이트된 'orderInfo' 객체를 반환
                                    });

                                    return updatedCoupons; // 'coupons' 스토어에 새로운 배열을 반환
                                });
                            }} class="border-2 border-slate-300 rounded-2xl text-start flex flex-row justify-between items-center h-20 text-2xl p-2" class:bg-mcd-orange={currentCoupon.applied}>
                                <div class="flex flex-col">
                                    <p>{currentCoupon.name}</p>
                                    {#if currentCoupon.applied}
                                        <p class="text-mcd-burgundy">적용됨</p>
                                    {/if}
                                </div>
                                {#if currentCoupon.type === "price"}
                                    <p>{(currentCoupon.value).toLocaleString()}원</p>
                                {:else}
                                    <p>{currentCoupon.value}</p>
                                {/if}

                            </button>
                        {/each}
                    </div>


                {:else if modalType === 'pay'}
                    <h2 class="text-xl font-bold text-center mb-4">결제</h2>
                    <div class="flex flex-col items-center pt-5">
                        <div class="flex flex-row justify-center items-center mb-4">
                            <p class="text-2xl mr-1">결제 금액:</p>
                            <p class="text-3xl font-bold">{($orderInfo.total - $orderInfo.coupon.discount).toLocaleString()}</p>
                            <p class="text-2xl">원</p>
                        </div>

                        <p class="text-2xl ">카드를 넣어주세요</p>
                        <!--{#if !$shortScreen}-->
                            <div class="flex flex-col w-60 h-70 pt-5">
                                <img src="CardInsert1.png" alt="card1" class="z-30">
                                <img src="CardInsert2.png" alt="card2" class="-translate-y-12 z-10">
                                <img id="card" src="CardInsert3.png" alt="card3" class="z-20">
                            </div>
                        <!--{/if}-->
                    </div>

                {:else}
                    <p>알 수 없는 모달 타입입니다: {modalType}</p>
                {/if}
            </div>

            <div class="text-right p-4 border-t {!$shortScreen ? 'mt-auto' : ''}">
                <button onclick={closeModal} class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">완료</button>
            </div>
        </div>

    </div>
{/if}

<div id="background-bottom" class="bg-white h-1/4 flex flex-col">
    <div id="order-price" class="text-2xl text-right p-2.5">결제 금액: {($orderInfo.total - $orderInfo.coupon.discount).toLocaleString()}원</div>
    <hr>
    <Router {routes} />
</div>
