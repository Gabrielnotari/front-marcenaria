import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { PessoaUsuaria } from 'src/app/core/types/type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  titulo = 'Olá, ';
  textoBotao = 'ATUALIZAR';  
  perfilComponent = true;

  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null;

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro().subscribe(cadastro => {
      this.cadastro = cadastro;
      this.nome = cadastro.nomeUsuario;
      this.carregarFormulario();
    })
  }

  carregarFormulario(){
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
        nomeCompleto: this.cadastro.nomeCompleto,
        nomeUsuario: this.cadastro.nomeUsuario,
        email: this.cadastro.email,
        senha: this.cadastro.senha
    })
  }

  atualizar() {
    const dadosAtualizados = {
       nomeCompleto: this.form?.value.nomeCompleto,
       nomeUsuario: this.form?.value.nomeUsuario,
       email: this.form?.value.email,
       senha: this.form?.value.senha
    }

    this.cadastroService.editarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro editado com sucesso!')
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.log('Erro ao atualizar cadastro. Tente novamente.', err);
      }
    })
  }

  deslogar() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
