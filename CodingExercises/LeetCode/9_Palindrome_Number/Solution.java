public class Solution {
  public boolean isPalindrome(int num){
    if(num < 0) return false; // numero negativo nn é palindromo
    int div = 1;
    // vai aumentando o divisor de 10 em 10 para cobrir todos os digitos do numero
    while(num / div >= 10){
      div *= 10;
    }
    while(num > 0){
      int left = num / div;
      int right = num % 10;
      if(left != right) return false;
      num = (num % div) / 10;
      div /= 100;
    }
    return true;





  }
}
