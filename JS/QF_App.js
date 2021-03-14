
window.addEventListener("load", () => {
  var AVATAR_IMG_1 = document.getElementById("1_AVATAR_IMG");

  //Avatar Upload
  document.getElementById('filetag').value = null;
  document.getElementById('filetag').addEventListener('change', function () {
    if (this.files && this.files[0]) { // $('img')[0]
      AVATAR_IMG_1.src = URL.createObjectURL(this.files[0]); // set src to blob url
      //preview.onload = imageIsLoaded;
    }
  });


  //For Change Width Of User Avatar    
  let width_slider = document.getElementById("customRange2");
  let width_range = document.getElementById("width_range");
  width_slider.value = 150;
  let GSC_HOME_AVATAR_WIDTH;
  width_slider.addEventListener("input", () => {
    width_range.innerHTML = `${width_slider.value}px`;
    AVATAR_IMG_1.style.width = `${width_slider.value}px`;
    GSC_HOME_AVATAR_WIDTH = width_slider.value;
  })


  //For Change Button Text 
  let BUTTON_2 = document.getElementById("2_BUTTON");
  let BUTTON_2_Input = document.getElementById("HomeButtonTextInput");
  let GSC_HOME_BUTTON_TXT;
  BUTTON_2_Input.addEventListener("input", () => {
    BUTTON_2.innerHTML = `${BUTTON_2_Input.value}`;
    GSC_HOME_BUTTON_TXT = BUTTON_2_Input.value;
  })

  //For Change Size Of Button in Home    
  let BUTTON_2_SIZE = document.getElementById("customRange1");
  let BUTTON_2_SIZE_Val = document.getElementById("BUTTON_2_SIZE_Val");
  let GSC_HOME_BUTTON_SIZE;
  BUTTON_2_SIZE.addEventListener("input", () => {
    BUTTON_2_SIZE_Val.innerHTML = `${BUTTON_2_SIZE.value}px`;
    BUTTON_2.style.paddingLeft = `${BUTTON_2_SIZE.value}px`;
    BUTTON_2.style.paddingRight = `${BUTTON_2_SIZE.value}px`;
    GSC_HOME_BUTTON_SIZE = BUTTON_2_SIZE.value;
  })


  //For Change Name Text 
  let NAME_3 = document.getElementById("3_NAME");
  let NAME_3_Input = document.getElementById("NameInput");
  let GSC_HOME_NAME;
  NAME_3_Input.addEventListener("input", () => {
    NAME_3.innerHTML = `${NAME_3_Input.value}`;
    GSC_HOME_NAME = NAME_3_Input.value;
  })


  //For Change Bio Text 
  let SHORT_4 = document.getElementById("4_SHORTBIO");
  let SHORT_4_Input = document.getElementById("BioInput");
  let GSC_HOME_BIO;
  SHORT_4_Input.addEventListener("input", () => {
    SHORT_4.innerHTML = `${SHORT_4_Input.value}`;
    GSC_HOME_BIO = SHORT_4_Input.value;
  })



  //For Change About Text 
  let ABOUTYOU_5 = document.getElementById("5_ABOUTYOU");
  let ABOUTYOU_5_Input = document.getElementById("AboutYourInput");
  let GSC_ABOUT_YOURSELF_TXT;
  ABOUTYOU_5_Input.addEventListener("input", () => {
    ABOUTYOU_5.innerText = `${ABOUTYOU_5_Input.value}`;
    GSC_ABOUT_YOURSELF_TXT = ABOUTYOU_5_Input.value;
  })

  let GITHUBURL = document.getElementById("GITHUBURL");
  let GITHUBURL_Input = document.getElementById("GithubUrlInput");
  let GSC_PROJECT_GITHUBURL;
  GITHUBURL_Input.addEventListener("input", () => {
    //GITHUBURL.href = `${GITHUBURL_Input.value}`;
    GITHUBURL.setAttribute("href", GITHUBURL_Input.value)
    GSC_PROJECT_GITHUBURL = GITHUBURL_Input.value;
  })


  let GithubNameInput = document.getElementById("GITHUBURL");
  let GithubNameInput_Input = document.getElementById("GithubNameInput");
  let GSC_PROJECT_GITHUBID;
  GithubNameInput_Input.addEventListener("input", () => {
    GithubNameInput.innerText = `${GithubNameInput_Input.value}`;
    GSC_PROJECT_GITHUBID = GithubNameInput_Input.value;
  })

  /*-----------------------------------------*/

  function addskillmaker(SkillInput) {
    var code = `<li>${SkillInput}</li>
                    `;
    var Container = document.getElementById("6_Skill");
    Container.innerHTML += code;
    //$("#Container").append(code)
  }
  let SMC_ABOUT_SKILLS;
  document.getElementById("AddSkill").addEventListener("click", function () {
    //var answer = document.getElementById("mySelect");
    //var icon = select[select.selectedIndex].value;
    //console.log(icon);
    var SkillInput = document.getElementById("SkillInput").value;
    if (SkillInput != "") {
      addskillmaker(SkillInput);
    } else {
      addskillmaker("Skill")
    }
    document.getElementById("SkillInput").value = "";

    var getskill = document.getElementById("6_Skill");
    var getinnerhtmlskill = getskill.innerHTML;
    SMC_ABOUT_SKILLS = getinnerhtmlskill;
  });

  document.getElementById("ResetSkill").addEventListener("click", function () {
    $("#6_Skill").empty();
  });

  /*-----------------------------------------*/

  function addCardMaker(ProjectNameInput, ProjectInfoInput) {
    var code = `<div class="card">
                        <div class="txtWrapper">
                        <img src="Card_Image.png" alt="" class="img">
                            <h3 class="card-title">${ProjectNameInput}</h3>
                                <p class="card-content">${ProjectInfoInput}
                                <button class="card-btn">READ MORE</button>
                        </div>
                    </div>
                    `;
    var Container = document.getElementById("CardWrapper");
    Container.innerHTML += code;
    //$("#Container").append(code)
  }
let SMC_PROJECT_CARDS;
  document.getElementById("AddCard").addEventListener("click", function () {
    var ProjectNameInput = document.getElementById("ProjectNameInput").value;
    var ProjectInfoInput = document.getElementById("ProjectInfoInput").value;
    if (ProjectNameInput != "" || ProjectInfoInput != "") {
      addCardMaker(ProjectNameInput, ProjectInfoInput);
    } else {
      addCardMaker("Project Name", "Project Information")
    }
    document.getElementById("ProjectNameInput").value = "";
    document.getElementById("ProjectInfoInput").value = "";

    var getcard = document.getElementById("CardWrapper");
    var getinnercardhtml = getcard.innerHTML;
    SMC_PROJECT_CARDS = getinnercardhtml;
  });

  document.getElementById("ResetCard").addEventListener("click", function () {
    $("#CardWrapper").empty();
  });


  /****Contact**************************************************/
  var fonticon = ["fa-address-book", "fa-address-book-o", "fa-address-card", "fa-address-card-o", "fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-amazon", "fa-ambulance", "fa-american-sign-language-interpreting", "fa-anchor", "fa-android", "fa-angellist", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-area-chart", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asl-interpreting", "fa-assistive-listening-systems", "fa-asterisk", "fa-at", "fa-audio-description", "fa-automobile", "fa-backward", "fa-balance-scale", "fa-ban", "fa-bandcamp", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-bath", "fa-bathtub", "fa-battery", "fa-battery-0", "fa-battery-1", "fa-battery-2", "fa-battery-3", "fa-battery-4", "fa-battery-empty", "fa-battery-full", "fa-battery-half", "fa-battery-quarter", "fa-battery-three-quarters", "fa-bed", "fa-beer", "fa-behance", "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle", "fa-binoculars", "fa-birthday-cake", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin", "fa-black-tie", "fa-blind", "fa-bluetooth", "fa-bluetooth-b", "fa-bold", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-braille", "fa-briefcase", "fa-btc", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus", "fa-buysellads", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-check-o", "fa-calendar-minus-o", "fa-calendar-o", "fa-calendar-plus-o", "fa-calendar-times-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-caret-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-cc-amex", "fa-cc-diners-club", "fa-cc-discover", "fa-cc-jcb", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe", "fa-cc-visa", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-child", "fa-chrome", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clipboard", "fa-clock-o", "fa-clone", "fa-close", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-cny", "fa-code", "fa-code-fork", "fa-codepen", "fa-codiepie", "fa-coffee", "fa-cog", "fa-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-commenting", "fa-commenting-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-compress", "fa-connectdevelop", "fa-contao", "fa-copy", "fa-copyright", "fa-creative-commons", "fa-credit-card", "fa-credit-card-alt", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut", "fa-cutlery", "fa-dashboard", "fa-dashcube", "fa-database", "fa-deaf", "fa-deafness", "fa-dedent", "fa-delicious", "fa-desktop", "fa-deviantart", "fa-diamond", "fa-digg", "fa-dollar", "fa-dot-circle-o", "fa-download", "fa-dribbble", "fa-drivers-license", "fa-drivers-license-o", "fa-dropbox", "fa-drupal", "fa-edge", "fa-edit", "fa-eercast", "fa-eject", "fa-ellipsis-h", "fa-ellipsis-v", "fa-empire", "fa-envelope", "fa-envelope-o", "fa-envelope-open", "fa-envelope-open-o", "fa-envelope-square", "fa-envira", "fa-eraser", "fa-etsy", "fa-eur", "fa-euro", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-expand", "fa-expeditedssl", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-eyedropper", "fa-fa", "fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-fast-backward", "fa-fast-forward", "fa-fax", "fa-feed", "fa-female", "fa-fighter-jet", "fa-file", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-text", "fa-file-text-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-files-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-firefox", "fa-first-order", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-flickr", "fa-floppy-o", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-font", "fa-font-awesome", "fa-fonticons", "fa-fort-awesome", "fa-forumbee", "fa-forward", "fa-foursquare", "fa-free-code-camp", "fa-frown-o", "fa-futbol-o", "fa-gamepad", "fa-gavel", "fa-gbp", "fa-ge", "fa-gear", "fa-gears", "fa-genderless", "fa-get-pocket", "fa-gg", "fa-gg-circle", "fa-gift", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gitlab", "fa-gittip", "fa-glass", "fa-glide", "fa-glide-g", "fa-globe", "fa-google", "fa-google-plus", "fa-google-plus-circle", "fa-google-plus-official", "fa-google-plus-square", "fa-google-wallet", "fa-graduation-cap", "fa-gratipay", "fa-grav", "fa-group", "fa-h-square", "fa-hacker-news", "fa-hand-grab-o", "fa-hand-lizard-o", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-hand-paper-o", "fa-hand-peace-o", "fa-hand-pointer-o", "fa-hand-rock-o", "fa-hand-scissors-o", "fa-hand-spock-o", "fa-hand-stop-o", "fa-handshake-o", "fa-hard-of-hearing", "fa-hashtag", "fa-hdd-o", "fa-header", "fa-headphones", "fa-heart", "fa-heart-o", "fa-heartbeat", "fa-history", "fa-home", "fa-hospital-o", "fa-hotel", "fa-hourglass", "fa-hourglass-1", "fa-hourglass-2", "fa-hourglass-3", "fa-hourglass-end", "fa-hourglass-half", "fa-hourglass-o", "fa-hourglass-start", "fa-houzz", "fa-html5", "fa-i-cursor", "fa-id-badge", "fa-id-card", "fa-id-card-o", "fa-ils", "fa-image", "fa-imdb", "fa-inbox", "fa-indent", "fa-industry", "fa-info", "fa-info-circle", "fa-inr", "fa-instagram", "fa-institution", "fa-internet-explorer", "fa-intersex", "fa-ioxhost", "fa-italic", "fa-joomla", "fa-jpy", "fa-jsfiddle", "fa-key", "fa-keyboard-o", "fa-krw", "fa-language", "fa-laptop", "fa-lastfm", "fa-lastfm-square", "fa-leaf", "fa-leanpub", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-buoy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-line-chart", "fa-link", "fa-linkedin", "fa-linkedin-square", "fa-linode", "fa-linux", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-location-arrow", "fa-lock", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-low-vision", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map", "fa-map-marker", "fa-map-o", "fa-map-pin", "fa-map-signs", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mars-stroke-h", "fa-mars-stroke-v", "fa-maxcdn", "fa-meanpath", "fa-medium", "fa-medkit", "fa-meetup", "fa-meh-o", "fa-mercury", "fa-microchip", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mixcloud", "fa-mobile", "fa-mobile-phone", "fa-modx", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-motorcycle", "fa-mouse-pointer", "fa-music", "fa-navicon", "fa-neuter", "fa-newspaper-o", "fa-object-group", "fa-object-ungroup", "fa-odnoklassniki", "fa-odnoklassniki-square", "fa-opencart", "fa-openid", "fa-opera", "fa-optin-monster", "fa-outdent", "fa-pagelines", "fa-paint-brush", "fa-paper-plane", "fa-paper-plane-o", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-pause", "fa-pause-circle", "fa-pause-circle-o", "fa-paw", "fa-paypal", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-percent", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pie-chart", "fa-pied-piper", "fa-pied-piper-alt", "fa-pied-piper-pp", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-plane", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-plug", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-podcast", "fa-power-off", "fa-print", "fa-product-hunt", "fa-puzzle-piece", "fa-qq", "fa-qrcode", "fa-question", "fa-question-circle", "fa-question-circle-o", "fa-quora", "fa-quote-left", "fa-quote-right", "fa-ra", "fa-random", "fa-ravelry", "fa-rebel", "fa-recycle", "fa-reddit", "fa-reddit-alien", "fa-reddit-square", "fa-refresh", "fa-registered", "fa-remove", "fa-renren", "fa-reorder", "fa-repeat", "fa-reply", "fa-reply-all", "fa-resistance", "fa-retweet", "fa-rmb", "fa-road", "fa-rocket", "fa-rotate-left", "fa-rotate-right", "fa-rouble", "fa-rss", "fa-rss-square", "fa-rub", "fa-ruble", "fa-rupee", "fa-s15", "fa-safari", "fa-save", "fa-scissors", "fa-scribd", "fa-search", "fa-search-minus", "fa-search-plus", "fa-sellsy", "fa-send", "fa-send-o", "fa-server", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shekel", "fa-sheqel", "fa-shield", "fa-ship", "fa-shirtsinbulk", "fa-shopping-bag", "fa-shopping-basket", "fa-shopping-cart", "fa-shower", "fa-sign-in", "fa-sign-language", "fa-sign-out", "fa-signal", "fa-signing", "fa-simplybuilt", "fa-sitemap", "fa-skyatlas", "fa-skype", "fa-slack", "fa-sliders", "fa-slideshare", "fa-smile-o", "fa-snapchat", "fa-snapchat-ghost", "fa-snapchat-square", "fa-snowflake-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", "fa-stack-overflow", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-steam", "fa-steam-square", "fa-step-backward", "fa-step-forward", "fa-stethoscope", "fa-sticky-note", "fa-sticky-note-o", "fa-stop", "fa-stop-circle", "fa-stop-circle-o", "fa-street-view", "fa-strikethrough", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-subscript", "fa-subway", "fa-suitcase", "fa-sun-o", "fa-superpowers", "fa-superscript", "fa-support", "fa-table", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-telegram", "fa-television", "fa-tencent-weibo", "fa-terminal", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-themeisle", "fa-thermometer", "fa-thermometer-0", "fa-thermometer-1", "fa-thermometer-2", "fa-thermometer-3", "fa-thermometer-4", "fa-thermometer-empty", "fa-thermometer-full", "fa-thermometer-half", "fa-thermometer-quarter", "fa-thermometer-three-quarters", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-times-rectangle", "fa-times-rectangle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-off", "fa-toggle-on", "fa-toggle-right", "fa-toggle-up", "fa-trademark", "fa-train", "fa-transgender", "fa-transgender-alt", "fa-trash", "fa-trash-o", "fa-tree", "fa-trello", "fa-tripadvisor", "fa-trophy", "fa-truck", "fa-try", "fa-tty", "fa-tumblr", "fa-tumblr-square", "fa-turkish-lira", "fa-tv", "fa-twitch", "fa-twitter", "fa-twitter-square", "fa-umbrella", "fa-underline", "fa-undo", "fa-universal-access", "fa-university", "fa-unlink", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-usb", "fa-usd", "fa-user", "fa-user-circle", "fa-user-circle-o", "fa-user-md", "fa-user-o", "fa-user-plus", "fa-user-secret", "fa-user-times", "fa-users", "fa-vcard", "fa-vcard-o", "fa-venus", "fa-venus-double", "fa-venus-mars", "fa-viacoin", "fa-viadeo", "fa-viadeo-square", "fa-video-camera", "fa-vimeo", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-volume-control-phone", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wechat", "fa-weibo", "fa-weixin", "fa-whatsapp", "fa-wheelchair", "fa-wheelchair-alt", "fa-wifi", "fa-wikipedia-w", "fa-window-close", "fa-window-close-o", "fa-window-maximize", "fa-window-minimize", "fa-window-restore", "fa-windows", "fa-won", "fa-wordpress", "fa-wpbeginner", "fa-wpexplorer", "fa-wpforms", "fa-wrench", "fa-xing", "fa-xing-square", "fa-y-combinator", "fa-y-combinator-square", "fa-yahoo", "fa-yc", "fa-yc-square", "fa-yelp", "fa-yen", "fa-yoast", "fa-youtube", "fa-youtube-play", "fa-youtube-square"]


  var select = document.getElementById("SelectIcon");
  //var options = ["1", "2", "3", "4", "5"];
  for (var i = 0; i < fonticon.length; i++) {
    var opt = fonticon[i];
    //var el = document.createElement("option");
    //el.textContent = opt;
    //el.value = opt;
    //select.appendChild(el);
    var selectcode = `<option value="${opt}">${opt}</option>`;
    select.innerHTML += selectcode;
  }
  function addSociallink(AddLinkUrl, Icon) {
    var code = `<li>
                        <a href="${AddLinkUrl}" target="black">    
                            <i class="fa ${Icon}"></i>
                        </a>
                    </li>
                    `;
    var Container = document.getElementById("LinkWrapper");
    Container.innerHTML += code;
    //$("#Container").append(code)
  }
let SMC_CONTACT_LINK;
  document.getElementById("AddLink").addEventListener("click", function () {
    var AddLinkUrl = document.getElementById("AddLinkUrl").value;
    var Icon = select[select.selectedIndex].value;
    //console.log(icon);
    if (AddLinkUrl != "" || Icon != "") {
      addSociallink(AddLinkUrl, Icon);
    } else {
      addSociallink("I", "Icon")
    }
    //document.getElementById("AddLinkUrl").value = "";
    //document.getElementById("Icon").value = "";
    var getlink = document.getElementById("LinkWrapper");
    var getinnerlinkhtml = getlink.innerHTML;
    SMC_CONTACT_LINK = getinnerlinkhtml;
  });

  document.getElementById("ResetLink").addEventListener("click", function () {
    $("#LinkWrapper").empty();
  });

  /*-------------------------------------------------------------------
  ---------------------------------------------------------------------
  ---------------------------------------------------------------------
  --------------------------------------------------------------------- */


  document.getElementById("GETCODE").addEventListener("click", function () {
    let maincode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    :root {
        /* Global Variable */
        --Main_Fore_Color: #6930c3;
        --Main_Bg_Color: #252525;
        --Txt_Primary_Color: #ffffff;
        --Txt_Secondary_Color: #000000;
      }
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: "Ubuntu";
      height: 100%;
    }
    html {
      font-family: "Ubuntu";
      scroll-behavior: smooth;
      height: 100%;
    }
    
      #Back2Top {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        font-size: 18px;
        border: none;
        outline: none;
        background-color: var(--Main_Fore_Color);
        color: var(--Txt_Primary_Color);
        cursor: pointer;
        padding: 15px;
        border-radius: 4px;
      }
      
      #Back2Top:hover {
        background-color: #555;
      }
      hr {
        margin: auto;
        width: 20%;
        text-align: center;
      }
      /* Design For Phone */
      .TPL_NavBar {
        font-size: 18px;
        background: var(--Main_Fore_Color);
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 10px;
      }
      
      .TPL_Main_NavBar {
        list-style-type: none;
        display: none;
      }
      
      .nav-links,
      .TPL_logo {
        text-decoration: none;
        color: var(--Txt_Primary_Color);
      }
      
      .TPL_Main_NavBar li {
        text-align: center;
        margin: 20px auto;
      }
      
      .TPL_logo {
        display: inline-block;
        font-size: 22px;
        margin-top: 10px;
        margin-left: 20px;
      }
      
      .TPL_NavBar-toggle {
        float: right;
        margin-top: 10px;
        margin-right: 20px;
        cursor: pointer;
        color: var(--Txt_Primary_Color);
        font-size: 24px;
      }
      
      #chkToggle {
        display: none;
      }
      
      #chkToggle:checked + ul.TPL_Main_NavBar {
        display: block;
      }
      
      /* Design For Desktops */
      @media screen and (min-width: 768px) {
        .TPL_NavBar {
          display: flex;
          justify-content: space-between;
          padding-bottom: 0;
          height: 70px;
          align-items: center;
        }
      
        #chkToggle:checked + ul.TPL_Main_NavBar {
          display: flex;
        }
      
        .TPL_Main_NavBar {
          margin-bottom: 0px;
          display: flex;
          margin-right: 30px;
          flex-direction: row;
          justify-content: flex-end;
        }
      
        .TPL_Main_NavBar li {
          margin: 0;
        }
      
        .nav-links {
          margin-left: 40px;
        }
      
        .TPL_logo {
          margin-top: 0;
        }
      
        .TPL_NavBar-toggle {
          display: none;
        }
      
        .TPL_logo:hover,
        .nav-links:hover {
          color: rgba(255, 255, 255, 0.733);
        }
      }
      .home {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        background-color: var(--Main_Bg_Color);
      }
      .home h2 {
        margin-bottom: 15px;
        color: var(--Txt_Primary_Color);
        font-size: 50px;
      }
      .home h3 {
        color: var(--Txt_Primary_Color);
        font-size: 22px;
      }
      .Hometxtwrapper {
        margin-bottom: 6%;
      }
      .Hometxtwrapper img{
        width: ${GSC_HOME_AVATAR_WIDTH}px;
        border-radius: 50%;
      }
      .ContactBtn {
        border-radius: 20px;
        border: var(--Main_Fore_Color) 2px solid;
        color: var(--Txt_Primary_Color);
        padding-left: ${GSC_HOME_BUTTON_SIZE}px;
        padding-right: ${GSC_HOME_BUTTON_SIZE}px;
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-top: 12px;
        cursor: pointer;
      }
      
      .ContactBtn:hover {
        transition: 0.5s ease-in-out;
        background-color: var(--Main_Fore_Color);
        color: var(--Txt_Primary_Color);
      }
      
      .scrolldown i {
        font-size: 30px;
      }
      
      /* Responsive Design*/
      @media (max-width: 380px) {
        .home h2 {
          margin-bottom: 15px;
          color: var(--Txt_Primary_Color);
          font-size: 40px;
        }
        .home h3 {
          color: var(--Txt_Primary_Color);
          font-size: 18px;
        }
        .Hometxtwrapper {
          margin-bottom: 20%;
        }
      
        .ContactBtn {
          border-radius: 20px;
          border: var(--Main_Fore_Color) 2px solid;
          color: var(--Txt_Primary_Color);
          padding: 10px 28px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 13px;
          margin-top: 12px;
          cursor: pointer;
        }
      
        .ContactBtn:hover {
          transition: 0.5s ease-in-out;
          background-color: var(--Main_Fore_Color);
          color: var(--Txt_Primary_Color);
        }
      }
      .about {
        height: auto;
        background-color: var(--Main_Bg_Color);
      }
      .AbouttxtWrapper {
        display: flex; /* establish flex container */
        flex-direction: column; /* stack flex items vertically */
        justify-content: center; /* center items vertically, in this case */
        align-items: center;
      }
      .AbouttxtWrapper h1 {
        padding-top: 30px;
        font-size: 35px;
        color: var(--Txt_Primary_Color);
        text-align: center;
      }
      
      .AbouttxtWrapper p {
        color: var(--Txt_Primary_Color);
        width: 80%;
        padding-top: 20px;
        font-size: 20px;
        text-align: center;
      }
      
      .ResumeBTN {
        margin-bottom: 12px;
        margin-top: 30px;
        border-radius: 20px;
        border: var(--Main_Fore_Color) 2px solid;
        padding: 12px 34px;
        text-decoration: none;
        color: var(--Txt_Primary_Color);
        background-color: transparent;
        font-size: 18px;
        cursor: pointer;
      }
      
      .ResumeBTN:hover {
        color: var(--Txt_Primary_Color);
        transition: 0.5s ease-in-out;
        border: var(--Main_Fore_Color) 2px solid;
        background-color: var(--Main_Fore_Color);
      }
      
      .skills {
        text-align: center;
        padding: 15px;
        width: auto;
      }
      .skills h2 {
        font-size: 30px;
        color: var(--Txt_Primary_Color);
      }
      
      .skills ul {
        color: var(--Txt_Primary_Color);
        list-style-type: none;
        margin: 18px;
        padding: 0;
      }
      
      .skills ul li {
        border: 1px solid var(--Txt_Primary_Color);
        border-radius: 2px;
        display: inline-block;
        font-size: 15px;
        margin: 0 7px 7px 0;
        padding: 7px;
      }
      .Project {
        height: auto;
        /* background-color: var(--main_bg_color);*/
      }
      
      .ProjecttxtWrapper h1 {
        color: var(--Txt_Secondary_Color);
        padding-top: 30px;
        font-size: 35px;
        text-align: center;
      }
      .ProjecttxtWrapper h3 {
        color: var(--Txt_Secondary_Color);
      }
      .txtWrapper h3 {
        color: var(--Txt_Primary_Color);
      }
      .ProjecttxtWrapper {
        display: flex; /* establish flex container */
        flex-direction: column; /* stack flex items vertically */
        justify-content: center; /* center items vertically, in this case */
        align-items: center;
      }
      .wrapper {
        padding-bottom: 30px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .card {
        max-width: 300px;
        min-height: 250px;
        background: var(--Main_Fore_Color);
        box-sizing: border-box;
        color: var(--Txt_Primary_Color);
        margin: 20px;
        box-shadow: 0px 2px 18px -4px rgba(0, 0, 0, 0.75);
      }
      
      .img {
        width: 100%;
      }
      
      .txtWrapper {
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 30px;
        padding-top: 15px;
      }
      
      .card-title {
        margin-top: 0;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1.2px;
      }
      
      .card-content {
        margin-top: 12px;
        margin-bottom: 12px;
        font-size: 14px;
        letter-spacing: 0.5px;
        line-height: 1.5;
      }
      
      .card-btn {
        all: unset;
        display: block;
        margin: auto;
        border: 2px solid var(--Txt_Primary_Color);
        padding: 10px 15px;
        border-radius: 25px;
        font-size: 10px;
        font-weight: 600;
        transition: all 0.5s;
        cursor: pointer;
        letter-spacing: 1.2px;
      }
      .card-btn:hover {
        background-color: var(--Txt_Primary_Color);
        color: var(--Main_Fore_Color);
      }
      .contact {
        padding-bottom: 10px;
        padding-top: 10px;
        height: auto;
        background-color: var(--Main_Bg_Color);
      }
      .contacttxtWrapper {
        display: flex; /* establish flex container */
        flex-direction: column; /* stack flex items vertically */
        justify-content: center; /* center items vertically, in this case */
        align-items: center;
      }
      
      .ContacttxtWrapper h1 {
        color: var(--Txt_Primary_Color);
        padding-top: 15px;
        font-size: 30px;
        text-align: center;
      }
      
      footer {
        bottom: 0;
      }
      .w3hubs-footer {
        width: 100%;
        height: auto;
        margin: auto;
        background: var(--Main_Bg_Color);
        padding: 20px 0px;
      }
      .w3hubs-icon {
        width: 100%;
        height: auto;
        margin: auto;
      }
      .w3hubs-icon ul {
        margin: 0px;
        padding: 0px;
        text-align: center;
      }
      
      .w3hubs-icon ul li {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 0px 10px;
        border-radius: 100%;
        background: var(--Main_Fore_Color);
      }
      .w3hubs-icon ul li:hover {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 0px 10px;
        border-radius: 100%;
        transition: 0.5s ease-in-out;
        border: var(--Main_Fore_Color) solid 1px;
        background: transparent;
      }
      .w3hubs-icon ul li a {
        text-decoration: none;
        color: var(--Main_Bg_Color);
        font-size: 25px;
        display: block;
      }
      
      .w3hubs-icon ul li a i {
        color: var(--Txt_Primary_Color);
        line-height: 50px;
      }
      
      .footer-end {
        width: 100%;
        height: auto;
        margin: auto;
        background: var(--Main_Bg_Color);
        padding: 10px;
        font-size: 16px;
        text-align: center;
      }
      .footer-end p {
        font-size: 16px;
        text-align: center;
        color: var(--Txt_Primary_Color);
        font-weight: bold;
        letter-spacing: 2px;
      }
      .footer-end a {
        text-decoration: none;
        color: var(--Txt_Primary_Color);
      }
      .footer-end a:hover {
        color: var(--Main_Fore_Color);
      }
      
      @media (max-width: 380px) {
        .w3hubs-icon ul li a i {
          line-height: 38px;
        }
        .w3hubs-icon ul li a {
          font-size: 20px;
        }
        .w3hubs-icon ul li {
          width: 40px;
          height: 40px;
        }
      }
                                  
    </style>
</head>
<body>
<!-- Back To Top Button -->
        <button onclick="topFunction()" id="Back2Top" title="Go to top">
            <icon class="fa fa-arrow-up"></icon>
        </button>


        <!-- Navigation Bar -->
        <nav class="TPL_NavBar">
            <label class="TPL_NavBar-toggle" for="chkToggle">
                <i class="fa fa-bars"></i>
            </label>
            <a href="#" class="TPL_logo">logo</a>
            <input type="checkbox" id="chkToggle"></input>
            <ul class="TPL_Main_NavBar" id="js-menu">
                <li>
                    <a href="#home" class="nav-links">Home</a>
                </li>
                <li>
                    <a href="#about" class="nav-links">About</a>
                </li>
                <li>
                    <a href="#Project" class="nav-links">Project</a>
                </li>
                <li>
                    <a href="#contact" class="nav-links">Contact</a>
                </li>
            </ul>
        </nav>


        <!-- Home Section -->
        <section id="home" class="home">
            <div class="Hometxtwrapper">
                <img src="https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png" id="1_AVATAR_IMG">
                <h2>${GSC_HOME_NAME}</h2>
                <h3>${GSC_HOME_BIO}</h3>
                <a href="#Contact" class="ContactBtn">${GSC_HOME_BUTTON_TXT}</a><br>
                <!--<a href="#about" class="scrolldown"><i class="fa fa-angle-down"></i></a>-->
            </div>
        </section>


        <!-- About Me -->
        <section id="about" class="about">
            <div class="AbouttxtWrapper">
                <h1>About Me</h1>
                <hr>
                <p>${GSC_ABOUT_YOURSELF_TXT}</p>
                <a href="#" class="ResumeBTN">Resume</a>
                <div class="skills">
                    <h2>Skills</h2>
                    <ul id="6_Skill">
                       ${SMC_ABOUT_SKILLS}
                    </ul>
                </div>
            </div>
        </section>

        <!-- Project Section -->
        <section id="Project" class="Project">
            <div class="ProjecttxtWrapper">
                <h1>Project</h1>
                <hr style="margin-bottom: 20px;">
                <h3 style="margin-bottom: 17px; text-align: center; padding-left: 12px; padding-right: 12px;">Kindly
                    visit
                    My Github Profile for My Projects:
                    <span><a href="${GSC_PROJECT_GITHUBURL}">${GSC_PROJECT_GITHUBID}</a></span>
                </h3>
             
                <div class="wrapper">
                    ${SMC_PROJECT_CARDS}
                </div>
            </div>
        </section>



        <!-- Contact Section -->
        <section id="contact" class="contact">
            <div class="ContacttxtWrapper">
                <h1>Get in Touch</h1>
                <hr>
            </div>
            <footer>
                <div class="w3hubs-footer">
                    <div class="w3hubs-icon">
                        <ul id="LinkWrapper">
                        ${SMC_CONTACT_LINK}    
                        </ul>
                    </div>

                </div>

                <div class="footer-end">
                    <p>Desing & Coded By: <a href="https://JayPrajapati.xyz/">JayPrajapati.xyz</a></p>
                    <p>Copyright © 2020 All Rights Reserved</p>
                </div>
            </footer>
        </section>
<script>
var mybutton = document.getElementById("Back2Top");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        mybutton.style.display = "block";
    } else { mybutton.style.display = "none"; }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
</script>
</body>
</html>
       `;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(maincode));
    element.setAttribute('download', "QuickFolio_Index");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  });
})