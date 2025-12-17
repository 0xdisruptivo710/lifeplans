# 🖼️ TROCA DE IMAGENS - HERO SECTION

**Data:** 17 de Dezembro de 2025  
**Arquivo:** `src/components/Hero.tsx`  
**Status:** ✅ Concluído

---

## 🎯 OBJETIVO

Trocar as imagens de fundo da seção Hero mantendo todos os efeitos e animações.

---

## 📋 ALTERAÇÕES REALIZADAS

### **ANTES:**
```typescript
import heroImage1 from "@/assets/corporate-buildings-1.webp";
import heroImage2 from "@/assets/corporate-buildings-2.jpg";
```

### **DEPOIS:**
```typescript
import heroImage1 from "@/assets/Foto_1.jpg.png";
import heroImage2 from "@/assets/Foto_2.jpg.png";
```

---

## 📸 MAPEAMENTO DAS IMAGENS

### **🖼️ Slide 1 - Foto_1.jpg.png**
**Quando aparece:**
- **Título:** "Planos de Saúde e Seguros"
- **Subtítulo:** "Para Você e Sua Família"
- **Label:** "PROTEÇÃO PREMIUM"
- **Descrição:** "16 anos protegendo o que realmente importa - Localizada em Sorocaba com atendimento em todo Brasil"

**Arquivo usado:** `Foto_1.jpg.png`

---

### **🖼️ Slide 2 - Foto_2.jpg.png**
**Quando aparece:**
- **Título:** "Proteção Completa"
- **Subtítulo:** "Com as Melhores Operadoras"
- **Label:** "CONFIANÇA GARANTIDA"
- **Descrição:** "Localizada em Sorocaba com atendimento em todo Brasil"

**Arquivo usado:** `Foto_2.jpg.png`

---

## 🎨 EFEITOS MANTIDOS

Todos os efeitos do Hero foram preservados:

✅ **Animações:**
- Transição suave entre slides (fade in/out 2000ms)
- Parallax scroll effect no background
- Staggered text reveal (título e subtítulo)
- Slow zoom na imagem (scale 1.1 → 1)

✅ **Estrutura Visual:**
- Frame arredondado (rounded-3xl)
- Gradientes overlay
- Linhas de acento azul (top e bottom)
- GPU acceleration (transform3d)

✅ **Responsividade:**
- Layout adaptável mobile/desktop
- Imagens responsivas
- Textos escaláveis

✅ **Interatividade:**
- Botões com hover effects
- Troca automática a cada 8 segundos
- Navegação por dots

---

## 📁 ARQUIVOS ENVOLVIDOS

### **Imagens Novas:**
```
📁 src/assets/
   ├── Foto_1.jpg.png  ← Slide "Planos de Saúde e Seguros"
   └── Foto_2.jpg.png  ← Slide "Proteção Completa"
```

### **Componente Modificado:**
```
📄 src/components/Hero.tsx
   └── Linhas 9-10: Imports atualizados
```

---

## 🔄 ORDEM DE EXIBIÇÃO

### **Ciclo de 8 segundos:**

```
┌─────────────────────────────────┐
│  Segundo 0-8:                   │
│  Foto_1.jpg.png                 │
│  "Planos de Saúde e Seguros"    │
│  "Para Você e Sua Família"      │
└─────────────────────────────────┘
         ↓ (fade transition)
┌─────────────────────────────────┐
│  Segundo 8-16:                  │
│  Foto_2.jpg.png                 │
│  "Proteção Completa"            │
│  "Com as Melhores Operadoras"   │
└─────────────────────────────────┘
         ↓ (volta ao início)
```

---

## 🧪 COMO TESTAR

### **1. Acesse a página principal:**
```
http://localhost:8080
```

### **2. Verifique os slides:**
- **Aguarde 8 segundos** para ver a transição automática
- **Slide 1:** Deve aparecer `Foto_1.jpg.png` com texto "Planos de Saúde e Seguros"
- **Slide 2:** Deve aparecer `Foto_2.jpg.png` com texto "Proteção Completa"

