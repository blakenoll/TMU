---
title: Welcome to Master's U
date: 2017-12-15 23:53:00 Z
---

<!-- FORM: HEAD SECTION -->

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <script type="text/javascript">
        document.addEventListener("DOMContentLoaded", function(){
            const FORM_TIME_START = Math.floor((new Date).getTime()/1000);
            let formElement = document.getElementById("tfa_0");
            let appendJsTimerElement = function(){
                let formTimeDiff = Math.floor((new Date).getTime()/1000) - FORM_TIME_START;
                let cumulatedTimeElement = document.getElementById("tfa_dbCumulatedTime");
                if (null !== cumulatedTimeElement) {
                    let cumulatedTime = parseInt(cumulatedTimeElement.value);
                    if (null !== cumulatedTime && cumulatedTime > 0) {
                        formTimeDiff += cumulatedTime;
                    }
                }
                let jsTimeInput = document.createElement("input");
                jsTimeInput.setAttribute("type", "hidden");
                jsTimeInput.setAttribute("value", formTimeDiff.toString());
                jsTimeInput.setAttribute("name", "tfa_dbElapsedJsTime");
                jsTimeInput.setAttribute("id", "tfa_dbElapsedJsTime");
                jsTimeInput.setAttribute("autocomplete", "off");
                if (null !== formElement) {
                    formElement.appendChild(jsTimeInput);
                }
            };
            if (null !== formElement) {
                if(formElement.addEventListener){
                    formElement.addEventListener('submit', appendJsTimerElement, false);
                } else if(formElement.attachEvent){
                    formElement.attachEvent('onsubmit', appendJsTimerElement);
                }
            }
        });
    </script>

    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-layout.css?v=4613-2" rel="stylesheet" type="text/css" />
    <!--[if IE 8]>
    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-layout-ie8.css" rel="stylesheet" type="text/css" />
    <![endif]-->
    <!--[if IE 7]>
    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-layout-ie7.css" rel="stylesheet" type="text/css" />
    <![endif]-->
    <!--[if IE 6]>
    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-layout-ie6.css" rel="stylesheet" type="text/css" />
    <![endif]-->

    <link href="https://masters.tfaforms.net/themes/get/1" rel="stylesheet" type="text/css" />
    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-jsonly.css?v=4613-2" rel="alternate stylesheet" title="This stylesheet activated by javascript" type="text/css" />
    <script type="text/javascript" src="https://masters.tfaforms.net/wForms/3.10/js/wforms.js?v=4613-2"></script>
    <script type="text/javascript">
        wFORMS.behaviors.prefill.skip = false;
    </script>
        <script type="text/javascript" src="https://masters.tfaforms.net/wForms/3.10/js/localization-en_US.js?v=4613-2"></script>

<!-- FORM: BODY SECTION -->
<div class="wFormContainer"  >

  <style type="text/css">
                #tfa_494-L,
                label[id^="tfa_494["] {
                    width: 250px !important;
                }
            
                #tfa_405-L,
                label[id^="tfa_405["] {
                    width: 350px !important;
                }
            
                #tfa_502-L,
                label[id^="tfa_502["] {
                    width: 300px !important;
                }
            
                #tfa_512-L,
                label[id^="tfa_512["] {
                    width: 250px !important;
                }
            
                #tfa_397-L,
                label[id^="tfa_397["] {
                    width: 290px !important;
                }
            
                #tfa_523-L,
                label[id^="tfa_523["] {
                    width: 290px !important;
                }
            
                #tfa_533-L,
                label[id^="tfa_533["] {
                    width: 290px !important;
                }
            
                #tfa_427-L,
                label[id^="tfa_427["] {
                    width: 300px !important;
                }
            
                #tfa_493-L,
                label[id^="tfa_493["] {
                    width: 300px !important;
                }
            
                #tfa_492-L,
                label[id^="tfa_492["] {
                    width: 300px !important;
                }
            
                #tfa_575-L,
                label[id^="tfa_575["] {
                    width: 280px !important;
                }
            
                #tfa_578-L,
                label[id^="tfa_578["] {
                    width: 270px !important;
                }
            
                #tfa_573-L,
                label[id^="tfa_573["] {
                    width: 230px !important;
                }
            
                #tfa_570-L,
                label[id^="tfa_570["] {
                    width: 230px !important;
                }
            
                #tfa_571-L,
                label[id^="tfa_571["] {
                    width: 230px !important;
                }
            </style><div class=""><div class="wForm" id="tfa_0-WRPR" dir="ltr">
