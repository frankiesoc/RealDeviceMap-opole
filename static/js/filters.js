function filter_raids() {
  var table = $("table-refresh");
  table.load("data_fetcher.php");

  var searchFilter = document.getElementById("search-input").value.toUpperCase();
  var gymFilter = document.getElementById("filter-gym").value.toUpperCase();
  var cityFilter = document.getElementById("filter-city").value.toUpperCase();
  var levelFilter = document.getElementById("filter-level").value.toUpperCase();
  var teamFilter = document.getElementById("filter-team").value.toUpperCase();
  var exFilter = document.getElementById("filter-ex").value.toUpperCase();

  console.log("Pokemon:", searchFilter, "City:", cityFilter, "Level:", levelFilter, "Team:", teamFilter, "Ex:", exFilter, "Gym:", gymFilter);

  if (cityFilter.toLowerCase().indexOf("all") === 0 ||
    cityFilter.toLowerCase().indexOf("select") === 0) {
    cityFilter = "";
    console.log("City filter cleared");
  }

  if (levelFilter.toLowerCase().indexOf("all") === 0 ||
    levelFilter.toLowerCase().indexOf("select") === 0) {
    levelFilter = "";
    console.log("Level filter cleared");
  }

  if (teamFilter.toLowerCase().indexOf("all") === 0 ||
    teamFilter.toLowerCase().indexOf("select") === 0) {
    teamFilter = "";
    console.log("Team filter cleared");
  }

  if (exFilter.toLowerCase().indexOf("all") === 0 ||
    exFilter.toLowerCase().indexOf("select") === 0) {
    exFilter = "";
    console.log("Ex filter cleared");
  }

  if (gymFilter.toLowerCase().indexOf("all") === 0 ||
    gymFilter.toLowerCase().indexOf("select") === 0) {
    gymFilter = "";
    console.log("Gym filter cleared");
  }

  var mobile = isMobile();
  var table = document.getElementById("gym-table");
  var tr = mobile ? table.getElementsByClassName("mobile-row") : table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    if (!mobile && i == 0)
      continue;

    var pkmnValue, cityValue, levelValue, teamValue, exValue, gymValue;
    if (mobile) {
      var cells = tr[i].getElementsByClassName("mobile");
      pkmnValue = cells[0].innerHTML.toUpperCase();
      levelValue = cells[1].innerHTML;
      gymValue = cells[4].innerHTML.toUpperCase();
      cityValue = cells[5].innerHTML.toUpperCase();
      teamValue = cells[6].innerHTML.toUpperCase();
      exValue = cells[8].innerHTML.toUpperCase();
    } else {
      levelValue = table.rows[i].cells[3].innerHTML;
      pkmnValue = table.rows[i].cells[4].innerHTML.toUpperCase();
      gymValue = table.rows[i].cells[6].innerHTML.toUpperCase();
      cityValue = table.rows[i].cells[7].innerHTML.toUpperCase();
      teamValue = table.rows[i].cells[8].innerHTML.toUpperCase();
      exValue = table.rows[i].cells[9].innerHTML.toUpperCase();
    }
    
    if (pkmnValue.indexOf(searchFilter) > -1 &&
      cityValue.indexOf(cityFilter) > -1 &&
      levelValue.indexOf(levelFilter) > -1 &&
      teamValue.indexOf(teamFilter) > -1 &&
      exValue.indexOf(exFilter) > -1 &&
      gymValue.indexOf(gymFilter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }     
  }
}

function filter_gyms() {
  var teamFilter = document.getElementById("filter-team").value.toUpperCase();
  var slotsFilter = document.getElementById("filter-slots").value.toUpperCase();
  var battleFilter = document.getElementById("filter-battle").value.toUpperCase();
  var cityFilter = document.getElementById("filter-city").value.toUpperCase();
  var gymFilter = document.getElementById("filter-gym").value.toUpperCase();

  console.log("Team:", teamFilter, "Slots:", slotsFilter, "In Battle:", battleFilter, "City:", cityFilter, "Gym:", gymFilter);

  if (teamFilter.toLowerCase().indexOf("all") === 0 ||
    teamFilter.toLowerCase().indexOf("select") === 0) {
    teamFilter = "";
    console.log("Team filter cleared");
  }

  if (slotsFilter.toLowerCase().indexOf("all") === 0 ||
    slotsFilter.toLowerCase().indexOf("select") === 0) {
    slotsFilter = "ALL";
    console.log("Available slots filter cleared");
  }

  if (battleFilter.toLowerCase().indexOf("all") === 0 ||
    battleFilter.toLowerCase().indexOf("select") === 0) {
    battleFilter = "";
    console.log("Battle filter cleared");
  }

  if (cityFilter.toLowerCase().indexOf("all") === 0 ||
    cityFilter.toLowerCase().indexOf("select") === 0) {
    cityFilter = "";
    console.log("City filter cleared");
  }

  if (gymFilter.toLowerCase().indexOf("all") === 0 ||
    gymFilter.toLowerCase().indexOf("select") === 0) {
    gymFilter = "";
    console.log("Gym filter cleared");
  }

  var table = document.getElementById("gym-table");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    if (i == 0)
      continue;

    var gymValue = table.rows[i].cells[1].innerHTML.toUpperCase();
    var teamValue = table.rows[i].cells[2].innerHTML.toUpperCase();
    var slotsValue = table.rows[i].cells[3].innerHTML.toUpperCase();
    var battleValue = table.rows[i].cells[5].innerHTML.toUpperCase();
    var cityValue = table.rows[i].cells[6].innerHTML.toUpperCase();

    if (teamValue.indexOf(teamFilter) > -1 && 
      ((slotsValue >= slotsFilter && slotsValue.indexOf("FULL") == -1) || (slotsValue == slotsFilter && slotsFilter.indexOf("FULL") >= -1) || slotsFilter.indexOf("ALL") > -1) &&
      battleValue.indexOf(battleFilter) > -1 &&
      cityValue.indexOf(cityFilter) > -1 &&
      gymValue.indexOf(gymFilter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }     
  }
}

function filter_quests() {
  var searchFilter = document.getElementById("search-input").value.toUpperCase();
  var cityFilter = document.getElementById("filter-city").value.toUpperCase();
  var pokestopFilter = document.getElementById("filter-pokestop").value.toUpperCase();

  console.log("Quest:", searchFilter, "City:", cityFilter, "Pokestop:", pokestopFilter);

  if (cityFilter.toLowerCase().indexOf("all") === 0 ||
    cityFilter.toLowerCase().indexOf("select") === 0) {
    cityFilter = "";
    console.log("City filter cleared");
  }

  if (pokestopFilter.toLowerCase().indexOf("all") === 0 ||
    pokestopFilter.toLowerCase().indexOf("select") === 0) {
    pokestopFilter = "";
    console.log("Pokestop filter cleared");
  }

  var table = document.getElementById("quest-table");
  var tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    if (i == 0)
      continue;

    var rewardValue = table.rows[i].cells[1].innerHTML.toUpperCase();
    var cityValue = table.rows[i].cells[4].innerHTML.toUpperCase();
    var pokestopValue = table.rows[i].cells[5].innerHTML.toUpperCase();
    
    if (rewardValue.indexOf(searchFilter) > -1 && 
      cityValue.indexOf(cityFilter) > -1 &&
      pokestopValue.indexOf(pokestopFilter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }     
  }
}

function isMobile() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}