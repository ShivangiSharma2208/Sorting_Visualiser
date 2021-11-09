async function insertionsort()
{
    const ele=document.querySelectorAll(".bar");
    ele[0].style.background="brown";
    for(let i=1;i<ele.length;i++)
    {
        
        let temp=ele[i].style.height;
        let j=i-1;
        ele[i].style.background="blue";
        await waitforme(delay);
        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(temp)))
        {
            
            ele[j].style.background="blue";
            ele[j+1].style.height=ele[j].style.height;
            j=j-1;
            await waitforme(delay);
            for(let k = i; k >= 0; k--)
            {
                ele[k].style.background = 'brown';
            }
        }
        ele[j+1].style.height=temp;
        ele[i].style.background = "brown";
    }
}

const insertionbtn=document.querySelector(".insertionsort");
insertionbtn.addEventListener("click",async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertionsort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});