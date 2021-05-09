function CToF(celsius) 
{
  let farh , cel;
  cel = parseInt(prompt("Enter The Value in Celcius : "));
  farh  = (cel  * 1.8) + 32;
  document.write("Temperature Converted in Fehrenheit :" +farh+"<br>"); 
}
CToF();

function FToC(fehrenheit) 
{
  let farh, cel;  
  farh = parseInt(prompt("Enter The Value in Fehrenhiet : "));
  cel = (farh - 32) * 0.5556//;
  document.write("Temperature Converted in Celcius :" + cel);
}
FToC();
