var userName1 = prompt("Введите имя 1 игрока")
var userName2 = prompt("Введите имя 2 игрока")
var score1 = 0
var score2 = 0
var winner
document.getElementById("myInput1").value = userName1
document.getElementById("myInput2").value = userName2
var currentUser = 0
document.getElementsByClassName("progress")[0].innerHTML=`сейчас ходит игрок ${currentUser == 0 ? userName1 : userName2}`
var arr = document.getElementsByClassName("game")
for (let i=0;i < arr.length; i++){
    arr[i].addEventListener('click', function(ev) {
        if (currentUser == 0) {
            currentUser = 1
            arr[i].classList.add('red')
        }
        else{
            currentUser = 0
            arr[i].classList.add('green')
        }
        document.getElementsByClassName("progress")[0].innerHTML=`сейчас ходит игрок ${currentUser == 0 ? userName1 : userName2}`
        if (checked()){
            if(winner == -1){
                alert("Ничья")
            }
            else{
                alert(`победитель ${winner==0 ? userName1 : userName2}`)
                if (winner == 0) {
                    score1++
                }
                else{
                    score2++
                }
                document.getElementsByClassName("score")[0].innerHTML = `${score1} - ${score2}`
            }
            for(let g=0; g < arr.length; g++){
                arr[g].classList.remove("red")
                arr[g].classList.remove("green")
            } 
        }
      }, false);
}
console.log(arr)
function checked(){
    if (arr[0].classList.contains("red") && arr[1].classList.contains('red') && arr[2].classList.contains('red') ){
        winner = 0
        return true
    } 
    if (arr[0].classList.contains("green") && arr[1].classList.contains('green') && arr[2].classList.contains('green') ){
        winner = 1
        return true
    }
    if (arr[3].classList.contains("green") && arr[4].classList.contains('green') && arr[5].classList.contains('green') ){
        winner = 1
        return true
    }
    if (arr[3].classList.contains("red") && arr[4].classList.contains('red') && arr[5].classList.contains('red') ){
        winner = 0
        return true
    }
    if (arr[6].classList.contains("green") && arr[7].classList.contains('green') && arr[8].classList.contains('green') ){
        winner = 1
        return true
    }
    if (arr[6].classList.contains("red") && arr[7].classList.contains('red') && arr[8].classList.contains('red') ){
        winner = 0
        return true
    }
    if (arr[0].classList.contains("green") && arr[3].classList.contains('green') && arr[6].classList.contains('green') ){
        winner = 1
        return true
    }
    if (arr[0].classList.contains("red") && arr[3].classList.contains('red') && arr[6].classList.contains('red') ){
        winner = 0
        return true
    }
    if (arr[1].classList.contains("green") && arr[4].classList.contains('green') && arr[7].classList.contains('green') ){
        winner = 1
        return true
    }
    if (arr[1].classList.contains("red") && arr[4].classList.contains('red') && arr[7].classList.contains('red') ){
        winner = 0
        return true
    }
    if (arr[2].classList.contains("green") && arr[5].classList.contains('green') && arr[8].classList.contains('green') ){
        winner = 1
        return true
    }
    if (arr[2].classList.contains("red") && arr[5].classList.contains('red') && arr[8].classList.contains('red') ){
        winner = 0
        return true
    }
    if (arr[0].classList.contains("green") && arr[4].classList.contains('green') && arr[8].classList.contains('green') ){
        winner = 1
        return true
    }
    if (arr[0].classList.contains("red") && arr[4].classList.contains('red') && arr[8].classList.contains('red') ){
        winner = 0
        return true
    }
    if (arr[2].classList.contains("green") && arr[4].classList.contains('green') && arr[6].classList.contains('green') ){
        winner = 1
        return true
    }
    if (arr[2].classList.contains("red") && arr[4].classList.contains('red') && arr[6].classList.contains('red') ){
        winner = 0
        return true
    }
    if ((arr[0].classList.contains("red") || arr[0].classList.contains("green"))
        && (arr[1].classList.contains("red") || arr[1].classList.contains("green")) 
        && (arr[2].classList.contains("red") || arr[2].classList.contains("green"))  
        && (arr[3].classList.contains("red") || arr[3].classList.contains("green"))
        && (arr[4].classList.contains("red") || arr[4].classList.contains("green"))
        && (arr[5].classList.contains("red") || arr[5].classList.contains("green"))
        && (arr[6].classList.contains("red") || arr[6].classList.contains("green"))
        && (arr[7].classList.contains("red") || arr[7].classList.contains("green"))
        && (arr[8].classList.contains("red") || arr[8].classList.contains("green"))
    ){
        winner = -1
        return true
    }
    return false
}
