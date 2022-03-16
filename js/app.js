  $(document).ready( function () {

    var socialNetworkHtml = '';
    for(i=0; i<socialNetworkArray.length; i++){
        socialNetworkHtml = socialNetworkHtml + '<p class="social-network-other-text" id="social-network-other-text'+i+'" onclick="selectToSocialNetwork(\'social-network-other-text'+i+'\')">' + socialNetworkArray[i] + '</p>';
    }
    $('#social-network-list').html(socialNetworkHtml);

    $("#order").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
             
        if (!(keyCode >= 48 && keyCode <= 57)) {
          return false;
        }
    });
});

function hideDialog(){
    $('#social-network-list').hide(30);
    $('#service-list').hide(30);
    $('#service-sub-list').hide(30);
}

function openSocialNetworkElement(){
    $('#service-list').hide(30);
    $('#service-sub-list').hide(30);
    $('#social-network-list').toggle(30);
}

var sosialNetworkElement;
var serviceElement;
var serviceSubElement;

function selectToSocialNetwork(id){
    sosialNetworkElement = $('#' + id).text();
    
    $('#social-network-first-text').text(sosialNetworkElement);
    
    if(sosialNetworkElement == '--Siyahıdan seçin...'){
        clearData3();

    } else if(sosialNetworkElement == "Instagram"){
        var serviceList = '';
        for(i=0; i<instagramServiceArray.length; i++){
            serviceList = serviceList + '<p class="service-other-text" id="instagramServiceElement'+i+'" onclick="selectToService(\'instagramServiceElement'+i+'\')">' + instagramServiceArray[i] + '</p>';
        }
        
        $('#service-list').html(serviceList);
        clearData();

    } else if(sosialNetworkElement == "Youtube"){
        var serviceList = '';
        for(i=0; i<youtubeServiceArray.length; i++){
            serviceList = serviceList + '<p class="service-other-text" id="youtubeServiceElement'+i+'" onclick="selectToService(\'youtubeServiceElement'+i+'\')">' + youtubeServiceArray[i] + '</p>';
        }

        $('#service-list').html(serviceList);
        clearData();

    } else if(sosialNetworkElement == "Facebook"){
        var serviceList = '';
        for(i=0; i<facebookServiceArray.length; i++){
            serviceList = serviceList + '<p class="service-other-text" id="facebookServiceElement'+i+'" onclick="selectToService(\'facebookServiceElement'+i+'\')">' + facebookServiceArray[i] + '</p>';
        }

        $('#service-list').html(serviceList);
        clearData();

    } else if(sosialNetworkElement == "TikTok"){
        
        var serviceSubList = '';
        for(i=0; i<tiktokArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="tiktokElement'+i+'" onclick="selectToSubService(\'tiktokElement'+i+'\')">' + tiktokArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData2();

    } else if(sosialNetworkElement == "Telegram"){
        
        var serviceSubList = '';
        for(i=0; i<telegramArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="telegramElement'+i+'" onclick="selectToSubService(\'telegramElement'+i+'\')">' + telegramArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData2();

    } else if(sosialNetworkElement == "Website"){

        var serviceSubList = '';
        for(i=0; i<websiteArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="websiteElement'+i+'" onclick="selectToSubService(\'websiteElement'+i+'\')">' + websiteArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData2();

    } else {
        clearData3();
    }
}

function clearData(){
    $('#custom-select-2').removeClass("custom-select-disabled custom-select-hide");
    $('#service-input-header').removeClass("custom-select-hide");
    $('#service-first-text').text('--Siyahıdan seçin...');

    $('#custom-select-3').addClass("custom-select-disabled");
    $('#service-sub-first-text').text('--Siyahıdan seçin...');
    $('#service-sub-list').html('');

    $('#order').addClass("order-input-disabled");
    $('#order').attr("disabled", "true");
    $('#order').val("");

    setMinMaxQuantity(0, 0);
    calculatePrice(serviceSubElement);
}

function clearData2(){
    $('#custom-select-2').addClass("custom-select-disabled custom-select-hide");
    $('#service-input-header').addClass("custom-select-hide");
    $('#service-first-text').text('--Siyahıdan seçin...');
    $('#service-list').html('');
    
    $('#order').addClass("order-input-disabled");
    $('#order').attr("disabled", "true");
    $('#order').val("");

    $('#custom-select-3').removeClass("custom-select-disabled custom-select-hide");
    $('#service-sub-first-text').text('--Siyahıdan seçin...');

    setMinMaxQuantity(0, 0);
    calculatePrice(serviceSubElement);
}

function clearData3(){
    $('#custom-select-2').removeClass("custom-select-hide");
    $('#service-input-header').removeClass("custom-select-hide");
    $('#custom-select-2').addClass("custom-select-disabled");
    $('#service-first-text').text('--Siyahıdan seçin...');
    $('#service-list').html('');

    $('#custom-select-3').addClass("custom-select-disabled");
    $('#service-sub-first-text').text('--Siyahıdan seçin...');
    $('#service-sub-list').html('');
    
    $('#order').addClass("order-input-disabled");
    $('#order').attr("disabled", "true");
    $('#order').val("");

    setMinMaxQuantity(0, 0);
    calculatePrice(serviceSubElement);
}

function clearData4(){
    $('#order').addClass("order-input-disabled");
    $('#order').attr("disabled", "true");
    $('#order').val("");

    $('#custom-select-3').removeClass("custom-select-disabled");
    $('#service-sub-first-text').text('--Siyahıdan seçin...');

    setMinMaxQuantity(0, 0);
    calculatePrice(serviceSubElement);
}

function clearData5(){
    $('#order').removeClass("order-input-disabled");
    $('#order').removeAttr("disabled", "true");
}

function clearData6(){
    $('#order').addClass("order-input-disabled");
    $('#order').attr("disabled", "true");
}

function openServiceElement(){
    $('#social-network-list').hide(30);
    $('#service-sub-list').hide(30);
    $('#service-list').toggle(30);
}

function selectToService(id){
    serviceElement = $('#' + id).text();
    $('#service-first-text').text(serviceElement);

    if(serviceElement == '--Siyahıdan seçin...'){
        clearData4();

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Abunə'){

        var serviceSubList = '';
        for(i=0; i<instagramSubscribeArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="instagramSubscribeElement'+i+'" onclick="selectToSubService(\'instagramSubscribeElement'+i+'\')">' + instagramSubscribeArray[i] + '</p>';
        }
        
        $('#service-sub-list').html(serviceSubList);
        clearData4();

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Like'){

        var serviceSubList = '';
        for(i=0; i<instagramLikeArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="instagramLikeElement'+i+'" onclick="selectToSubService(\'instagramLikeElement'+i+'\')">' + instagramLikeArray[i] + '</p>';
        }
 
        $('#service-sub-list').html(serviceSubList);
        clearData4();

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Şərh'){

        var serviceSubList = '';
        for(i=0; i<instagramCommentArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="instagramCommentElement'+i+'" onclick="selectToSubService(\'instagramCommentElement'+i+'\')">' + instagramCommentArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData4();

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Baxış'){

        var serviceSubList = '';
        for(i=0; i<instagramWatchArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="instagramWatchElement'+i+'" onclick="selectToSubService(\'instagramWatchElement'+i+'\')">' + instagramWatchArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData4();
      // ---------------------------------------------------------------------------
    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Digər'){

        var serviceSubList = '';
        for(i=0; i<instagramSaveArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="instagramSaveElement'+i+'" onclick="selectToSubService(\'instagramSaveElement'+i+'\')">' + instagramSaveArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData4();
        // ------------------------------------------------------------------------------
    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Abunə, Səhifə bəyənilməsi'){

        var serviceSubList = '';
        for(i=0; i<facebookSubscribeArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="facebookSubscribeElement'+i+'" onclick="selectToSubService(\'facebookSubscribeElement'+i+'\')">' + facebookSubscribeArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData4();

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Bəyənilmə'){

        var serviceSubList = '';
        for(i=0; i<facebookLikeArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="facebookLikeElement'+i+'" onclick="selectToSubService(\'facebookLikeElement'+i+'\')">' + facebookLikeArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData4();

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Canlı'){

        var serviceSubList = '';
        for(i=0; i<facebookLiveArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="facebookLiveElement'+i+'" onclick="selectToSubService(\'facebookLiveElement'+i+'\')">' + facebookLiveArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData4();

    } else if(sosialNetworkElement == 'Youtube' && serviceElement == 'Abunəlik, Like, Şərh'){

        var serviceSubList = '';
        for(i=0; i<youtubeSubscribeArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="youtubeSubscribeElement'+i+'" onclick="selectToSubService(\'youtubeSubscribeElement'+i+'\')">' + youtubeSubscribeArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData4();

    } else if(sosialNetworkElement == 'Youtube' && serviceElement == 'Digər'){

        var serviceSubList = '';
        for(i=0; i<youtubeOtherArray.length; i++){
            serviceSubList = serviceSubList + '<p class="service-sub-other-text" id="youtubeOtherElement'+i+'" onclick="selectToSubService(\'youtubeOtherElement'+i+'\')">' + youtubeOtherArray[i] + '</p>';
        }

        $('#service-sub-list').html(serviceSubList);
        clearData4();

    } else {
        clearData4();
    }
}

function openServiceSubElement(){
    $('#social-network-list').hide(30);
    $('#service-list').hide(30);
    $('#service-sub-list').toggle(30);
}

function selectToSubService(id){
    serviceSubElement = $('#' + id).text();
    $('#service-sub-first-text').text(serviceSubElement);

    if(serviceSubElement == '--Siyahıdan seçin...'){
        clearData6();
        $('#order').val("");

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Abunə' && serviceSubElement == 'Max 1k | Sürətli') {
        clearData5();
        setMinMaxQuantity(10, 1000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Abunə' && serviceSubElement == 'Max 5k | 0-60min') {
        clearData5();
        setMinMaxQuantity(100, 5000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Abunə' && serviceSubElement == 'Max 13k | Qarışıq istifadəçilər | 0-1 hours') {
        clearData5();
        setMinMaxQuantity(100, 13000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Abunə' && serviceSubElement == 'Auto | Max 70k | Qarışıq istifadəçilər | 5k/gün | 30 gün') {
        clearData5();
        setMinMaxQuantity(10, 100000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Like' && serviceSubElement == 'Max 1k | Sürətli çatdırılma') {
        clearData5();
        setMinMaxQuantity(50, 1000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Like' && serviceSubElement == 'Likes + Baxışlar | Şəkil və ya Video | Max 30k | 0-1 s | 80% bot Xarici 20% bot Türk') {
        clearData5();
        setMinMaxQuantity(20, 30000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Like' && serviceSubElement == 'Max 20k | 0/30 dəq | Real istifadəçilər') {
        clearData5();
        setMinMaxQuantity(50, 20000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Like' && serviceSubElement == 'Auto | Max 49k | Hər yeni post | Normal sürət') {
        clearData5();
        setMinMaxQuantity(50, 49000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Şərh' && serviceSubElement == 'Max 30k | 100% Türk') {
        clearData5();
        setMinMaxQuantity(10, 25000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Şərh' && serviceSubElement == 'TƏSDİQLƏNMİŞ hesablar | Qarışıq | 24 saat') {
        clearData5();
        setMinMaxQuantity(1, 10);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Şərh' && serviceSubElement == '10k+ istifadəçilər | 5 şərh | 1 saat') {
        clearData5();
        setMinMaxQuantity(5, 5);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Şərh' && serviceSubElement == 'TƏSDİQLƏNMİŞ hesablar | İstədiyin şərh | 24 saat') {
        clearData5();
        setMinMaxQuantity(1, 10);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Baxış' && serviceSubElement == 'Auto | Hər yeni post | Yalnız video') {
        clearData5();
        setMinMaxQuantity(250, 1000000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Baxış' && serviceSubElement == 'Story baxış | Yüksək keyfiyyət') {
        clearData5();
        setMinMaxQuantity(100, 10000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Baxış' && serviceSubElement == 'Video baxış | Max 500k') {
        clearData5();
        setMinMaxQuantity(1000, 500000);

    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Baxış' && serviceSubElement == 'IGTV baxışlar') {
        clearData5();
        setMinMaxQuantity(50, 10000000);
      
    } else if(sosialNetworkElement == 'Instagram' && serviceElement == 'Digər' && serviceSubElement == 'Yadda saxla') {
      clearData5();
      setMinMaxQuantity(500, 20000);

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Abunə, Səhifə bəyənilməsi' && serviceSubElement == 'Səhifə like-ları | Qarışıq | Sürətli') {
        clearData5();
        setMinMaxQuantity(20, 3000);

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Bəyənilmə' && serviceSubElement == 'Post Like-ları | Max 15k') {
        clearData5();
        setMinMaxQuantity(100, 15000);

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Bəyənilmə' && serviceSubElement == 'Post Like-ları | Max 10k') {
        clearData5();
        setMinMaxQuantity(20, 10000);

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Canlı' && serviceSubElement == 'Max 2k | Davamiyyət: 30 dəq') {
        clearData5();
        setMinMaxQuantity(20, 2000);

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Canlı' && serviceSubElement == 'Max 2k | Davamiyyət: 60 dəq') {
        clearData5();
        setMinMaxQuantity(20, 2000);

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Canlı' && serviceSubElement == 'Max 2k | Davamiyyət: 120 dəq') {
        clearData5();
        setMinMaxQuantity(20, 2000);

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Canlı' && serviceSubElement == 'Max 2k | Davamiyyət: 180 dəq') {
        clearData5();
        setMinMaxQuantity(20, 2000);

    } else if(sosialNetworkElement == 'Facebook' && serviceElement == 'Canlı' && serviceSubElement == 'Max 2k | Davamiyyət: 240 dəq') {
        clearData5();
        setMinMaxQuantity(20, 2000);

    } else if(sosialNetworkElement == 'Youtube' && serviceElement == 'Abunəlik, Like, Şərh' && serviceSubElement == 'Abunəlik | Qarışıq') {
        clearData5();
        setMinMaxQuantity(100, 500000);

    } else if(sosialNetworkElement == 'Youtube' && serviceElement == 'Abunəlik, Like, Şərh' && serviceSubElement == 'Video Like') {
        clearData5();
        setMinMaxQuantity(50, 5000);

    } else if(sosialNetworkElement == 'Youtube' && serviceElement == 'Abunəlik, Like, Şərh' && serviceSubElement == 'Video Dislikes') {
        clearData5();
        setMinMaxQuantity(100, 1000000);

    } else if(sosialNetworkElement == 'Youtube' && serviceElement == 'Abunəlik, Like, Şərh' && serviceSubElement == 'Şərh | Qarışıq') {
        clearData5();
        setMinMaxQuantity(10, 10000);

    } else if(sosialNetworkElement == 'Youtube' && serviceElement == 'Digər' && serviceSubElement == 'Canlı yayım baxışları | Qazanclı | Real | Sürətli') {
        clearData5();
        setMinMaxQuantity(1000, 100000);

    } else if(sosialNetworkElement == 'Youtube' && serviceElement == 'Digər' && serviceSubElement == 'Baxış sayları | Sürətli') {
        clearData5();
        setMinMaxQuantity(100, 500000);

    } else if(sosialNetworkElement == 'TikTok' && serviceSubElement == 'Like-lar | Max 7k | 150 like / gün') {
        clearData5();
        setMinMaxQuantity(100, 7000);

    } else if(sosialNetworkElement == 'TikTok' && serviceSubElement == 'Abunəlik | Qarışıq') {
        clearData5();
        setMinMaxQuantity(50, 20000);

    } else if(sosialNetworkElement == 'TikTok' && serviceSubElement == 'Baxışlar') {
        clearData5();
        setMinMaxQuantity(100, 100000000);

    } else if(sosialNetworkElement == 'Telegram' && serviceSubElement == 'Kanal istifadəçiləri | 25k / gün | Düşə bilər | Real') {
        clearData5();
        setMinMaxQuantity(100, 20000);

    } else if(sosialNetworkElement == 'Telegram' && serviceSubElement == 'Post baxışları | Sonuncu 1 post | 20k / gün') {
        clearData5();
        setMinMaxQuantity(100, 500000);

    } else if(sosialNetworkElement == 'Telegram' && serviceSubElement == 'Post baxışları | Sonuncu 5 post | 35k / gün') {
        clearData5();
        setMinMaxQuantity(100, 500000);

    } else if(sosialNetworkElement == 'Website' && serviceSubElement == 'Trafik | 10m') {
        clearData5();
        setMinMaxQuantity(100, 1000000);

    } else if(sosialNetworkElement == 'Website' && serviceSubElement == 'Facebook-dan trafik | 10m') {
        clearData5();
        setMinMaxQuantity(500, 1000000);

    } else if(sosialNetworkElement == 'Website' && serviceSubElement == 'Twitter-dan trafik | 10m') {
        clearData5();
        setMinMaxQuantity(500, 1000000);

    } else if(sosialNetworkElement == 'Website' && serviceSubElement == 'Instagram-dan trafik | 10m') {
        clearData5();
        setMinMaxQuantity(500, 1000000);

    } else if(sosialNetworkElement == 'Website' && serviceSubElement == 'Youtube-dan trafik | 10m') {
        clearData5();
        setMinMaxQuantity(500, 1000000);

    } else if(sosialNetworkElement == 'Website' && serviceSubElement == 'Google-dan trafik | 10m') {
        clearData5();
        setMinMaxQuantity(500, 1000000);
        
    }

    calculatePrice(serviceSubElement);
}

function setMinMaxQuantity(min, max){
    $('#min-text').text(min);
    $('#max-text').text(max);
}

function calculatePrice(serviceType){
    var price = 0;
    var order = 0;
    var orderText = $('#order').val();
    if(orderText != null && orderText != '' && $.isNumeric(orderText)){
        order = orderText;
    }
    
    if(serviceType == 'Max 1k | Sürətli'){
        price = order * 0.0036;

    } else if(serviceType == 'Max 5k | 0-60min'){
        price = order * 0.0061;

    } else if(serviceType == 'Max 13k | Qarışıq istifadəçilər | 0-1 hours'){
        price = order * 0.0055;

    } else if(serviceType == 'Auto | Max 70k | Qarışıq istifadəçilər | 5k/gün | 30 gün'){
        price = order * 0.0095;

    } else if(serviceType == 'Max 1k | Sürətli çatdırılma'){
        price = order * 0.0029;

    } else if(serviceType == 'Likes + Baxışlar | Şəkil və ya Video | Max 30k | 0-1 s | 80% bot Xarici 20% bot Türk'){
        price = order * 0.0035;

    } else if(serviceType == 'Max 20k | 0/30 dəq | Real istifadəçilər'){
        price = order * 0.0103;

    } else if(serviceType == 'Auto | Max 49k | Hər yeni post | Normal sürət'){
        price = order * 0.0042;

    } else if(serviceType == 'IGTV Like'){
        price = order * 0.0120;

    } else if(serviceType == 'Max 30k | 100% Türk'){
        price = order * 0.00496;

    } else if(serviceType == 'TƏSDİQLƏNMİŞ hesablar | Qarışıq | 24 saat'){
        price = order * 1.1320;

    } else if(serviceType == '10k+ istifadəçilər | 5 şərh | 1 saat'){
        price = order * 1.64;

    } else if(serviceType == 'TƏSDİQLƏNMİŞ hesablar | İstədiyin şərh | 24 saat'){
        price = order * 2.0376;

    } else if(serviceType == 'Auto | Hər yeni post | Yalnız video'){
        price = order * 0.00016;

    } else if(serviceType == 'Story baxış | Yüksək keyfiyyət'){
        price = order * 0.00044;

    } else if(serviceType == 'Video baxış | Max 500k'){
        price = order * 0.0006;

    } else if(serviceType == 'IGTV baxışlar'){
        price = order * 0.00018;

    } else if(serviceType == 'Yadda saxla'){
        price = order * 0.0015;
      
    } else if(serviceType == 'Abunəlik | Qarışıq'){
        price = order * 0.0020;

    } else if(serviceType == 'Video Like'){
        price = order * 0.0514;

    } else if(serviceType == 'Video Dislikes'){
        price = order * 0.0537;

    } else if(serviceType == 'Şərh | Qarışıq'){
        price = order * 0.3629;

    } else if(serviceType == 'Canlı yayım baxışları | Qazanclı | Real | Sürətli'){
        price = order * 0.0150;

    } else if(serviceType == 'Baxış sayları | Sürətli'){
        price = order * 0.00746;

    } else if(serviceType == 'Səhifə like-ları | Qarışıq | Sürətli'){
        price = order * 0.0100;

    } else if(serviceType == 'Post Like-ları | Max 15k'){
        price = order * 0.0112;

    } else if(serviceType == 'Post Like-ları | Max 10k'){
        price = order * 0.0147;

    } else if(serviceType == 'Max 2k | Davamiyyət: 30 dəq'){
        price = order * 0.1305;

    } else if(serviceType == 'Max 2k | Davamiyyət: 60 dəq'){
        price = order * 0.2610;

    } else if(serviceType == 'Max 2k | Davamiyyət: 120 dəq'){
        price = order * 0.5219;

    } else if(serviceType == 'Max 2k | Davamiyyət: 180 dəq'){
        price = order * 0.7829;

    } else if(serviceType == 'Max 2k | Davamiyyət: 240 dəq'){
        price = order * 1.0439;

    } else if(serviceType == 'Like-lar | Max 7k | 150 like / gün'){
        price = order * 0.0036;

    } else if(serviceType == 'Abunəlik | Qarışıq'){
        price = order * 0.0099;

    } else if(serviceType == 'Baxışlar'){
        price = order * 0.0001;

    } else if(serviceType == 'Kanal istifadəçiləri | 25k / gün | Düşə bilər | Real'){
        price = order * 0.0042;

    } else if(serviceType == 'Post baxışları | Sonuncu 1 post | 20k / gün'){
        price = order * 0.0002;

    } else if(serviceType == 'Post baxışları | Sonuncu 5 post | 35k / gün'){
        price = order * 0.0009;

    } else if(serviceType == 'Trafik | 10m'){
        price = order * 0.0033;

    } else if(serviceType == 'Facebook-dan trafik | 10m'){
        price = order * 0.0024;

    } else if(serviceType == 'Twitter-dan trafik | 10m'){
        price = order * 0.0024;

    } else if(serviceType == 'Instagram-dan trafik | 10m'){
        price = order * 0.0024;

    } else if(serviceType == 'Youtube-dan trafik | 10m'){
        price = order * 0.0024;

    } else if(serviceType == 'Google-dan trafik | 10m'){
        price = order * 0.0024;
    }

    $('#price-text').text(price.toFixed(1));
}

function calculatePriceFromImput(){
    calculatePrice(serviceSubElement);
}

function openMainPage(){
    window.location.href = '/';
}

function openInstagram(){
    window.open("https://instagram.com/follow.azsocial");
}

function openWhatsApp(){
    location.href = "https://wa.me/994506338010";
}

function showLangContent(){
    $('#lang').toggle(30);
}

function hideLangContent(){
    $('#lang').hide(30);
}

function openEn(){
    window.location.href = 'en/';
}

function openRu(){
    window.location.href = 'ru/';
}

var socialNetworkArray = [
                        "--Siyahıdan seçin...", 
                        "Instagram", 
                        "Facebook", 
                        "Youtube", 
                        "TikTok", 
                        "Telegram", 
                        "Website"
                        ];

var instagramServiceArray = [
                        "--Siyahıdan seçin...", 
                        "Abunə", 
                        "Like", 
                        "Şərh", 
                        "Baxış",
                        "Digər"
                    ];

var instagramSubscribeArray = [
                        "--Siyahıdan seçin...", 
                        "Max 1k | Sürətli", 
                        "Max 5k | 0-60min", 
                        "Max 13k | Qarışıq istifadəçilər | 0-1 hours", 
                        "Auto | Max 70k | Qarışıq istifadəçilər | 5k/gün | 30 gün"
                    ];

var instagramLikeArray = [
                        "--Siyahıdan seçin...", 
                        "Max 1k | Sürətli çatdırılma", 
                        "Likes + Baxışlar | Şəkil və ya Video | Max 30k | 0-1 s | 80% bot Xarici 20% bot Türk", 
                        "Max 20k | 0/30 dəq | Real istifadəçilər", 
                        "Auto | Max 49k | Hər yeni post | Normal sürət",
                        "IGTV Like"
                    ];

var instagramCommentArray = [
                        "--Siyahıdan seçin...", 
                        "Max 30k | 100% Türk", 
                        "TƏSDİQLƏNMİŞ hesablar | Qarışıq | 24 saat", 
                        "10k+ istifadəçilər | 5 şərh | 1 saat", 
                        "TƏSDİQLƏNMİŞ hesablar | İstədiyin şərh | 24 saat"
                    ];

var instagramWatchArray = [
                        "--Siyahıdan seçin...", 
                        "Auto | Hər yeni post | Yalnız video", 
                        "Story baxış | Yüksək keyfiyyət", 
                        "Video baxış | Max 500k", 
                        "IGTV baxışlar"
                    ];

var instagramSaveArray = [
                        "--Siyahıdan seçin...", 
                        "Yadda saxla"
                    ];

var facebookServiceArray = [
                        "--Siyahıdan seçin...", 
                        "Abunə, Səhifə bəyənilməsi", 
                        "Bəyənilmə", 
                        "Canlı"
                    ];

var facebookSubscribeArray = [
                        "--Siyahıdan seçin...", 
                        "Səhifə like-ları | Qarışıq | Sürətli"
                    ];

var facebookLikeArray = [
                        "--Siyahıdan seçin...", 
                        "Post Like-ları | Max 15k",
                        "Post Like-ları | Max 10k"
                    ];

var facebookLiveArray = [
                        "--Siyahıdan seçin...", 
                        "Max 2k | Davamiyyət: 30 dəq",
                        "Max 2k | Davamiyyət: 60 dəq",
                        "Max 2k | Davamiyyət: 120 dəq",
                        "Max 2k | Davamiyyət: 180 dəq",
                        "Max 2k | Davamiyyət: 240 dəq"
                    ];

var youtubeServiceArray = [
                        "--Siyahıdan seçin...", 
                        "Abunəlik, Like, Şərh", 
                        "Digər"
                    ];

var youtubeSubscribeArray = [
                        "--Siyahıdan seçin...", 
                        "Abunəlik | Qarışıq", 
                        "Video Like",
                        "Video Dislikes",
                        "Şərh | Qarışıq"
                    ];

var youtubeOtherArray = [
                        "--Siyahıdan seçin...", 
                        "Canlı yayım baxışları | Qazanclı | Real | Sürətli", 
                        "Baxış sayları | Sürətli"
                    ];

var tiktokArray = [
                        "--Siyahıdan seçin...", 
                        "Like-lar | Max 7k | 150 like / gün", 
                        "Abunəlik | Qarışıq",
                        "Baxışlar"
                    ];

var telegramArray = [
                        "--Siyahıdan seçin...", 
                        "Kanal istifadəçiləri | 25k / gün | Düşə bilər | Real", 
                        "Post baxışları | Sonuncu 1 post | 20k / gün",
                        "Post baxışları | Sonuncu 5 post | 35k / gün"
                    ];

var websiteArray = [
                        "--Siyahıdan seçin...", 
                        "Trafik | 10m", 
                        "Facebook-dan trafik | 10m",
                        "Twitter-dan trafik | 10m",
                        "Instagram-dan trafik | 10m",
                        "Youtube-dan trafik | 10m",
                        "Google-dan trafik | 10m"
                    ];
