
public class TesteFuncionario {

	public static void main(String[] args) {
		Funcionario funcionario = new Funcionario(null, null, 0);
		funcionario.setCpf("12345");
		funcionario.setNome("Breno Lopes");
		funcionario.setSalario(10000);
		
		
	
		System.out.println(funcionario.getNome());
		System.out.println(funcionario.getCpf());
		System.out.println(funcionario.getBoniFicacao());
	


		
	}

}
