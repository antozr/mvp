


export function openImg(e){

       

   // console.log(e.target);
    let srcImg = e.target.src;
    // console.log(srcImg);

    let boxImgFull = document.querySelector('.sect__imgOpenBig');
    //
    boxImgFull.classList.remove("sect__imgOpenBig--close")
    document.querySelector('.imgOpenBig__img').src= srcImg;
 

;}

export function closeImgBox(e){
    let boxImgFull = document.querySelector('.sect__imgOpenBig');
    boxImgFull.classList.add("sect__imgOpenBig--anim")
    // setTimeout(()=>{
    //     boxImgFull.classList.add("sect__imgOpenBig--close")
    //     boxImgFull.classList.remove("sect__imgOpenBig--anim")
    // }, 1000)
}