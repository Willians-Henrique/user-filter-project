import { IUser } from "../interfaces/user/user.interface";

export const UserList: IUser[] = [
  {
    nome: 'Ana Beatriz Souza',
    email: 'ana.souza@email.com',
    senha: 'Senha@123',
    idade: 28,
    endereco: {
      rua: 'Rua das Flores',
      numero: 120,
      cidade: 'São Paulo',
      estado: 'SP',
      pais: 'Brasil'
    },
    telefone: '11987654321',
    ativo: true,
    funcao: 'Administrador',
    dataCadastro: '2026-08-02T09:00:00.000Z',
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: '2026-09-27T18:32:00.000Z'
    }
  },
  {
    nome: 'Carlos Eduardo Lima',
    email: 'carlos.lima@email.com',
    senha: 'Senha@456',
    idade: 35,
    endereco: {
      rua: 'Avenida Brasil',
      numero: 458,
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      pais: 'Brasil'
    },
    telefone: '2132345678',
    ativo: true,
    funcao: 'Editor',
    dataCadastro: '2026-07-15T14:20:00.000Z',
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: false,
      ultimoAcesso: '2026-09-20T11:05:00.000Z'
    }
  },
  {
    nome: 'Fernanda Costa Ribeiro',
    email: 'fernanda.ribeiro@email.com',
    senha: 'Senha@789',
    idade: 22,
    endereco: {
      rua: 'Rua Sete de Setembro',
      numero: 87,
      cidade: 'Belo Horizonte',
      estado: 'MG',
      pais: 'Brasil'
    },
    telefone: '31998765432',
    ativo: false,
    funcao: 'Visitante',
    dataCadastro: '2026-05-30T10:45:00.000Z',
    status: {
      online: false,
      verificado: false,
      assinaturaAtiva: false,
      ultimoAcesso: '2026-08-10T09:15:00.000Z'
    }
  },
  {
    nome: 'Marcelo Henrique Alves',
    email: 'marcelo.alves@email.com',
    senha: 'Senha@321',
    idade: 41,
    endereco: {
      rua: 'Rua dos Andradas',
      numero: 233,
      cidade: 'Porto Alegre',
      estado: 'RS',
      pais: 'Brasil'
    },
    telefone: '5187651234',
    ativo: true,
    funcao: 'Moderador',
    dataCadastro: '2026-06-12T08:30:00.000Z',
    status: {
      online: true,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: '2026-09-28T07:50:00.000Z'
    }
  },
  {
    nome: 'Juliana Pereira Santos',
    email: 'juliana.santos@email.com',
    senha: 'Senha@654',
    idade: 30,
    endereco: {
      rua: 'Rua das Palmeiras',
      numero: 15,
      cidade: 'Curitiba',
      estado: 'PR',
      pais: 'Brasil'
    },
    telefone: '41999887766',
    ativo: true,
    funcao: 'Usuário',
    dataCadastro: '2026-08-02T09:00:00.000Z',
    status: {
      online: false,
      verificado: true,
      assinaturaAtiva: true,
      ultimoAcesso: '2026-09-25T16:40:00.000Z'
    }
  }
];
