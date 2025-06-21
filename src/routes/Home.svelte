<script>
    // import img1 from "../../public/오.png";
    // import img2 from "../../public/mcasdf.png";
    import {shortScreen} from "../store.js";
    $shortScreen;
</script>

<div class="w-full h-full bg-gray-900 flex flex-col">
    <!-- 첫 번째 섹션 -->
    <div class="content-center flex flex-row justify-center items-center h-30 flex-wrap">
        <p class="block text-center font-bold text-4xl text-amber-200 bg-gray-900 m-2 w-full">두툼한 패티에</p>
        <p class="block text-center font-bold text-4xl text-black bg-amber-200 m-2 w-full">진한 파마산!</p>
    </div>

    <!-- 두 번째 섹션 -->
    <div class="flex items-center bg-gray-900 p-4">
        <!-- 이미지 -->
        <img src="오.png" alt="오 이미지" class="w-2/3 h-auto " />
        <!-- 문구 -->
        <div>
            <p class="text-center font-bold text-3xl text-white">
                1955
            </p>
            <p class="text-center font-bold text-3xl text-white">
                크리미
            </p>
            <p class="text-center font-bold text-3xl text-white">
                파마산
            </p>
        </div>

    </div>

    <!-- 세 번째 섹션 -->
    <div class="bg-gray-900 flex items-center p-4">
        <!-- 문구 -->
        <div class="text-center mr-4">
            <p class="text-white font-bold text-2xl leading-tight">
                쿼터파운더
            </p>
            <p class="text-white font-bold text-2xl leading-tight">
                치즈 크리미
            </p>
            <p class="text-white font-bold text-2xl leading-tight">
                파마산
            </p>
        </div>
        <!-- 이미지 -->
        <img src="mcasdf.png" alt="아 이미지" class="w-1/2 bg-gray-900" />
    </div>

    <div>
        <p class="block text-center font-bold text-3xl text-white w-full mb-2">
            주문하려면 눌러주세요!
        </p>
    </div>


    <div class="flex flex-grow">
        <button onclick={() => {
            window.location.href = "/#/menu";
            $shortScreen = false;
        }} class="content-center flex flex-row justify-around bg-green-900 items-center  w-1/2 p-2 border-r-2 border-r-amber-200">
            <div>
                <p class="block text-center font-bold text-5xl text-white w-full mb-2">
                    큰
                </p>
                <p class="block text-center font-bold text-5xl text-white w-full">
                    메뉴판
                </p>
            </div>
        </button>


        <button onclick={() => {
            window.location.href = "/#/menu";
            $shortScreen = true;
        }} class="content-center flex flex-row justify-around bg-green-900 items-center  w-1/2 p-2 border-l-2 border-l-amber-200">
            <div>
                <p class="block text-center font-bold text-5xl text-white w-full mb-2">
                    작은
                </p>
                <p class="block text-center font-bold text-5xl text-white w-full">
                    메뉴판
                </p>
            </div>
        </button>
    </div>
</div>
