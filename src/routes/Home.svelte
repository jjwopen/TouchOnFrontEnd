<script>
    import img1 from "../assets/오.png";
    import img2 from "../assets/mcasdf.png";
    import img3 from "../assets/mcdonalds.png";
</script>

<div class="w-full h-full bg-gray-900">
    <!-- 첫 번째 섹션 -->
    <div class="content-center flex flex-row justify-center items-center h-30 flex-wrap">
        <p class="block text-center font-bold text-4xl text-amber-200 bg-gray-900 m-2 w-full">두툼한 패티에</p>
        <p class="block text-center font-bold text-4xl text-black bg-amber-200 m-2 w-full">진한 파마산!</p>
    </div>

    <!-- 두 번째 섹션 -->
    <div class="flex items-center bg-gray-900 p-4">
        <!-- 이미지 -->
        <img src={img1} alt="오 이미지" class="w-2/3 h-auto " />
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
        <img src={img2} alt="아 이미지" class="w-1/2 bg-gray-900" />
    </div>



    <!-- 네 번째 섹션 -->
    <button onclick={() => {
        window.location.href = "/#/menu"
    }} class="content-center flex flex-row justify-between bg-green-900 items-center h-50 w-full p-2">
        <div class="">
            <img src={img3} alt="맥도날드 로고" class="w-[100px] h-auto" />
        </div>
        <div>
            <p class="block text-center font-bold text-5xl text-white w-full">
                주문하려면
            </p>
            <p class="block text-center font-bold text-5xl text-white w-full">
                눌러주세요!
            </p>
        </div>
    </button>
</div>
