# VYRA — Digital Experiences

Site institucional estático da VYRA. O projeto usa HTML, CSS e JavaScript puro; não precisa de instalação, compilação ou dependências para publicação.

## Publicar no GitHub Pages pela interface

1. No GitHub, crie um repositório novo. Escolha um nome, como `vyra-site`, e deixe-o **Público**.
2. Não selecione as opções para adicionar README, `.gitignore` ou licença: esses arquivos já estão neste projeto.
3. Abra o repositório e escolha **Add file → Upload files**.
4. Envie os itens do projeto mantendo esta estrutura na raiz do repositório:

   ```text
   index.html
   README.md
   .gitignore
   public/
   src/
   ```

   Envie os arquivos de dentro de `public` e `src` junto com as pastas. Não envie a pasta `work` nem `outputs`.
5. No campo de mensagem do envio, use algo como `Publica o site VYRA` e clique em **Commit changes**.
6. No repositório, abra **Settings → Pages**.
7. Em **Build and deployment**, selecione **Deploy from a branch**. Escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**.
8. Aguarde a publicação. O endereço do site aparecerá na própria página **Settings → Pages**.

O site não tem etapa de build. Fontes do Google Fonts são carregadas externamente; o restante dos arquivos do site fica no próprio repositório.
