const header_bg = document.querySelector(".header_container_bg");
const MenuItem = document.querySelectorAll(".gnb_Item");
const subMenu = document.querySelectorAll(".sub_menu");
const body = document.querySelector("body");
const quickMenuToggle = document.querySelector(".btn-toggle");
const quickWing = document.querySelector(".quick-wing");
const header = document.querySelector(".header");
const SearchTab = document.querySelectorAll(".current");
const list = document.querySelectorAll(".list");
const modalSearchBox = document.querySelector(".modal-SearchBox");
const SearchFind = document.querySelector(".SearchFind");
const modalSearch = document.querySelector(".modal");
const SearchOpen = document.querySelector(".btn_search");
const SearchClose = document.querySelector(".btn-md-close");
const tabBtn = document.querySelectorAll(".tab-btn ");
const magazineItem = document.querySelectorAll(".magazine-Item ");
const magazine = document.querySelector(".magazine-banner");
const findSearchShow = document.querySelectorAll(".ms_find_hash>ul>li");
const findMenu = document.querySelectorAll(".list-arrow>ul>li>button");
const FindHeaderButton = document.querySelectorAll(".ms-find_header>button");
const FindHeaderHash = document.querySelectorAll(".ms_find_hash>ul");
const tab_main = document.querySelectorAll(".tab-main>a");
const maintmlnb = document.querySelectorAll(".main-tm-lnb>li");
const SearchList = document.querySelectorAll(".list");
const inputField = document.getElementById("commonSearchPlaceKeyword");
const inputArray = []; // Create an array to store the selected values
const MobileMenuOpen = document.querySelector(".MobileMenuOpen");
const MobileMenuClose = document.querySelector(".MobileMenuClose");
const MobileMenu = document.querySelector(".MobileTabMenu ");
const ListMasterAreaOpen = document.querySelector(".list_title .Btn ");
const FilterItem = document.querySelectorAll(".FilterItem");
const FilterInfo = document.querySelectorAll(".FilterInfo");
const FilterMenu = document.querySelector(".FilterMenu");
const FilterOpen = document.querySelector(".FilterOpen");
const FilterClose = document.querySelector(".FilterClose");
const FilterSortOpen = document.querySelector(".FilterSortOpen");
const FIlerSortClose = document.querySelector(".FIlerSortClose");
const MobileMenuListOpen = document.querySelectorAll(".item-box .tit");
const MobileMenuItem = document.querySelectorAll(".item-box ul");

console.log(MobileMenuItem);
for (let i = 0; i < MobileMenuListOpen.length; i++) {
  MobileMenuListOpen[i].addEventListener("click", () => {
    MobileMenuItem[i].classList.toggle("hide");
    document
      .querySelectorAll(".item-box .tit .xi-minus-min")
      [i].classList.toggle("hide");
    document
      .querySelectorAll(".item-box .tit .xi-plus-min ")
      [i].classList.toggle("hide");
  });
}

