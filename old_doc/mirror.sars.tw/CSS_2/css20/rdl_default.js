
var sClearEvents='event.returnValue=false;return false;';
var oMenuBar;
var arrActiveMenus=new Array();
var sBlurColor='#FFFFFF';
var sHoverColor='#FFCC00';
var sSubImage='url(images/rdl_submenu.gif)';
var sMenuBorder='1px solid #FFFFFF';
var iOffsetLeft=0;
var iBaseZIndex=4;
var sDefaultItemCode='return false;';

var arrMenuBarItems=new Array(
new Array('','','return false;'),
new Array('�˦������U ','index.htm',sDefaultItemCode),
new Array('�W','','return false;'),
new Array('����','index.htm',sDefaultItemCode),
new Array('�W','','return false;'),
new Array('�ڪ��H�c','index.htm',sDefaultItemCode),
new Array('�W','','return false;'),
new Array('���U','index.htm',sDefaultItemCode),
new Array(' ','','return false;')
);

var arrMenus5=new Array(
new Array('rainersu@hotmail.com','mailto:rainersu@hotmail.com','','border')
);

var arrMenus7=new Array(
new Array('���󦹤�U','rdl_readme.html','','border'),
new Array('�˦���²��','rdl_css.html','',''),
new Array('�̲ץΤ��ĳ','rdl_rain1977.html','','')
);

var arrMenus3=new Array(
new Array('�C���(Color Tables)','z_color.html','','border'),
new Array('�]������(Media Types)','z_media.html','',''),
new Array('�S��奻�M�r�Ź���','z_symbol.html','',''),
new Array('�y���N�X(Language Codes)','z_languagecodes.html','',''),
new Array('�r�Ŷ��ѧO','z_charset.html','',''),
new Array('���[�R�W����','z_additional.html','',''),
new Array('ISO Latin-1�r�Ŷ�','z_iso.html','','')
);

var arrMenus1=new Array(
new Array('²��  Introduction','submenu','window.location="l_introduction.html";return false;','border'),
new Array('�ݩ�  Properties','submenu','window.location="l_properties.html";return false;',''),
new Array('��ܲ�  Selectors','l_selectors.html','',''),
new Array('����  Pseudo-Classes','l_pseudoclasses.html','',''),
new Array('���ﹳ  Pseudo-Elements','l_pseudoelements.html','',''),
new Array('�o��  Filters','submenu','window.location="l_filters.html";return false;',''),
new Array('��� Units','submenu','window.location="l_units.html";return false;',''),
new Array('�W�h  At-Rules','l_atrules.html','',''),
new Array('�n��  Declaration','l_declarations.html','','')
);

var arrMenus16=new Array(
new Array('����  Length','d_length.html','','border'),
new Array('�C��  Color','d_color.html','',''),
new Array('����  Angle','d_angle.html','',''),
new Array('�ɶ�  Time','d_time.html','',''),
new Array('�W�v  Frequency','d_frequency.html','','')
);

var arrMenus15=new Array(
new Array('�ɭ��o��  Procedural Surfaces','d_surfaces.html','','border'),
new Array('�R�A�o��  Static Filters','d_static.html','',''),
new Array('�ഫ�o��  Transitions','d_transitions.html','','')
);

var arrMenus10=new Array(
new Array('�˦���²��','rdl_css.html',sDefaultItemCode,'border')
);

var arrMenus11=new Array(
new Array('�r��  Font','d_font.html','','border'),
new Array('�奻  Text','d_text.html','',''),
new Array('�I��  Background','d_background.html','',''),
new Array('�w��  Positioning','d_positioning.html','',''),
new Array('�ؤo  Dimensions','d_dimensions.html','',''),
new Array('�G��  Layout','d_layout.html','',''),
new Array('�~�ɤB  Margins','d_margins.html','',''),
new Array('����  Outlines','d_outlines.html','',''),
new Array('���  border','d_border.html','',''),
new Array('���e  Generated Content','d_content.html','',''),
new Array('���ɤB  Paddings','d_paddings.html','',''),
new Array('�C��  Lists','d_lists.html','',''),
new Array('���  table','d_table.html','',''),
new Array('�u�ʱ�  Scrollbar','d_scrollbar.html','',''),
new Array('���L  Printing','d_printing.html','',''),
new Array('�n��  Aural','d_aural.html','',''),
new Array('�䥦  Classification','d_classification.html','','')
);


