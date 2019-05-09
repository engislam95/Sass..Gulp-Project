$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
      
        1000:{
            items:3,
            nav:true
        }
    }
});




$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})



var arrlang={
    "en":{
        "home":"HOME",
        "about":"ABOUT",
        "service":"SERVICES",
        "projects":"PROJECTS",
        "blog":"BLOG",
        "contact":"CONTACT US",
        "main-header":"We care about your business ",
        "main-para":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum consectetur egestas. Nulla nisi nisi, rutrum vitae nunc non, bibendum euismod nulla ",
        "main-btn":"ABOUT US",

        "about-1":"Nibh Ridiculus",
        "about-2":"Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
        "about-3":"Grammatical Del",
        "about-4":"Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
        "about-5":"Europan lingues",
        "about-6":"Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",

        "about-7":"ipsum quia",
        "about-8":"Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
        "about-9":"aliquam quaerat",
        "about-10":"Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
        "about-11":"dolorem eum",
        "about-12":"Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.",
        "recent-proj":"RECENT PROJECTS",
     
        "test-1":"456",
        "test-2":"HAPPY CLIENTS",
        "test-3":"56",
        "test-4":"PROJECTS",
        "test-5":"456",
        "stest-6":"HAPPY CLIENTS",
        "test-7":"456",
        "test-8":"HAPPY CLIENTS",

        "from-blog":"FROM BLOG",
        "card-1":"23 oct 2015",
        "card-2":"Dummy text is text that is used in theublish industry or by web designers to occupy the space which will later be .",
        "card-3":"Read More",
        
        "go":"GO AHEAD AND FIND OUT HOW WE CAN HELP YOU!",
        "get":"GET IN TOUCH",
        
        "foot-1":"ABOUT US",
        "foot-2":"Li Europan lingues es membres del sam",
        "foot-3":"familie. Lor separat existentie es un myth. Por",
        "foot-4":"scientie, musica, sport etc, litot Europa usa li",
        "foot-5":"sam vocabular. Li lingues differe solmen",
        "foot-6":"Li Europan lingues es membres del sam",

        "foot-7":"RELATED LINKS",
        "foot-8":"official site",
        "foot-9":"CreativeMarket Profile",
        "foot-10":"Materialzer page on CM",
        "foot-11":"Electronic WP Theme",
        "foot-12":"Was favvvv",

        "foot-13":"NEWS $ MEDIA",
        "foot-14":"Events",
        "foot-15":"News and Press Release",
        "foot-16":"Interview",
        "foot-17":"Subsidiaries Media Contacts",
        "foot-18":"Media Kit",

        "foot-19":"GET IN TOUCH",
        "foot-20":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "foot-21":"84 Street, City, State 24813",
        "foot-22":" +00 (123) 456 78 90",
        "foot-23":"info@yourcompany.com"
      
    },
    "ar":{
        "home":"الرأيسية",
        "about":"ماذا عنا",
        "service":"الخدمات",
        "projects":"المشاريع",
        "blog":"البلوج",
        "contact":"اتصل بنا",
        "main-header":"نحن حريصون على  عملك ",
        "main-para":"نحن نوفر لك  كل الخدمات والمميزات التى تحتاجها ليكون لديك عمل ناجح ",
        "main-btn":"معومات تهمك",

         
        "about-1":"خدمة المقالات العادية",
        "about-2":"كتابة المقالات المتميزة أصبحت أكثر طلبًا فى الآونة الآخيرة وأكثر تطورًا وافضل انواع المحتوى هى التى تكون مفيده وتلبي ما يحتاجه الزائر",
        "about-3":"خدمة كتابة المقالات المتخصصة",
        "about-4":"كتابة المقالات المتميزة أصبحت أكثر طلبًا فى الآونة الآخيرة وأكثر تطورًا وافضل انواع المحتوى هى التى تكون مفيده وتلبي ما يحتاجه الزائر",
        "about-5":"خدمة كتابة سكربت للفيديوهات",
        "about-6":"كتابة المقالات المتميزة أصبحت أكثر طلبًا فى الآونة الآخيرة وأكثر تطورًا وافضل انواع المحتوى هى التى تكون مفيده وتلبي ما يحتاجه الزائر",

        "about-7":"خدمة كتابة وصف للتطبيقات",
        "about-8":"كتابة المقالات المتميزة أصبحت أكثر طلبًا فى الآونة الآخيرة وأكثر تطورًا وافضل انواع المحتوى هى التى تكون مفيده وتلبي ما يحتاجه الزائر",
        "about-9":"خدمة كتابة المراجعة للمنتجات",
        "about-10":"كتابة المقالات المتميزة أصبحت أكثر طلبًا فى الآونة الآخيرة وأكثر تطورًا وافضل انواع المحتوى هى التى تكون مفيده وتلبي ما يحتاجه الزائر",
        "about-11":"خدمة صياغة المقالات",
        "about-12":"كتابة المقالات المتميزة أصبحت أكثر طلبًا فى الآونة الآخيرة وأكثر تطورًا وافضل انواع المحتوى هى التى تكون مفيده وتلبي ما يحتاجه الزائر",

        "recent-proj":"أخر المشاريع ",
       
        "test-1":"٤٥٦",
        "test-2":"الزبائن السعداء",
        "test-3":"٥٦",
        "test-4":"المشاريع",
        "test-5":"٤٥٦",
        "test-6":"الزبائن السعداء",
        "test-7":"٤٥٦",
        "test-8":"الزبائن السعداء",
        "from-blog":"من المحتوى ",
        "card-1":"23 اكتوبر 2015  ",
        "card-2":"لموقع ليس فقط يوفر لك كتابة المقالات الممّيزة بل أيضا ستحصل على عمل ممّيز وإبداعي ",
        "card-3":"أقرا اكثر ",

        "go":"أنطلق لتكتشف كيف يمكننا مساعدتك اكثر ",
        "get":"ابقى على تواصل  ",


        "foot-1":"ماذا عنا ",
        "foot-2":"موقع بلانز للمحتوى العربي",
        "foot-3":"هو من أول وأهم المواقع التى تخصصت فى المحتوى",
        "foot-4":"يقدم العديد من الخدمات التى تساعد على إثراء المحتوى",
        "foot-5":"فيقدم خدمة الكتابة المتخصصة في كافة المجالات",
        "foot-6":"لكتابة التقنية، التكنولوجية، الاقتصادية ",

        "foot-7":"الروابط ",
        "foot-8":"الموقع الرسمى ",
        "foot-9":"البروفايل ",
        "foot-10":"صفحة الماتيريال ",
        "foot-11":"ثيمات للالكترونيات ",
        "foot-12":"المحتوى العربى ",

        "foot-13":"الاخبار و الميديا ",
        "foot-14":"الاحداث ",
        "foot-15":"الاخبار المتعلقه بالساحه ",
        "foot-16":"الماقابلات ",
        "foot-17":"الاشتراكات والاتصالات",
        "foot-18":"شئون الميديا",

        "foot-19":"تواصل معنا ",
        "foot-20":"موقع بلانز للمحتوى العربي وهو من أول وأهم المواقع التى تخصصت فى المحتوى العربى ",
        "foot-21":"84 شارع, مدينة, ولاية 24813",
        "foot-22":" +00 (123) 456 78 90",
        "foot-23":"info@yourcompany.com"

    }

};
// $('body').load(function(){
   