<div class="codesection" id="code-tfa_0"></div>
<form method="post" action="https://masters.tfaforms.net/responses/processor" class="hintsBelow labelsAbove" id="tfa_0">
<div class="htmlSection" id="tfa_2"><div class="htmlContent" id="tfa_2-HTML">We look forward to learning more about you. Choosing the right program and the right school is rarely easy, so let us help. The details you provide us here will allow us to best serve and guide you, be it for TMU undergraduate studies, graduate programs, our online learning offering, or other services. Once you submit this form we will be in contact with you to answer any questions you may have.<div><div style="text-align: center;"><br></div></div></div></div>
<div class="oneField field-container-D     " id="tfa_3-D">
<label id="tfa_3-L" for="tfa_3" class="label preField ">Prefix</label><br><div class="inputWrapper"><select id="tfa_3" name="tfa_3" title="Prefix" class=""><option value="">Please select...</option>
<option value="tfa_4" id="tfa_4" class="">Mr.</option>
<option value="tfa_5" id="tfa_5" class="">Miss</option>
<option value="tfa_6" id="tfa_6" class="">Mrs.</option></select></div>
</div>
<div id="tfa_10" class="section inline group">
<div class="oneField field-container-D     " id="tfa_7-D">
<label id="tfa_7-L" for="tfa_7" class="label preField reqMark">First Name</label><br><div class="inputWrapper"><input type="text" id="tfa_7" name="tfa_7" value="" placeholder="" title="First Name" class="required"></div>
</div>
<div class="oneField field-container-D     " id="tfa_8-D">
<label id="tfa_8-L" for="tfa_8" class="label preField reqMark">Last Name</label><br><div class="inputWrapper"><input type="text" id="tfa_8" name="tfa_8" value="" placeholder="" title="Last Name" class="required"></div>
</div>
</div>
<div id="tfa_72" class="section inline group">
<div class="oneField field-container-D     " id="tfa_12-D">
<label id="tfa_12-L" for="tfa_12" class="label preField reqMark">Email</label><br><div class="inputWrapper"><input type="text" id="tfa_12" name="tfa_12" value="" placeholder="" title="Email" class="required"></div>
</div>
<div class="oneField field-container-D     " id="tfa_312-D">
<label id="tfa_312-L" for="tfa_312" class="label preField reqMark">Phone</label><br><div class="inputWrapper"><input type="text" id="tfa_312" name="tfa_312" value="" placeholder="" autoformat="(###) ###-####" title="Phone" class="required"></div>
</div>
</div>
<div id="tfa_409" class="section inline group">
<div class="oneField field-container-D     " id="tfa_494-D">
<label id="tfa_494-L" for="tfa_494" class="label preField ">What degree are you pursuing?</label><br><div class="inputWrapper"><select id="tfa_494" name="tfa_494" title="What degree are you pursuing?" class=""><option value="">Please select...</option>
<option value="tfa_495" id="tfa_495" data-conditionals="#tfa_405" class="">Undergraduate</option>
<option value="tfa_496" id="tfa_496" data-conditionals="#tfa_502,#tfa_523" class="">Graduate</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_405-D">
<label id="tfa_405-L" for="tfa_405" class="label preField reqMark">Which Program Are You Interested In?</label><br><div class="inputWrapper"><select id="tfa_405" name="tfa_405" data-condition="`#tfa_495`" title="Which Program Are You Interested In?" class="calc-TradandOnlineDepartments required"><option value="">Please select...</option>
<option value="tfa_406" id="tfa_406" data-conditionals="#tfa_314,#tfa_397,#tfa_393,#tfa_13,#tfa_392,#tfa_73,#tfa_74,#tfa_586,#tfa_647" class="calcval-admissions@masters.edu">On-Campus</option>
<option value="tfa_407" id="tfa_407" data-conditionals="#tfa_560,#tfa_523,#tfa_631" class="calcval-tmuonline@masters.edu">Online</option>
<option value="tfa_497" id="tfa_497" data-conditionals="#tfa_523,#tfa_631" class="calcval-tmuonline@masters.edu">Dual Enrollment</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_502-D">
<label id="tfa_502-L" for="tfa_502" class="label preField reqMark">Which Area Of Study?</label><br><div class="inputWrapper"><select id="tfa_502" name="tfa_502" data-condition="`#tfa_496`" title="Which Area Of Study?" class="required"><option value="">Please select...</option>
<option value="tfa_509" id="tfa_509" data-conditionals="#tfa_512,#tfa_393,#tfa_13,#tfa_392,#tfa_73,#tfa_74,#tfa_575,#tfa_578,#tfa_610" class="">Master of Arts in Biblical Counseling</option>
<option value="tfa_510" id="tfa_510" data-conditionals="#tfa_631" class="">Master of Arts in Biblical Studies</option>
<option value="tfa_511" id="tfa_511" data-conditionals="#tfa_631" class="">Master of Business Administration</option>
<option value="tfa_651" id="tfa_651" class="">Master of Education</option></select></div>
</div>
<div class="oneField field-container-D    hintsTooltip " id="tfa_512-D">
<label id="tfa_512-L" for="tfa_512" class="label preField reqMark">Which Course Format?</label><br><div class="inputWrapper">
<select id="tfa_512" name="tfa_512" data-condition="`#tfa_509`" title="Which Course Format?" class="calc-GradDepartment required"><option value="">Please select...</option>
<option value="tfa_514" id="tfa_514" class="calcval-graduatestudies@masters.edu">Distance</option>
<option value="tfa_513" id="tfa_513" class="calcval-graduatestudies@masters.edu">Residential</option></select><span class="field-hint-inactive" id="tfa_512-H"><span id="tfa_512-HH" class="hint">HINT: Distance students are primarily online students with a 1-2 week "Summer Intensive Program".  Residential students meet on-campus once a week for a 15 week period.</span></span>
</div>
</div>
</div>
<div class="oneField field-container-D     " id="tfa_397-D">
<label id="tfa_397-L" for="tfa_397" class="label preField reqMark">Intended Entry Term</label><br><div class="inputWrapper"><select id="tfa_397" name="tfa_397" data-condition="`#tfa_406`" title="Intended Entry Term" class="required"><option value="">Please select...</option>
<option value="tfa_538" id="tfa_538" class="">Fall</option>
<option value="tfa_539" id="tfa_539" class="">Spring</option></select></div>
</div>
<div id="tfa_544" class="section inline group">
<div class="oneField field-container-D     " id="tfa_523-D">
<label id="tfa_523-L" for="tfa_523" class="label preField reqMark">Intended Entry Term</label><br><div class="inputWrapper"><select id="tfa_523" name="tfa_523" data-condition="`#tfa_496` OR `#tfa_407` OR `#tfa_497`" title="Intended Entry Term" class="required"><option value="">Please select...</option>
<option value="tfa_524" id="tfa_524" class="">Fall</option>
<option value="tfa_526" id="tfa_526" class="">Spring</option>
<option value="tfa_527" id="tfa_527" class="">Summer</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_533-D">
<label id="tfa_533-L" for="tfa_533" class="label preField reqMark">Intended Entry Year</label><br><div class="inputWrapper"><select id="tfa_533" name="tfa_533" title="Intended Entry Year" class="required"><option value="">Please select...</option>
<option value="tfa_535" id="tfa_535" class="">2018</option>
<option value="tfa_536" id="tfa_536" class="">2019</option>
<option value="tfa_537" id="tfa_537" class="">2020</option>
<option value="tfa_581" id="tfa_581" class="">2021</option></select></div>
</div>
</div>
<div id="tfa_540" class="section inline group">
<div class="oneField field-container-D     " id="tfa_314-D">
<label id="tfa_314-L" for="tfa_314" class="label preField ">Major of Interest</label><br><div class="inputWrapper"><select id="tfa_314" name="tfa_314" data-condition="`#tfa_406`" title="Major of Interest" class=""><option value="">Please select...</option>
<option value="tfa_315" id="tfa_315" data-conditionals="#tfa_327" class="">Biblical Studies</option>
<option value="tfa_316" id="tfa_316" data-conditionals="#tfa_347" class="">Biology &amp; Physical Science</option>
<option value="tfa_317" id="tfa_317" data-conditionals="#tfa_365" class="">Business</option>
<option value="tfa_318" id="tfa_318" data-conditionals="#tfa_386" class="">Communication</option>
<option value="tfa_319" id="tfa_319" data-conditionals="#tfa_416" class="">Computer &amp; Information Sciences</option>
<option value="tfa_320" id="tfa_320" data-conditionals="#tfa_424" class="">English</option>
<option value="tfa_321" id="tfa_321" data-conditionals="#tfa_427" class="">History</option>
<option value="tfa_322" id="tfa_322" data-conditionals="#tfa_441" class="">Kinesiology/PE</option>
<option value="tfa_323" id="tfa_323" data-conditionals="#tfa_455" class="">Liberal Studies * Education</option>
<option value="tfa_375" id="tfa_375" data-conditionals="#tfa_493" class="">Marketing Media</option>
<option value="tfa_324" id="tfa_324" data-conditionals="#tfa_461" class="">Mathematics</option>
<option value="tfa_325" id="tfa_325" data-conditionals="#tfa_471" class="">Music</option>
<option value="tfa_326" id="tfa_326" data-conditionals="#tfa_431" class="">Political Studies</option>
<option value="tfa_396" id="tfa_396" data-conditionals="#tfa_492" class="">Undecided</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_560-D">
<label id="tfa_560-L" for="tfa_560" class="label preField ">Major of Interest</label><br><div class="inputWrapper"><select id="tfa_560" name="tfa_560" data-condition="`#tfa_407`" title="Major of Interest" class=""><option value="">Please select...</option>
<option value="tfa_561" id="tfa_561" class="">Biblical Counseling</option>
<option value="tfa_562" id="tfa_562" class="">Biblical Studies</option>
<option value="tfa_563" id="tfa_563" class="">Christian Ministries</option>
<option value="tfa_564" id="tfa_564" class="">Business Management</option>
<option value="tfa_565" id="tfa_565" class="">Organizational Management</option>
<option value="tfa_566" id="tfa_566" class="">Undeclared</option>
<option value="tfa_567" id="tfa_567" class="">No Major/Non-Degree</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_327-D">
<label id="tfa_327-L" for="tfa_327" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_327" name="tfa_327" data-condition="`#tfa_315`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_328" id="tfa_328" class="">Biblical Studies (general)</option>
<option value="tfa_329" id="tfa_329" class="">Biblical Studies (bible exposition)</option>
<option value="tfa_330" id="tfa_330" class="">Biblical Studies (biblical counseling)</option>
<option value="tfa_331" id="tfa_331" class="">Biblical Studies (biblical languages)</option>
<option value="tfa_332" id="tfa_332" class="">Biblical Studies (christian education)</option>
<option value="tfa_333" id="tfa_333" class="">Biblical Studies (global studies)</option>
<option value="tfa_334" id="tfa_334" class="">Biblical Studies (student ministries) </option>
<option value="tfa_336" id="tfa_336" class="">Biblical Studies (theology)</option></select></div>
</div>
</div>
<div id="tfa_543" class="section inline group">
<div class="oneField field-container-D     " id="tfa_347-D">
<label id="tfa_347-L" for="tfa_347" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_347" name="tfa_347" data-condition="`#tfa_316`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_348" id="tfa_348" class="">Biological Science (general)</option>
<option value="tfa_349" id="tfa_349" class="">Biological Science (animal science/pre-veterinary)</option>
<option value="tfa_350" id="tfa_350" class="">Biological Science (cell &amp; molecular)</option>
<option value="tfa_351" id="tfa_351" class="">Biological Science (environmental biology)</option>
<option value="tfa_582" id="tfa_582" class="">Biological Science (natural history/environmental)</option>
<option value="tfa_583" id="tfa_583" class="">Biological Science (paleontology)</option>
<option value="tfa_352" id="tfa_352" class="">Biological Science (pre-dentistry)</option>
<option value="tfa_353" id="tfa_353" class="">Biological Science (pre-medicine)</option>
<option value="tfa_354" id="tfa_354" class="">Biological Science (pre-nursing)</option>
<option value="tfa_355" id="tfa_355" class="">Biological Science (teacher education) </option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_386-D">
<label id="tfa_386-L" for="tfa_386" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_386" name="tfa_386" data-condition="`#tfa_318`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_387" id="tfa_387" class="">Communication (general)</option>
<option value="tfa_388" id="tfa_388" class="">Communication (cinema &amp; digital arts)</option>
<option value="tfa_389" id="tfa_389" class="">Communication (creative writing &amp; publishing)</option>
<option value="tfa_584" id="tfa_584" class="">Communication (electronic media)</option>
<option value="tfa_390" id="tfa_390" class="">Communication (journalism)</option>
<option value="tfa_585" id="tfa_585" class="">Communication (print media)</option>
<option value="tfa_391" id="tfa_391" class="">Communication (speech communication)</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_365-D">
<label id="tfa_365-L" for="tfa_365" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_365" name="tfa_365" data-condition="`#tfa_317`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_366" id="tfa_366" class="">Business Administration (accounting)</option>
<option value="tfa_367" id="tfa_367" class="">Business Administration (christian ministries administration)</option>
<option value="tfa_368" id="tfa_368" class="">Business Administration (finance)</option>
<option value="tfa_369" id="tfa_369" class="">Business Administration (international business)</option>
<option value="tfa_370" id="tfa_370" class="">Business Administration (management)</option>
<option value="tfa_371" id="tfa_371" class="">Business Administration (management information systems)</option>
<option value="tfa_372" id="tfa_372" class="">Business Administration (marketing)</option>
<option value="tfa_373" id="tfa_373" class="">Business Administration (pre-law)</option>
<option value="tfa_374" id="tfa_374" class="">Business Administration (public relations)</option></select></div>
</div>
</div>
<div class="oneField field-container-D     " id="tfa_416-D">
<label id="tfa_416-L" for="tfa_416" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_416" name="tfa_416" data-condition="`#tfa_319`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_418" id="tfa_418" class="">Computer &amp; Information Sciences (computer science)</option>
<option value="tfa_419" id="tfa_419" class="">Computer &amp; Information Sciences (information systems)</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_424-D">
<label id="tfa_424-L" for="tfa_424" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_424" name="tfa_424" data-condition="`#tfa_320`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_425" id="tfa_425" class="">English (general)</option>
<option value="tfa_426" id="tfa_426" class="">English (teacher education)</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_431-D">
<label id="tfa_431-L" for="tfa_431" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_431" name="tfa_431" data-condition="`#tfa_326`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_432" id="tfa_432" class="">Political Studies (general)</option>
<option value="tfa_433" id="tfa_433" class="">Political Studies (american politics)</option>
<option value="tfa_434" id="tfa_434" class="">Political Studies (constitutional law)</option>
<option value="tfa_435" id="tfa_435" class="">Political Studies (political theory)</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_441-D">
<label id="tfa_441-L" for="tfa_441" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_441" name="tfa_441" data-condition="`#tfa_322`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_444" id="tfa_444" class="">Kinesiology &amp; Physical Education (exercise sports science)</option>
<option value="tfa_445" id="tfa_445" class="">Kinesiology &amp; Physical Education (pre physical therapy)</option>
<option value="tfa_447" id="tfa_447" class="">Kinesiology &amp; Physical Education (teaching/coaching)</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_455-D">
<label id="tfa_455-L" for="tfa_455" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_455" name="tfa_455" data-condition="`#tfa_323`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_456" id="tfa_456" class="">Liberal Studies (general)</option>
<option value="tfa_457" id="tfa_457" class="">Liberal Studies (teacher education)</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_461-D">
<label id="tfa_461-L" for="tfa_461" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_461" name="tfa_461" data-condition="`#tfa_324`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_462" id="tfa_462" class="">Mathematics (general)</option>
<option value="tfa_463" id="tfa_463" class="">Mathematics (applied)</option>
<option value="tfa_464" id="tfa_464" class="">Mathematics (math education)</option>
<option value="tfa_465" id="tfa_465" class="">Mathematics (pure mathematics)</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_471-D">
<label id="tfa_471-L" for="tfa_471" class="label preField ">Emphasis of Interest</label><br><div class="inputWrapper"><select id="tfa_471" name="tfa_471" data-condition="`#tfa_325`" title="Emphasis of Interest" class=""><option value="">Please select...</option>
<option value="tfa_472" id="tfa_472" class="">Music (general)</option>
<option value="tfa_473" id="tfa_473" class="">Music (applied-cello)</option>
<option value="tfa_474" id="tfa_474" class="">Music (applied-guitar)</option>
<option value="tfa_475" id="tfa_475" class="">Music (applied-voice)</option>
<option value="tfa_476" id="tfa_476" class="">Music (composition)</option>
<option value="tfa_477" id="tfa_477" class="">Music (flute performance)</option>
<option value="tfa_479" id="tfa_479" class="">Music (music &amp; audio technology)</option>
<option value="tfa_480" id="tfa_480" class="">Music (music &amp; biblical studies)</option>
<option value="tfa_489" id="tfa_489" class="">Music (music &amp; business)</option>
<option value="tfa_481" id="tfa_481" class="">Music (music &amp; communication)</option>
<option value="tfa_491" id="tfa_491" class="">Music (music &amp; modern worship)</option>
<option value="tfa_490" id="tfa_490" class="">Music (music &amp; student ministries)</option>
<option value="tfa_478" id="tfa_478" class="">Music (music education)</option>
<option value="tfa_483" id="tfa_483" class="">Music (organ performance)</option>
<option value="tfa_484" id="tfa_484" class="">Music (piano pedagogy)</option>
<option value="tfa_485" id="tfa_485" class="">Music (piano performance)</option>
<option value="tfa_488" id="tfa_488" class="">Music (traditional worship)</option>
<option value="tfa_486" id="tfa_486" class="">Music (violin performance)</option></select></div>
</div>
<input type="hidden" id="tfa_427" name="tfa_427" value="History" data-condition="`#tfa_321`" class=""><input type="hidden" id="tfa_493" name="tfa_493" value="Marketing Media" data-condition="`#tfa_375`" class=""><input type="hidden" id="tfa_492" name="tfa_492" value="Undeclared" data-condition="`#tfa_396`" class=""><div id="tfa_569" class="section inline group">
<div class="oneField field-container-D     " id="tfa_575-D">
<label id="tfa_575-L" for="tfa_575" class="label preField ">Have you previously been admitted to the MABC program at The Master's College or University?</label><br><div class="inputWrapper"><span id="tfa_575" class="choices vertical " data-condition="`#tfa_509`"><span class="oneChoice"><input type="radio" value="tfa_576" class="" id="tfa_576" name="tfa_575"><label class="label postField" id="tfa_576-L" for="tfa_576">Yes</label></span><span class="oneChoice"><input type="radio" value="tfa_577" class="" id="tfa_577" name="tfa_575"><label class="label postField" id="tfa_577-L" for="tfa_577">No</label></span></span></div>
</div>
<div class="oneField field-container-D     " id="tfa_578-D">
<label id="tfa_578-L" for="tfa_578" class="label preField ">Are you a current or previous student of The Master's Seminary (TMS)?</label><br><div class="inputWrapper"><span id="tfa_578" class="choices vertical " data-condition="`#tfa_509`"><span class="oneChoice"><input type="radio" value="tfa_579" class="" id="tfa_579" name="tfa_578"><label class="label postField" id="tfa_579-L" for="tfa_579">Yes</label></span><span class="oneChoice"><input type="radio" value="tfa_580" class="" id="tfa_580" name="tfa_578"><label class="label postField" id="tfa_580-L" for="tfa_580">No</label></span></span></div>
</div>
<div class="oneField field-container-D     " id="tfa_392-D">
<label id="tfa_392-L" for="tfa_392" class="label preField ">Mailing Address</label><br><div class="inputWrapper"><input type="text" id="tfa_392" name="tfa_392" value="" placeholder="" data-condition="`#tfa_406` OR `#tfa_509`" title="Mailing Address" class=""></div>
</div>
<div class="oneField field-container-D     " id="tfa_393-D">
<label id="tfa_393-L" for="tfa_393" class="label preField ">City</label><br><div class="inputWrapper"><input type="text" id="tfa_393" name="tfa_393" value="" placeholder="" data-condition="`#tfa_406` OR `#tfa_509`" title="City" class=""></div>
</div>
<div class="oneField field-container-D     " id="tfa_13-D">
<label id="tfa_13-L" for="tfa_13" class="label preField reqMark">State</label><br><div class="inputWrapper"><select id="tfa_13" name="tfa_13" data-condition="`#tfa_406` OR `#tfa_509`" title="State" class="required"><option value="">Please select...</option>
<option value="tfa_14" id="tfa_14" class="">Alabama</option>
<option value="tfa_15" id="tfa_15" class="">Alaska</option>
<option value="tfa_16" id="tfa_16" class="">Arizona</option>
<option value="tfa_17" id="tfa_17" class="">Arkansas</option>
<option value="tfa_18" id="tfa_18" data-conditionals="#tfa_73" class="">California</option>
<option value="tfa_19" id="tfa_19" class="">Colorado</option>
<option value="tfa_20" id="tfa_20" class="">Connecticut</option>
<option value="tfa_21" id="tfa_21" class="">Delaware</option>
<option value="tfa_22" id="tfa_22" class="">District Of Columbia</option>
<option value="tfa_23" id="tfa_23" class="">Florida</option>
<option value="tfa_24" id="tfa_24" class="">Georgia</option>
<option value="tfa_25" id="tfa_25" class="">Hawaii</option>
<option value="tfa_26" id="tfa_26" class="">Idaho</option>
<option value="tfa_27" id="tfa_27" class="">Illinois</option>
<option value="tfa_28" id="tfa_28" class="">Indiana</option>
<option value="tfa_29" id="tfa_29" class="">Iowa</option>
<option value="tfa_30" id="tfa_30" class="">Kansas</option>
<option value="tfa_31" id="tfa_31" class="">Kentucky</option>
<option value="tfa_32" id="tfa_32" class="">Louisiana</option>
<option value="tfa_33" id="tfa_33" class="">Maine</option>
<option value="tfa_34" id="tfa_34" class="">Maryland</option>
<option value="tfa_35" id="tfa_35" class="">Massachusetts</option>
<option value="tfa_36" id="tfa_36" class="">Michigan</option>
<option value="tfa_37" id="tfa_37" class="">Minnesota</option>
<option value="tfa_38" id="tfa_38" class="">Mississippi</option>
<option value="tfa_39" id="tfa_39" class="">Missouri</option>
<option value="tfa_40" id="tfa_40" class="">Montana</option>
<option value="tfa_41" id="tfa_41" class="">Nebraska</option>
<option value="tfa_42" id="tfa_42" class="">Nevada</option>
<option value="tfa_43" id="tfa_43" class="">New Hampshire</option>
<option value="tfa_44" id="tfa_44" class="">New Jersey</option>
<option value="tfa_45" id="tfa_45" class="">New Mexico</option>
<option value="tfa_46" id="tfa_46" class="">New York</option>
<option value="tfa_47" id="tfa_47" class="">North Carolina</option>
<option value="tfa_48" id="tfa_48" class="">North Dakota</option>
<option value="tfa_49" id="tfa_49" class="">Ohio</option>
<option value="tfa_50" id="tfa_50" class="">Oklahoma</option>
<option value="tfa_51" id="tfa_51" class="">Oregon</option>
<option value="tfa_52" id="tfa_52" class="">Pennsylvania</option>
<option value="tfa_53" id="tfa_53" class="">Rhode Island</option>
<option value="tfa_54" id="tfa_54" class="">South Carolina</option>
<option value="tfa_55" id="tfa_55" class="">South Dakota</option>
<option value="tfa_56" id="tfa_56" class="">Tennessee</option>
<option value="tfa_57" id="tfa_57" class="">Texas</option>
<option value="tfa_58" id="tfa_58" class="">Utah</option>
<option value="tfa_59" id="tfa_59" class="">Vermont</option>
<option value="tfa_60" id="tfa_60" class="">Virginia</option>
<option value="tfa_61" id="tfa_61" class="">Washington</option>
<option value="tfa_62" id="tfa_62" class="">West Virginia</option>
<option value="tfa_63" id="tfa_63" class="">Wisconsin</option>
<option value="tfa_64" id="tfa_64" class="">Wyoming</option>
<option value="tfa_71" id="tfa_71" data-conditionals="#tfa_74" class="">Other</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_73-D">
<label id="tfa_73-L" for="tfa_73" class="label preField ">Zip Code</label><br><div class="inputWrapper"><input type="text" id="tfa_73" name="tfa_73" value="" placeholder="" data-condition="(`#tfa_18` AND `#tfa_406`) OR `#tfa_509`" title="Zip Code" class=""></div>
</div>
<div class="oneField field-container-D     " id="tfa_74-D">
<label id="tfa_74-L" for="tfa_74" class="label preField ">Country</label><br><div class="inputWrapper"><select id="tfa_74" name="tfa_74" data-condition="(`#tfa_71` AND `#tfa_406`) OR `#tfa_509`" title="Country" class=""><option value="">Please select...</option>
<option value="tfa_574" id="tfa_574" class="">United States</option>
<option value="tfa_75" id="tfa_75" class="">Afghanistan</option>
<option value="tfa_76" id="tfa_76" class="">Albania</option>
<option value="tfa_77" id="tfa_77" class="">Algeria</option>
<option value="tfa_78" id="tfa_78" class="">American Samoa</option>
<option value="tfa_79" id="tfa_79" class="">Andorra</option>
<option value="tfa_80" id="tfa_80" class="">Angola</option>
<option value="tfa_81" id="tfa_81" class="">Anguilla</option>
<option value="tfa_82" id="tfa_82" class="">Antarctica</option>
<option value="tfa_83" id="tfa_83" class="">Antigua and Barbuda</option>
<option value="tfa_84" id="tfa_84" class="">Argentina</option>
<option value="tfa_85" id="tfa_85" class="">Armenia</option>
<option value="tfa_86" id="tfa_86" class="">Aruba</option>
<option value="tfa_87" id="tfa_87" class="">Australia</option>
<option value="tfa_88" id="tfa_88" class="">Austria</option>
<option value="tfa_89" id="tfa_89" class="">Azerbaijan</option>
<option value="tfa_90" id="tfa_90" class="">Bahamas</option>
<option value="tfa_91" id="tfa_91" class="">Bahrain</option>
<option value="tfa_92" id="tfa_92" class="">Bangladesh</option>
<option value="tfa_93" id="tfa_93" class="">Barbados</option>
<option value="tfa_94" id="tfa_94" class="">Belarus</option>
<option value="tfa_95" id="tfa_95" class="">Belgium</option>
<option value="tfa_96" id="tfa_96" class="">Belize</option>
<option value="tfa_97" id="tfa_97" class="">Benin</option>
<option value="tfa_98" id="tfa_98" class="">Bermuda</option>
<option value="tfa_99" id="tfa_99" class="">Bhutan</option>
<option value="tfa_100" id="tfa_100" class="">Bolivia</option>
<option value="tfa_101" id="tfa_101" class="">Bosnia and Herzegovina</option>
<option value="tfa_102" id="tfa_102" class="">Botswana</option>
<option value="tfa_103" id="tfa_103" class="">Bouvet Island</option>
<option value="tfa_104" id="tfa_104" class="">Brazil</option>
<option value="tfa_105" id="tfa_105" class="">British Indian Ocean Territory</option>
<option value="tfa_106" id="tfa_106" class="">Brunei</option>
<option value="tfa_107" id="tfa_107" class="">Bulgaria</option>
<option value="tfa_108" id="tfa_108" class="">Burkina Faso</option>
<option value="tfa_109" id="tfa_109" class="">Burundi</option>
<option value="tfa_110" id="tfa_110" class="">Cambodia</option>
<option value="tfa_111" id="tfa_111" class="">Cameroon</option>
<option value="tfa_112" id="tfa_112" class="">Canada</option>
<option value="tfa_113" id="tfa_113" class="">Cape Verde</option>
<option value="tfa_114" id="tfa_114" class="">Cayman Islands</option>
<option value="tfa_115" id="tfa_115" class="">Central African Republic</option>
<option value="tfa_116" id="tfa_116" class="">Chad</option>
<option value="tfa_117" id="tfa_117" class="">Chile</option>
<option value="tfa_118" id="tfa_118" class="">China</option>
<option value="tfa_119" id="tfa_119" class="">Christmas Island</option>
<option value="tfa_120" id="tfa_120" class="">Cocos ( Keeling ) Islands</option>
<option value="tfa_121" id="tfa_121" class="">Colombia</option>
<option value="tfa_122" id="tfa_122" class="">Comoros</option>
<option value="tfa_123" id="tfa_123" class="">Congo</option>
<option value="tfa_124" id="tfa_124" class="">Cook Islands</option>
<option value="tfa_125" id="tfa_125" class="">Costa Rica</option>
<option value="tfa_126" id="tfa_126" class="">Côte d ' Ivoire</option>
<option value="tfa_127" id="tfa_127" class="">Croatia ( Hrvatska )</option>
<option value="tfa_128" id="tfa_128" class="">Cuba</option>
<option value="tfa_129" id="tfa_129" class="">Cyprus</option>
<option value="tfa_130" id="tfa_130" class="">Czech Republic</option>
<option value="tfa_131" id="tfa_131" class="">Congo ( DRC )</option>
<option value="tfa_132" id="tfa_132" class="">Denmark</option>
<option value="tfa_133" id="tfa_133" class="">Djibouti</option>
<option value="tfa_134" id="tfa_134" class="">Dominica</option>
<option value="tfa_135" id="tfa_135" class="">Dominican Republic</option>
<option value="tfa_136" id="tfa_136" class="">East Timor</option>
<option value="tfa_137" id="tfa_137" class="">Ecuador</option>
<option value="tfa_138" id="tfa_138" class="">Egypt</option>
<option value="tfa_139" id="tfa_139" class="">El Salvador</option>
<option value="tfa_140" id="tfa_140" class="">Equatorial Guinea</option>
<option value="tfa_141" id="tfa_141" class="">Eritrea</option>
<option value="tfa_142" id="tfa_142" class="">Estonia</option>
<option value="tfa_143" id="tfa_143" class="">Ethiopia</option>
<option value="tfa_144" id="tfa_144" class="">Falkland Islands ( Islas Malvinas )</option>
<option value="tfa_145" id="tfa_145" class="">Faroe Islands</option>
<option value="tfa_146" id="tfa_146" class="">Fiji Islands</option>
<option value="tfa_147" id="tfa_147" class="">Finland</option>
<option value="tfa_148" id="tfa_148" class="">France</option>
<option value="tfa_149" id="tfa_149" class="">French Guiana</option>
<option value="tfa_150" id="tfa_150" class="">French Polynesia</option>
<option value="tfa_151" id="tfa_151" class="">French Southern and Antarctic Lands</option>
<option value="tfa_152" id="tfa_152" class="">Gabon</option>
<option value="tfa_153" id="tfa_153" class="">Gambia</option>
<option value="tfa_154" id="tfa_154" class="">Georgia</option>
<option value="tfa_155" id="tfa_155" class="">Germany</option>
<option value="tfa_156" id="tfa_156" class="">Ghana</option>
<option value="tfa_157" id="tfa_157" class="">Gibraltar</option>
<option value="tfa_158" id="tfa_158" class="">Greece</option>
<option value="tfa_159" id="tfa_159" class="">Greenland</option>
<option value="tfa_160" id="tfa_160" class="">Grenada</option>
<option value="tfa_161" id="tfa_161" class="">Guadeloupe</option>
<option value="tfa_162" id="tfa_162" class="">Guam</option>
<option value="tfa_163" id="tfa_163" class="">Guatemala</option>
<option value="tfa_164" id="tfa_164" class="">Guinea</option>
<option value="tfa_165" id="tfa_165" class="">Guinea-Bissau</option>
<option value="tfa_166" id="tfa_166" class="">Guyana</option>
<option value="tfa_167" id="tfa_167" class="">Haiti</option>
<option value="tfa_168" id="tfa_168" class="">Heard Island and McDonald Islands</option>
<option value="tfa_169" id="tfa_169" class="">Honduras</option>
<option value="tfa_170" id="tfa_170" class="">Hong Kong SAR</option>
<option value="tfa_171" id="tfa_171" class="">Hungary</option>
<option value="tfa_172" id="tfa_172" class="">Iceland</option>
<option value="tfa_173" id="tfa_173" class="">India</option>
<option value="tfa_174" id="tfa_174" class="">Indonesia</option>
<option value="tfa_175" id="tfa_175" class="">Iran</option>
<option value="tfa_176" id="tfa_176" class="">Iraq</option>
<option value="tfa_177" id="tfa_177" class="">Ireland</option>
<option value="tfa_178" id="tfa_178" class="">Israel</option>
<option value="tfa_179" id="tfa_179" class="">Italy</option>
<option value="tfa_180" id="tfa_180" class="">Jamaica</option>
<option value="tfa_181" id="tfa_181" class="">Japan</option>
<option value="tfa_182" id="tfa_182" class="">Jordan</option>
<option value="tfa_183" id="tfa_183" class="">Kazakhstan</option>
<option value="tfa_184" id="tfa_184" class="">Kenya</option>
<option value="tfa_185" id="tfa_185" class="">Kiribati</option>
<option value="tfa_186" id="tfa_186" class="">Korea</option>
<option value="tfa_187" id="tfa_187" class="">Kuwait</option>
<option value="tfa_188" id="tfa_188" class="">Kyrgyzstan</option>
<option value="tfa_189" id="tfa_189" class="">Laos</option>
<option value="tfa_190" id="tfa_190" class="">Latvia</option>
<option value="tfa_191" id="tfa_191" class="">Lebanon</option>
<option value="tfa_192" id="tfa_192" class="">Lesotho</option>
<option value="tfa_193" id="tfa_193" class="">Liberia</option>
<option value="tfa_194" id="tfa_194" class="">Libya</option>
<option value="tfa_195" id="tfa_195" class="">Liechtenstein</option>
<option value="tfa_196" id="tfa_196" class="">Lithuania</option>
<option value="tfa_197" id="tfa_197" class="">Luxembourg</option>
<option value="tfa_198" id="tfa_198" class="">Macao SAR</option>
<option value="tfa_199" id="tfa_199" class="">Macedonia, Former Yugoslav Republic of</option>
<option value="tfa_200" id="tfa_200" class="">Madagascar</option>
<option value="tfa_201" id="tfa_201" class="">Malawi</option>
<option value="tfa_202" id="tfa_202" class="">Malaysia</option>
<option value="tfa_203" id="tfa_203" class="">Maldives</option>
<option value="tfa_204" id="tfa_204" class="">Mali</option>
<option value="tfa_205" id="tfa_205" class="">Malta</option>
<option value="tfa_206" id="tfa_206" class="">Marshall Islands</option>
<option value="tfa_207" id="tfa_207" class="">Martinique</option>
<option value="tfa_208" id="tfa_208" class="">Mauritania</option>
<option value="tfa_209" id="tfa_209" class="">Mauritius</option>
<option value="tfa_210" id="tfa_210" class="">Mayotte</option>
<option value="tfa_211" id="tfa_211" class="">Mexico</option>
<option value="tfa_212" id="tfa_212" class="">Micronesia</option>
<option value="tfa_213" id="tfa_213" class="">Moldova</option>
<option value="tfa_214" id="tfa_214" class="">Monaco</option>
<option value="tfa_215" id="tfa_215" class="">Mongolia</option>
<option value="tfa_216" id="tfa_216" class="">Montserrat</option>
<option value="tfa_217" id="tfa_217" class="">Morocco</option>
<option value="tfa_218" id="tfa_218" class="">Mozambique</option>
<option value="tfa_219" id="tfa_219" class="">Myanmar</option>
<option value="tfa_220" id="tfa_220" class="">Namibia</option>
<option value="tfa_221" id="tfa_221" class="">Nauru</option>
<option value="tfa_222" id="tfa_222" class="">Nepal</option>
<option value="tfa_223" id="tfa_223" class="">Netherlands</option>
<option value="tfa_224" id="tfa_224" class="">Netherlands Antilles</option>
<option value="tfa_225" id="tfa_225" class="">New Caledonia</option>
<option value="tfa_226" id="tfa_226" class="">New Zealand</option>
<option value="tfa_227" id="tfa_227" class="">Nicaragua</option>
<option value="tfa_228" id="tfa_228" class="">Niger</option>
<option value="tfa_229" id="tfa_229" class="">Nigeria</option>
<option value="tfa_230" id="tfa_230" class="">Niue</option>
<option value="tfa_231" id="tfa_231" class="">Norfolk Island</option>
<option value="tfa_232" id="tfa_232" class="">North Korea</option>
<option value="tfa_233" id="tfa_233" class="">Northern Mariana Islands</option>
<option value="tfa_234" id="tfa_234" class="">Norway</option>
<option value="tfa_235" id="tfa_235" class="">Oman</option>
<option value="tfa_236" id="tfa_236" class="">Pakistan</option>
<option value="tfa_237" id="tfa_237" class="">Palau</option>
<option value="tfa_238" id="tfa_238" class="">Panama</option>
<option value="tfa_239" id="tfa_239" class="">Papua New Guinea</option>
<option value="tfa_240" id="tfa_240" class="">Paraguay</option>
<option value="tfa_241" id="tfa_241" class="">Peru</option>
<option value="tfa_242" id="tfa_242" class="">Philippines</option>
<option value="tfa_243" id="tfa_243" class="">Pitcairn Islands</option>
<option value="tfa_244" id="tfa_244" class="">Poland</option>
<option value="tfa_245" id="tfa_245" class="">Portugal</option>
<option value="tfa_246" id="tfa_246" class="">Puerto Rico</option>
<option value="tfa_247" id="tfa_247" class="">Qatar</option>
<option value="tfa_248" id="tfa_248" class="">Reunion</option>
<option value="tfa_249" id="tfa_249" class="">Romania</option>
<option value="tfa_250" id="tfa_250" class="">Russia</option>
<option value="tfa_251" id="tfa_251" class="">Rwanda</option>
<option value="tfa_252" id="tfa_252" class="">Samoa</option>
<option value="tfa_253" id="tfa_253" class="">San Marino</option>
<option value="tfa_254" id="tfa_254" class="">São Tomé and Prìncipe</option>
<option value="tfa_255" id="tfa_255" class="">Saudi Arabia</option>
<option value="tfa_256" id="tfa_256" class="">Senegal</option>
<option value="tfa_257" id="tfa_257" class="">Serbia and Montenegro</option>
<option value="tfa_258" id="tfa_258" class="">Seychelles</option>
<option value="tfa_259" id="tfa_259" class="">Sierra Leone</option>
<option value="tfa_260" id="tfa_260" class="">Singapore</option>
<option value="tfa_261" id="tfa_261" class="">Slovakia</option>
<option value="tfa_262" id="tfa_262" class="">Slovenia</option>
<option value="tfa_263" id="tfa_263" class="">Solomon Islands</option>
<option value="tfa_264" id="tfa_264" class="">Somalia</option>
<option value="tfa_265" id="tfa_265" class="">South Africa</option>
<option value="tfa_266" id="tfa_266" class="">South Georgia and the South Sandwich Islands</option>
<option value="tfa_267" id="tfa_267" class="">Spain</option>
<option value="tfa_268" id="tfa_268" class="">Sri Lanka</option>
<option value="tfa_269" id="tfa_269" class="">St. Helena</option>
<option value="tfa_270" id="tfa_270" class="">St. Kitts and Nevis</option>
<option value="tfa_271" id="tfa_271" class="">St. Lucia</option>
<option value="tfa_272" id="tfa_272" class="">St. Pierre and Miquelon</option>
<option value="tfa_273" id="tfa_273" class="">St. Vincent and the Grenadines</option>
<option value="tfa_274" id="tfa_274" class="">Sudan</option>
<option value="tfa_275" id="tfa_275" class="">Suriname</option>
<option value="tfa_276" id="tfa_276" class="">Svalbard and Jan Mayen</option>
<option value="tfa_277" id="tfa_277" class="">Swaziland</option>
<option value="tfa_278" id="tfa_278" class="">Sweden</option>
<option value="tfa_279" id="tfa_279" class="">Switzerland</option>
<option value="tfa_280" id="tfa_280" class="">Syria</option>
<option value="tfa_281" id="tfa_281" class="">Taiwan</option>
<option value="tfa_282" id="tfa_282" class="">Tajikistan</option>
<option value="tfa_283" id="tfa_283" class="">Tanzania</option>
<option value="tfa_284" id="tfa_284" class="">Thailand</option>
<option value="tfa_285" id="tfa_285" class="">Togo</option>
<option value="tfa_286" id="tfa_286" class="">Tokelau</option>
<option value="tfa_287" id="tfa_287" class="">Tonga</option>
<option value="tfa_288" id="tfa_288" class="">Trinidad and Tobago</option>
<option value="tfa_289" id="tfa_289" class="">Tunisia</option>
<option value="tfa_290" id="tfa_290" class="">Turkey</option>
<option value="tfa_291" id="tfa_291" class="">Turkmenistan</option>
<option value="tfa_292" id="tfa_292" class="">Turks and Caicos Islands</option>
<option value="tfa_293" id="tfa_293" class="">Tuvalu</option>
<option value="tfa_294" id="tfa_294" class="">Uganda</option>
<option value="tfa_295" id="tfa_295" class="">Ukraine</option>
<option value="tfa_296" id="tfa_296" class="">United Arab Emirates</option>
<option value="tfa_297" id="tfa_297" class="">United Kingdom</option>
<option value="tfa_299" id="tfa_299" class="">United States Minor Outlying Islands</option>
<option value="tfa_300" id="tfa_300" class="">Uruguay</option>
<option value="tfa_301" id="tfa_301" class="">Uzbekistan</option>
<option value="tfa_302" id="tfa_302" class="">Vanuatu</option>
<option value="tfa_303" id="tfa_303" class="">Vatican City</option>
<option value="tfa_304" id="tfa_304" class="">Venezuela</option>
<option value="tfa_305" id="tfa_305" class="">Viet Nam</option>
<option value="tfa_306" id="tfa_306" class="">Virgin Islands ( British )</option>
<option value="tfa_307" id="tfa_307" class="">Virgin Islands</option>
<option value="tfa_308" id="tfa_308" class="">Wallis and Futuna</option>
<option value="tfa_309" id="tfa_309" class="">Yemen</option>
<option value="tfa_310" id="tfa_310" class="">Zambia</option>
<option value="tfa_311" id="tfa_311" class="">Zimbabwe</option></select></div>
</div>
</div>
<div id="tfa_646" class="section group">
<div id="tfa_650" class="section inline group">
<div class="oneField field-container-D     " id="tfa_647-D">
<label id="tfa_647-L" for="tfa_647" class="label preField reqMark">Receive text messages from TMU?</label><br><div class="inputWrapper"><select id="tfa_647" name="tfa_647" data-condition="`#tfa_406`" title="Receive text messages from TMU?" class="required"><option value="">Please select...</option>
<option value="tfa_648" id="tfa_648" class="">Yes</option>
<option value="tfa_649" id="tfa_649" class="">No</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_586-D">
<label id="tfa_586-L" for="tfa_586" class="label preField reqMark">How did you find out about us?</label><br><div class="inputWrapper"><select id="tfa_586" name="tfa_586" data-condition="`#tfa_406`" title="How did you find out about us?" class="required"><option value="">Please select...</option>
<option value="tfa_587" id="tfa_587" class="">Alumni Referral</option>
<option value="tfa_588" id="tfa_588" class="">Admissions Counselor visited church</option>
<option value="tfa_589" id="tfa_589" class="">Admissions Counselor visited school</option>
<option value="tfa_590" id="tfa_590" class="">Athletic Prospect</option>
<option value="tfa_591" id="tfa_591" class="">Camp</option>
<option value="tfa_592" id="tfa_592" class="">Christian Connector</option>
<option value="tfa_593" id="tfa_593" class="">College Fair</option>
<option value="tfa_594" id="tfa_594" class="">Conference</option>
<option value="tfa_595" id="tfa_595" class="">Current Student</option>
<option value="tfa_596" id="tfa_596" class="">Faculty Referral</option>
<option value="tfa_597" id="tfa_597" class="">Family Member</option>
<option value="tfa_598" id="tfa_598" class="">Friend</option>
<option value="tfa_599" id="tfa_599" class="">Grace to You Radio</option>
<option value="tfa_600" id="tfa_600" class="">High School Guidance Counselor</option>
<option value="tfa_601" id="tfa_601" class="">Internet (Search)</option>
<option value="tfa_602" id="tfa_602" class="">John MacArthur</option>
<option value="tfa_603" id="tfa_603" class="">Parent</option>
<option value="tfa_604" id="tfa_604" class="">Pastor</option>
<option value="tfa_605" id="tfa_605" class="">Phone Call</option>
<option value="tfa_606" id="tfa_606" class="">Private Colleges &amp; Universities Magazine</option>
<option value="tfa_607" id="tfa_607" class="">TMU Online Program</option>
<option value="tfa_608" id="tfa_608" class="">Website (TMU)</option>
<option value="tfa_609" id="tfa_609" data-conditionals="#tfa_645" class="">Other</option></select></div>
</div>
</div>
<div class="oneField field-container-D     " id="tfa_610-D">
<label id="tfa_610-L" for="tfa_610" class="label preField reqMark">How did you hear about us?</label><br><div class="inputWrapper"><select id="tfa_610" name="tfa_610" data-condition="`#tfa_509`" title="How did you hear about us?" class="required"><option value="">Please select...</option>
<option value="tfa_611" id="tfa_611" class="">Internet Search</option>
<option value="tfa_612" id="tfa_612" class="">Pastor</option>
<option value="tfa_613" id="tfa_613" class="">Church</option>
<option value="tfa_614" id="tfa_614" class="">Family Member</option>
<option value="tfa_615" id="tfa_615" class="">Friend</option>
<option value="tfa_616" id="tfa_616" class="">TMU Alumni</option>
<option value="tfa_617" id="tfa_617" class="">Current TMU Student</option>
<option value="tfa_618" id="tfa_618" class="">TMU Undergraduate Biblical Counseling program</option>
<option value="tfa_619" id="tfa_619" class="">TMU Faculty</option>
<option value="tfa_620" id="tfa_620" class="">TMU Professor Speaking at a Conference</option>
<option value="tfa_621" id="tfa_621" class="">John MacArthur</option>
<option value="tfa_622" id="tfa_622" class="">Grace To You</option>
<option value="tfa_623" id="tfa_623" class="">Other Radio Advertisement</option>
<option value="tfa_624" id="tfa_624" class="">The Master's Seminary</option>
<option value="tfa_625" id="tfa_625" class="">Association of Certified Biblical Counselors (ACBC)</option>
<option value="tfa_626" id="tfa_626" class="">Biblical Counseling Coalition (BCC)</option>
<option value="tfa_627" id="tfa_627" class="">Institute for Biblical Counseling &amp; Discipleship (IBCD)</option>
<option value="tfa_628" id="tfa_628" class="">Shepherd's Conference</option>
<option value="tfa_629" id="tfa_629" class="">Previous school of study</option>
<option value="tfa_630" id="tfa_630" data-conditionals="#tfa_645" class="">Other</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_631-D">
<label id="tfa_631-L" for="tfa_631" class="label preField reqMark">How did you find out about TMU Online?</label><br><div class="inputWrapper"><select id="tfa_631" name="tfa_631" data-condition="`#tfa_407` OR `#tfa_497` OR `#tfa_510` OR `#tfa_511`" title="How did you find out about TMU Online?" class="required"><option value="">Please select...</option>
<option value="tfa_633" id="tfa_633" class="">Family</option>
<option value="tfa_634" id="tfa_634" class="">Friend</option>
<option value="tfa_635" id="tfa_635" class="">Alumni</option>
<option value="tfa_636" id="tfa_636" class="">Pastor</option>
<option value="tfa_637" id="tfa_637" class="">Social Media</option>
<option value="tfa_638" id="tfa_638" class="">Homeschool Conference</option>
<option value="tfa_639" id="tfa_639" class="">Shepherds Conference</option>
<option value="tfa_640" id="tfa_640" class="">Radio</option>
<option value="tfa_641" id="tfa_641" class="">Magazine</option>
<option value="tfa_642" id="tfa_642" class="">High School</option>
<option value="tfa_643" id="tfa_643" class="">Homeschool Group</option>
<option value="tfa_644" id="tfa_644" data-conditionals="#tfa_645" class="">Other</option></select></div>
</div>
<div class="oneField field-container-D     " id="tfa_645-D">
<label id="tfa_645-L" for="tfa_645" class="label preField reqMark">Since you selected other to the previous question, can you specify?</label><br><div class="inputWrapper"><input type="text" id="tfa_645" name="tfa_645" value="" placeholder="" data-condition="`#tfa_609` OR `#tfa_630` OR `#tfa_644`" title="Since you selected other to the previous question, can you specify?" class="required"></div>
</div>
</div>
<input type="hidden" id="tfa_568" name="tfa_568" value="TargetX Inquiry Form" class=""><input type="hidden" id="tfa_573" name="tfa_573" value="Inquiry" class=""><div id="tfa_572" class="section group wf-acl-hidden">
<label class="label preField" id="tfa_572-L">Email Responses To</label><br><div class="oneField field-container-D     " id="tfa_570-D">
<label id="tfa_570-L" for="tfa_570" class="label preField ">Trad and Online Departments - Email</label><br><div class="inputWrapper"><input type="text" id="tfa_570" name="tfa_570" value="" placeholder="" readonly title="Trad and Online Departments - Email" class="formula=TradandOnlineDepartments readonly"></div>
</div>
<div class="oneField field-container-D     " id="tfa_571-D">
<label id="tfa_571-L" for="tfa_571" class="label preField ">Grad Department - Email</label><br><div class="inputWrapper"><input type="text" id="tfa_571" name="tfa_571" value="" placeholder="" readonly title="Grad Department - Email" class="formula=GradDepartment readonly"></div>
</div>
</div>
<div class="actions" id="tfa_0-A"><input type="submit" class="primaryAction" value="Submit"></div>
<div style="clear:both"></div>
<input type="hidden" value="217736" name="tfa_dbFormId" id="tfa_dbFormId"><input type="hidden" value="" name="tfa_dbResponseId" id="tfa_dbResponseId"><input type="hidden" value="90d8edc6e34ea1d19c577fcd5f104eb3" name="tfa_dbControl" id="tfa_dbControl"><input type="hidden" value="2" name="tfa_dbVersionId" id="tfa_dbVersionId"><input type="hidden" value="" name="tfa_switchedoff" id="tfa_switchedoff">
</form>
</div></div>

  <p class="supportInfo" >
        <a href="https://masters.tfaforms.net/forms/help/217736" target="new" style="font-size: 0.7em;">
      Need assistance with this form?    </a>

      </p>

</div>