const header_bg = document.querySelector(".header_container_bg");
const MenuItem = document.querySelectorAll(".gnb_Item");
const subMenu = document.querySelectorAll(".sub_menu");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const SearchTab = document.querySelectorAll(".current");
const list = document.querySelectorAll(".list");
const modalSearchBox = document.querySelector(".modal-SearchBox");
const modalSearch = document.querySelector(".modal");
const SearchOpen = document.querySelector(".btn_search");
const SearchClose = document.querySelector(".btn-md-close");
const tabBtn = document.querySelectorAll(".tab-btn ");
const magazineItem = document.querySelectorAll(".magazine-Item ");
const magazine = document.querySelector(".magazine-banner");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 66) {
    header.classList.add("ScrollHeader");
  } else if (window.scrollY >= 0) {
    header.classList.remove("ScrollHeader");
  }
});

// 메인 맨 밑 이미지 변경
for (let i = 0; i < magazineItem.length; i++) {
  magazineItem[i].addEventListener("mouseover", () => {
    magazineItem[i].classList.add("over");
    changeImage(i);
  });
  magazineItem[i].addEventListener("mouseout", () => {
    magazineItem[i].classList.remove("over");
  });
}

// 이미지 변경을 위한 이벤트 핸들러
function changeImage(item) {
  if (item === 0) {
    magazine.style.backgroundImage = "url(assets/images/maga1.jpg)";
  } else if (item === 1) {
    magazine.style.backgroundImage = "url(assets/images/maga2.jpg)";
  } else if (item === 2) {
    magazine.style.backgroundImage = "url(assets/images/maga3.jpg)";
  }
}

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

// Top 버튼
if (document.querySelector("#js-scroll")) {
  window.addEventListener("scroll", () => {
    const jsScroll = document.querySelector("#js-scroll");
    if (window.scrollY >= 200) {
      jsScroll.style.display = "block";
      jsScroll.style.position = "fixed";
    } else {
      jsScroll.style.display = "none";
      jsScroll.style.position = "relative";
    }
  });

  document.querySelector("#js-scroll").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Added smooth scrolling behavior
    });
  });
}
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

// 메인 페이지 슬라이더 밑에 다른 취향 보기 이벤트
function getRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function changeCurrentClass() {
  var selectElements = document.querySelectorAll(".main-sc .tab-select");

  Array.from(selectElements).forEach(function (selectElement) {
    var listItems = selectElement
      .querySelector(".list")
      .getElementsByTagName("li");

    var randomIndex = getRandomIndex(listItems.length);

    // 현재 클래스 변경
    var currentElement = selectElement.querySelector(".current");
    currentElement.textContent = listItems[randomIndex].textContent;

    // bold 클래스 추가
    Array.from(listItems).forEach(function (item) {
      item.classList.remove("bold");
    });
    listItems[randomIndex].classList.add("bold");
  });
}

var mainParent = document.querySelector(".main-sc");
if (mainParent) {
  var btnReload = mainParent.querySelector("#btn_reload");
  if (btnReload) {
    btnReload.addEventListener("click", changeCurrentClass);
  }
}
// 검색 modal 에 초기화 버튼
document.getElementById("btn_content").addEventListener("click", function () {
  var modalBody = document.querySelector(".modal-body");

  if (modalBody) {
    var currentElements = modalBody.querySelectorAll(
      ".tab-ContentTit .current"
    );
    var initialValues = ["누구와", "어디서", "무엇을"]; // 초기값으로 설정할 텍스트들

    currentElements.forEach(function (currentElement, index) {
      currentElement.textContent = initialValues[index];
    });
  }
});
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
var swiper = new Swiper(".tmSwiper", {
  spaceBetween: 22,
  centeredSlides: false, // 중앙 정렬 비활성화
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".main-sc2-swiper", {
  spaceBetween: 22,
  centeredSlides: false, // 중앙 정렬 비활성화
  slidesPerView: 3,
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
