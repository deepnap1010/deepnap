import React, { useState } from 'react'

export default function List() {

  const[show,setShow]=useState(false);
  return (
    <>
    <div className='container ' style={{textAlign:"center", }}>
    <select class="form-select" aria-label="Default select example" onChange={(e)=>{
    e.preventDefault();
    if(e.target.value === "1"){
      var link=  document.getElementById("mylink");
      link.href = "https://solene.qodeinteractive.com/horizontal-gallery/";
      var link=  document.getElementById("mylink2");
      link.href = "https://solene.qodeinteractive.com/wedding-photography/";
    } else if(e.target.value === "2"){
      var link=  document.getElementById("mylink");
      link.href = "https://groca.myshopify.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://drfurithemes.com/farmart/home-supermarket-full-width/?home_style=4";
    }
    else if(e.target.value === "3"){
      var link=  document.getElementById("mylink");
      link.href = "https://wpresidence.net/";
      var link=  document.getElementById("mylink2");
      link.href = "https://demo2.myhometheme.net/";
    }
    else if(e.target.value === "4"){
      var link=  document.getElementById("mylink");
      link.href = "https://curly.qodeinteractive.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://curly.qodeinteractive.com/vertical-showcase/";
    }
    else if(e.target.value === "5"){
      var link=  document.getElementById("mylink");
      link.href = "https://themes.vamtam.com/?theme=auto&n=1";
      var link=  document.getElementById("mylink2");
      link.href = "https://themes.vamtam.com/?theme=macchina&n=1";
    }
    else if(e.target.value === "6"){
      var link=  document.getElementById("mylink");
      link.href = "https://bambino.bold-themes-cdn.com/demo-01/";
      var link=  document.getElementById("mylink2");
      link.href = "https://demo.arrowtheme.com/aki/home-4";
    }
    else if(e.target.value === "7"){
      var link=  document.getElementById("mylink");
      link.href = "https://templates.envytheme.com/luvion/rtl/index.html";
      var link=  document.getElementById("mylink2");
      link.href = "https://themes.envytheme.com/tryo/home-seven/";
    }
    else if(e.target.value === "8"){
      var link=  document.getElementById("mylink");
      link.href = "https://alloggio.qodeinteractive.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://augustine.qodeinteractive.com/";
    }
    else if(e.target.value === "9"){
      var link=  document.getElementById("mylink");
      link.href = "https://bugspatrol.ancorathemes.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://bugster.themerex.net/";
    }
    else if(e.target.value === "10"){
      var link=  document.getElementById("mylink");
      link.href = "https://demo.goodlayers.com/financity/";
      var link=  document.getElementById("mylink2");
      link.href = "https://finance.bold-themes.com/main-demo/";
    }
    else if(e.target.value === "11"){
      var link=  document.getElementById("mylink");
      link.href = "https://finance.bold-themes.com/main-demo/landing-page/tax-consultants/";
      var link=  document.getElementById("mylink2");
      link.href = "https://investex.ancorathemes.com/";
    }
    else if(e.target.value === "12"){
      var link=  document.getElementById("mylink");
      link.href = "https://demo.casethemes.net/alico/home-7-one-page/";
      var link=  document.getElementById("mylink2");
      link.href = "https://demo.casethemes.net/alico/home-5-one-page/";
    }
    else if(e.target.value === "13"){
      var link=  document.getElementById("mylink");
      link.href = "https://demo.casethemes.net/itfirm/";
      var link=  document.getElementById("mylink2");
      link.href = "https://demo.casethemes.net/itfirm/home-3/";
    }
    else if(e.target.value === "14"){
      var link=  document.getElementById("mylink");
      link.href = "https://homeroofer.ancorathemes.com/#";
      var link=  document.getElementById("mylink2");
      link.href = "http://ftpdemo.com/nasim/home-page-01/";
    }
    else if(e.target.value === "15"){
      var link=  document.getElementById("mylink");
      link.href = "https://quanticalabs.com/wp_themes/cleanmate/";
      var link=  document.getElementById("mylink2");
      link.href = "https://dtweclean.wpengine.com/";
    }
    else if(e.target.value === "16"){
      var link=  document.getElementById("mylink");
      link.href = "https://smartdata.tonytemplates.com/electrician-v2/";
      var link=  document.getElementById("mylink2");
      link.href = "https://shtheme.com/demosd/electrician/";
    }
    else if(e.target.value === "17"){
      var link=  document.getElementById("mylink");
      link.href = "https://plumbit.strongholdthemes.com/demos/demo1/";
      var link=  document.getElementById("mylink2");
      link.href = "https://plumbing-repair.themerex.net/";
    }
    else if(e.target.value === "18"){
      var link=  document.getElementById("mylink");
      link.href = "https://fastgear.themerex.net/";
      var link=  document.getElementById("mylink2");
      link.href = "https://servicemaster.qodeinteractive.com/";
    }
    else if(e.target.value === "19"){
      var link=  document.getElementById("mylink");
      link.href = "http://subsolardesigns.com/odrin/";
      var link=  document.getElementById("mylink2");
      link.href = "https://writer.ancorathemes.com/";
    }
    else if(e.target.value === "20"){
      var link=  document.getElementById("mylink");
      link.href = "https://savory.qodeinteractive.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://demos.hogash.com/dannys/";
    }
    else if(e.target.value === "21"){
      var link=  document.getElementById("mylink");
      link.href = "https://cheerup.theme-sphere.com/food/";
      var link=  document.getElementById("mylink2");
      link.href = "https://superfood.qodeinteractive.com/restaurant-home/";
    }
    else if(e.target.value === "22"){
      var link=  document.getElementById("mylink");
      link.href = "https://preview.milingona.co/themes/bakery/landing/";
      var link=  document.getElementById("mylink2");
      link.href = "https://panaderia.qodeinteractive.com/";
    }
    else if(e.target.value === "23"){
      var link=  document.getElementById("mylink");
      link.href = "https://aperitif.qodeinteractive.com/vineyard-home/";
      var link=  document.getElementById("mylink2");
      link.href = "https://okthemes.com/villenoirdark/";
    }
    else if(e.target.value === "24"){
      var link=  document.getElementById("mylink");
      link.href = "https://royalevent.themerex.net/";
      var link=  document.getElementById("mylink2");
      link.href = "https://alanzo.ancorathemes.com/#";
    }
    else if(e.target.value === "25"){
      var link=  document.getElementById("mylink");
      link.href = "https://glamchic.ancorathemes.com/#";
      var link=  document.getElementById("mylink2");
      link.href = "https://allure.qodeinteractive.com/chic/?_ga=2.91831898.1951780957.1673344587-2070192549.1673344586";
    }
    else if(e.target.value === "26"){
      var link=  document.getElementById("mylink");
      link.href = "https://touchup.qodeinteractive.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://dtbeaux.wpengine.com/";
    }
    else if(e.target.value === "27"){
      var link=  document.getElementById("mylink");
      link.href = "https://aviana.qodeinteractive.com/spa-resort/";
      var link=  document.getElementById("mylink2");
      link.href = "https://chea.qodeinteractive.com/";
    }
    else if(e.target.value === "28"){
      var link=  document.getElementById("mylink");
      link.href = "https://thermen.qreativethemes.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://jacqueline.themerex.net/";
    }
    else if(e.target.value === "29"){
      var link=  document.getElementById("mylink");
      link.href = "https://cliniq.bold-themes.com/classic/";
      var link=  document.getElementById("mylink2");
      link.href = "https://dtsoulmedic.wpengine.com/";
    }
    else if(e.target.value === "30"){
      var link=  document.getElementById("mylink");
      link.href = "https://shtheme.org/demosd/mecare/";
      var link=  document.getElementById("mylink2");
      link.href = "http://demo.joomlabuff.com/hospital/";
    }
    else if(e.target.value === "31"){
      var link=  document.getElementById("mylink");
      link.href = "https://denticare.bold-themes.com/everest/";
      var link=  document.getElementById("mylink2");
      link.href = "https://dental-clinic.cmsmasters.net/";
    }
    else if(e.target.value === "32"){
      var link=  document.getElementById("mylink");
      link.href = "https://clinika.modeltheme.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://medical-clinic.cmsmasters.net/";
    }
    else if(e.target.value === "33"){
      var link=  document.getElementById("mylink");
      link.href = "https://cliniq.bold-themes.com/classic/";
      var link=  document.getElementById("mylink2");
      link.href = "https://medeus.themerex.net/";
    }
    else if(e.target.value === "34"){
      var link=  document.getElementById("mylink");
      link.href = "https://fitnesszonedev.wpengine.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://themes.vamtam.com/?theme=f7&n=1";
    }
    else if(e.target.value === "35"){
      var link=  document.getElementById("mylink");
      link.href = "https://kriyawp.wpengine.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://anahata.qodeinteractive.com/";
    }
    else if(e.target.value === "36"){
      var link=  document.getElementById("mylink");
      link.href = "https://travelerwp.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://wanderland.qodeinteractive.com/";
    }
    else if(e.target.value === "37"){
      var link=  document.getElementById("mylink");
      link.href = "     ";
      var link=  document.getElementById("mylink2");
      link.href = "    ";
    }
    else if(e.target.value === "38"){
      var link=  document.getElementById("mylink");
      link.href = "https://demo2.pavothemes.com/bookory/";
      var link=  document.getElementById("mylink2");
      link.href = "http://wp.acmeedesign.com/bookstore/";
    }
    else if(e.target.value === "39"){
      var link=  document.getElementById("mylink");
      link.href = "https://eatsy.bold-themes.com/burger/";
      var link=  document.getElementById("mylink2");
      link.href = "https://eatsy.bold-themes.com/burger/home/home-02/";
    }
    else if(e.target.value === "40"){
      var link=  document.getElementById("mylink");
      link.href = "https://sweettooth.qodeinteractive.com/cupcake/";
      var link=  document.getElementById("mylink2");
      link.href = "https://bellaria.cwsthemes.com/";
    }
    else if(e.target.value === "41"){
      var link=  document.getElementById("mylink");
      link.href = "https://satine.qodeinteractive.com/";
      var link=  document.getElementById("mylink2");
      link.href = "https://demo.bestprestashoptheme.com/orient/en/?home=home_1";
    }
    else if(e.target.value === "42"){
      var link=  document.getElementById("mylink");
      link.href = "https://demo.posthemes.com/pos_corano/layout3/en/";
      var link=  document.getElementById("mylink2");
      link.href = "https://jewelry-demo.mybigcommerce.com/";
    }
    else if(e.target.value === "43"){var link=  document.getElementById("mylink");link.href = "https://nou-shoes.myshopify.com/?fts=0";var link=  document.getElementById("mylink2");link.href = "https://james-1.myshopify.com/";}
else if(e.target.value === "44"){var link=  document.getElementById("mylink");link.href = "https://umea.qodeinteractive.com/";var link=  document.getElementById("mylink2");link.href = "https://tobel.qodeinteractive.com/";}
else if(e.target.value === "45"){var link=  document.getElementById("mylink");link.href = "https://grandcarrentalv1.themegoods.com/";var link=  document.getElementById("mylink2");link.href = "https://rentacar.modeltheme.com/";}
else if(e.target.value === "46"){var link=  document.getElementById("mylink");link.href = "https://royalevent.themerex.net/";var link=  document.getElementById("mylink2");link.href = "https://royalevent.themerex.net/home-video/";}
else if(e.target.value === "47"){var link=  document.getElementById("mylink");link.href = "https://farmacie.modeltheme.com/";var link=  document.getElementById("mylink2");link.href = "https://farmacie.modeltheme.com/video-home/";}
else if(e.target.value === "48"){var link=  document.getElementById("mylink");link.href = "https://themes.vamtam.com/?theme=konstruktion&n=1";var link=  document.getElementById("mylink2");link.href = "http://anpsthemes.com/constructo-new-demos/3/";}
else if(e.target.value === "49"){var link=  document.getElementById("mylink");link.href = "https://fastgear.themerex.net/";var link=  document.getElementById("mylink2");link.href = "http://sbtechnosoft.com/transcrew/index.html";}
else if(e.target.value === "50"){var link=  document.getElementById("mylink");link.href = "https://demo.xpeedstudio.com/marketov2/";var link=  document.getElementById("mylink2");link.href = "https://demo.xpeedstudio.com/marketov2/grocery/";}
else if(e.target.value === "51"){var link=  document.getElementById("mylink");link.href = "https://dtdance.wpengine.com/";var link=  document.getElementById("mylink2");link.href = "https://n.foxdsgn.com/pointe/";}
else if(e.target.value === "52"){var link=  document.getElementById("mylink");link.href = "https://medicare.bold-themes.com/cardiology/";var link=  document.getElementById("mylink2");link.href = "https://asclepius.ancorathemes.com/pharmacy/";}
else if(e.target.value === "53"){var link=  document.getElementById("mylink");link.href = "https://masterstudy.stylemixthemes.com/dark-lms/";var link=  document.getElementById("mylink2");link.href = "https://masterstudy.stylemixthemes.com/tech/";}
else if(e.target.value === "54"){var link=  document.getElementById("mylink");link.href = "https://webmarce.com/html/autotowing/index.html";var link=  document.getElementById("mylink2");link.href = "http://smartdemowp.com/firbrigs/";}
else if(e.target.value === "55"){var link=  document.getElementById("mylink");link.href = "http://exprostudio.com/wordpress/event-organizer/home-2/";var link=  document.getElementById("mylink2");link.href = "http://exprostudio.com/wordpress/event-organizer/home-4/";}
else if(e.target.value === "56"){var link=  document.getElementById("mylink");link.href = "https://fitnesszonedev.wpengine.com/";var link=  document.getElementById("mylink2");link.href = "https://f7.vamtam.com/";}
else if(e.target.value === "57"){var link=  document.getElementById("mylink");link.href = "https://anahata.qodeinteractive.com/yoga-retreat/";var link=  document.getElementById("mylink2");link.href = "https://anahata.qodeinteractive.com/coming-soon/";}
else if(e.target.value === "58"){var link=  document.getElementById("mylink");link.href = "https://flowers-boutique.ancorathemes.com/";var link=  document.getElementById("mylink2");link.href = "https://roisin.qodeinteractive.com/";}
else if(e.target.value === "59"){var link=  document.getElementById("mylink");link.href = "https://apollotran.com/demo/at_auros/en/home-1.html";var link=  document.getElementById("mylink2");link.href = "https://apollotran.com/demo/at_auros/en/home-13.html";}
else if(e.target.value === "60"){var link=  document.getElementById("mylink");link.href = "https://prohauz.bold-themes.com/air-condition/";var link=  document.getElementById("mylink2");link.href = "https://prohauz.bold-themes.com/plumbing/";}
else if(e.target.value === "61"){var link=  document.getElementById("mylink");link.href = "https://dtsoulmedic.wpengine.com/";var link=  document.getElementById("mylink2");link.href = "https://health.templines.info/";}
else if(e.target.value === "62"){var link=  document.getElementById("mylink");link.href = "https://smartclean.ancorathemes.com/#";var link=  document.getElementById("mylink2");link.href = "https://quanticalabs.com/wp_themes/cleanmate/";}
else if(e.target.value === "63"){var link=  document.getElementById("mylink");link.href = "https://industrialist.qodeinteractive.com/";var link=  document.getElementById("mylink2");link.href = "https://industrialist.qodeinteractive.com/product-showcase/";}
else if(e.target.value === "64"){var link=  document.getElementById("mylink");link.href = "https://demo.themewinter.com/wp/instive/home-2/";var link=  document.getElementById("mylink2");link.href = "https://demo.themewinter.com/wp/instive/home-6/";}
else if(e.target.value === "65"){var link=  document.getElementById("mylink");link.href = "https://emaurri.qodeinteractive.com/";var link=  document.getElementById("mylink2");link.href = "https://emaurri.qodeinteractive.com/interactive-project-rows/";}
else if(e.target.value === "66"){var link=  document.getElementById("mylink");link.href = "https://themes.webdevia.com/voip-wordpress-theme/home-two/";var link=  document.getElementById("mylink2");link.href = "https://themes.webdevia.com/voip-wordpress-theme/";}
else if(e.target.value === "67"){var link=  document.getElementById("mylink");link.href = "https://netfx.jwsuperthemes.com/";var link=  document.getElementById("mylink2");link.href = "https://maxinet.themerex.net/elementor-home-2/";}
else if(e.target.value === "68"){var link=  document.getElementById("mylink");link.href = "https://careerfy.net/demo/";var link=  document.getElementById("mylink2");link.href = "https://careerfy.net/jobpoint/";}
else if(e.target.value === "69"){var link=  document.getElementById("mylink");link.href = "http://themetechmount.net/opencart/jwellix/";var link=  document.getElementById("mylink2");link.href = "http://themetechmount.net/opencart/jwellix-layout3/";}
else if(e.target.value === "70"){var link=  document.getElementById("mylink");link.href = "https://novalab.bold-themes.com/nova-a/";var link=  document.getElementById("mylink2");link.href = "https://novalab.bold-themes.com/nova-b/";}
else if(e.target.value === "71"){var link=  document.getElementById("mylink");link.href = "https://lingvico.themerex.net/";var link=  document.getElementById("mylink2");link.href = "https://language-center.ancorathemes.com/";}
else if(e.target.value === "72"){var link=  document.getElementById("mylink");link.href = "https://creditcard.axiomthemes.com/#";var link=  document.getElementById("mylink2");link.href = "https://webdevcode.com/wp/pylon/live/";}
else if(e.target.value === "73"){var link=  document.getElementById("mylink");link.href = "https://onelifewp.wpengine.com/";var link=  document.getElementById("mylink2");link.href = "https://mediclinic.qodeinteractive.com/";}
else if(e.target.value === "74"){var link=  document.getElementById("mylink");link.href = "https://kitchen.victhemes.com/";var link=  document.getElementById("mylink2");link.href = "https://kitgreen.jwsuperthemes.com/";}
else if(e.target.value === "75"){var link=  document.getElementById("mylink");link.href = "https://moversco-demo.pbminfotech.com/moversco-intro/";var link=  document.getElementById("mylink2");link.href = "http://sbtechnosoft.com/shifty/index.html";}
else if(e.target.value === "76"){var link=  document.getElementById("mylink");link.href = "https://heartstar.axiomthemes.com/#";var link=  document.getElementById("mylink2");link.href = "https://amigos.cmsmasters.net/";}
else if(e.target.value === "77"){var link=  document.getElementById("mylink");link.href = "https://live.21lab.co/nanocare/";var link=  document.getElementById("mylink2");link.href = "https://dtbeaux.wpengine.com/";}
else if(e.target.value === "78"){var link=  document.getElementById("mylink");link.href = "https://demo2.pavothemes.com/bookory/";var link=  document.getElementById("mylink2");link.href = "https://demo2.pavothemes.com/bookory/";}
else if(e.target.value === "79"){var link=  document.getElementById("mylink");link.href = "https://kodesolution.com/html/2016/epetcare-html/demo/index-sp-layout1.html";var link=  document.getElementById("mylink2");link.href = "https://kodesolution.com/html/2016/epetcare-html/demo/index-mp-layout1.html";}
else if(e.target.value === "80"){var link=  document.getElementById("mylink");link.href = "https://velikorodnov.com/wordpress/superowly/";var link=  document.getElementById("mylink2");link.href = "https://velikorodnov.com/wordpress/superowly/home-2/";}
else if(e.target.value === "81"){var link=  document.getElementById("mylink");link.href = "https://smartdata.tonytemplates.com/computer-repairs/";var link=  document.getElementById("mylink2");link.href = "https://smartdata.tonytemplates.com/computer-repairs/demo3/";}
else if(e.target.value === "82"){var link=  document.getElementById("mylink");link.href = "https://preview.codeless.co/picante/pizza/";var link=  document.getElementById("mylink2");link.href = "https://preview.codeless.co/picante/default/?page_id=584";}
else if(e.target.value === "83"){var link=  document.getElementById("mylink");link.href = "https://raistheme.com/html/secrius/secrius/index-6.html";var link=  document.getElementById("mylink2");link.href = "https://raistheme.com/html/secrius/secrius/index-5.html";}
else if(e.target.value === "84"){var link=  document.getElementById("mylink");link.href = "https://trophy.qodeinteractive.com/shop-home/";var link=  document.getElementById("mylink2");link.href = "https://trophy.qodeinteractive.com/soccer-coach/";}
else if(e.target.value === "85"){var link=  document.getElementById("mylink");link.href = "https://prestashop.eoscosmetic.com/at_vega_store/en/home-1.html";var link=  document.getElementById("mylink2");link.href = "https://prestashop.eoscosmetic.com/at_vega_store/en/home-2.html";}
else if(e.target.value === "86"){var link=  document.getElementById("mylink");link.href = "https://eduma.thimpress.com/demo-main/";var link=  document.getElementById("mylink2");link.href = "https://eduma.thimpress.com/demo-university/";}
else if(e.target.value === "87"){var link=  document.getElementById("mylink");link.href = "http://anpsthemes.com/transport-new-demos/4/";var link=  document.getElementById("mylink2");link.href = "http://anpsthemes.com/transport-new-demos/2/";}


















  }}>
    <option selected >Open this select menu</option>
    <option value="1">Wedding</option>
    <option value="2">Groocery Store</option>
    <option value="3">Real Estate</option>
    <option value="4">Saloon</option>
    <option value="5">Auto care</option>
 <option value="6">Baby Care</option>
 <option value="7">Bills & Recharge</option>
 <option value="8">Book Hotel</option>
 <option value="9">Pest Control</option>
 <option value="10">Finance</option>
 <option value="11">Accounting</option>
 <option value="12">Insurance</option>
 <option value="13">Service</option>
 <option value="14">Roofing</option>
 <option value="15">Cleaning</option>
 <option value="16">Electrician</option>
 <option value="17">Plumbing</option>
 <option value="18">Courier</option>
 <option value="19">Author & Writer</option>
 <option value="20">Restaurant</option>
 <option value="21">Food</option>
 <option value="22">Cafe & Bakery</option>
 <option value="23">Wine & Winery</option>
 <option value="24">Catering</option>
 <option value="25">Beauty & Fashion</option>
 <option value="26">Makeup & Cosmetic</option>
<option value="27">Spa</option>
 <option value="28">Massage Therapy</option>
 <option value="29">Doctor</option>
 <option value="30">Hospital</option>
 <option value="31">Dentist & Dental</option>
 <option value="32">Medical & Clinic</option>
 <option value="33">Therapist & Psychologist</option>
 <option value="34">Gym & Fitness</option>
 <option value="35">Yoga</option>
 <option value="36">Travel & Tourism</option>
 <option value="37">Hotel </option>
 <option value="38">Book</option>
 <option value="39">Food Delivery</option>
 <option value="40">Cake</option>
 <option value="41">Fashion & Clothing Store</option>
 <option value="42">Jewellery</option>
  <option value="43">Shoe</option>
  <option value="44">Furniture</option>
 <option value="45">Cabs & Car rentals</option>
 <option value="46">Caterers</option>
 <option value="47">Chemists</option>
 <option value="48">Civil Contractors</option>
 <option value="49">Courier</option>
 <option value="50">Daily Needs</option>
 <option value="51">Dance & Music</option>
 <option value="52">Doctor</option>
 <option value="53">Education</option>
 <option value="54">Emergency</option>
 <option value="55">Event Organizer</option>
 <option value="56">Fitness & GYM</option>
 <option value="57">Yoga Classes</option>
 <option value="58">Flowers</option>
 <option value="59">Home Decor</option>
 <option value="60">Home Improvements</option>
 <option value="61">Hospitals</option>
 <option value="62">House Keeping</option>
 <option value="63">Industrial Products</option>
 <option value="64">Insurance</option>
 <option value="65">Interior Designer</option>
 <option value="66">International SIM Card</option>
 <option value="67">Internet</option>
 <option value="68">Jobs</option>
 <option value="69">Jewellery</option>
 <option value="70">Labs</option>
 <option value="71">Language Classes</option>
 <option value="72">Loan & Credit Card</option>
 <option value="73">Medical</option>
 <option value="74">Modular Kitchen</option>
 <option value="75">Packers and Movers</option>
 <option value="76">Party</option>
 <option value="77">Personal Care</option>
 <option value="78">Books</option>
 <option value="79">Pet and Pet Care</option>
 <option value="80">Play School</option>
 <option value="81">Repairs</option>
 <option value="82">Restaurants</option>
 <option value="83">Security Services</option>
 <option value="84">Sports Coach</option>
 <option value="85">Sports Goods</option>
 <option value="86">Training Institute</option>
 <option value="87">Transporters</option>














</select>


<div class="row justify-content-evenly mt-5">
    <div class="col-4">
    <button type="button" class="btn btn-primary"><a id="mylink" style={{color:"white"}}>Demo 1</a></button>
    </div>
    <div class="col-4">
    <button type="button" class="btn btn-primary"><a id="mylink2" style={{color:"white"}}>Demo 2</a></button>
    </div>
 
</div>



</div>

    </>
  )
}