// 필터관련 작업
if (FilterSortOpen) {
  FilterSortOpen.addEventListener("click", () => {
    document.querySelector(".FilterSort").classList.add("open");
    body.classList.add("prevent");
  });
  FIlerSortClose.addEventListener("click", () => {
    document.querySelector(".FilterSort").classList.remove("open");
    body.classList.remove("prevent");
  });
}
if (FilterOpen) {
  FilterOpen.addEventListener("click", () => {
    FilterMenu.classList.remove("hide");
  });
  FilterClose.addEventListener("click", () => {
    FilterMenu.classList.add("hide");
  });
}
if (document.querySelector("#FilterReset")) {
  document.querySelector("#FilterReset").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(
      ".FilterInfo .inp-check > input"
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });

  for (let i = 0; i < FilterItem.length; i++) {
    FilterItem[i].addEventListener("click", () => {
      FilterInfo[i].classList.toggle("hide");
    });
  }

  if (ListMasterAreaOpen) {
    ListMasterAreaOpen.addEventListener("click", () => {
      document.querySelector(".master-area").classList.toggle("active");
      ListMasterAreaOpen.classList.toggle("return");
    });
  }
}
// 모바일 메뉴 오픈
MobileMenuOpen.addEventListener("click", () => {
  MobileMenu.classList.add("on");
  MobileMenu.classList.remove("off");
  body.classList.add("prevent");
  document.querySelector(".footer-app-nav").style.zIndex = "300";
});
MobileMenuClose.addEventListener("click", () => {
  MobileMenu.classList.add("off");
  MobileMenu.classList.remove("on");
  body.classList.remove("prevent");
  document.querySelector(".footer-app-nav").style.zIndex = "100";
});
// 오른쪽 퀵메뉴 오픈
quickMenuToggle.addEventListener("click", () => {
  const angleRightIcon = quickMenuToggle.querySelector(".xi-angle-right-min");
  const angleLeftIcon = quickMenuToggle.querySelector(".xi-angle-left-min");
  const isOpened = quickWing.classList.contains("opened");

  if (isOpened) {
    angleRightIcon.style.display = "none";
    angleLeftIcon.style.display = "block";
  } else {
    angleLeftIcon.style.display = "none";
    angleRightIcon.style.display = "block";
  }

  quickWing.classList.toggle("opened");
});
// 검색 안에 여행 관련 이벤트
for (let i = 0; i < FindHeaderButton.length; i++) {
  FindHeaderButton[i].addEventListener("click", () => {
    FindHeaderButton[i].classList.add("active");
    FindHeaderHash[i].style.display = "flex";
    document.querySelector("#commonSearchMenuCode").value = "";
    FindHeaderHash[i].querySelectorAll("li")[0].classList.add("show");
    for (let j = 0; j < FindHeaderButton.length; j++) {
      if (j !== i) {
        FindHeaderHash[i].style.display = "none";
        FindHeaderButton[j].classList.remove("active");
      }
    }
  });
}
for (let i = 0; i < FindHeaderButton.length; i++) {
  FindHeaderButton[i].addEventListener("click", () => {
    if (FindHeaderHash[i]) {
      FindHeaderHash[i].style.display = "flex";
      for (let j = 0; j < FindHeaderHash.length; j++) {
        // changed to FindHeaderHash.length
        if (j !== i) {
          FindHeaderHash[j].style.display = "none";
        }
      }
    } else {
      console.error(
        `No corresponding element in FindHeaderHash for index ${i}`
      );
    }
  });
}
for (let i = 0; i < tab_main.length; i++) {
  tab_main[i].addEventListener("click", () => {
    tab_main[i].classList.add("selected");
    for (let j = 0; j < tab_main.length; j++) {
      if (j !== i) {
        tab_main[j].classList.remove("selected");
      }
    }
  });
}
for (let i = 0; i < maintmlnb.length; i++) {
  maintmlnb[i].addEventListener("click", () => {
    maintmlnb[i].classList.add("active");
    for (let j = 0; j < maintmlnb.length; j++) {
      if (j !== i) {
        maintmlnb[j].classList.remove("active");
      }
    }
  });
}

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
const tabBtnMenu = document.querySelector(".modal-body>div");
for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener("click", () => {
    // 클릭된 요소에 active 클래스 추가
    tabBtn[i].classList.add("active");
    document.querySelectorAll(".modal-body>div")[i].style.display = "block";
    // 클릭되지 않은 다른 버튼에서 active 클래스 제거
    for (let j = 0; j < tabBtn.length; j++) {
      if (j !== i) {
        tabBtn[j].classList.remove("active");
        document.querySelectorAll(".modal-body>div")[j].style.display = "none";
      }
    }
  });
}
for (let i = 0; i < findSearchShow.length; i++) {
  findSearchShow[i].addEventListener("click", () => {
    // 클릭된 요소에 active 클래스 추가
    findSearchShow[i].classList.add("show");

    // 클릭되지 않은 다른 버튼에서 show 클래스 제거
    for (let j = 0; j < findSearchShow.length; j++) {
      if (j !== i) {
        findSearchShow[j].classList.remove("show");
      }
    }
  });
}
for (let i = 0; i < findMenu.length; i++) {
  findMenu[i].addEventListener("click", () => {
    // 클릭된 요소에 active 클래스 추가
    findMenu[i].classList.add("active_menu");

    // 클릭되지 않은 다른 버튼에서 active_menu 클래스 제거
    for (let j = 0; j < findMenu.length; j++) {
      if (j !== i) {
        findMenu[j].classList.remove("active_menu");
      }
    }
  });
}
if (SearchFind) {
  SearchFind.addEventListener("click", () => {
    modalSearch.style.display = "block";
    tabBtn[0].classList.add("active");
    document.querySelectorAll(".modal-body>div")[0].style.display = "block";
    tabBtn[1].classList.remove("active");
    document.querySelectorAll(".modal-body>div")[1].style.display = "none";
  });
}
if (SearchOpen) {
  // 검색버튼 열기
  SearchOpen.addEventListener("click", () => {
    modalSearch.style.display = "block";
    body.classList.add("prevent");
  });
  SearchClose.addEventListener("click", () => {
    modalSearch.style.display = "none";
    body.classList.remove("prevent");
    fnResetCondValue();
  });
}
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
    event.target.classList.contains("tab-select") ||
    event.target.closest(".tab-select")
  ) {
    const clickedSearchTab = event.target.closest(".tab-select");
    const clickedIndex = Array.from(tabSelect).indexOf(clickedSearchTab);
    console.log(clickedIndex);
    // 클릭한 SearchTab에 해당하는 list 요소를 toggle
    if (list[clickedIndex].style.display === "block") {
      list[clickedIndex].style.display = "none";
      document.querySelectorAll(".tab-select .date-modal-background")[
        clickedIndex
      ].style.display = "none";
    } else {
      // 이전에 켜져 있던 list 요소를 none으로 설정
      for (let i = 0; i < list.length; i++) {
        if (i !== clickedIndex) {
          list[i].style.display = "none";
          document.querySelectorAll(".tab-select .date-modal-background")[
            i
          ].style.display = "none";
        }
      }
      // 클릭한 SearchTab에 해당하는 list 요소를 block으로 설정
      document.querySelectorAll(".tab-select .date-modal-background")[
        clickedIndex
      ].style.display = "block";
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
      const valueToAdd = event.target.innerHTML;
      inputArray[i] = valueToAdd;
    }
  });
}
function MenuListSearch(event) {
  const modalMenuList = document.querySelector(".modalMenuList");
  const Intro = document.querySelector("#_defaultLayerMsgDIV");
  const concatenatedString = inputArray.join(", ");
  modalMenuList.value = concatenatedString;

  if (modalMenuList.value.length < 1) {
    let msg = "키워드를 선택해주세요.";
    Intro.innerHTML = msg;
    popup.style.display = "block";
    event.preventDefault(); // 이렇게 직접 event를 사용해서 제출을 막습니다.
    return;
  } else {
    $("#commonSearchPlaceKeyword").val("");
    $("#commonSearchMenuCode").val("");
  }
}

