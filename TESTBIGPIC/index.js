addEventListener('scroll', e => {
    const scrollTop = doc. scrollTop;
    if(scrollTop > start && scrollTop < stop){
        const delta = scrollTop - start;
        const scale = Math.max(2.2 -(delta)/500, 1);
        zoom.style.transform = `scale(${scale})`
    }
})