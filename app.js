
// grasping the spna element

let spanElement=document.querySelector("#typed");


let cursorElement=document.querySelector("#cursor");


// lets create a array to contain the words 

const wordArray=["web developer" , "Eethical hacker","Java developer"];

let arrayIndex=0;
let wordIndex=0;


function Type(){

    if(wordIndex<wordArray[arrayIndex].length)
    {
        if(!cursorElement.classList.contains("non_blinking_cursor"))
        {
            cursorElement.classList.add("non_blinking_cursor");
        }

        spanElement.textContent= spanElement.textContent+ wordArray[arrayIndex].charAt(wordIndex)
        wordIndex++;
        setTimeout(Type,200);//typing at speed of 200ms per character of each word
    }
    else

    {
        cursorElement.classList.remove("non_blinking_cursor");
       setTimeout(Erase,3000);//waiting 3s before removing the typed character
    }

}
function Erase()
{
    if(wordIndex>0)
    {
        if(!cursorElement.classList.contains("non_blinking_cursor"))
        {
            cursorElement.classList.add("non_blinking_cursor");
        }
        spanElement.textContent=  wordArray[arrayIndex].substring(0,wordIndex-1);
        wordIndex--; 
        setTimeout(Erase,50);   //removing at speed of 200ms per character of each word
    }
    else
    {
        cursorElement.classList.remove("non_blinking_cursor")
        setTimeout(Type,3000)//waiting 3s before typing the next word
        arrayIndex++;
        if(arrayIndex>=wordArray.length)
        {
            arrayIndex=0;
        }

    }
}


window.addEventListener("load",()=>{
    Type();
})