document.querySelector("#modalMenu").addEventListener("submit", MenuListSearch);
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
document
  .getElementById("msfindbodyReset")
  .addEventListener("click", function () {
    for (let i = 0; i < findMenu.length; i++) {
      if (findMenu[i].className === "active_menu") {
        findMenu[i].classList.remove("active_menu");
        document.getElementById("commonSearchMenuCode").value = "";
      }
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
  centeredSlides: false, // 중앙 정렬 비활성화
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      spaceBetween: 22,
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2, //브라우저가 768미만일때
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    310: {
      slidesPerView: 1, //브라우저가 768미만일때
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
  },
});

var swiper = new Swiper(".main-sc2-swiper", {
  centeredSlides: false, // 중앙 정렬 비활성화
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
  breakpoints: {
    1024: {
      spaceBetween: 22,
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2, //브라우저가 768미만일때
      spaceBetween: 10,
    },
    310: {
      slidesPerView: 1, //브라우저가 768미만일때
      slidesPerGroup: 1,
    },
  },
});
var swiper = new Swiper(".reviewSwiper", {
  centeredSlides: false, // 중앙 정렬 비활성화
  breakpoints: {
    1024: {
      centeredSlides: false, // 중앙 정렬 비활성화
      spaceBetween: 22,
      slidesPerView: 3,
    },
    800: {
      centeredSlides: false, // 중앙 정렬 비활성화
      slidesPerView: 2, //브라우저가 768미만일때
      spaceBetween: 10,
    },
    310: {
      centeredSlides: true, // 중앙 정렬 비활성화
      slidesPerView: 1, //브라우저가 768미만일때
      spaceBetween: 10,
    },
  },
});
var swiper = new Swiper(".magazine_swiper", {
  centeredSlides: false, // 중앙 정렬 비활성화
  breakpoints: {
    1024: {
      centeredSlides: false, // 중앙 정렬 비활성화
      spaceBetween: 22,
      slidesPerView: 3,
    },
    800: {
      centeredSlides: false, // 중앙 정렬 비활성화
      slidesPerView: 2, //브라우저가 768미만일때
      spaceBetween: 10,
    },
    310: {
      centeredSlides: true, // 중앙 정렬 비활성화
      slidesPerView: 1, //브라우저가 768미만일때
      spaceBetween: 10,
    },
  },
});
$(document).ready(function () {
  var slider = $(".slider");
  var progressBar = $(".progress-bar");
  var autoplayInterval;
  var isAutoplay = true;

  slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  var totalSlides = slider.slick("getSlick").slideCount;
  var currentSlide = slider.slick("slickCurrentSlide") + 1;
  function updatePagination() {
    $(".slider-pagination").html(
      "<button class='page-btn current'>" +
        currentSlide +
        "</button> / " +
        totalSlides
    );
  }

  function updateProgress() {
    var progress = ((currentSlide - 1) / (totalSlides - 1)) * 100;
    progressBar.css("width", progress + "%");
  }

  function startAutoplay() {
    slider.slick("slickPlay");
    autoplayInterval = setInterval(function () {
      slider.slick("slickNext");
    }, 2000);
    isAutoplay = true;
    $(".btn-start").addClass("active");
    $(".btn-stop").removeClass("active");
  }

  function stopAutoplay() {
    slider.slick("slickPause");
    clearInterval(autoplayInterval);
    isAutoplay = false;
    $(".btn-stop").addClass("active");
    $(".btn-start").removeClass("active");
  }

  function toggleAutoplay() {
    if (isAutoplay) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }

  updatePagination();
  updateProgress();

  slider.on("beforeChange", function (event, slick, current, next) {
    currentSlide = next + 1;
    updatePagination();
  });

  slider.on("afterChange", function (event, slick, current) {
    currentSlide = current + 1;
    updateProgress();
  });

  $(".btn-prev").click(function () {
    slider.slick("slickPrev");
  });

  $(".btn-next").click(function () {
    slider.slick("slickNext");
  });

  $(".btn-stop").click(function () {
    stopAutoplay();
    $(".btn-stop").addClass("active");
    $(".btn-start").removeClass("active");
  });

  $(".btn-start").click(function () {
    startAutoplay();
    $(".btn-start").addClass("active");
    $(".btn-stop").removeClass("active");
  });

  startAutoplay();
  $(".btn-start").addClass("active");
});
if (document.querySelector("#dateRangePicker")) {
  // Define minDate with the current date (start of the day)
  const minDate = moment().startOf("day");

  function fnResetSearchCalendar() {
    // Destroy the current date range picker instance
    $("#dateRangePicker").daterangepicker("destroy");
    // Clear the value of the date range input field
    $("#dateRangePicker").val("");
    // Reset the "calendar-tableBox" contents
    resetCalendarTable();
    // Re-initialize the date range picker
    fnSetSearchCalendar();
  }

  function resetCalendarTable() {
    // Remove any existing content within the "calendar-tableBox" container
    $(".calendar-tableBox").empty();
    // Add the default message back to the "calendar-tableBox" container
    $(".calendar-tableBox").append("<p>No date range selected.</p>");
  }

  function fnSetSearchCalendar() {
    // Destroy any existing instance of the date range picker in the "calendar-tableBox" container
    $(".calendar-tableBox").empty();

    // Create the new date range picker within the "calendar-tableBox" container
    $("#dateRangePicker").daterangepicker(
      {
        alwaysShowCalendars: true,
        autoApply: true,
        inline: true,
        parentEl: ".calendar-tableBox",
        minDate: minDate,
        startDate: minDate,
        endDate: minDate,
        separator: "~",
        singleDatePicker: "false" == "true" ? true : false,
        locale: {
          format: "YYYY-MM-DD",
          separator: "~",
          applyLabel: "선택",
          cancelLabel: "취소",
          fromLabel: "부터",
          toLabel: "까지",
          customRangeLabel: "직접 선택",
          weekLabel: "주",
          daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
          monthNames: [
            "1.",
            "2.",
            "3.",
            "4.",
            "5.",
            "6.",
            "7.",
            "8.",
            "9.",
            "10.",
            "11.",
            "12.",
          ],
          firstDay: 0,
        },
      }
      // function (start, end, label, state) {
      //   let diff = end.diff(start, "days");
      //   if (diff > 14) {
      //     document.querySelector(".modal-length").style.display = "block";
      //     $("#btnModalConfirm").on("click", function () {
      //       fnResetSearchCalendar();
      //       document.querySelector(".modal-length").style.display = "none";
      //     });
      //   }
      //   // $("#searchModalCalendarSelectFlag").val("Y");
      // }
    );
    $("#dateRangePicker").data("daterangepicker").show(); // dateRangePicker 캘린더도 보이도록 show() 메서드를 호출합니다.
  }

  // 웹 페이지 로드 후 실행되는 스크립트
  document.addEventListener("DOMContentLoaded", function () {
    fnSetSearchCalendar();

    // "일정 선택" 버튼 클릭 시 date-modal 열기
    document
      .querySelector(".date-modal-Open")
      .addEventListener("click", function () {
        $(".date-modal").show(); // date-modal 보이도록 show() 메서드를 호출합니다.
        $("#dateRangePicker").data("daterangepicker").show(); // dateRangePicker 캘린더도 보이도록 show() 메서드를 호출합니다.
      });

    // "닫기" 버튼 클릭 시 date-modal 닫기
    document
      .querySelector(".modal-date-Close")
      .addEventListener("click", function () {
        $(".date-modal").hide(); // date-modal 감추도록 hide() 메서드를 호출합니다.
        $("#dateRangePicker").data("daterangepicker").hide(); // dateRangePicker 캘린더도 감추도록 hide() 메서드를 호출합니다.
        fnResetCondValue();
      });
  });

  // 검색조건 초기화
  function fnResetCondValue() {
    $(".date-modal").hide(); // date-modal 감추도록 hide() 메서드를 호출합니다.
    $("#dateRangePicker").data("daterangepicker").hide(); // dateRangePicker 캘린더도 감추도록 hide() 메서드를 호출합니다.
    fnResetSearchCalendar();
    $("#commonSearchPlaceKeyword").val("");
    $("#commonSearchMenuCode").val("");
    $("#modalMenuList").val("");
  }
}
if (document.querySelector("#FilterdateRangePicker")) {
  // Define minDate with the current date (start of the day)
  const minDate = moment().startOf("day");

  function fnResetSearchCalendar() {
    // Destroy the current date range picker instance
    $("#FilterdateRangePicker").daterangepicker("destroy");
    // Clear the value of the date range input field
    $("#FilterdateRangePicker").val("");
    // Reset the "calendar-tableBox" contents
    resetCalendarTable();
    // Re-initialize the date range picker
    fnSetSearchCalendar();
  }

  function resetCalendarTable() {
    // Remove any existing content within the "calendar-tableBox" container
    $(".calendar-tableBox").empty();
    // Add the default message back to the "calendar-tableBox" container
    $(".calendar-tableBox").append("<p>No date range selected.</p>");
  }

  function fnSetSearchCalendar() {
    // Destroy any existing instance of the date range picker in the "calendar-tableBox" container
    $(".calendar-tableBox").empty();

    // Create the new date range picker within the "calendar-tableBox" container
    $("#FilterdateRangePicker").daterangepicker({
      alwaysShowCalendars: true,
      autoApply: true,
      inline: true,
      parentEl: ".calendar-tableBox",
      minDate: minDate,
      startDate: minDate,
      endDate: minDate,
      separator: "~",
      singleDatePicker: "false" == "true" ? true : false,
      locale: {
        format: "YYYY-MM-DD",
        separator: "~",
        applyLabel: "선택",
        cancelLabel: "취소",
        fromLabel: "부터",
        toLabel: "까지",
        customRangeLabel: "직접 선택",
        weekLabel: "주",
        daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: [
          "1.",
          "2.",
          "3.",
          "4.",
          "5.",
          "6.",
          "7.",
          "8.",
          "9.",
          "10.",
          "11.",
          "12.",
        ],
        firstDay: 0,
      },
    });
    $("#FilterdateRangePicker").data("daterangepicker").show(); // dateRangePicker 캘린더도 보이도록 show() 메서드를 호출합니다.
  }

  // 웹 페이지 로드 후 실행되는 스크립트
  document.addEventListener("DOMContentLoaded", function () {
    fnSetSearchCalendar();
  });
}

const popup = document.querySelector("#popup");
function fnSetCommonSearchMenuCode(obj, menuCode) {
  $("#commonSearchMenuCode").val(menuCode);
}
function fnCheckedMaxLength(strWord, length) {
  let result = true;
  if (strWord) {
    if (strWord.length > length) result = false;
  }
  return result;
}
function fnSearchBtn(event) {
  let searchWord = $("#commonSearchPlaceKeyword").val();
  console.log(searchWord.length < 1);
  const Intro = document.querySelector("#_defaultLayerMsgDIV");
  let msg = "검색어를 입력해주세요.";
  if (searchWord.length < 1) {
    Intro.innerHTML = msg;
    popup.style.display = "block";
    event.preventDefault();
    return;
  } else {
    $("#commonSearchMenuCode").val("");
    $("#modalMenuList").val("");
  }
}
document.querySelector("#Search").addEventListener("submit", fnSearchBtn);
function fnSearchWithDate(event) {
  //검색키워드, 메뉴코드
  let keyword = $("#commonSearchPlaceKeyword").val();
  let menuCode = $("#commonSearchMenuCode").val();
  const Intro = document.querySelector("#_defaultLayerMsgDIV");
  if (!keyword && !menuCode) {
    let msg = "검색어를 입력하거나 지역을 선택해 주세요.";
    Intro.innerHTML = msg;
    popup.style.display = "block";
    event.preventDefault();
    return;
  } else {
    $("#commonSearchPlaceKeyword").val("");
    $("#modalMenuList").val("");
  }
}

// 팝업 닫기 기능
const PopUpBtn = document.querySelector(".modal-footer>button");
PopUpBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

function TMChange(ChangeName) {
  let ChangeSwiper = document.querySelector(`#${ChangeName}`);
  const swiperNone = document.querySelectorAll(".tmSwiper");
  for (let i = 0; i < swiperNone.length; i++) {
    swiperNone[i].style.display = "none";
  }
  ChangeSwiper.style.display = "block";
}
