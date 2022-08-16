// phone-hide => show
var getDiv = document.querySelector(".phone-show-menu");
var isopen = true;
    // 1.点击
    getDiv.addEventListener('click',function()
    {
        isopen = !isopen;
        if(isopen){
            // 隐藏
            document.querySelector(".phone-hide").classList.remove("show");
            document.querySelector(".del").classList.remove("active");
        }else{
            // 显示
            document.querySelector(".phone-hide").classList.add("show");
            document.querySelector(".del").classList.add("active");
        }
        
    });
    // 2.点击别处
    document.addEventListener('click',function(){
        // 隐藏
        isopen = true;
        document.querySelector(".phone-hide").classList.remove("show");
        document.querySelector(".del").classList.remove("active");
        })
    // 3.阻止事件冒泡
    getDiv.addEventListener('click',function(event){
        var e=event||window.event;
        if(e.cancelBubble){
            e.cancelBubble=true;//ie 阻止事件冒泡
        }else{
            e.stopPropagation();// 其余浏览器 阻止事件冒泡
        }
    })


// 创作者中心菜单
var getDiv1 = document.querySelector(".more");
var isopen1 = true;
    // 1.点击
    getDiv1.addEventListener('click',function()
    {
        isopen1 = !isopen1;
        if(isopen1){
            // 隐藏
            document.querySelector(".del2").classList.remove("active");
            document.querySelector(".more-list").classList.remove("active");
        } else{
            // 显示
            document.querySelector(".del2").classList.add("active");
            document.querySelector(".more-list").classList.add("active");
        }
        
    });
    // 2.点击别处
    document.addEventListener('click',function(){
        // 隐藏
        isopen1 = true;
        document.querySelector(".del2").classList.remove("active");
        document.querySelector(".more-list").classList.remove("active");
        })
    // 3.阻止事件冒泡
    getDiv1.addEventListener('click',function(event){
        var e=event||window.event;
        if(e.cancelBubble){
            e.cancelBubble=true;//ie 阻止事件冒泡
        } else{
            e.stopPropagation();// 其余浏览器 阻止事件冒泡
        }
    });


// 头像菜单
var getDiv2 = document.querySelector(".menu");
var isopen2 = true;
    getDiv2.addEventListener('click',function(){
        isopen2 = !isopen2;
        if(isopen2){
            document.querySelector(".user-dropdown-list").classList.remove("active");
        } else{
            document.querySelector(".user-dropdown-list").classList.add("active");
        }
    });
    document.addEventListener('click',function(){
        isopen2 = true;
        document.querySelector(".user-dropdown-list").classList.remove("active");
    });
    getDiv2.addEventListener('click',function(event){
        var e=event||window.event;
        if(e.cancelBubble){
            e.cancelBubble=true;//ie 阻止事件冒泡
        } else{
            e.stopPropagation();// 其余浏览器 阻止事件冒泡
        }
    });
   

    // 搜索框active
    var getDiv3 = document.querySelector(".search-input");
    getDiv3.addEventListener('click', function(){
        document.querySelector(".search-add").classList.add("active");
        document.querySelector(".search-add-ul").classList.add("active");
        document.querySelector(".search").classList.add("active");
        document.querySelector(".search-form").classList.add("active");
        document.querySelector(".search-icon-container").classList.add("active");
        document.querySelector(".search-icon").setAttribute("src","https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6dbcdb42ffe8d518a318a5e26efade18.svg");
        document.querySelector(".search-input").setAttribute("placeholder","搜索文章/小册/标签/用户");
        document.querySelector(".creator-item").classList.add("hide");
        document.querySelector(".add-btn").classList.add("hide");
        document.querySelector(".more").classList.add("hide");
        document.querySelector(".notification").classList.add("hide");
        document.querySelector(".menu").classList.add("hide");
        // 展开搜索历史
        let localCon = localStorage.getItem('searches');
        if(localCon){
            document.querySelector(".typehead").setAttribute("style", "display:block");
        }
    })
    document.addEventListener('click',function(){
        document.querySelector(".search-add").classList.remove("active");
        document.querySelector(".search-add-ul").classList.remove("active");
        document.querySelector(".search").classList.remove("active");
        document.querySelector(".search-form").classList.remove("active");
        document.querySelector(".search-icon-container").classList.remove("active");
        document.querySelector(".search-icon").setAttribute("src","https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg");
        document.querySelector(".search-input").setAttribute("placeholder","探索稀土掘金");
        document.querySelector(".creator-item").classList.remove("hide");
        document.querySelector(".add-btn").classList.remove("hide");
        document.querySelector(".more").classList.remove("hide");
        document.querySelector(".notification").classList.remove("hide");
        document.querySelector(".menu").classList.remove("hide");  
        // 折叠搜索历史
        document.querySelector(".typehead").setAttribute("style", "display:none"); 
    })
    getDiv3.addEventListener('click',function(event){
        var e=event||window.event;
        if(e.cancelBubble){
            e.cancelBubble=true;//ie 阻止事件冒泡
        } else{
            e.stopPropagation();// 其余浏览器 阻止事件冒泡
        }
    });
    var getDiv8 = document.querySelector(".search-icon-container");
    var getDiv9 = document.querySelector(".clear");
    var getDiv10 = document.querySelector(".list");
    getDiv8.addEventListener('click', function() {
        // 获取搜索栏的值
        let userVal = search.value
        let arr = []
        console.log(userVal);
        // 获取本地存储的内容
        let localCon = localStorage.getItem('searches');
        console.log(localCon);
        arr = localCon ? arr = JSON.parse(localCon) : []
        if (userVal) {
            arr.unshift(userVal)
        }
        // 将数组转化成字符串对象,放到本地存储中
        localStorage.setItem('searches', JSON.stringify(arr))
            // 渲染数据到网页中
        showLog()
            // 清空搜索框
        search.value = ''
    })
    
    // 清空
    getDiv9.addEventListener('click', function() {
        localStorage.removeItem('searches')
            // localStorage.clear()
        showLog()
            // searchList.innerHTML = ''
    });
    
    // 页面加载的时候将本地存储的内容显示到页面
    function showLog() {
        let locals = JSON.parse(localStorage.getItem('searches')) || []
        let htmllis = ''
        for (let i = 0; i < locals.length; i++) {
            htmllis += `<div data-index=${i}>${locals[i]}</div>`
        }
        getDiv10.innerHTML = htmllis
    }

//  !!!!!同时点击创作者中心和个人中心都会打开，sad

// 下滑一定程度main-header消失,view-nav置顶
function hideHeader(){
    var getDiv6 = document.querySelector(".main-header"); 
    var getDiv7 = document.querySelector(".view-nav");
    window.addEventListener("scroll", function(){
        var osTop1 = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop1 >= 400) {
            getDiv6.classList.remove("visible");
            getDiv7.classList.add("top");
        }
        else{
            getDiv6.classList.add("visible");
            getDiv7.classList.remove("top");
        }
    })
}
hideHeader();

// 回到顶部
function toTop(){
    var getDiv4 = document.querySelector(".to-top-btn");
    getDiv4.onclick = function(){
        window.scrollTo(0,0);
    }
    window.addEventListener("scroll", function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= 900) {
            getDiv4.style.display = 'block';
        }else{
            getDiv4.style.display = 'none';
        }
    })
}
toTop();

// 反馈
var getDiv5 = document.querySelector(".meiqia-btn");
getDiv5.onclick = function(){
    window.open('https://juejin.cn/pin/club/6824710202692993037?sort=newest');
}
