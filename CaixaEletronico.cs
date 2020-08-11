using System;

class MainClass {
  public static void Main (string[] args) {
    double saldo = 100;
    bool continuar = true;
    string opcao = "";

    while(continuar){
      Console.WriteLine("\n OPÇÕES");
      Console.WriteLine("[C] - Consultar Saldo");
      Console.WriteLine("[P] - Prêmio");
      Console.WriteLine("[X] - Sair do Programa");
      Console.WriteLine("");

      Console.Write("Digite a opção desejada: ");
      opcao  = Console.ReadLine();

      if (opcao.ToUpper() == "C") {
        Console.WriteLine("Seu saldo atual é: R$ " + saldo);
        Console.ReadKey();
      }
      if (opcao.ToUpper() == "P") {
        Premio(saldo);
        Console.ReadKey();
      }
      else if (opcao.ToUpper() == "X") {
        continuar = false;
      }
      else {
        Console.WriteLine("Opção inválida");
      }
    }
  }

  public static void Premio(double valorAtual) {
    double resultado = valorAtual + 100;
    Console.WriteLine(resultado);
    Console.ReadKey();
  }
}
