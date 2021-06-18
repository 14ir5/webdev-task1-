var a,count=0;
var org,nw,rmv;
var ndx,k,l,m,n,o,p,q,r,s;
org=[k,l,m,n,o,p,q,r,s];
var bestscore=0;
bs=document.createElement('div');
bs.innerHTML="best score:"+bestscore+"";
bs.style.width="100px"
bs.style.height="50px"
bs.style.backgroundColor="yellow"
bs.style.textColor="black"
document.getElementById("bd").appendChild(bs);
function rdmclr()
{
  if(count>0 && document.getElementById("info")!=null)
  {
     rmv=document.getElementById("info");
     rmv.remove();
   
  }
  if(bestscore!=0)
  {
    bs.remove();
    bs=document.createElement('div');
    bs.innerHTML="best score:"+bestscore+"";
    bs.style.width="100px"
    bs.style.height="50px"
    bs.style.backgroundColor="yellow"
    bs.style.textColor="black"
    document.getElementById("bd").appendChild(bs);
  }
  count=0;
  
   ndx=24;
   for(let i=0;i<9;i++)
  {
  org[i]=document.getElementsByClassName("rdm")[i].style.backgroundColor=rdm();
  }

 a=[document.getElementsByClassName("rdm2")[0],document.getElementsByClassName("rdm2")[1],document.getElementsByClassName("rdm2")[2],document.getElementsByClassName("rdm2")[3],document.getElementsByClassName("rdm2")[4], document.getElementsByClassName("rdm2")[5],document.getElementsByClassName("rdm2")[6],document.getElementsByClassName("rdm2")[7],
  document.getElementsByClassName("rdm2")[8],document.getElementsByClassName("rdm2")[9],document.getElementsByClassName("rdm2")[10],document.getElementsByClassName("rdm2")[11],document.getElementsByClassName("rdm2")[12],
  document.getElementsByClassName("rdm2")[13],document.getElementsByClassName("rdm2")[14], document.getElementsByClassName("rdm2")[15], document.getElementsByClassName("rdm2")[16],document.getElementsByClassName("rdm2")[17],
  document.getElementsByClassName("rdm2")[18],document.getElementsByClassName("rdm2")[19],document.getElementsByClassName("rdm2")[20], document.getElementsByClassName("rdm2")[21], document.getElementsByClassName("rdm2")[22],
  document.getElementsByClassName("rdm2")[23],document.getElementsByClassName("rdm2")[24]];  
 
  for(let i=0;i<9;i++)
  {
      a[i].style.backgroundColor=org[i];
  }
  a[24].style.backgroundColor='rgb(188, 250, 152)';

  for(let i=9;i<24;i++)
  a[i].style.backgroundColor=rdm2();
       
  
      for(let j=0;j<24;j++)
      {
            let jr=Math.floor(Math.random()*24);
            var tst=a[jr].style.backgroundColor;
            a[jr].style.backgroundColor=a[j].style.backgroundColor;
            a[j].style.backgroundColor=tst;
      }
  
  for(let i=6;i<9;i++)
  a[i].style.border="2px solid white";
  for(let i=11;i<14;i++)
  a[i].style.border="2px solid white";
  for(let i=16;i<19;i++)
  a[i].style.border="2px solid white";
   
}



function rdm()
{
    return ['rgb(112, 3, 39)','purple','rgb(173, 62, 238)','yellow','orange'][Math.floor(Math.random()*5)];
}
function rdm2()
{
    return ['purple','yellow','orange','rgb(112, 3, 39)','rgb(238, 62, 120)','rgb(173, 62, 238)','red','rgb(115, 170, 44)'][Math.floor(Math.random()*7)];
}


function swap(x)
{
    
    count++
    for(let mw=0;mw<25;mw++)
        if(a[mw].id==x.id)
        var z=mw;

        if(z==ndx-1|| z==ndx+1|| z==ndx+5|| z==ndx-5)
        {
              var y=document.getElementsByClassName("rdm2")[ndx];
              var  temp=document.getElementsByClassName("rdm2")[ndx].style.backgroundColor;
              y.style.backgroundColor=x.style.backgroundColor;
              x.style.backgroundColor=temp;
              ndx=z;
              for(let i=0,j=6;i<9,j<19;i++,j++)
             {
                    if(a[j].style.backgroundColor==org[i])
                    var flag=1;
                     else
                   { 
                       flag=0;
                     break;
                   }
                   if(j==8 || j==13 )
                   j=j+2;
    
             }
            if(flag==1)
             {
               nw=document.createElement('div');
               nw.innerHTML="you won,score is " + count +" ";
               nw.style.width="150px"
               nw.style.height="150px"
               nw.style.backgroundColor="green"
               document.getElementById("bd").appendChild(nw);
               nw.style.backgroundPosition="center";
               nw.setAttribute('id',"info");
               if(bestscore==0)
               bestscore=count;
               else if(bestscore>count);
               bestscore=count;

             }
        }
  }
function shuffle()
{
  
  if(count>0)
  {
     rmv=document.getElementById("info");
     rmv.remove();
   
 
  }
  if(bestscore!=0)
  {
  bs.remove();
  bs=document.createElement('div');
  bs.innerHTML="best score:"+bestscore+"";
  bs.style.width="100px"
  bs.style.height="50px"
  bs.style.backgroundColor="yellow"
  bs.style.textColor="black"
  bs.style.fontstyle="solid"
  document.getElementById("bd").appendChild(bs);
  }
  count=0;
  

ndx=24;
for(let i=0;i<9;i++)
  {
      a[i].style.backgroundColor=org[i];
  }
  a[24].style.backgroundColor='rgb(188, 250, 152)';

  for(let i=9;i<24;i++)
  a[i].style.backgroundColor=rdm2();
       for(let j=0;j<24;j++)
      {
      let jr=Math.floor(Math.random()*24);
      var tst=a[jr].style.backgroundColor;
      a[jr].style.backgroundColor=a[j].style.backgroundColor;
      a[j].style.backgroundColor=tst;
     }
 }