// })

$('.nav-link').click(function(e){
    $(e.target).css("color","blue")
    $(e.target).addClass("activee")
  
})


$(function(){
   

    $('.translate').click(function(){
        var lang=$(this).attr("id");
        localStorage.setItem("langu",lang);
        console.log(localStorage.getItem("langu"));
        $(".lang").each(function(index,element){
            $(this).text(arrlang[lang][$(this).attr('key')]);
        })
        if(lang=="ar")
        {
            $("body").css("direction","rtl") ;
            $(".lang").css("direction","rtl") ;
            $("body").css("text-align","right ") ;
            $(".category i").removeClass("fas fa-arrow-right").addClass("fas fa-arrow-left ml-2")
            $(".tags h5").removeClass("text-right").addClass("text-left")
         
            // $(".contact button").removeClass("mr-2").addClass("ml-2") ;
            
        }
        else{
            $("body").css("direction","ltr") ;
            $(".lang").css("direction","ltr") ;
            $("body").css("text-align","left") ;
            $(".category i").removeClass("fas fa-arrow-left").addClass("fas fa-arrow-right")
        }
    })

    var x=localStorage.getItem("langu");
    if(x=="ar"){
        $("body").css("direction","rtl") ;
        $("body").css("text-align","right ") ;
      
        $(".category i").removeClass("fas fa-arrow-right").addClass("fas fa-arrow-left ml-2")
        $(".lang").each(function(index,element){
        $(this).text(arrlang[x][$(this).attr('key')]);
        })}
    else{
        $("body").css("direction","ltr") ;
        $("body").css("text-align","left") ;
        $(".category i").removeClass("fas fa-arrow-left").addClass("fas fa-arrow-right")
        $(".lang").each(function(index,element){
        $(this).text(arrlang[x][$(this).attr('key')]);
    })}

    
});












