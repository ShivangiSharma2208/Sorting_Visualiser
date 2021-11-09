async function partition(ele,p,q)
{
    let i=p;
    let j=q;
    let t=ele[p];
    t.style.background = 'red';  //starting element as pivot element
    do
    {
    
       while((parseInt(ele[i].style.height) <= parseInt(t.style.height)) && (i<ele.length-1))
       {
            if(parseInt(ele[i].style.height) == parseInt(t.style.height))
            {
                i++;
                await waitforme(delay);
                // ele[i].style.background="orange";
            }
            else
            {
                await waitforme(delay);
                ele[i].style.background="orange";
                i++;
                
            }
           
           
       }  
       
       while(parseInt(ele[j].style.height) > parseInt(t.style.height))
       { 
           await waitforme(delay);
           ele[j].style.background="pink";
           j--;
          
       }
       if(i<j)
       {
         await waitforme(delay);
         swap(ele[i],ele[j]);  
         ele[j].style.background="yellow";
         ele[i].style.background="yellow";
        }
               
    }while(i<j);
 
     swap(ele[p],ele[j]);
    // ele[p].style.height=ele[j].style.height;
    // ele[j].style.height=t;
    await waitforme(delay);
    ele[j].style.background="green";
    for(let k = 0; k < ele.length; k++)
    {
        if(ele[k].style.background != 'green')
        {
            await waitforme(10);
            ele[k].style.background = 'beige';
        }
        
    }
    return j;

}
async function quicksort(ele,p,q)
{
    if(p<q)
    {
        let j=await partition(ele,p,q);
        await quicksort(ele,p,j-1);
        await quicksort(ele,j+1,q);
    }
     else
    {
        if(p >= 0 && q >= 0 && p <ele.length && q <ele.length)
        {
            ele[p].style.background = "green"; //arranged in proper sorted order
            ele[q].style.background = "green"; //arranged in proper sorted order
        }
    }
    
}

const quickbtn = document.querySelector(".quicksort");
quickbtn.addEventListener("click",async function(){
    alert("quick");
    let ele = document.querySelectorAll(".bar");
    let p = 0;
    let q = ele.length-1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quicksort(ele, p, q);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    
});


