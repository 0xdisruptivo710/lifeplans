# 🚀 LIFEPLANS VISION LAUNCH - GUIA COMPLETO

## ✅ **STATUS DO PROJETO**
- 🟢 **Servidor Rodando**: http://localhost:8080
- 📁 **Localização**: `C:\Users\Usuario\lifepalns-vision-launch`
- 🌐 **GitHub**: https://github.com/0xdisruptivo710/lifepalns-vision-launch.git

---

## 📁 **ESTRUTURA DO PROJETO**

```
lifepalns-vision-launch/
│
├── 📄 Arquivos de Configuração
│   ├── package.json              # Dependências
│   ├── vite.config.ts            # Config Vite (porta 8080)
│   ├── tailwind.config.ts        # Config Tailwind
│   ├── tsconfig.json             # Config TypeScript
│   └── components.json           # Config shadcn/ui
│
├── 📁 public/                    # Arquivos públicos
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
│
└── 📁 src/                       # Código fonte
    │
    ├── 📄 Arquivos Principais
    │   ├── main.tsx              # Ponto de entrada
    │   ├── App.tsx               # Rotas da aplicação
    │   └── index.css             # Estilos globais
    │
    ├── 📁 assets/                # Imagens e recursos
    │   ├── 🖼️ hero-*.jpg         # Imagens hero
    │   ├── 🖼️ luxury-*.jpg       # Imagens de luxo
    │   ├── 🖼️ seguros-*.png      # Imagens de seguros
    │   ├── 🖼️ cta-hero-*.png     # Imagens CTA
    │   └── 📁 logos/             # Logos das operadoras
    │       ├── amil-logo.jpg
    │       ├── bradesco-saude-logo.png
    │       ├── notredame-logo.png
    │       ├── porto-saude-logo.png
    │       ├── sulamerica-logo.webp
    │       └── unimed-logo.png
    │
    ├── 📁 components/            # Componentes React
    │   │
    │   ├── 🎯 Componentes Principais
    │   │   ├── Header.tsx        # Cabeçalho
    │   │   ├── Footer.tsx        # Rodapé
    │   │   ├── Hero.tsx          # Seção hero
    │   │   ├── CTASection.tsx    # Call to Action
    │   │   └── WhatsAppButton.tsx # Botão WhatsApp
    │   │
    │   ├── 🏥 Planos de Saúde
    │   │   ├── PartnerOperators.tsx      # Operadoras parceiras
    │   │   └── HowItWorks.tsx            # Como funciona
    │   │
    │   ├── 🛡️ Seguros
    │   │   ├── InsuranceCategories.tsx   # Categorias de seguros
    │   │   ├── InsuranceProducts.tsx     # Produtos de seguros
    │   │   ├── SecondaryInsurance.tsx    # Seguros secundários
    │   │   └── LuxuryGrid.tsx            # Grid de seguros premium
    │   │
    │   ├── 💼 Consórcios
    │   │   └── ConsorciosSection.tsx     # Seção de consórcios
    │   │
    │   ├── ℹ️ Institucional
    │   │   ├── OurMission.tsx            # Nossa missão
    │   │   ├── NossaAtuacao.tsx          # Nossa atuação
    │   │   ├── WhyLifePlans.tsx          # Por que LifePlans
    │   │   └── StatisticsCounter.tsx     # Contador de estatísticas
    │   │
    │   ├── 📝 Formulários
    │   │   ├── ContactForm.tsx           # Formulário de contato
    │   │   └── FAQ.tsx                   # Perguntas frequentes
    │   │
    │   └── 📁 ui/                        # Componentes base shadcn
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── input.tsx
    │       ├── gradient-button.tsx       # Botão com gradiente
    │       ├── glowing-effect.tsx        # Efeito brilhante
    │       └── ... (60+ componentes)
    │
    ├── 📁 pages/                 # Páginas da aplicação
    │   │
    │   ├── 🏠 Página Principal
    │   │   └── Index.tsx                 # Home page
    │   │
    │   ├── 🏥 Planos de Saúde
    │   │   ├── PlanosSaude.tsx           # Lista de planos
    │   │   ├── PlanoSaudeIndividual.tsx  # Plano individual
    │   │   ├── PlanoSaudeFamiliar.tsx    # Plano familiar
    │   │   └── PlanoSaudeEmpresarial.tsx # Plano empresarial
    │   │
    │   ├── 🦷 Planos Odontológicos
    │   │   ├── PlanosOdontologicos.tsx   # Lista de planos
    │   │   └── PlanoOdontologico.tsx     # Detalhes do plano
    │   │
    │   ├── 🛡️ Seguros
    │   │   ├── Seguros.tsx               # Lista de seguros
    │   │   ├── SeguroAuto.tsx            # Seguro auto
    │   │   ├── SeguroMoto.tsx            # Seguro moto
    │   │   ├── SeguroResidencial.tsx     # Seguro residencial
    │   │   ├── SeguroVida.tsx            # Seguro vida
    │   │   ├── SeguroFrotas.tsx          # Seguro frotas
    │   │   └── SeguroEmpresarial.tsx     # Seguro empresarial
    │   │
    │   ├── 💼 Consórcios
    │   │   └── Consorcios.tsx            # Página de consórcios
    │   │
    │   ├── ℹ️ Institucional
    │   │   ├── Sobre.tsx                 # Sobre nós
    │   │   ├── MissaoVisaoValores.tsx    # Missão, visão e valores
    │   │   └── TrabalheConosco.tsx       # Trabalhe conosco
    │   │
    │   └── NotFound.tsx                  # Página 404
    │
    ├── 📁 hooks/                 # React Hooks customizados
    │   ├── use-mobile.tsx        # Detecção mobile
    │   ├── use-parallax.tsx      # Efeito parallax
    │   ├── use-scroll-animation.tsx # Animações de scroll
    │   └── use-toast.ts          # Notificações
    │
    └── 📁 lib/                   # Bibliotecas
        └── utils.ts              # Funções utilitárias
```

