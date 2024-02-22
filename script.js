function shortcut(s1, s2) {
  s1 = s1.trim()
s2 = s2.trim()

let str = ""
if(s1 == "" || s2 == ""){
  let ans = ""
  return ans
}
else{
  str += s1.charAt(0)
  str += s2.charAt(0)
}
return str
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
