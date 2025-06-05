<script>
    import testg from "../assets/testg.png";
    import iconDot from "../assets/dot.png";
    import iconX from "../assets/x.png";
    import iconMinus from "../assets/minus.png";
    import iconPlus from "../assets/plus.png";

</script>

<!-- Full-Screen -->
<div id="background" class="h-3/4 bg-gray-500">
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
        <div class="order_menu flex flex-row">
            <div class="menu_img w-1/4 bg-gray-400 aspect-square align-middle content-center border-2 rounded-2xl mr-2">
                <img src={testg} alt="testg" class="w-auto">
            </div>
            <div class="menu_detail flex flex-col w-full pr-2">
                <div class="menu_detail_top flex-between items-center h-6">
                    <p class="menu_name font-medium">asdf</p>
                    <div class="flex items-center">
                        <div class="flex flex-row mr-2 items-center">
                            <button class="button_menu_count_minus flex items-center justify-center h-5 w-5 border-l-2 border-y-2 text-center bg-white rounded-l-lg">
                                <img src={iconMinus} alt="-">
                            </button>
                            <div class="menu_count flex items-center justify-center h-5 w-5 border-2 text-center bg-white">1</div>
                            <button class="button_menu_count_plus flex items-center justify-center h-5 w-5 border-r-2 border-y-2 text-center bg-white rounded-r-lg">
                                <img src={iconPlus} alt="+">
                            </button>
                        </div>
                        <button class="button_menu_delete">
                            <img src={iconX} alt="X" class="w-6">
                        </button>
                    </div>
                </div>
                <hr class="my-1 border-gray-600">
                <div class="flex flex-row justify-between">
                    <div class="menu-options text-sm">
                        <div class="menu-option flex flex-row items-center">
                            <img src={iconDot} alt="Dot" class="w-2 h-2 mr-2">
                            <p>음료: 콜라(R)</p>
                        </div>
                        <div class="menu-option flex flex-row items-center">
                            <img src={iconDot} alt="Dot" class="w-2 h-2 mr-2">
                            <p>사이드 메뉴: 후렌치 후라이(M)</p>
                        </div>
                        <div class="menu-option flex flex-row items-center">
                            <img src={iconDot} alt="Dot" class="w-2 h-2 mr-2">
                            <p>옵션 변경: 없음</p>
                        </div>
                    </div>
                    <button class="menu-option-edit h-full bg-white border-2 rounded-xl p-2">수정하기</button>
                </div>


            </div>

        </div>

    </div>


    </div>

<div class="bg-white h-1/4">

</div>



<!-- Low-Screen -->