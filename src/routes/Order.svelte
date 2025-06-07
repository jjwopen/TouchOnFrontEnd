<script>
    import testg from "../assets/testg.png";
    import iconDot from "../assets/dot.png";
    import iconX from "../assets/x.png";
    import iconMinus from "../assets/minus.png";
    import iconPlus from "../assets/plus.png";

</script>

<!-- Full-Screen -->
<div id="background-top" class="h-3/4 bg-gray-500">
    <div id="header-pay" class="h-1/4 bg-white content-center">
        <p class="text-center text-4xl">결제하기</p>
    </div>

    <header>
        <button id="button-back" class="ml-2 mt-1">뒤로가기</button>
    </header>
    <header>
        <p class="text-center text-3xl -translate-y-2">주문정보</p>
    </header>
    <hr class="m-2">

    <div id="order-menu-p" class="flex flex-col m-2">
<!--        order-menu-->
        <div class="order_menu flex-between">
            <div class="menu_img aspect-square w-1/4 align-middle content-center border-2 rounded-2xl mr-2 bg-gray-400">
                <img src={testg} alt="testg" class="w-auto">
            </div>
            <div class="menu_detail flex flex-col w-full pr-2">
                <div class="menu_detail_top flex-between items-center h-6">
                    <p class="menu_name font-medium">asdf</p>
                    <div class="flex-items-center">
                        <div class="flex-between mr-2 items-center">
                            <button class="button_menu_count_minus h-5 w-5 p-1 border-l-2 border-y-2 rounded-l-lg flex-center text-center bg-white">
                                <img src={iconMinus} alt="-">
                            </button>
                            <div class="menu_count h-5 w-5 p-1 border-2 flex-center text-center bg-white">1</div>
                            <button class="button_menu_count_plus h-5 w-5 p-1 border-r-2 border-y-2 rounded-r-lg flex-center text-center bg-white">
                                <img src={iconPlus} alt="+">
                            </button>
                        </div>
                        <button class="button_menu_delete">
                            <img src={iconX} alt="X" class="w-6">
                        </button>
                    </div>
                </div>
                <hr class="my-1 border-gray-600">
                <div class="flex-between">
                    <div class="menu-options text-sm">
                        <div class="menu-option flex-items-center">
                            <img src={iconDot} alt="Dot" class="w-2 h-2 mr-2">
                            <p>음료: 콜라(R)</p>
                        </div>
                        <div class="menu-option flex-items-center">
                            <img src={iconDot} alt="Dot" class="w-2 h-2 mr-2">
                            <p>사이드 메뉴: 후렌치 후라이(M)</p>
                        </div>
                        <div class="menu-option flex-items-center">
                            <img src={iconDot} alt="Dot" class="w-2 h-2 mr-2">
                            <p>옵션 변경: 없음</p>
                        </div>
                    </div>
                    <button class="menu-option-edit h-full p-2 border-2 rounded-xl bg-white">수정하기</button>
                </div>


            </div>

        </div>
    </div>
</div>

<div id="background-bottom" class="bg-red-200 h-1/4 flex flex-col">
    <div id="order-price" class="text-2xl text-right p-2.5">결제 금액: 10,000원</div>
    <hr>
    <div class="flex flex-grow gap-4 p-4">
        <button id="order-for-here" class="flex-grow h-full gap-1 border-2 rounded-3xl border-red-500">
            <p class="font-bold text-3xl">매장식사</p>
            <p>For Here</p>
        </button>
        <button id="order-to-go" class="flex-grow h-full gap-1 border-2 rounded-3xl border-blue-500">
            <p class="font-bold text-3xl">포장주문</p>
            <p>To Go</p>
        </button>
    </div>
</div>



<!-- Low-Screen -->