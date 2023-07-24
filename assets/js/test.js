minDate.setDate(minDate.getDate() + 3);

$(document).ready(function () {
  fnResetSearchCalendar();

  // 모달창 닫을 경우 날짜, 선택 초기화
  $('button[data-call-name="modalClose"]').on("click", function () {
    fnResetSearchCalendar();
    $("#common_search_calendar").modal("hide");
    $("#searchModalCalendarSelectFlag").val("N");
    $("#commonSearchMenuCode").val("");
    $("#commonSearchPlaceKeyword").val("");
    $(".active_menu").removeClass("active_menu");
  });

  //		$('table.table-condensed tbody tr td').removeClass('today');
});

// 검색 모달창 달력 초기화
$("#common_search_calendar").on("loaded.bs.modal", function () {
  fnResetSearchCalendar();

  let keyword = $("#commonSearchPlaceKeyword").val();
  let menuCode = $("#commonSearchMenuCode").val();

  if (keyword || menuCode) {
    $("#searchCalendar").hide();
  } else {
    $("#searchCalendar").show();
  }
});

function fnSetSearchCalendar() {
  // daterangepicker 적용
  $("#searchDatepicker").daterangepicker(
    {
      parentEl: "#inline-calendar",
      alwaysShowCalendars: true,
      autoApply: true,
      inline: true,
      minDate: minDate,
      startDate: minDate,
      endDate: minDate,
      locale: {
        separator: "~",
      },
    },
    function (start, end, label, state) {
      let startDate = moment(start.format("YYYY-MM-DD"));
      let endDate = moment(end.format("YYYY-MM-DD"));

      let diff = endDate.diff(startDate, "days");
      if (diff > 14) {
        let msg = "최대 14일까지 선택 가능합니다.";
        _Popup.openDefaultPopup(msg);
        $("#btnModalConfirm").on("click", function () {
          fnResetSearchCalendar();
        });
      }

      $("#searchModalCalendarSelectFlag").val("Y");
    }
  );
}

// daterangepicker 재적용(날짜초기화)
function fnResetSearchCalendar() {
  $("#searchDatepicker").daterangepicker("destroy");
  $("#searchModalCalendarSelectFlag").val("N");
  fnSetSearchCalendar();
}

// daterangepicker 검색
function fnSearchWithArea() {
  let calendarValue = $("#searchDatepicker").val();
  let startDate = calendarValue.split("~")[0];
  let endDate = calendarValue.split("~")[1];

  let keyword = $("#commonSearchPlaceKeyword").val();
  let menuCode = $("#commonSearchMenuCode").val();

  if (keyword) {
    onChangeLoding();
    window.location.href =
      "/display/search?text=" +
      keyword +
      "&from=" +
      startDate +
      "&to=" +
      endDate;
    fnResetCondValue();
    fnResetSearchValue();
  } else if (menuCode) {
    onChangeLoding();
    window.location.href =
      "/display/search?menuCode=" +
      menuCode +
      "&from=" +
      startDate +
      "&to=" +
      endDate;
    fnResetCondValue();
    fnResetSearchValue();
  } else {
    $("#common_search_calendar").modal("hide");
    $("#common_search_place .btn-wrap .data-type1").show();
    $("#common_search_place .btn-wrap .data-type2").hide();
    $(".modal-v2-commonSearch .date-input-wrapper").hide();
    $("#common_search_place").modal("show");
    $("#common_search_place").find("nav a:first-child").trigger("click");
    $(".tab-btns-wrap li a[rel='v2-total-tab01']").trigger("click");
    setSearchMenuTab();
  }
}
function setSearchMenuTab() {
  let urlParams = new URL(location.href).searchParams;
  let name = urlParams.get("menuCode");
  let tabs = $(".common-search .tab-default a");
  let tab_index = 0;
  if (name) {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].dataset.menu_code == name) {
        tab_index = i;
        break;
      }
    }
  }
  mainSearchPlace(tab_index, 0);
}
function mainSearchPlace(i, j) {
  var obj_tab_detail1 = $(".common-search .tab-default > *").eq(i);
  var obj_tab_detail2 = $(".common-search .cont-detail > .cont-box").eq(i);
  var obj_tab_detail3 = obj_tab_detail2.find(".tab-cate3 > ul > li").eq(j);
  obj_tab_detail1.addClass("selected");
  obj_tab_detail1.siblings().removeClass("selected");
  obj_tab_detail2.addClass("show");
  obj_tab_detail2.siblings().removeClass("show");
  obj_tab_detail3.children("a").addClass("show");
  obj_tab_detail3.siblings().children("a").removeClass("show");
  obj_tab_detail3
    .parents(".tab-cate3")
    .css("height", obj_tab_detail2.find(".list-arrow").height() + 104);
  obj_tab_detail2
    .siblings()
    .find(".tab-cate3 > ul > li")
    .children(".show")
    .removeClass("show");
}

// daterangepicker 검색
function fnSearchCalendar() {
  let calendarValue = $("#searchDatepicker").val();
  let startDate = calendarValue.split("~")[0];
  let endDate = calendarValue.split("~")[1];

  onChangeLoding();
  window.location.href = "/display/search?from=" + startDate + "&to=" + endDate;
  fnResetCondValue();
}
// 검색조건 초기화
function fnResetCondValue() {
  $(".active_menu").removeClass("active_menu");
  fnResetSearchCalendar();
  $("#commonSearchMenuCode").val("");
  $("#commonSearchPlaceKeyword").val("");
}
