<script>
	import { afterNavigate, beforeNavigate } from '$app/navigation';
    import Header from '$lib/components/Header.svelte';
    import "./style.css";
    // import NProgress from 'nprogress'

    // beforeNavigate(() => {
    //     NProgress.start();
    // });

    // afterNavigate(()=>{
    //     NProgress.done();
    // })

    // NProgress.configure({
    //     showSpinner: false
    // });
</script>
  
  <Header />

  <slot />

