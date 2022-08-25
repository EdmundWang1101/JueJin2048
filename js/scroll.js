//无限下拉
const html = document.documentElement;

document.addEventListener('scroll',function(){
    if(html.getBoundingClientRect().bottom - html.clientHeight < 50){
        //获取元素
        const listdiv = document.getElementById("list-wrap")
        //node.cloneNode();
        const listli = listdiv.children[0].cloneNode(true)
        //在listdiv中添加listli
        listdiv.appendChild(listli)
    }
})