import java.util.*;
 class Solution {   
    public static boolean verifica(int[] vetor, int k){
      if(vetor.length < 2 || vetor == null){ // tratamento de erro
            return false;
        }

      Set<Integer> set = new HashSet<Integer>(); //hash

      for(int valor: vetor){
        if(set.contains(valor)){ // se no set contem o valor retorna true
              return true;
          }
          set.add(k - valor); // senao key menos o valor é adicionado no hash
      
      }
      return false;
  }
    public static void main(String[] args) {
      int[] vetor = {10,15,3,7}; // setar o vetor
      System.out.println(verifica(vetor, 2));

    }
  
}
