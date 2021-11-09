async function bubblesort()
{
     const n=document.querySelectorAll(".bar");
     for(let i=0;i<n.length-1;i++)
     {
         for(let j=0;j<n.length-i-1;j++)
         {
             n[j].style.background="#BD8E83";
             n[j+1].style.background="#BD8E83";
             if(parseInt(n[j].style.height)>parseInt(n[j+1].style.height))
              {
                  await waitforme(delay);
                  swap(n[j],n[j+1]);
              }
              n[j].style.background="beige ";
              n[j+1].style.background="beige ";
         }
         n[n.length-i-1].style.background="brown";
     }
     n[0].style.background="brown";
}

const bubblebtn=document.querySelector(".bubsort");
bubblebtn.addEventListener("click",async function(){
    alert("event listener");
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubblesort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});