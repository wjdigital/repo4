var whatsappPadrao=document.getElementById("zap");var style="position: fixed; bottom: 10px; right: 10px; z-index: 9999;";if(whatsappPadrao)
{whatsappPadrao.style.display="none";var whatsapp=document.createElement("a");whatsapp.setAttribute("href","https://cavalogrande.com/scripts/whatsapp.php");whatsapp.setAttribute("target","_BLANK");whatsapp.setAttribute("style",style);whatsapp.innerHTML="<img src='https://cavalogrande.com/midia/img/whatsapp.png' />";document.body.appendChild(whatsapp);}