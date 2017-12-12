---
title: STAMPEDE
date: 2017-12-12 04:05:00 Z
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

    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-layout.css?v=4612" rel="stylesheet" type="text/css" />
    <!--[if IE 8]>
    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-layout-ie8.css" rel="stylesheet" type="text/css" />
    <![endif]-->
    <!--[if IE 7]>
    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-layout-ie7.css" rel="stylesheet" type="text/css" />
    <![endif]-->
    <!--[if IE 6]>
    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-layout-ie6.css" rel="stylesheet" type="text/css" />
    <![endif]-->

    <link href="https://masters.tfaforms.net/themes/get/9" rel="stylesheet" type="text/css" />
    <link href="https://masters.tfaforms.net/form-builder/4.3.0/css/wforms-jsonly.css?v=4612" rel="alternate stylesheet" title="This stylesheet activated by javascript" type="text/css" />
    <script type="text/javascript" src="https://masters.tfaforms.net/wForms/3.10/js/wforms.js?v=4612"></script>
    <script type="text/javascript">
        wFORMS.behaviors.prefill.skip = false;
    </script>
        <script type="text/javascript" src="https://masters.tfaforms.net/wForms/3.10/js/localization-en_US.js?v=4612"></script>

<!-- FORM: BODY SECTION -->
<div class="wFormContainer" style="max-width: 700px; width:auto;" >

  <style type="text/css">
                #tfa_9,
                *[id^="tfa_9["] {
                    width: 770px !important;
                }
                #tfa_9-D,
                *[id^="tfa_9["][class~="field-container-D"] {
                    width: auto !important;
                }
            </style><div class=""><div class="wForm" id="tfa_0-WRPR" dir="ltr">
<div class="codesection" id="code-tfa_0"></div>
<h3 class="wFormTitle" id="tfa_0-T"><img src="//masters.tfaforms.net/forms/get_image/9/iQHlqrntfFITIYS8kSyX7XBJwKWIsgdWJMYeZZeo9RCUrpvmxocG2ti67CzDQWpZ-TMU_WebLogo_NavyGold.png" alt="The Master's University" style="max-width: 100%;"></h3>
<form method="post" action="https://masters.tfaforms.net/responses/processor" class="hintsBelow labelsAbove" id="tfa_0">
<div class="htmlSection" id="tfa_1"><div class="htmlContent" id="tfa_1-HTML"><div style="text-align: center;">.<iframe width="650" height="240" src="https://www.youtube.com/embed/AwBsZFY2Co0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe></div></div></div>
<div class="htmlSection" id="tfa_4"><div class="htmlContent" id="tfa_4-HTML"><div style="text-align: center;"><b>STAMPEDE!</b></div><div><br></div>Will you be attending? Bring family and friends to cheer on the Mustangs as Men's &amp; Women's Basketball compete against Westmont! Come early for family-friendly activities and BBQ with the rest of the Mustang fans.&nbsp;<div><br></div><div style="text-align: center;"><b>When</b></div><div style="text-align: center;">Saturday, January 20, 2018&nbsp;</div><div style="text-align: center;"><b><br></b></div><div style="text-align: center;"><b>Time</b></div><div style="text-align: center;">3:30 PM - 9:00 PM&nbsp;</div><div style="text-align: center;"><b><br></b></div><div style="text-align: center;"><b>Where</b></div><div style="text-align: center;"><b>The Master's University&nbsp;</b></div><div style="text-align: center;">&nbsp;21726 Placerita Canyon Road</div><div style="text-align: center;">Santa Clarita, CA 91321
 
 
</div><div style="text-align: center;"><br></div><div style="text-align: left;"><b>Register now:</b></div></div></div>
<div class="oneField field-container-D     " id="tfa_5-D">
<label id="tfa_5-L" for="tfa_5" class="label preField ">First Name</label><br><div class="inputWrapper"><input type="text" id="tfa_5" name="tfa_5" value="" placeholder="" title="First Name" class=""></div>
</div>
<div class="oneField field-container-D     " id="tfa_6-D">
<label id="tfa_6-L" for="tfa_6" class="label preField ">Last Name</label><br><div class="inputWrapper"><input type="text" id="tfa_6" name="tfa_6" value="" placeholder="" title="Last Name" class=""></div>
</div>
<div class="oneField field-container-D     " id="tfa_7-D">
<label id="tfa_7-L" for="tfa_7" class="label preField ">E-Mail</label><br><div class="inputWrapper"><input type="text" id="tfa_7" name="tfa_7" value="" placeholder="" title="E-Mail" class=""></div>
</div>
<div class="oneField field-container-D     " id="tfa_8-D">
<label id="tfa_8-L" for="tfa_8" class="label preField ">Contact Number</label><br><div class="inputWrapper"><input type="text" id="tfa_8" name="tfa_8" value="" placeholder="" title="Contact Number" class=""></div>
</div>
<div class="oneField field-container-D     " id="tfa_9-D">
<label id="tfa_9-L" for="tfa_9" class="label preField ">Comments or questions?</label><br><div class="inputWrapper"><input type="text" id="tfa_9" name="tfa_9" value="" placeholder="" title="Comments or questions?" class=""></div>
</div>
<div class="actions" id="tfa_0-A"><input type="submit" class="primaryAction" value="Submit"></div>
<div style="clear:both"></div>
<input type="hidden" value="217734" name="tfa_dbFormId" id="tfa_dbFormId"><input type="hidden" value="" name="tfa_dbResponseId" id="tfa_dbResponseId"><input type="hidden" value="2ab3191916a681093f5e150302e6f1ec" name="tfa_dbControl" id="tfa_dbControl"><input type="hidden" value="33" name="tfa_dbVersionId" id="tfa_dbVersionId"><input type="hidden" value="" name="tfa_switchedoff" id="tfa_switchedoff">
</form>
</div></div>

  <p class="supportInfo" >
        <a href="https://masters.tfaforms.net/forms/help/217734" target="new" style="font-size: 0.7em;">
      Need assistance with this form?    </a>

      </p>

</div>