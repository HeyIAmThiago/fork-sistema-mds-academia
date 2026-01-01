# 🔐 Guia de Login - Sistema Academia

## 📋 Resumo dos 3 Tipos de Usuários

| Tipo de Usuário | URL de Login | Credenciais | Exemplo |
|-----------------|--------------|-------------|---------|
| **Cliente** | `http://localhost:3000/login` | Email + Senha | `cliente@gmail.com` / `senha_cliente_123` |
| **Gerente Executivo** | `http://localhost:3000/executive` | Username + Senha | `executivo_admin` / `senha_exec_123` |
| **Gerente de Filial** | `http://localhost:3000/branch` | Username + Senha | `filial@gmail.com` / `senha_filial_123` |

---

## 👤 1. Login como CLIENTE

### Passo a Passo:
1. Acesse: **`http://localhost:3000/login`**
2. Preencha:
   - **Email**: `cliente@gmail.com` (ou o email que você cadastrou)
   - **Senha**: `senha_cliente_123` (ou a senha que você definiu)
3. Clique em **Submit**

### O que acontece:
- Você será redirecionado para a página inicial
- Poderá acessar: Shopping, Orders, Appointments, Profile

### Endpoint Backend:
- `POST http://localhost:5000/auth`
- Body: `{ "email": "...", "password": "..." }`

---

## 👔 2. Login como GERENTE EXECUTIVO

### Passo a Passo:
1. Acesse: **`http://localhost:3000/executive`**
2. Preencha:
   - **Username**: `executivo_admin` (ou o username que você cadastrou)
   - **Senha**: `senha_exec_123` (ou a senha que você definiu)
3. Clique em **Submit**

### O que acontece:
- Você será redirecionado para o painel executivo
- Poderá gerenciar filiais (branches)

### Endpoint Backend:
- `POST http://localhost:5000/executiveLogin`
- Body: `{ "username": "...", "password": "..." }`

### ⚠️ Importante:
- **NÃO usa email**, apenas **username** e **senha**
- Este é o único perfil que pode criar Gerentes de Filial

---

## 🏢 3. Login como GERENTE DE FILIAL

### Passo a Passo:
1. Acesse: **`http://localhost:3000/branch`**
2. Preencha:
   - **Username**: `filial@gmail.com` (ou o username que você cadastrou)
   - **Senha**: `senha_filial_123` (ou a senha que você definiu)
3. Clique em **Login**

### O que acontece:
- Você será redirecionado para `/branch/manage`
- Poderá gerenciar: Customers, Products, Facilities, Staff, Orders, Appointments

### Endpoint Backend:
- `POST http://localhost:5000/branch_manager`
- Body: `{ "username": "...", "password": "..." }`

### ⚠️ Importante:
- **NÃO usa email**, apenas **username** e **senha**
- O username pode ser um email, mas o sistema trata como string simples
- Precisa ser criado por um Gerente Executivo (com token de autenticação)

---

## 🆕 Como Criar Usuários (se ainda não criou)

### 1. Criar Gerente Executivo:
```bash
curl -X POST http://localhost:5000/executive \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"executivo_admin\", \"password\": \"senha_exec_123\"}"
```

### 2. Criar Gerente de Filial:
**Primeiro, faça login como Gerente Executivo para obter o token!**

```bash
curl -X POST http://localhost:5000/branch_manager/register \
  -H "Content-Type: application/json" \
  -H "x-executive-token: SEU_TOKEN_AQUI" \
  -d "{\"username\": \"filial@gmail.com\", \"password\": \"senha_filial_123\"}"
```

### 3. Criar Cliente:
```bash
curl -X POST http://localhost:5000/customer \
  -H "Content-Type: application/json" \
  -d "{\"firstName\": \"Primeiro\", \"lastName\": \"Cliente\", \"gender\": \"Male\", \"phoneNumber\": \"9876543210\", \"email\": \"cliente@gmail.com\", \"password\": \"senha_cliente_123\"}"
```

---

## 🔍 Diferenças Importantes

### Cliente vs Gerentes:
- **Cliente**: Usa **email** como identificador
- **Gerentes**: Usam **username** como identificador (pode ser email, mas não é obrigatório)

### URLs de Acesso:
- Cliente: `/login` → Página inicial após login
- Executivo: `/executive` → Painel de gerenciamento de filiais
- Filial: `/branch` → Painel de gerenciamento da filial

### Tokens Armazenados:
- Cliente: `localStorage.getItem("token")` e `localStorage.getItem("id")`
- Executivo: `localStorage.getItem("eToken")` e `localStorage.getItem("eId")`
- Filial: `localStorage.getItem("manager_token")`

---

## ❓ Problemas Comuns

### "Invalid email or password" (Cliente)
- Verifique se o email está correto
- Verifique se a senha está correta
- Certifique-se de que o cliente foi criado no banco

### "Invalid username or password" (Gerentes)
- Verifique se o username está correto (case-sensitive)
- Verifique se a senha está correta
- Para Gerente de Filial: certifique-se de que foi criado por um Executivo

### Não consigo acessar `/executive` ou `/branch`
- Limpe o localStorage: `localStorage.clear()` no console do navegador
- Certifique-se de estar usando a URL correta
- Verifique se o backend está rodando na porta 5000

---

## 📝 Notas Finais

- Cada tipo de usuário tem uma **página de login diferente**
- Os **Gerentes não usam email**, apenas username
- O **Cliente é o único que usa email** para login
- Todos os logins são feitos através do frontend em `localhost:3000`
- O backend roda em `localhost:5000` (ou porta configurada)

