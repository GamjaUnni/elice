function scrollUp(e) {
    /*1. 함수를 적용할 target 변수 지정하기*/
    const btn = document.getElementById("scroll-btn");

    /*2. 버튼 클릭 시 화면의 최상단으로 이동하기*/
    //   btn.addEventListener('click', function () {
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    //   });

    var location = document.querySelector(".second").offsetTop;
    btn.addEventListener("click", function () {
        window.scroll({ top: location, left: 0, behavior: "smooth" });
    });
}

scrollUp("scroll-btn");
