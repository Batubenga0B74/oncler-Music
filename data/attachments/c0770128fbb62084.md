# Page snapshot

```yaml
- generic [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e5]:
      - heading "Iniciar sessão" [level=1] [ref=e7]
      - generic [ref=e8]:
        - generic [ref=e9]:
          - generic [ref=e10]: Email
          - textbox "Email" [ref=e11]: estoncler@gmail.com
        - generic [ref=e12]:
          - generic [ref=e13]: Palavra passe
          - textbox "Palavra passe" [ref=e14]: oncler2025
      - link "Criar conta" [ref=e17] [cursor=pointer]:
        - /url: /cadastro
      - paragraph [ref=e18]: Email ou senha inválidos
      - button "Acessar" [active] [ref=e19] [cursor=pointer]
      - button "Iniciar sessão com Google" [ref=e20] [cursor=pointer]:
        - img [ref=e21] [cursor=pointer]
        - generic [ref=e26] [cursor=pointer]: Iniciar sessão com Google
  - alert [ref=e28]
```