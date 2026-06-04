export function score(score) {
  const scoreElem = (document.createElement("p").textContent = score * 10);
  return checkScore(scoreElem);
}

function checkScore(score) {
  if (score === 100 || score > 100) {
    return "Your score is: " + score + " => A+";
  } else if (score === 90 || score >= 99) {
    return "Your score is: " + score + " => A";
  } else if (score === 80 || score >= 89) {
    return "Your score is: " + score + " => B+";
  } else if (score === 70 || score >= 79) {
    return "Your score is: " + score + " => B";
  } else if (score === 60 || score >= 69) {
    return "Your score is: " + score + " => C+";
  } else if (score === 50 || score >= 59) {
    return "Your score is: " + score + " => C";
  } else if (score === 40 || score >= 49) {
    return "Your score is: " + score + " => D+";
  } else if (score === 0 || score <= 39) {
    return "Your score is: " + score + " => D";
  }
}