function showMenu(e){
event.cancelBubble=true;
var oItem=event.srcElement;
if (oItem.id.indexOf('idItem')==-1) return;
if (oItem.href.length>4) oItem.style.color=sHoverColor;

var sTempID=oItem.id.replace('Item','Menu');
var oMenu=document.getElementById(sTempID);
if (oMenu==null) return;

var oTempElement=oItem;
if (oItem.parentElement==oMenuBar) {var iTop=oTempElement.offsetHeight;var iLeft=0+iOffsetLeft;}
else {var iLeft=oTempElement.offsetWidth+iOffsetLeft;var iTop=0;}

while (oTempElement!=null){
iTop+=oTempElement.offsetTop;
iLeft+=oTempElement.offsetLeft;
oTempElement=oTempElement.parentElement;
}

with(oMenu.style) {
posTop=iTop;
posLeft=iLeft;
display='block';
}

var iMenuBarPlace=oMenuBar.offsetLeft+oMenuBar.offsetWidth;
var iMenuPlace=iLeft+oMenu.offsetWidth;
//document.title=iMenuBarPlace+','+iMenuPlace;

if (iMenuPlace>=iMenuBarPlace){
var arrTemp=oMenu.id.split('_');
if (arrTemp.length>2) {
var sMenuID=oMenu.id.slice(0,oMenu.id.length-2);
var oParentMenu=document.getElementById(sMenuID);
if (oParentMenu!=null) {iLeft=oParentMenu.offsetLeft-oMenu.offsetWidth-iOffsetLeft;}
}
else  {
iLeft=iMenuBarPlace-oMenu.offsetWidth+iOffsetLeft;
}
oMenu.style.posLeft=iLeft;
}

}



function hideMenu(e){

event.cancelBubble=true;

var oToElement=event.toElement;
if (oToElement==null || oToElement.id.indexOf('idItem')==-1) {clearMenus();return;}

var oSrcElement=event.srcElement;
oSrcElement.style.color=sBlurColor;
var sMenuID=oSrcElement.id.replace('Item','Menu');
var oMenu=document.getElementById(sMenuID);
if (oMenu!=null && !oMenu.contains(oToElement)) oMenu.style.display='none';
if (oMenu!=null && oMenu.contains(oToElement)) oSrcElement.style.color=sHoverColor;

if (oSrcElement.id.length>oToElement.id.length) {var sLID=oSrcElement.id;sSID=oToElement.id;}
else {var sLID=oToElement.id;sSID=oSrcElement.id;}
//document.title=sLID+'-'+sSID

if (sLID.length-sSID.length>3) {clearMenus();return;}  /* �ץ��q�l��檺�l��檽������menubar�W�����خɪ�BUG */

var sItemID=sLID.slice(0,sLID.length-2);
var oItem=document.getElementById(sItemID);

if (sSID.indexOf(sItemID)!=-1) {
if (oItem!=null) oItem.style.color=sHoverColor;
return;
}

var sMenuID=sItemID.replace('Item','Menu');
//document.title=sLID+'-'+sSID+'-'+sMenuID
var oMenu=document.getElementById(sMenuID);

if (oMenu!=null) oMenu.style.display='none';
if (oItem!=null) oItem.style.color=sBlurColor;

}



function clearMenus(){

var collAnchors=document.anchors;

for (n=0;n<collAnchors.length;n++) {
if (collAnchors[n].className=='cssMenuA') collAnchors[n].style.color=sBlurColor;
}

for (m=0;m<arrActiveMenus.length;m++){
document.all(arrActiveMenus[m]).style.display='none';
}

}



function createMenu(sValue,arrItems,iWidth){

var oTempMenu=document.createElement('<div id=idMenu_'+sValue+'>');
document.body.appendChild(oTempMenu);
arrActiveMenus[arrActiveMenus.length]=oTempMenu.id;    /* �bJScript5.5+���i�H�ϥ�arrActiveMenus.push(oTempMenu.id); */

with (oTempMenu) {
className='cssMenu';
style.posWidth=iWidth;
style.zIndex=iBaseZIndex+id.length;
onselectstart=ondragstart=new Function(sClearEvents);
}

for (i=0;i<arrItems.length;i++){
var oTempA=document.createElement('<a id=idItem_'+sValue+'_'+i.toString()+'>');
oTempMenu.appendChild(oTempA);
with (oTempA) {
className='cssMenuA';
style.posWidth=iWidth;
innerText=arrItems[i][0];
href=arrItems[i][1];
/*if (href=='submenu') style.backgroundImage=sSubImage;*/
if (arrItems[i][3]=='border') style.borderTop=sMenuBorder;
onmouseover=showMenu;
onmouseout=hideMenu;
if (arrItems[i][2]!='') onclick=new Function(arrItems[i][2]);
}
}

}



function createMenuBar(){

oMenuBar=document.createElement('<div id=idMenuBar nowrap>');
document.body.appendChild(oMenuBar);

for (i=0;i<arrMenuBarItems.length;i++){
var oTempA=document.createElement('<a id=idItem_'+i.toString()+'>');
oMenuBar.appendChild(oTempA);
with (oTempA) {
className='cssMenuA';
innerText=arrMenuBarItems[i][0];
if (arrMenuBarItems[i][1]!='') href=arrMenuBarItems[i][1];
onmouseover=showMenu;
onmouseout=hideMenu;
if (arrMenuBarItems[i][2]!='') onclick=new Function(arrMenuBarItems[i][2]);
}
}

}


function window.onload(){

createMenu('1',arrMenus1,200);
createMenu('3',arrMenus3,200);
createMenu('5',arrMenus5,200);
createMenu('7',arrMenus7,180);
createMenu('1_0',arrMenus10,200);
createMenu('1_1',arrMenus11,190);
createMenu('1_5',arrMenus15,210);
createMenu('1_6',arrMenus16,170);
createMenuBar();

}


/**************************************
 Ĭ�R(Rainer Su)���v�Ҧ��A�O�d�Ҧ��v�Q�C
**************************************/
