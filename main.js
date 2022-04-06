alert("The meaning of this game is that the game also involves a number in the computer brain, and you have to find that number. The computer counts the number of attempts you make, and it becomes your point.")
alert("Hi dear user,How are you?");
let answer = prompt("Enter your mood");
let count = 0;
if (answer == "good"){
    alert("Your game shall be very good,that is why you must find number which is in 1 to 1000");
    let random_number  = Math.floor(Math.random() * 1000);
    let user_try_list = [];
    while(true){
        let your_number = Number(prompt("Enter yout number"));
        if(your_number == random_number){
            alert(`You found the number,this number is ${random_number},and your score is ${count}`);
            count+=1;
            break;
        }
        else if(your_number<random_number){
            user_try_list.push(your_number);
            alert("Please enter big number than this number");
            count+=1;

        }
        else{
            user_try_list.push(your_number);
            alert("Please enter small number than this number");
            count+=1;

        }
    }
    if(user_try_list.length==0){
        alert("Your try list is empty,because you are computer")
    }
    else{
        alert(`Your try list is ${user_try_list}`);
    }
}
else{
    alert("Your game shall be bad,that is why you must find number which is in 1 to 100");
    let random_number  = Math.floor(Math.random() * 100);
    console.log(random_number);
    let user_try_list = [];
    while(true){
        let your_number = Number(prompt("Enter yout number"));
        if(your_number == random_number){
            alert(`You found the number,this number is ${random_number},and your score is ${count}`);
            count+=1;
            break;
        }
        else if(your_number<random_number){
            user_try_list.push(your_number);
            alert("Please enter big number than this number");
            count+=1;

        }
        else{
            user_try_list.push(your_number);
            alert("Please enter small number than this number");
            count+=1;

        }
    }
    if(user_try_list.length==0){
        alert("Your try list is empty,because you are computer")
    }
    else{
        alert(`Your try list is ${user_try_list}`);
    }
}
if(count<=10 && count>1){
    alert("You are very good in this game");

}
else if(count == 1){
    alert("You are computer ");
}
else{
    alert("You are not bad!!1");
}