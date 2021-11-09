async function merge(ele,l,mid,h)
{
    let k=l;
    let b=new Array(100);
    let m;
    let n1=mid-l+1;
    let n2=h-mid;
    let i=l;
    let j=mid+1;

    for(let itr=i;itr<=mid;itr++)
        {
            await waitforme(delay);
            ele[itr].style.background="orange";
        }
        for(let jtr=mid+1;jtr<=h;jtr++)
        {
            await waitforme(delay);
            ele[jtr].style.background="yellow";
        }
    
    while((i<=mid) && (j<=h))
    {
        
        if(parseInt(ele[i].style.height)<=parseInt(ele[j].style.height))
        {
            
            if((n1+n2)===ele.length)
            {
                await waitforme(delay);
                ele[k].style.background="green";
            } 
            else
            { 
                await waitforme(delay);
                ele[k].style.background="lightgreen";
            }  
            b[k]=ele[i].style.height;       
            i++;
            k++;
        }
         else 
        {
           
            if((n1+n2)===ele.length)
            {
                await waitforme(delay);
                ele[k].style.background="green";
            } 
            else
            {
                await waitforme(delay);
                ele[k].style.background="lightgreen";
            }  
            

            b[k]=ele[j].style.height;
            j++;
            k++;
        }
        
    }
    if(i>mid)
    {
         for(m=j;m<=h;m++)
         {
            console.log("copying right side ele");
            await waitforme(delay);
            if((n1+n2)===ele.length)
            {
                await waitforme(delay);
                ele[k].style.background="green";
            } 
            else
            {
                await waitforme(delay);
                ele[k].style.background="lightgreen";
            }  
             b[k]=ele[m].style.height;
             k++;
         }   
    }
    else 
    {
        for(m=i;m<=mid;m++)
         {
             console.log("copying left side ele");
             await waitforme(delay);
             if((n1+n2)===ele.length)
             {
                await waitforme(delay);
                 ele[k].style.background="green";
             } 
             else
             {
                await waitforme(delay);
                 ele[k].style.background="lightgreen";
             }  
             b[k]=ele[m].style.height;
             k++;
         }   
    }
    for(let p=l;p<=h;p++)
    {
        console.log("copying array");
        ele[p].style.height=b[p];
    }
   
}
async function mergesort(ele,l,h)
{
    if(l<h)
    {
       const mid=l+Math.floor((h-l)/2);
       await mergesort(ele,l,mid);
       await mergesort(ele,mid+1,h);
       await merge(ele,l,mid,h);
    }

}

const mergebtn=document.querySelector(".mergesort");
mergebtn.addEventListener("click",async function(){
    alert("mergesort");
    let ele=document.querySelectorAll(".bar");
    let l=0;
    let h=parseInt(ele.length)-1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergesort(ele,l,h);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
})