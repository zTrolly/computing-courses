import java.util.*;
class Solution { 

  
public static void main(String[] args) {
 int [] vetor = {1, 2, 3, 4, 5};

 for (int i = 0; i < vetor.length; i++) {

  int produto = 1;
  int ultimoIndex = 0;

  if(ultimoIndex == i){
    while (ultimoIndex < i){
      produto*=vetor[i];
    }
 }