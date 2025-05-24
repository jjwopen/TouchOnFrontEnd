# TouchOn Kiosk Frontend with Svelte, VanillaJS, TailwindCSS  

뭔가 프로젝트가 굉장히 복잡해 보이지만, 우리가 작업할 곳은 src 폴더 내 App.svelte와 routes, assets 폴더뿐임.  
src/routes 안에 있는 svelte 파일들이 각각의 웹페이지임.  
App.svelte에서는 모든 페이지에 공통적으로 적용되는 구조 작성 및 라우팅 관리.  
새 페이지 추가가 필요하면 routes 폴더 안에 NewPage.svelte 파일 만들고, App.svelte에 `import NewPage from './routes/NewPage.svelte'`, 쓰고, const routes ~~ 안에 `'/newpage': NewPage` 적으면 됨.  
다른 페이지로 이동할 땐 다음과 같이 작성.
```sveltehtml
<a href="#/">메인으로 이동</a>
```

JS 작성은 `<script>` 안에서 하고, HTML에서 변수를 불러올 때는 중괄호 안에 변수명 쓰면 됨.  
예시:
```sveltehtml
<script>
    let a = "apple";
</script>

<main>
    <h1> {a} </h1>
</main>
```

이미지 파일은 src/assets에 저장하면 됨.  
이미지를 웹페이지에 넣을 때, 먼저 script에서 `import (ImageName) from ../assets/(ImageFile)`로 불러오고, HTML에 `<img src={ImageName}" alt="(ImageName)">`으로 쓰면 됨.  
예시:
```sveltehtml
<script>
    import svelteImg from "../assets/svelte.svg";
</script>

<main>
    <img src={svelteImg} alt="svelte">
</main>
```

`<button>` 클릭했을 때 JS 함수가 실행되게 하려면 다음과 같이 작성.  
```sveltehtml
<script>
    let func = () => {
        window.location.href = "#/"; // 메인 화면으로 이동
    }
</script>
<button on:click={func}>메인으로 이동</button>
```

대부분의 오류는 편집기가 알려줌. 수시로 오른쪽 위에 있는 Warning/Error 체크해가며 코딩하면 됨.  

막혔을 때 ChatGPT 써도 되긴 하지만, 되도록이면 구글 검색 추천. 국내에서는 Velog가 개발 블로그로 가장 유명하고, 해외에서는 Stack Overflow가 가장 유명한 QnA 커뮤니티임.  
구글 검색 시 맨 뒤에 `site:도메인명` 넣으면 해당 사이트에서만 검색해 줌.  
개발자들은 영어를 선호하기 때문에 영문으로 검색하면 정확한 결과 얻을 수 있음.  
네이버는 국내 검색 결과만 보여주기 때문에 추천하지 않음. 다만 구글에서 안나오는 게 네이버 블로그나 카페에서 나오는 경우가 간혹 있으니 보조 검색도구로 활용하는 건 좋음.  