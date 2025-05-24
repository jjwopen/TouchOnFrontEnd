<script>
    import svelteImg from '../assets/svelte.svg';

    let name = 'TouchOn';

    let toMenu = () => {
        window.location.href = "#/menu";
    }
</script>

<h1 class="text-red-400">
    {name}
</h1>
<img src={svelteImg} alt="svelte">

<!--<a href="#/menu">메뉴로 이동</a>-->
<button on:click={toMenu}>메뉴로 이동</button>