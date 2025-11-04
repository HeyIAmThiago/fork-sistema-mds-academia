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
curl -X GET http://localhost:5000/branch \
-H "x-executive-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjIyOTIwNzJ9.Kh_1-f1PFT0ZUMF4qKau2Ix13bNj7W4inR1-AzUgyZs"
```

### Gerente de Filial

```
curl -X GET http://localhost:5000/branch_staff \
-H "x-manager-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjIyOTIxMTZ9.6gCR06L9Cyq9qmGOM_qGaY7J45q3-5c8ju68wOn4uO8"
```

### Cliente

```
curl -X GET http://localhost:5000/branch_staff/coach \
-H "x-customer-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjIyOTMzMTR9.J5Flequ1b-LC_bnakIyCHesY8Y-QNc-jbhaoKvaxMOw"
```
