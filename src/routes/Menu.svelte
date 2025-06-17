<!-- src/routes/About.svelte -->

<script>

    import {House, CreditCard} from "lucide-svelte";
    import "/src/assets/mac/Burger/D1955.png"

    let toHome = () => {
        window.location.href = "#/";
    }

    let toOrder = () => {
        window.location.href = "#/Order";
    }

    let categories = ["버거&세트","해피스낵","스낵&사이드","음료","디저트"];
    let selectedCategory = "버거&세트";

    let products = {
        "버거&세트":[
            {name:"쿼터파운더® 치즈 크리미 파마산", price:7700, setprice:8800, img:"/src/assets/mac/Burger/QPCCP.png"},
            {name:"1955® 크리미 파마산", price:8400, setprice:9500, img:"/src/assets/mac/Burger/1955CP.png"},
            {name:"더블 1955® 버거", price:9500, setprice:11500, img:"/src/assets/mac/Burger/D1955.png"},
            {name:"더블 맥스파이시® 상하이 버거", price:8900, setprice:10900, img:"/src/assets/mac/Burger/DMcSS.png"},
            {name:"더블 쿼터파운더® 치즈", price:7400, setprice:9300, img:"/src/assets/mac/Burger/DQPC.png"},
            {name:"맥스파이시® 상하이 버거", price:5500, setprice:6300, img:"/src/assets/mac/Burger/McSS.png"},
            {name:"쿼터파운더® 치즈", price:5500, setprice:7600, img:"/src/assets/mac/Burger/QPC.png"},
            {name:"토마토 치즈 비프 버거", price:3800, setprice:5600, img:"/src/assets/mac/Burger/TCB.png"},
            {name:"빅맥®", price:5500, setprice:6300, img:"/src/assets/mac/Burger/BMc.png"},
            {name:"맥크리스피™ 디럭스 버거", price:6800, setprice:7500, img:"/src/assets/mac/Burger/McCD.png"},
            {name:"맥크리스피™ 클래식 버거", price:5900, setprice:7400, img:"/src/assets/mac/Burger/McCC.png"},
            {name:"1955® 버거", price:6400, setprice:7000, img:"/src/assets/mac/Burger/1955.png"},
            {name:"맥치킨® 모짜렐라", price:5000, setprice:7300, img:"/src/assets/mac/Burger/McCM.png"},
            {name:"맥치킨®", price:3500, setprice:5400, img:"/src/assets/mac/Burger/McC.png"},
            {name:"더블 불고기 버거", price:4500, setprice:5900, img:"/src/assets/mac/Burger/DB.png"},
            {name:"불고기 버거", price:3600, setprice:5500, img:"/src/assets/mac/Burger/B.png"},
            {name:"슈슈 버거", price:4700, setprice:6000, img:"/src/assets/mac/Burger/SS.png"},
            {name:"슈비 버거", price:5800, setprice:8100, img:"/src/assets/mac/Burger/SB.png"},
            {name:"베이컨 토마토 디럭스", price:5800, setprice:7300, img:"/src/assets/mac/Burger/BTD.png"},
            {name:"해피 스낵 치즈버거", price:2000, setprice:5000, img:"/src/assets/mac/Burger/C.png"},
            {name:"더블 치즈버거", price:4800, setprice:6000, img:"/src/assets/mac/Burger/DC.png"},
            {name:"트리플 치즈버거", price:5900, setprice:7200, img:"/src/assets/mac/Burger/TC.png"},
            {name:"햄버거", price:2600, img:"/src/assets/mac/Burger/H.png"}
        ],
        "해피스낵":[
            {name:"1955 스낵랩", price:5900, img:"/src/assets/mac/HappySnack/1955SW.png"},
            {name:"치즈버거", price:5000, img:"/src/assets/mac/HappySnack/C.png"},
            {name:"아이스 드립 커피", price:3600, img:"/src/assets/mac/HappySnack/IDCM.png"},
            {name:"아이스 카페 라떼", price:4700, img:"/src/assets/mac/HappySnack/ICLM.png"},
            {name:"맥너겟® 4조각", price:2000, img:"/src/assets/mac/HappySnack/McN4.png"},
            {name:"맥너겟® 4조각 아이스 드립커피 콤보", price:4800, img:"/src/assets/mac/HappySnack/McN4_IDC.png"}
        ],
        "스낵&사이드":[
            {name:"상하이 치킨 스낵랩", price:5900, img:"/src/assets/mac/Snack&Sides/SCSW.png"},
            {name:"맥윙™ 2조각", price:5000, img:"/src/assets/mac/Snack&Sides/McW.png"},
            {name:"코울슬로", price:3600, img:"/src/assets/mac/Snack&Sides/C.png"},
            {name:"후렌치 후라이", price:4700, img:"/src/assets/mac/Snack&Sides/FF.png"},
            {name:"해쉬 브라운", price:5800, img:"/src/assets/mac/Snack&Sides/HB.png"},
            {name:"맥스파이시®치킨 텐더 2조각", price:2000, img:"/src/assets/mac/Snack&Sides/McSCT.png"},
            {name:"골든 모짜렐라 치즈스틱 2조각", price:4800, img:"/src/assets/mac/Snack&Sides/GMCS.png"}
        ],
        "음료":[
            {name:"망고 피치 아이스티", price:5900, img:"/src/assets/mac/Beverages/MPIT.png"},
            {name:"피치 아이스티", price:5000, img:"/src/assets/mac/Beverages/PIT.png"},
            {name:"코카 콜라", price:3600, img:"/src/assets/mac/Beverages/CC.png"},
            {name:"스프라이트", price:4700, img:"/src/assets/mac/Beverages/S.jpg"},
            {name:"환타", price:5800, img:"/src/assets/mac/Beverages/F.png"},
            {name:"생수", price:3600, img:"/src/assets/mac/Beverages/MW.png"},
            {name:"드립커피", price:3600, img:"/src/assets/mac/Beverages/DCof.png"},
            {name:"아메리카노", price:2000, img:"/src/assets/mac/Beverages/A.png"},
            {name:"바닐라 라떼", price:4800, img:"/src/assets/mac/Beverages/VL.png"},
            {name:"카페라떼", price:5900, img:"/src/assets/mac/Beverages/CL.png"},
            {name:"카푸치노", price:5000, img:"/src/assets/mac/Beverages/C.png"}
        ],
        "디저트":[
            {name:"베리 스트로베리 맥플러리", price:5900, img:"/src/assets/mac/Desserts/VSMcF.png"},
            {name:"오레오 맥플러리", price:5000, img:"/src/assets/mac/Desserts/OMcF.png"},
            {name:"딸기 오레오 맥플러리", price:3600, img:"/src/assets/mac/Desserts/SOMcF.png"},
            {name:"초코 오레오 맥플러리", price:4700, img:"/src/assets/mac/Desserts/COMcF.png"},
            {name:"스트로베리콘", price:5800, img:"/src/assets/mac/Desserts/SC.png"},
            {name:"아이스크림콘", price:3600, img:"/src/assets/mac/Desserts/ICC.png"},
            {name:"바닐라 선데이 아이스크림", price:3600, img:"/src/assets/mac/Desserts/VS.png"},
            {name:"초코 선데이 아이스크림", price:2000, img:"/src/assets/mac/Desserts/CS.png"},
            {name:"딸기 선데이 아이스크림", price:4800, img:"/src/assets/mac/Desserts/SS.png"}
        ]
    }

    let selectedMenu = [];

    function addMenu(menuName, option = null) {
        const product = Object.values(products).flat().find(p => p.name === menuName);
        const price = (option?.type === "세트" && product.setprice) ? product.setprice : product.price;
        const index = selectedMenu.findIndex(item => item.name === menuName && JSON.stringify(item.option) === JSON.stringify(option));
        if (index === -1) {
            selectedMenu = [...selectedMenu, {name: menuName, quantity: 1, price: price, option: option }];
        } else {
            selectedMenu = selectedMenu.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
    }

    function increaseMenu(menuName, option = null) {
        selectedMenu = selectedMenu.map(item => {
            if (item.name === menuName && JSON.stringify(item.option) === JSON.stringify(option)) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
    }

    function decreaseMenu(menuName, option = null) {
        selectedMenu = selectedMenu.map(item => {
            if (item.name === menuName && JSON.stringify(item.option) === JSON.stringify(option)) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);
    }

    function removeMenu(menuName, option = null) {
        selectedMenu = selectedMenu.filter(item => !(item.name === menuName && JSON.stringify(item.option) === JSON.stringify(option)));
    }

    $: totalPrice = selectedMenu.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let showPopup = false;
    let setOption = {type:"단품", side:"", drink:""};
    let sideOptions = ["후렌치 후라이", "코울슬로"];
    let drinkOptions = products["음료"].map(p => p.name);

    let optionMenu = null;

    function openPopup(name) {
        optionMenu = name
        showPopup = true
    }

    function closePopup() {
        setOption = {type:"단품", side:"", drink:""}
        optionMenu = null
        showPopup = false
    }

    let Step = 1
    $:  if (selectedMenu.length === 0 && !showPopup) {
        Step = 1
    } else if (showPopup) {
        Step = 2
    } else {
        Step = 3
    }

</script>

<div class="flex flex-col h-screen">
    <div class="relative flex w-full h-10 bg-amber-600 items-center justify-center"> <!-- 상단바 -->
        <button on:click={toHome} class="z-10 flex absolute left-2 text-white font-semibold text-base"> <!-- 홈버튼 -->
            <House class="w-6 h-6"></House>
            홈으로
        </button>
        <div class="absolute inset-x-0 text-center text-white font-semibold text-2xl">메뉴</div>
    </div>

    <div class="flex justify-center items-center space-x-4 py-2 bg-gray-100 text-sm font-semibold border-b"> <!-- 주문 순서 -->
        <div class={`px-3 py-1 rounded ${Step === 1 ? 'bg-amber-500 text-white' : 'bg-white text-gray-500 border'}`}>
            1. 메뉴 선택
        </div>
        <div>→</div>
        <div class={`px-3 py-1 rounded ${Step === 2 ? 'bg-amber-500 text-white' : 'bg-white text-gray-500 border'}`}>
            2. 옵션 선택
        </div>
        <div>→</div>
        <div class={`px-3 py-1 rounded ${Step === 3 ? 'bg-amber-500 text-white' : 'bg-white text-gray-500 border'}`}>
            3. 결제하기
        </div>
    </div>

    <div class="flex flex-1 overflow-hidden"> <!-- 메뉴 목록 -->
        <div class="w-25 bg-gray-100 border-r"> <!-- 왼쪽 카테고리 -->
            {#each categories as category}
                <button on:click={() => selectedCategory = category}
                        class="w-full p-4 text-left transition-colors font-medium
                        {selectedCategory === category ? 'bg-amber-400' : 'hover:bg-amber-300'}">
                    {category}
                </button>
            {/each}
        </div>

        <div class="flex-1 p-3 grid grid-cols-2 gap-4 overflow-y-auto scrollbar-hide"> <!-- 오른쪽 제품 목록 -->
            {#each products[selectedCategory] as product}
                <button class="h-auto bg-white rounded-xl break-keep shadow hover:shadow-md transition p-2" on:click={() => selectedCategory === "버거&세트" ? openPopup(product.name) : addMenu(product.name)}>
                    <img src={product.img} alt={product.name} class="w-full object-cover rounded-xl"/>
                    <div class="font-semibold text-sm">{product.name}<br>{product.price.toLocaleString()}원{selectedCategory === "버거&세트" ? "~" : ""}</div>
                </button>
            {/each}
        </div>
    </div>

    <div class="flex w-full h-40 bg-gray-600 p-2">
        <div class="h-full w-70 p-1 bg-white text-sm break-keep rounded-sm overflow-y-auto scrollbar-hide"> <!-- 선택 메뉴 목록 -->
            {#if selectedMenu.length === 0}
                <div class="text-gray-500 my-auto">선택된 메뉴가 없습니다.</div>
            {:else}
                <div>
                    {#each selectedMenu as item (item.name + JSON.stringify(item.option))}
                        <div class="flex justify-between items-center mb-1">
                            <div>
                                {item.name} - {item.price}원 × {item.quantity}
                                <div class="text-xs">
                                {#if item.option?.type === "세트"}
                                    (세트: {item.option.side}, {item.option.drink})
                                {/if}
                                </div>
                            </div>
                            <div class="flex space-x-1">
                                <button class="bg-gray-200 px-1.5 rounded"
                                        on:click={() => decreaseMenu(item.name, item.option)}>
                                    -
                                </button>
                                <button class="bg-gray-200 px-1.5 rounded"
                                        on:click={() => increaseMenu(item.name, item.option)}>
                                    +
                                </button>
                                <button class="bg-red-400 text-white px-1.5 rounded"
                                        on:click={() => removeMenu(item.name, item.option)}>
                                    ✕
                                </button>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>

        <div class="flex flex-col items-center m-auto">
            <div class="bg-white text-xl rounded-sm"> <!-- 총 메뉴 가격 -->
                {totalPrice.toLocaleString()}원
            </div>
            <button class="flex bg-black text-white" on:click={toOrder}> <!-- 결제 버튼 -->
                <CreditCard></CreditCard>
                결제하기
            </button>
        </div>
    </div>
</div>

{#if showPopup}
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white rounded-xl shadow-xl p-6 w-96">
            <h2 class="text-xl font-bold mb-4">옵션 선택</h2>
            <div class="space-y-2">
                <button class={`px-3 py-1 rounded border ${setOption.type === "단품" ? 'bg-amber-500 text-white' : 'bg-white text-black'}`} on:click={() => setOption.type = "단품"}>단품</button>
                <button class={`px-3 py-1 rounded border ${setOption.type === "세트" ? 'bg-amber-500 text-white' : 'bg-white text-black'}`} on:click={() => setOption.type = "세트"}>세트 (+{(() => {
                    const p = Object.values(products).flat().find(p => p.name === optionMenu);
                    return p && p.setprice && p.price ? (p.setprice - p.price).toLocaleString() : '0';
                })()}원)</button>
            </div>

            {#if setOption.type === "세트"}
                <div class="mt-4">
                    <div class="block font-semibold mb-1">사이드 선택</div>
                    <div class="flex flex-wrap gap-2">
                        {#each sideOptions as side}
                            <button on:click={() => setOption.side = side}
                                    class={`px-3 py-1 rounded border ${setOption.side === side ? 'bg-amber-500 text-white' : 'bg-white text-black'}`}>
                                {side}
                            </button>
                        {/each}
                    </div>

                    <div class="block font-semibold mt-4 mb-1">음료 선택</div>
                    <div class="flex flex-wrap gap-2">
                        {#each drinkOptions as drink}
                            <button on:click={() => setOption.drink = drink}
                                    class={`px-3 py-1 rounded border ${setOption.drink === drink ? 'bg-amber-500 text-white' : 'bg-white text-black'}`}>
                                {drink}
                            </button>
                        {/each}
                    </div>
                </div>
            {/if}

            <div class="flex justify-end mt-4 space-x-2">
                <button class="bg-gray-300 px-4 py-2 rounded" on:click={closePopup}>취소</button>
                <button class="bg-amber-500 px-4 py-2 rounded text-white {setOption.type === '세트' && (!setOption.side || !setOption.drink) ? 'bg-gray-300' : 'bg-amber-500'}"
                        disabled={setOption.type === '세트' && (!setOption.side || !setOption.drink)} on:click={() => {addMenu(optionMenu,setOption);closePopup();}}>
                    장바구니 담기
                </button>
            </div>
        </div>
    </div>
{/if}




