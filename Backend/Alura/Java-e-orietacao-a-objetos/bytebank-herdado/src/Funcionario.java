
public class Funcionario {
	
	public Funcionario(String nome, double salario, String cpf) {
		super();
		this.nome = nome;
		this.salario = salario;
		this.cpf = cpf;
	}
	
	private String nome;
	private double salario;
	private String cpf;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public double getSalario() {
		return salario;
	}
	public void setSalario(double salario) {
		this.salario = salario;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	
	// teste commit
}
