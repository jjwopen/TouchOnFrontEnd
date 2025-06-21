<script>
    import {shortScreen} from "../../store.js";
    setTimeout(() => {
        window.location.href = "/#/"
    }, 5000)
</script>

<div class="h-full w-full flex flex-col {!$shortScreen ? 'justify-center' : 'justify-end'} items-center text-2xl gap-5">
    <p>주문이 완료되었습니다</p>
    <p>5초 뒤 처음 화면으로 이동합니다</p>
    <img src="check.png" alt="check" class="w-1/5 m-5">
</div>