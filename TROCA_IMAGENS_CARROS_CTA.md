# 🚗 TROCA DE IMAGENS DOS CARROS - SEÇÕES CTA

**Data:** 17 de Dezembro de 2025  
**Arquivos Alterados:** `CTASection.tsx` e `Seguros.tsx`  
**Status:** ✅ Concluído

---

## 🎯 OBJETIVO

Substituir as 3 imagens dos carros nas duas seções que contêm o título **"Pronto para Garantir Sua Tranquilidade?"**

---

## 📍 LOCALIZAÇÕES DAS SEÇÕES

### **1️⃣ Página Principal (Index):**
- **Componente:** `src/components/CTASection.tsx`
- **Seção:** CTA final da página principal
- **Título:** "Pronto para Garantir Sua Tranquilidade?"

### **2️⃣ Subpágina Seguros:**
- **Componente:** `src/pages/Seguros.tsx`
- **Seção:** Hero da página de seguros
- **Título:** "Pronto para Garantir Sua Tranquilidade?"

---

## 🖼️ IMAGENS SUBSTITUÍDAS

### **CTASection.tsx (Página Principal):**

**ANTES:**
```typescript
import ctaHero1 from "@/assets/cta-hero-1.png";
import ctaHero2 from "@/assets/cta-hero-2.png";
import ctaHero3 from "@/assets/cta-hero-3.png";
```

**DEPOIS:**
```typescript
import ctaHero1 from "@/assets/carro_1.jpg.png";
import ctaHero2 from "@/assets/carro_2.jpg.png";
import ctaHero3 from "@/assets/carro_3.jpg.png";
```

---

### **Seguros.tsx (Subpágina):**

**ANTES:**
```typescript
import segurosHero1 from "@/assets/seguros-hero-1.png";
import segurosHero2 from "@/assets/seguros-hero-2.png";
import segurosHero3 from "@/assets/seguros-hero-3.png";
```

**DEPOIS:**
```typescript
import segurosHero1 from "@/assets/carro_1.jpg.png";
import segurosHero2 from "@/assets/carro_2.jpg.png";
import segurosHero3 from "@/assets/carro_3.jpg.png";
```

---

## 📸 IMAGENS UTILIZADAS

As três novas imagens dos carros na estrada:

1. **carro_1.jpg.png** - Carro na estrada (vista 1)
2. **carro_2.jpg.png** - Carro na estrada (vista 2)
3. **carro_3.jpg.png** - Carro na estrada (vista 3)

**Localização:** `src/assets/`

---

## 🎬 FUNCIONAMENTO DA ANIMAÇÃO

As imagens trocam automaticamente a cada **5 segundos** com transição suave:

```typescript
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

**Efeito Visual:**
- ✅ Fade in/out suave (`transition-opacity duration-1000`)
- ✅ Overlay escuro (`rgba(0, 0, 0, 0.4)`)
- ✅ Imagens em loop infinito (1 → 2 → 3 → 1...)

---

## 📐 LAYOUT DAS SEÇÕES

Ambas as seções seguem o mesmo layout otimizado para destacar os carros:

```
┌─────────────────────────────────────────────┐
│                                             │
│  [TOPO] - Padding 16-20                    │
│  "Pronto para Garantir Sua Tranquilidade?" │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│         🚗 ESPAÇO PARA OS CARROS 🚗         │
│         (min-height: 200-300px)             │
│                                             │
│     [As imagens trocam automaticamente]     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  [RODAPÉ] - Padding 16-20                  │
│  "Fale com nossos especialistas..."         │
│  [Botão Solicitar Cotação]                  │
│  [Botão Falar no WhatsApp]                  │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🎨 ESTRUTURA VISUAL

### **Background das Imagens:**
```typescript
style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
}}
```

**Características:**
- ✅ Overlay escuro para legibilidade do texto
- ✅ `bg-cover bg-center` para preencher toda a seção
- ✅ Transição suave de 1 segundo entre imagens
- ✅ Altura de 75vh (mobile) a 85vh (desktop)

---

## 🧪 COMO TESTAR

### **1. Página Principal:**
```
http://localhost:8080/
```
- Role até o final da página
- Veja a seção "Pronto para Garantir Sua Tranquilidade?"
- As 3 novas imagens dos carros devem estar trocando

### **2. Subpágina Seguros:**
```
http://localhost:8080/seguros
```
- Logo no topo da página (Hero)
- Mesma seção "Pronto para Garantir Sua Tranquilidade?"
- As 3 novas imagens dos carros devem estar trocando

### **3. Verificar Animação:**
- ⏱️ Aguarde 5 segundos
- ✅ A imagem deve trocar com fade suave
- ✅ Após 15 segundos, todas as 3 imagens já foram exibidas
- ✅ O loop continua infinitamente

---

## 📊 COMPARAÇÃO

### **Antes:**