---

## 🗺️ **ROTAS DO SITE**

### **🏠 Página Principal**
| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/` | `Index.tsx` | Página inicial |

### **🏥 Planos de Saúde**
| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/planos-saude` | `PlanosSaude.tsx` | Lista de planos |
| `/plano-saude-individual` | `PlanoSaudeIndividual.tsx` | Plano individual |
| `/plano-saude-familiar` | `PlanoSaudeFamiliar.tsx` | Plano familiar |
| `/plano-saude-empresarial` | `PlanoSaudeEmpresarial.tsx` | Plano empresarial |

### **🦷 Planos Odontológicos**
| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/planos-odontologicos` | `PlanosOdontologicos.tsx` | Lista de planos |
| `/plano-odontologico` | `PlanoOdontologico.tsx` | Detalhes do plano |

### **🛡️ Seguros**
| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/seguros` | `Seguros.tsx` | Lista de seguros |
| `/seguro-auto` | `SeguroAuto.tsx` | Seguro automóvel |
| `/seguro-moto` | `SeguroMoto.tsx` | Seguro moto |
| `/seguro-residencial` | `SeguroResidencial.tsx` | Seguro residencial |
| `/seguro-vida` | `SeguroVida.tsx` | Seguro de vida |
| `/seguro-frotas` | `SeguroFrotas.tsx` | Seguro de frotas |
| `/seguro-empresarial` | `SeguroEmpresarial.tsx` | Seguro empresarial |

### **💼 Consórcios**
| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/consorcios` | `Consorcios.tsx` | Página de consórcios |

### **ℹ️ Institucional**
| Rota | Arquivo | Descrição |
|------|---------|-----------|
| `/sobre` | `Sobre.tsx` | Sobre a empresa |
| `/missao-visao-valores` | `MissaoVisaoValores.tsx` | Missão, visão e valores |
| `/trabalhe-conosco` | `TrabalheConosco.tsx` | Trabalhe conosco |

---

## 🎨 **CARACTERÍSTICAS DO DESIGN**

### **Tema Premium/Luxo**
- Design focado em produtos de alto padrão
- Imagens de carros de luxo, iates, jatos particulares
- Gradientes dourados e efeitos brilhantes
- Animações parallax sofisticadas

### **Componentes Especiais**
1. **gradient-button** - Botões com gradiente premium
2. **glowing-effect** - Efeitos de brilho/glow
3. **LuxuryGrid** - Grid especial para seguros premium
4. **StatisticsCounter** - Contador animado de números
5. **WhatsAppButton** - Botão flutuante do WhatsApp

### **Operadoras Parceiras**
- Amil
- Bradesco Saúde
- Notre Dame Intermédica
- Porto Saúde
- SulAmérica
- Unimed

---

## 🚀 **COMANDOS ÚTEIS**

### **Desenvolvimento**
```bash
npm run dev          # Iniciar servidor (porta 8080)
npm run build        # Build de produção
npm run preview      # Preview do build
npm run lint         # Verificar erros
```

### **Git**
```bash
git status           # Ver status
git pull             # Atualizar do GitHub
git add .            # Adicionar mudanças
git commit -m "msg"  # Commit
git push             # Enviar para GitHub
```

---

## 🌐 **ACESSO**

### **Local**
- **URL**: http://localhost:8080
- **Porta**: 8080

### **Online**
- **Lovable**: https://lovable.dev/projects/a29f2a76-bd63-4878-9698-2fe9703ef8f2

---

## 📦 **TECNOLOGIAS**

- **React 18** - Framework
- **TypeScript** - Linguagem
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes
- **React Router** - Navegação
- **Framer Motion** - Animações
- **React Hook Form** - Formulários
- **Zod** - Validação

---

## 🔍 **DIFERENÇAS ENTRE OS PROJETOS**

### **lifeplans-vision** (Projeto 1)
- Design dark & sophisticated
- Foco em elegância minimalista
- Paleta escura com dourado champagne
- Animações AOS e GSAP

### **lifepalns-vision-launch** (Projeto 2 - ESTE)
- Design premium/luxo
- Foco em produtos de alto padrão
- Imagens de luxo (carros, iates, jatos)
- Mais páginas de seguros específicos
- Seção de consórcios
- Efeitos parallax

---

## 📝 **PRÓXIMOS PASSOS**

1. ✅ Servidor rodando
2. ✅ Navegador aberto
3. ✅ Estrutura mapeada
4. 📝 Explorar o código
5. 🎨 Personalizar conforme necessário

---

## 🆘 **TROUBLESHOOTING**

### **Porta já em uso?**
Se a porta 8080 já estiver em uso pelo outro projeto:
1. Pare o outro servidor (Ctrl+C no terminal)
2. Ou mude a porta em `vite.config.ts`

### **Erro ao instalar dependências?**
```bash
rm -rf node_modules package-lock.json
npm install
```

### **Site não carrega?**
1. Verifique se há erros no terminal
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Tente http://127.0.0.1:8080

---

**🎉 Projeto pronto para uso!**
**📍 Localização**: `C:\Users\Usuario\lifepalns-vision-launch`
**🌐 Acesso**: http://localhost:8080

