<!-- src/routes/About.svelte -->

<script>

    import {House, CreditCard} from "lucide-svelte";
    import "/public/mac/Burger/D1955.png";
    import {orderInfo, INITIALORDERINFO, shortScreen} from "../store.js";


    let toHome = () => {
        window.location.href = "#/";
        $orderInfo = INITIALORDERINFO;
    }

    let toOrder = () => {
        updateOrder();
        window.location.href = "#/order/ordera";
    }


    let selectedMenu = [];

    // selectedMenu = [...$orderInfo.menus]; // Order 페이지에서 뒤로 갈 때 store.js에서 값을 불러옴.

    let getOrder = () => {
        selectedMenu = [];
        let temp = [...$orderInfo.menus];
        if (temp.length === 0) return;

        let directoryToCategory = {
            "Burger": "버거&세트",
            "HappySnack": "해피스낵",
            "Snack&Sides": "스낵&사이드",
            "Beverages": "음료",
            "Desserts": "디저트"
        }

        temp.forEach((t) => {
            if (t.count === 0) return;
            let idSplit = t.id.split("/");

            let option;
            if (t.detail.isSet) option = {
                type: "세트",
                drink: {
                    id: t.detail.details[0].id,
                    name: t.detail.details[0].name
                },
                side: {
                    id: t.detail.details[1].id,
                    name: t.detail.details[1].name
                }
            }
            else option = {
                type: "단품",
                drink: {
                    id: "",
                    name: ""
                },
                side: {
                    id: "",
                    name: ""
                }
            }

            let tempMenu = {
                category: directoryToCategory[idSplit[idSplit.length - 2]],
                id: idSplit[idSplit.length - 1],
                name: t.name,
                option: option,
                price: t.price,
                quantity: t.count
            }
            selectedMenu.push(tempMenu);
        })
    }
    getOrder();

    let updateOrder = () => {

        let categoryToDirectory = {
            "버거&세트": "Burger",
            "해피스낵": "HappySnack",
            "스낵&사이드": "Snack&Sides",
            "음료": "Beverages",
            "디저트": "Desserts"
        }

        let tempMenu = [];

        selectedMenu.forEach((t) => {
            let detail;
            if (t.option.type === "세트") {
                detail = {
                    isSet: true,
                    details: [
                        {
                            tag: "음료",
                            id: `src/assets/mac/Beverages/${t.option.drink.id}`,
                            name: t.option.drink.name,
                            price: 0,
                            count: 1
                        },
                        {
                            tag: "사이드 메뉴",
                            id: `src/assets/mac/Beverages/${t.option.side.id}`,
                            name: t.option.side.name,
                            price: 0,
                            count: 1
                        },
                    ]
                }
            }
            else
                detail = {
                    isSet: false,
                    details: []
                }

            let temp = {
                id: `src/assets/mac/${categoryToDirectory[t.category]}/${t.id}`,
                name: t.name,
                price: t.price,
                count: t.quantity,
                detail: detail,
            }
            tempMenu.push(temp);
        })
        console.log(tempMenu);
        $orderInfo = { ...$orderInfo, menus: tempMenu }
    }


    let categories = ["버거&세트","해피스낵","스낵&사이드","음료","디저트"];
    let selectedCategory = "버거&세트";

    let products = {
        "버거&세트":[
            {id: "QPCCP", name:"쿼터파운더® 치즈 크리미 파마산", price:7700, setprice:8800, img:"mac/Burger/QPCCP.png"},
            {id: "1955CP", name:"1955® 크리미 파마산", price:8400, setprice:9500, img:"mac/Burger/1955CP.png"},
            {id: "D1955", name:"더블 1955® 버거", price:9500, setprice:11500, img:"mac/Burger/D1955.png"},
            {id: "DMcSS", name:"더블 맥스파이시® 상하이 버거", price:8900, setprice:10900, img:"mac/Burger/DMcSS.png"},
            {id: "DQPC", name:"더블 쿼터파운더® 치즈", price:7400, setprice:9300, img:"mac/Burger/DQPC.png"},
            {id: "McSS", name:"맥스파이시® 상하이 버거", price:5500, setprice:6300, img:"mac/Burger/McSS.png"},
            {id: "QPC", name:"쿼터파운더® 치즈", price:5500, setprice:7600, img:"mac/Burger/QPC.png"},
            {id: "TCB", name:"토마토 치즈 비프 버거", price:3800, setprice:5600, img:"mac/Burger/TCB.png"},
            {id: "BMc", name:"빅맥®", price:5500, setprice:6300, img:"mac/Burger/BMc.png"},
            {id: "McCD", name:"맥크리스피™ 디럭스 버거", price:6800, setprice:7500, img:"mac/Burger/McCD.png"},
            {id: "McCC", name:"맥크리스피™ 클래식 버거", price:5900, setprice:7400, img:"mac/Burger/McCC.png"},
            {id: "1955", name:"1955® 버거", price:6400, setprice:7000, img:"mac/Burger/1955.png"},
            {id: "McCM", name:"맥치킨® 모짜렐라", price:5000, setprice:7300, img:"mac/Burger/McCM.png"},
            {id: "McC", name:"맥치킨®", price:3500, setprice:5400, img:"mac/Burger/McC.png"},
            {id: "DB", name:"더블 불고기 버거", price:4500, setprice:5900, img:"mac/Burger/DB.png"},
            {id: "B", name:"불고기 버거", price:3600, setprice:5500, img:"mac/Burger/B.png"},
            {id: "SS", name:"슈슈 버거", price:4700, setprice:6000, img:"mac/Burger/SS.png"},
            {id: "SB", name:"슈비 버거", price:5800, setprice:8100, img:"mac/Burger/SB.png"},
            {id: "BTD", name:"베이컨 토마토 디럭스", price:5800, setprice:7300, img:"mac/Burger/BTD.png"},
            {id: "C", name:"해피 스낵 치즈버거", price:2000, setprice:5000, img:"mac/Burger/C.png"},
            {id: "DC", name:"더블 치즈버거", price:4800, setprice:6000, img:"mac/Burger/DC.png"},
            {id: "TC", name:"트리플 치즈버거", price:5900, setprice:7200, img:"mac/Burger/TC.png"},
            {id: "H", name:"햄버거", price:2600, img:"mac/Burger/H.png"}

        ],
        "해피스낵":[
            {id: "1955SW", name:"1955 스낵랩", price:5900, img:"mac/HappySnack/1955SW.png"},
            {id: "HSC", name:"치즈버거", price:5000, img:"mac/HappySnack/HSC.png"},
            {id: "IDCM", name:"아이스 드립 커피", price:3600, img:"mac/HappySnack/IDCM.png"},
            {id: "ICLM", name:"아이스 카페 라떼", price:4700, img:"mac/HappySnack/ICLM.png"},
            {id: "McN4", name:"맥너겟® 4조각", price:2000, img:"mac/HappySnack/McN4.png"},
            {id: "McN4_IDC", name:"맥너겟® 4조각 아이스 드립커피 콤보", price:4800, img:"mac/HappySnack/McN4_IDC.png"}
        ],

        "스낵&사이드":[
            {id: "SCSW", name:"상하이 치킨 스낵랩", price:5900, img:"mac/Snack&Sides/SCSW.png"},
            {id: "McW", name:"맥윙™ 2조각", price:5000, img:"mac/Snack&Sides/McW.png"},
            {id: "Co", name:"코울슬로", price:3600, img:"mac/Snack&Sides/Co.png"},
            {id: "FF", name:"후렌치 후라이", price:4700, img:"mac/Snack&Sides/FF.png"},
            {id: "HB", name:"해쉬 브라운", price:5800, img:"mac/Snack&Sides/HB.png"},
            {id: "McSCT", name:"맥스파이시®치킨 텐더 2조각", price:2000, img:"mac/Snack&Sides/McSCT.png"},
            {id: "GMCS", name:"골든 모짜렐라 치즈스틱 2조각", price:4800, img:"mac/Snack&Sides/GMCS.png"}

        ],
        "음료":[
            {id: "CC", name:"코카 콜라", price:3600, img:"mac/Beverages/CC.png"},
            {id: "S", name:"스프라이트", price:4700, img:"mac/Beverages/S.png"},
            {id: "F", name:"환타", price:5800, img:"mac/Beverages/F.png"},
            {id: "MPIT", name:"망고 피치 아이스티", price:5900, img:"mac/Beverages/MPIT.png"},
            {id: "PIT", name:"피치 아이스티", price:5000, img:"mac/Beverages/PIT.png"},
            {id: "DCof", name:"드립커피", price:3600, img:"mac/Beverages/DCof.png"},
            {id: "A", name:"아메리카노", price:2000, img:"mac/Beverages/A.png"},
            {id: "VL", name:"바닐라 라떼", price:4800, img:"mac/Beverages/VL.png"},
            {id: "CL", name:"카페라떼", price:5900, img:"mac/Beverages/CL.png"},
            {id: "Ca", name:"카푸치노", price:5000, img:"mac/Beverages/Ca.png"},
            {id: "MW", name:"생수", price:3600, img:"mac/Beverages/MW.png"}
        ],
        "디저트":[
            {id: "VSMcF", name:"베리 스트로베리 맥플러리", price:5900, img:"mac/Desserts/VSMcF.png"},
            {id: "OMcF", name:"오레오 맥플러리", price:5000, img:"mac/Desserts/OMcF.png"},
            {id: "SOMcF", name:"딸기 오레오 맥플러리", price:3600, img:"mac/Desserts/SOMcF.png"},
            {id: "COMcF", name:"초코 오레오 맥플러리", price:4700, img:"mac/Desserts/COMcF.png"},
            {id: "SC", name:"스트로베리콘", price:5800, img:"mac/Desserts/SC.png"},
            {id: "ICC", name:"아이스크림콘", price:3600, img:"mac/Desserts/ICC.png"},
            {id: "VS", name:"바닐라 선데이 아이스크림", price:3600, img:"mac/Desserts/VS.png"},
            {id: "CS", name:"초코 선데이 아이스크림", price:2000, img:"mac/Desserts/CS.png"},
            {id: "SSI", name:"딸기 선데이 아이스크림", price:4800, img:"mac/Desserts/SSI.png"}
        ]
    }


    /**
     * @param {string} menuName
     * @param option
     * @param {string} category
     */
    function addMenu(menuName, option = {type: "단품", side: {id: "", name: ""}, drink: {id: "", name: ""}}, category) {
        const product = Object.values(products).flat().find(p => p.name === menuName);
        const price = (option?.type === "세트" && product.setprice) ? product.setprice : product.price;
        const index = selectedMenu.findIndex(item => item.name === menuName && JSON.stringify(item.option) === JSON.stringify(option));
        if (index === -1) {
            selectedMenu = [...selectedMenu, {category: category, name: menuName, quantity: 1, price: price, option: option, id: product.id }];
        } else {
            selectedMenu = selectedMenu.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        console.log(selectedMenu);
    }

    /**
     * @param {string} menuName
     * @param option
     */
    function increaseMenu(menuName, option = null) {
        selectedMenu = selectedMenu.map(item => {
            if (item.name === menuName && JSON.stringify(item.option) === JSON.stringify(option)) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
    }
    /**
     * @param {string} menuName
     * @param option
     */
    function decreaseMenu(menuName, option = null) {
        selectedMenu = selectedMenu.map(item => {
            if (item.name === menuName && JSON.stringify(item.option) === JSON.stringify(option)) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter(item => item.quantity > 0);
    }
    /**
     * @param {string} menuName
     * @param option
     */
    function removeMenu(menuName, option = null) {
        selectedMenu = selectedMenu.filter(item => !(item.name === menuName && JSON.stringify(item.option) === JSON.stringify(option)));
    }

    $: totalPrice = selectedMenu.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let showPopup = false;
    let setOption = {
        type: "단품",
        side: {
            id: "",
            name: ""
        },
        drink: {
            id: "",
            name: ""
        }
    };
    let sideOptions = [{
        id: "FF",
        name: "후렌치 후라이"
    },
        {
            id: "Co",
            name: "코울슬로"
        }];

    let optionMenu = null;
    /**
     * @param {string} name
     */
    function openPopup(name) {
        optionMenu = name
        showPopup = true
    }

    function closePopup() {
        setOption = setOption = {
            type: "단품",
            side: {
                id: "",
                name: ""
            },
            drink: {
                id: "",
                name: ""
            }
        };
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

    $shortScreen;

</script>

<div class="h-screen flex items-end">
    <div class="flex flex-col {$shortScreen ? 'h-5/8' : 'h-screen'}">
        <div class="relative flex w-full h-10 bg-amber-600 items-center justify-center"> <!-- 상단바 -->
            <button on:click={toHome} class="z-10 flex absolute left-2 text-white font-semibold text-base"> <!-- 홈버튼 -->
                <House class="w-6 h-6"></House>
                홈으로
            </button>
            <div class="absolute inset-x-0 text-center text-white font-semibold text-2xl">메뉴</div>
        </div>

        <div class="flex justify-center items-center space-x-4 py-2 bg-gray-100 text-sm font-semibold border-b"> <!-- 주문 순서 -->
            <div class={`px-3 py-1 rounded border ${Step === 1 ? 'bg-amber-500 text-stone-800' : 'bg-white text-gray-500'}`}>
                1. 메뉴 선택
            </div>
            <div>→</div>
            <div class={`px-3 py-1 rounded border ${Step === 2 ? 'bg-amber-500 text-stone-800' : 'bg-white text-gray-500'}`}>
                2. 옵션 선택
            </div>
            <div>→</div>
            <div class={`px-3 py-1 rounded border ${Step === 3 ? 'bg-amber-500 text-stone-800' : 'bg-white text-gray-500'}`}>
                3. 결제하기
            </div>
        </div>

        <div class="flex flex-1 overflow-hidden"> <!-- 메뉴 목록 -->
            <div class="w-25 bg-gray-100 border-r"> <!-- 왼쪽 카테고리 -->
                {#each categories as category}
                    <button on:click={() => selectedCategory = category}
                            class="w-full p-4 text-left transition-colors font-medium break-keep
                        {selectedCategory === category ? 'bg-amber-400' : 'hover:bg-amber-300'}">
                        {category}
                    </button>
                {/each}
            </div>

            <div class="flex-1 p-3 grid {$shortScreen ? 'grid-cols-3 gap-2' : 'grid-cols-2 gap-3'} overflow-y-auto scrollbar-hide"> <!-- 오른쪽 제품 목록 -->
                {#each products[selectedCategory] as product}
                    <button class="flex flex-col justify-between h-auto bg-white rounded-xl break-keep shadow transition p-2" on:click={() => selectedCategory === "버거&세트" ? openPopup(product.name) : addMenu(product.name, {type: "단품", side: {id: "", name: ""}, drink: {id: "", name: ""}}, selectedCategory)}>
                        <img src={product.img} alt={product.name} class="w-full object-cover rounded-xl"/>
                        <div class="font-semibold {$shortScreen ? 'text-xs' : 'text-sm'}">{product.name}<br>{product.price.toLocaleString()}원{selectedCategory === "버거&세트" ? "~" : ""}</div>
                    </button>
                {/each}
            </div>
        </div>

        <div class="flex w-full bg-gray-300 p-2 {$shortScreen ? 'h-20' : 'h-40'}">
            <div class="h-full w-70 p-1 bg-white text-sm break-keep rounded-sm overflow-y-auto scrollbar-hide"> <!-- 선택 메뉴 목록 -->
                {#if selectedMenu.length === 0}
                    <div class="text-gray-500 my-auto">선택된 메뉴가 없습니다.</div>
                {:else}
                    <div>
                        {#each selectedMenu as item (item.name + JSON.stringify(item.option))}
                            <div class="flex justify-between items-center mb-1">
                                <div>
                                    {item.name} - {item.price.toLocaleString()}원 × {item.quantity}
                                    <div class="text-xs">
                                        {#if item.option?.type === "세트"}
                                            (세트: {item.option.side.name}, {item.option.drink.name})
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

            <div class="flex flex-col h-auto w-auto justify-center items-center mx-auto">
                <div class="m-1 w-full bg-white text-xl text-right rounded-sm"> <!-- 총 메뉴 가격 -->
                    {totalPrice.toLocaleString()}원
                </div>
                <button class="flex h-8 w-20 rounded-sm bg-amber-500 text-stone-800 font-bold text-sm justify-center items-center" on:click={toOrder}> <!-- 결제 버튼 -->
                    <CreditCard></CreditCard>
                    결제
                </button>
            </div>
        </div>
        <div class="relative flex w-full h-10 bg-amber-600 items-center justify-center"> <!-- 하단바 -->
            <button class="border rounded-xs" on:click={() => $shortScreen = !$shortScreen}>{$shortScreen ? "높이 올리기" : "높이 낮추기"}</button>
        </div>
    </div>
</div>

{#if showPopup}
    <div class="fixed inset-0 flex {!$shortScreen ? 'items-center' : 'items-end mb-6'} justify-center z-50 bg-black/20">
        <div class="bg-white rounded-xl shadow-xl p-6 w-96">
            <h2 class="text-xl font-bold mb-4">옵션 선택</h2>
            <div class="space-y-2">
                <button class={`px-3 py-1 rounded border ${setOption.type === "단품" ? 'bg-amber-500 text-stone-800' : 'bg-white text-black'}`} on:click={() => setOption.type = "단품"}>단품</button>
                <button class={`px-3 py-1 rounded border ${setOption.type === "세트" ? 'bg-amber-500 text-stone-800' : 'bg-white text-black'}`} on:click={() => {
                    setOption.type = "세트";
                    setOption.side.name = "후렌치 후라이";
                    setOption.side.id = "FF";
                    setOption.drink.name = "코카 콜라";
                    setOption.drink.id = "CC";
                }}>세트 (+{(() => {
                    const p = Object.values(products).flat().find(p => p.name === optionMenu);
                    return p && p.setprice && p.price ? (p.setprice - p.price).toLocaleString() : '0';
                })()}원)</button>
            </div>

            {#if setOption.type === "세트"}
                <div class="mt-4">
                    <div class="block font-semibold mb-1">사이드 선택</div>
                    <div class="flex flex-wrap gap-2">
                        {#each sideOptions as side}
                            <button on:click={() => {
                                setOption.side.name = side.name;
                                setOption.side.id = side.id;
                            }}
                                    class={`px-3 py-1 rounded border ${setOption.side.id === side.id ? 'bg-amber-500 text-stone-800' : 'bg-white text-black'}`}>
                                {side.name}
                            </button>
                        {/each}
                    </div>

                    <div class="block font-semibold mt-4 mb-1">음료 선택</div>
                    <div class="flex flex-wrap gap-2">
                        {#each products["음료"] as drink}
                            <button on:click={() => {
                                setOption.drink.name = drink.name;
                                setOption.drink.id = drink.id;
                            }}
                                    class={`px-3 py-1 rounded border ${setOption.drink.id === drink.id ? 'bg-amber-500 text-stone-800' : 'bg-white text-black'}`}>
                                {drink.name}
                            </button>
                        {/each}
                    </div>
                </div>
            {/if}

            <div class="flex justify-end mt-4 space-x-2">
                <button class="bg-gray-300 px-4 py-2 rounded" on:click={closePopup}>취소</button>
                <button class="bg-amber-500 px-4 py-2 rounded text-stone-800"
                        disabled={setOption.type === '세트' && (!setOption.side.name || !setOption.drink.name)} on:click={() => {addMenu(optionMenu, setOption, "버거&세트");closePopup();}}>
                    장바구니 담기
                </button>
            </div>
        </div>
    </div>
{/if}