### **3. Teste a responsividade:**
```bash
# Redimensione a janela do navegador
# Mobile: Imagens devem se adaptar
# Desktop: Imagens devem preencher o frame arredondado
```

### **4. Recarregue a página:**
```
Ctrl + Shift + R (Windows)
```

---

## ✅ CHECKLIST

- [x] ✅ Foto_1.jpg.png copiada para assets
- [x] ✅ Foto_2.jpg.png copiada para assets
- [x] ✅ Import do heroImage1 atualizado
- [x] ✅ Import do heroImage2 atualizado
- [x] ✅ Mapeamento correto: Foto_1 → Slide 1
- [x] ✅ Mapeamento correto: Foto_2 → Slide 2
- [x] ✅ Todos os efeitos mantidos
- [x] ✅ 0 erros de linter
- [x] ✅ Código testado

---

## 📊 COMPARAÇÃO

| Item | Antes | Depois |
|------|-------|--------|
| **Slide 1 Imagem** | corporate-buildings-1.webp | Foto_1.jpg.png ✅ |
| **Slide 2 Imagem** | corporate-buildings-2.jpg | Foto_2.jpg.png ✅ |
| **Efeitos** | Todos ativos | Todos ativos ✅ |
| **Animações** | Funcionando | Funcionando ✅ |
| **Transições** | 8s + fade | 8s + fade ✅ |

---

## 🎨 ESTRUTURA DO HERO

### **Layout do Hero:**
```
┌──────────────────────────────────────┐
│  [LOGO FIXO] (canto superior esq.)   │
│                                      │
│  ┌────────────────────────────┐     │
│  │  [IMAGEM COM FRAME]        │     │
│  │  • Rounded corners         │     │
│  │  • Gradient overlay        │     │
│  │  • Parallax effect         │     │
│  │  • Slow zoom animation     │     │
│  │                            │     │
│  │  [CONTEÚDO SOBREPOSTO]     │     │
│  │  • Label premium           │     │
│  │  • Título (staggered)      │     │
│  │  • Subtítulo               │     │
│  │  • Descrição               │     │
│  │  • Botões CTA              │     │
│  └────────────────────────────┘     │
│                                      │
└──────────────────────────────────────┘
```

---

## 🚀 PRÓXIMOS PASSOS (Opcional)

Se quiser adicionar mais slides:

### **1. Adicione nova imagem:**
```typescript
import heroImage3 from "@/assets/Foto_3.jpg.png";
```

### **2. Adicione ao array slides:**
```typescript
const slides = [
  {
    image: heroImage1,
    title: "...",
    // ...
  },
  {
    image: heroImage2,
    title: "...",
    // ...
  },
  {
    image: heroImage3,  // ← Novo slide
    title: "Novo Título",
    subtitle: "Novo Subtítulo",
    label: "NOVA LABEL",
    description: "Nova descrição..."
  }
];
```

---

## 📞 SUPORTE

### **Para trocar novamente as imagens:**

1. **Copie as novas imagens** para `src/assets/`
2. **Atualize os imports** em `Hero.tsx`:
   ```typescript
   import heroImage1 from "@/assets/NOVA_FOTO_1.jpg";
   import heroImage2 from "@/assets/NOVA_FOTO_2.jpg";
   ```
3. **Recarregue** o navegador

### **Para ajustar o tempo de transição:**

```typescript
// Arquivo: src/components/Hero.tsx
// Linha: ~36

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, 8000); // ← Altere este valor (em milissegundos)
  
  return () => clearInterval(timer);
}, []);
```

---

## ✅ RESULTADO FINAL

**As novas imagens do Hero estão ativas e funcionando perfeitamente!**

```
Slide 1: Foto_1.jpg.png ✅
         "Planos de Saúde e Seguros"
         
Slide 2: Foto_2.jpg.png ✅
         "Proteção Completa"
```

**Todos os efeitos premium foram mantidos!** ✨

---

**✅ ALTERAÇÕES CONCLUÍDAS COM SUCESSO!**

**Para visualizar:**
```bash
http://localhost:8080
```

---

**Documentação criada em:** 17 de Dezembro de 2025  
**Status:** ✅ Completo e funcionando perfeitamente

