



function search(){

var b=document.getElementById("teams").value;
var x=document.getElementById("GP").value;
var d=[];


if (b=="GAS"){
for(i=0;i<a.length;i++){
if(a[i].GAS>=x)	{
d.push(a[i].name);	
d.push(a[i].GAS);
}
}
}

else if (b=="DR"){
for(i=0;i<a.length;i++){
if(a[i].DR>=x)	{
d.push(a[i].name);	
d.push(a[i].DR);
}
}
}

else if (b=="JKR"){
for(i=0;i<a.length;i++){
if(a[i].JKR>=x)	{
d.push(a[i].name);	
d.push(a[i].JKR);
}
}
}

else if (b=="Geo"){
for(i=0;i<a.length;i++){
if(a[i].Geo>=x)	{
d.push(a[i].name);	
d.push(a[i].Geo);
}
}
}

else if (b=="NS"){
for(i=0;i<a.length;i++){
if(a[i].NS>=x)	{
d.push(a[i].name);	
d.push(a[i].NS);
}
}
}

else if (b=="FO"){
for(i=0;i<a.length;i++){
if(a[i].FO>=x)	{
d.push(a[i].name);	
d.push(a[i].FO);
}
}
}

else if (b=="RT"){
for(i=0;i<a.length;i++){
if(a[i].RT>=x)	{
d.push(a[i].name);	
d.push(a[i].RT);
}
}
}

else if (b=="GG"){
for(i=0;i<a.length;i++){
if(a[i].GG>=x)	{
d.push(a[i].name);	
d.push(a[i].GG);
}
}
}

else if (b=="EP"){
for(i=0;i<a.length;i++){
if(a[i].EP>=x)	{
d.push(a[i].name);	
d.push(a[i].EP);
}
}
}

else if (b=="STR"){
for(i=0;i<a.length;i++){
if(a[i].STR>=x)	{
d.push(a[i].name);	
d.push(a[i].STR);
}
}
}

else if (b=="PA"){
for(i=0;i<a.length;i++){
if(a[i].PA>=x)	{
d.push(a[i].name);	
d.push(a[i].PA);
}
}
}

else if (b=="CLS"){
for(i=0;i<a.length;i++){
if(a[i].CLS>=x)	{
d.push(a[i].name);	
d.push(a[i].CLS);
}
}
}

else if (b=="OR"){
for(i=0;i<a.length;i++){
if(a[i].OR>=x)	{
d.push(a[i].name);	
d.push(a[i].OR);
}
}
}

else if (b=="PS"){
for(i=0;i<a.length;i++){
if(a[i].PS>=x)	{
d.push(a[i].name);	
d.push(a[i].PS);
}
}
}

else if (b=="Clones"){
for(i=0;i<a.length;i++){
if(a[i].Clones>=x)	{
d.push(a[i].name);	
d.push(a[i].Clones);
}
}
}

else if (b=="S"){
for(i=0;i<a.length;i++){
if(a[i].S>=x)	{
d.push(a[i].name);	
d.push(a[i].S);
}
}
}

else if (b=="R"){
for(i=0;i<a.length;i++){
if(a[i].R>=x)	{
d.push(a[i].name);	
d.push(a[i].R);
}
}
}

else if (b=="B"){
for(i=0;i<a.length;i++){
if(a[i].B>=x)	{
d.push(a[i].name);	
d.push(a[i].B);
}
}
}

else if (b=="IT"){
for(i=0;i<a.length;i++){
if(a[i].IT>=x)	{
d.push(a[i].name);	
d.push(a[i].IT);
}
}
}

else if (b=="EN"){
for(i=0;i<a.length;i++){
if(a[i].EN>=x)	{
d.push(a[i].name);	
d.push(a[i].EN);
}
}
}

else if (b=="E"){
for(i=0;i<a.length;i++){
if(a[i].E>=x)	{
d.push(a[i].name);	
d.push(a[i].E);
}
}
}
else if (b=="BH"){
for(i=0;i<a.length;i++){
if(a[i].BH>=x)	{
d.push(a[i].name);	
d.push(a[i].BH);
}
}
}


var e="";
var counter=0;
for (i=0;i<d.length;i++){
	

	e=e+d[i]
if (counter==0){
counter+=1;
e=e+": ";
}
else{
counter-=1;
e=e+"</br>";

}
}
document.getElementById("demo").innerHTML=e;

}

function testing(){
var allycode=document.getElementByID("ally");
var request = new XMLHttpRequest();
request.open('GET', 'https://api.swgoh.help/swgoh/players', true);

request.send()








}