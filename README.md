# Trabalho da disciplina de Manutenção de Software (como rodar o fork do projeto)

## Passo 1: clone o repo

```
git clone https://github.com/HeyIAmThiago/fork-sistema-mds-academia.git
```

## Passo 2: navegue até a pasta do projeto

```
cd .\fork-sistema-mds-academia\back-end\
```

## Passo 3: builde o projeto

```
docker compose up --build
```

## Passo 3: acesse a URL

```
http://localhost:3000/
```

## Passo extra: adicione usuários de cada perfil

### Gerente Executivo

```
curl -X POST http://localhost:5000/executive -H "Content-Type: application/json" -d "{\"username\": \"executivo_admin\", \"password\": \"senha_exec_123\"}"
```

### Gerente de Filial

```
curl -X POST http://localhost:5000/branch_manager/register -H "Content-Type: application/json" -H "x-executive-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjIyOTIwNzJ9.Kh_1-f1PFT0ZUMF4qKau2Ix13bNj7W4inR1-AzUgyZs" -d "{\"username\": \"filial@gmail.com\", \"password\": \"senha_filial_123\"}"
```

### Cliente

```
curl -X POST http://localhost:5000/customer -H "Content-Type: application/json" -d "{\"firstName\": \"Primeiro\", \"lastName\": \"Cliente\", \"gender\": \"Male\", \"phoneNumber\": \"9876543210\", \"email\": \"cliente@gmail.com\", \"password\": \"senha_cliente_123\"}"
```