| Componente | Imagem 1 | Imagem 2 | Imagem 3 |
|------------|----------|----------|----------|
| **CTASection** | cta-hero-1.png | cta-hero-2.png | cta-hero-3.png |
| **Seguros** | seguros-hero-1.png | seguros-hero-2.png | seguros-hero-3.png |

### **Depois:**

| Componente | Imagem 1 | Imagem 2 | Imagem 3 |
|------------|----------|----------|----------|
| **CTASection** | carro_1.jpg.png | carro_2.jpg.png | carro_3.jpg.png |
| **Seguros** | carro_1.jpg.png | carro_2.jpg.png | carro_3.jpg.png |

**Resultado:** Ambas as seções agora usam as **mesmas 3 imagens dos carros na estrada**! 🚗💨

---

## 🎯 BENEFÍCIOS DA MUDANÇA

### **1. Consistência Visual:**
- ✅ Mesmas imagens em ambas as seções
- ✅ Identidade visual unificada
- ✅ Associação clara com seguros automotivos

### **2. Qualidade das Imagens:**
- ✅ Imagens mais adequadas ao tema de seguros
- ✅ Carros na estrada = sensação de movimento e proteção
- ✅ Qualidade visual profissional

### **3. Mensagem Reforçada:**
- ✅ "Tranquilidade" + carro na estrada = viagem segura
- ✅ Visual reforça a proposta de segurança
- ✅ Imagens transmitem confiança

---

## 🔧 DETALHES TÉCNICOS

### **Array de Imagens:**
```typescript
// Ambos os componentes usam a mesma estrutura:
const heroImages = [segurosHero1, segurosHero2, segurosHero3];
// ou
const heroImages = [ctaHero1, ctaHero2, ctaHero3];
```

### **Renderização:**
```typescript
{heroImages.map((image, index) => (
  <div
    key={index}
    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
      currentImage === index ? "opacity-100" : "opacity-0"
    }`}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image})`,
    }}
  />
))}
```

### **Transição:**
- **Duração:** 1000ms (1 segundo)
- **Propriedade:** `opacity`
- **Intervalo:** 5000ms (5 segundos)
- **Efeito:** Fade in/out

---

## ✅ CHECKLIST DE VALIDAÇÃO

### **CTASection.tsx:**
- [x] ✅ Imports atualizados para carro_1, carro_2, carro_3
- [x] ✅ Array `heroImages` funcionando
- [x] ✅ Animação de troca preservada
- [x] ✅ Layout responsivo mantido
- [x] ✅ Texto posicionado corretamente
- [x] ✅ Botões funcionando

### **Seguros.tsx:**
- [x] ✅ Imports atualizados para carro_1, carro_2, carro_3
- [x] ✅ Array `heroImages` funcionando
- [x] ✅ Animação de troca preservada
- [x] ✅ Layout responsivo mantido
- [x] ✅ Texto posicionado corretamente
- [x] ✅ Botões funcionando

### **Geral:**
- [x] ✅ 0 erros de linter
- [x] ✅ Imagens carregando corretamente
- [x] ✅ Transições suaves
- [x] ✅ Responsividade perfeita
- [x] ✅ Performance otimizada

---

## 📱 RESPONSIVIDADE

### **Desktop (≥ 768px):**
- Altura: 85vh
- Padding top/bottom: 20 (5rem)
- Texto: text-5xl a text-6xl
- Espaço central: min-h-[300px]

### **Mobile (< 768px):**
- Altura: 75vh
- Padding top/bottom: 16 (4rem)
- Texto: text-3xl
- Espaço central: min-h-[200px]

---

## 🎬 SEQUÊNCIA DAS IMAGENS

```
Tempo    Imagem Exibida
─────────────────────────
0s       carro_1.jpg.png
5s       carro_2.jpg.png
10s      carro_3.jpg.png
15s      carro_1.jpg.png (recomeça)
20s      carro_2.jpg.png
25s      carro_3.jpg.png
...      (loop infinito)
```

---

## 🚀 RESULTADO FINAL

**Ambas as seções agora exibem:**

1. 🚗 **Carro 1** - Vista da estrada (primeiro plano)
2. 🚗 **Carro 2** - Vista da estrada (ângulo diferente)
3. 🚗 **Carro 3** - Vista da estrada (perspectiva única)

**Com transições suaves e profissionais que reforçam a mensagem de segurança e tranquilidade!**

---

## 🎯 PÁGINAS AFETADAS

1. **Página Principal (`/`):**
   - Componente: `CTASection.tsx`
   - Posição: Final da página

2. **Página de Seguros (`/seguros`):**
   - Componente: Dentro de `Seguros.tsx`
   - Posição: Hero (topo da página)

---

**✅ TROCA DE IMAGENS CONCLUÍDA COM SUCESSO!**

**Para visualizar:**
```bash
# Página Principal
http://localhost:8080/

# Página de Seguros
http://localhost:8080/seguros
```

---

**Documentação criada em:** 17 de Dezembro de 2025  
**Status:** ✅ Completo e funcionando perfeitamente  
**Imagens:** 3 carros na estrada com transição automática a cada 5 segundos

