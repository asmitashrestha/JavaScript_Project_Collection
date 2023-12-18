let score = {
  win: 0,
  lost: 0,
  tie: 0,
  display:function(){
    return `win:${score.win}  lost:${score.lost}    tie:${score.tie}`;
  }
};
const computerChoice = () =>{
  let randomNumber = Math.random()*3;
      if(randomNumber > 0 && randomNumber <= 1){
        return 'Bat';
      }else if(randomNumber > 1 && randomNumber <= 2){
        return 'Ball';
      }else{
        return 'Stump';
      }
}

const resultMsg = (userChoice, computerChoice) =>{
  if(userChoice ==='Bat'){
    if(computerChoice === 'Bat'){
      score.tie++;
      return `It's a tie`;
    }else if(computerChoice === 'Ball'){
      score.win++;
      return 'You won';
    }else{
      score.lost++;
      return 'Computer won';
    }
  }else if(userChoice === 'Ball'){
    if(computerChoice === 'Bat'){
      score.lost++;
      return `Computer won`;
    }else if(computerChoice === 'Ball'){
      score.tie++;
      return `It's tie`;
    }else{
      score.win++;
      return 'You won';
    }
  }else{
    if(computerChoice === 'Bat'){
      score.lost++;
     return `Computer won`;
    }else if(computerChoice === 'Ball'){
      score.win++;
      return `You won`;
    }else{
      score.tie++;
      return `It's tie`;
    }
  }
}

const displayResult = (userChoice,computerChoice, result) =>{
  document.querySelector('.user-choice').innerText = `You have choosen ${userChoice}`;
  document.querySelector('.computer-choice').innerText = `Computer have choosen ${computerChoice}`;
  document.querySelector('.result').innerText = result;
  document.querySelector('.score').innerText = score.display()
}