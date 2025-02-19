export const convertToRoman = (num) => {
    const romanNumerals = [
      ["I", "IV", "V", "IX"],
      ["X", "XL", "L", "XC"],
      ["C", "CD", "D", "CM"],
      ["M"]
    ];
  
    let roman = "";
    let digits = num.toString().split("").reverse();
  
    digits.forEach((digit, i) => {
      let d = parseInt(digit);
      if (d === 9) roman = romanNumerals[i][3] + roman;
      else if (d >= 5) roman = romanNumerals[i][2] + romanNumerals[i][0].repeat(d - 5) + roman;
      else if (d === 4) roman = romanNumerals[i][1] + roman;
      else roman = romanNumerals[i][0].repeat(d) + roman;
    });
  
    return roman;
  };
  