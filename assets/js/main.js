const header_bg = document.querySelector(".header_container_bg");
const MenuItem = document.querySelectorAll(".gnb_Item");
const subMenu = document.querySelectorAll(".sub_menu");
const body = document.querySelector("body");
const SearchTab = document.querySelectorAll(".current");
const list = document.querySelectorAll(".list");
const modalSearchBox = document.querySelector(".modal-SearchBox");
const modalSearch = document.querySelector(".modal");
const SearchOpen = document.querySelector(".btn_search");
const SearchClose = document.querySelector(".btn-md-close");
const tabBtn = document.querySelectorAll(".tab-btn ");

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener("click", () => {
    console.log("1");
    // 클릭된 요소에 active 클래스 추가
    tabBtn[i].classList.add("active");

    // 클릭되지 않은 다른 버튼에서 active 클래스 제거
    for (let j = 0; j < tabBtn.length; j++) {
      if (j !== i) {
        tabBtn[j].classList.remove("active");
      }
    }
  });
}
// 검색버튼 열기
SearchOpen.addEventListener("click", () => {
  modalSearch.style.display = "block";
});
SearchClose.addEventListener("click", () => {
  modalSearch.style.display = "none";
});

// header 마우스 오버 부분
for (let i = 0; i < MenuItem.length; i++) {
  MenuItem[i].addEventListener("mouseover", () => {
    let subMenuHeight = subMenu[i].offsetHeight;
    header_bg.style.height = `${subMenuHeight + 100}px`;
    subMenu[i].style.opacity = "1";
    subMenu[i].style.visibility = "visible";
    body.classList.add("open_menu"); // body에 open_menu 클래스 추가
  });
  MenuItem[i].addEventListener("mouseout", () => {
    header_bg.style.height = "0"; // '0'으로 변경
    subMenu[i].style.opacity = "0";
    subMenu[i].style.visibility = "hidden";
    body.classList.remove("open_menu"); // body에서 open_menu 클래스 제거
  });
}
// 부모 요소에 클릭 이벤트 리스너 등록
document.addEventListener("click", (event) => {
  // 클릭된 요소가 SearchTab 또는 그 자식 요소인 경우에만 처리
  if (
    event.target.classList.contains("current") ||
    event.target.closest(".current")
  ) {
    const clickedSearchTab = event.target.closest(".current");
    const clickedIndex = Array.from(SearchTab).indexOf(clickedSearchTab);

    // 클릭한 SearchTab에 해당하는 list 요소를 toggle
    if (list[clickedIndex].style.display === "block") {
      list[clickedIndex].style.display = "none";
    } else {
      // 이전에 켜져 있던 list 요소를 none으로 설정
      for (let i = 0; i < list.length; i++) {
        if (i !== clickedIndex) {
          list[i].style.display = "none";
        }
      }
      // 클릭한 SearchTab에 해당하는 list 요소를 block으로 설정
      list[clickedIndex].style.display = "block";
    }
  } else {
    // 클릭된 요소가 SearchTab 또는 그 자식 요소가 아닌 경우, 모든 list 요소를 숨김 처리
    for (let i = 0; i < list.length; i++) {
      list[i].style.display = "none";
    }
  }
});

// 부모 요소에 클릭 이벤트 리스너 등록
const tabSelect = document.querySelectorAll(".tab-select");

for (let i = 0; i < tabSelect.length; i++) {
  const currentText = tabSelect[i].querySelector(".current");
  const liItems = tabSelect[i].querySelectorAll(".list li");
  tabSelect[i].addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      // 선택한 li 요소의 텍스트를 current에 반영
      const selectedText = event.target.innerText;
      currentText.innerText = selectedText;

      // bold 클래스 제거
      liItems.forEach((li) => {
        li.classList.remove("bold");
      });

      // 선택한 li 요소에 bold 클래스 추가
      event.target.classList.add("bold");
    }
  });
}

// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
