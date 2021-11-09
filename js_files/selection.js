async function selectionsort()
{
    const ele=document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++)
    {
        let min =i;
        // let f=0;
        ele[i].style.background="blue";
        for(let j=i+1;j<ele.length;j++)
        {
            ele[j].style.background="red";
            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min].style.height))
            {
                
                if(min !== i)
                {
                    // new min_index is found so change prev min_index color back to normal
                    ele[min].style.background = 'beige';
                }
                min = j;
                // f=1;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'beige';
            }   
           
        }
        
        // if(f==0)
        //    break;
       await waitforme(delay);
        swap(ele[min],ele[i]);
        ele[min].style.background="beige";
       ele[i].style.background="green";
     }
    //  if(f==0)
    //  for(let k=i;k<ele.length;k++)
    //   ele[k].style.background="green";
}


const selectionbtn=document.querySelector(".selectionsort");
selectionbtn.addEventListener("click",async function(){
    alert("selection");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selectionsort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    
});
