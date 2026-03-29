# Grupo Armindo - Painel de Administração de Votos

Este projecto está pronto para **Eurovisão 2026** e permite configurar qualquer evento a partir de `admin.html` sem alterar código.

## Estrutura de ficheiros
- `admin.html`: painel de controle para configurar evento, categorias, candidatos, tema, sessões, votos e transmissão OBS.
- `index.html`: interface de votantes (página pública).
- `obs.html`: cena de transmissão em directo para OBS / vMix / Streamlabs.
- `CNAME`: domínio para GitHub Pages (preservado).

## Funcionalidades já integradas
- templates (inclui `Eurovisão`, `Festival da Canção`, `MTV`, etc.)
- gestão total de categorias/candidatos/contagem de votos.
- alternância `Abrir/Fechar Votação`, `Nova Sessão`, `Apagar Votos`.
- visualização de resultados e transmissão com animação e temporizador.
- possibilidade de apontar `obs.html` a partir de OBS com escala 1920x1080.

## Passo a passo para deploy
1. `git init` + commit (se ainda não existir).
2. Criar repos em GitHub e fazer push.
3. Usar GitHub Pages (branch `main` ou `gh-pages`) ou Netlify / Vercel apontando para pasta do projecto.

### Recomendado (GitHub Pages):
- Configurar `Settings > Pages > Source`: escolher `main` / root.
- Domínio personalizado se necessário (código `CNAME` já incluído).

### Recomendado (Netlify/Vercel):
- Site > New site from Git > conectar repositório.
- Configurar build: não há build (pasta estática). Deploy direto.

## Uso do Painel Admin
1. Abrir `admin.html`.
2. Login com password padrão: `admin1234`.
3. Selecionar template `Eurovisão` ou criar do zero.
4. Ajustar cores, título, subtítulo, descrição, categorias e candidatos.
5. Abrir votação e abrir `index.html` para votantes.
6. Usar `obs.html` como Browser Source no OBS (1920x1080). 

## Observação de Segurança
- A senha administrativa (`admin1234`) é temporária; substitua por um método de autenticação mais seguro para produção.
- O firebase database está em tempo real; garantir regras de leitura/gravação adequadas no console do Firebase.

## Quick check
Após deploy:
- `https://<seu-site>/admin.html`
- `https://<seu-site>/index.html`
- `https://<seu-site>/obs.html`

Boa transmissão da Eurovisão! 🎉
