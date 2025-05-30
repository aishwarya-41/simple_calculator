function calculate(button)
{
    document.querySelector("#d2").textContent += button.textContent 
}

function answer()
{
    const ans = document.querySelector("#d2").textContent;
    try
    {
        document.querySelector("#d2").textContent = eval(ans)
    }
    catch(SyntaxError)
    {
        document.querySelector("#d2").textContent = "Type Valid Input 😔"
    }
    
}

function clearDisp()
{
    document.querySelector("#d2").textContent = ""
}