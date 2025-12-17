# 🖼️ TROCA DAS IMAGENS PARALLAX - DOCUMENTAÇÃO

---

## ✅ **ALTERAÇÕES COMPLETAS**

Duas faixas parallax foram atualizadas com novas imagens.

---

## 📸 **PRIMEIRA FAIXA PARALLAX**

### **Localização:**
Logo após a seção Hero, primeira faixa horizontal com efeito scroll

### **Componente:**
`src/components/LuxuryGrid.tsx`

### **Mudanças:**
```typescript
// ANTES
import luxuryParallaxBanner from "@/assets/luxury-parallax-banner.jpeg";
backgroundPosition: '25% center'

// DEPOIS
import luxuryParallaxBanner from "@/assets/medical-parallax-1.jpg.png";
backgroundPosition: '60% center'
```

### **Imagem:**
- **Arquivo:** `medical-parallax-1.jpg.png`
- **Tema:** Equipamentos médicos (microscópio, estetoscópio, materiais de laboratório)
- **Posicionamento:** 60% center (mostra mais da parte direita, onde estão os elementos importantes)

---

## 📸 **SEGUNDA FAIXA PARALLAX**

### **Localização:**
Faixa horizontal entre seções, mais abaixo na página

### **Componente:**
`src/components/OurMission.tsx`

### **Mudanças:**
```typescript
// ANTES
import mercadoParallax from "@/assets/mercado-parallax.jpeg";
backgroundPosition: '25% center'

// DEPOIS
import mercadoParallax from "@/assets/porshe.jpg.png";
backgroundPosition: '50% center'
```

### **Imagem:**
- **Arquivo:** `porshe.jpg.png`
- **Tema:** Porsche (carro de luxo)
- **Posicionamento:** 50% center (centralizado para mostrar o veículo completo)

---

## 🎯 **ENTENDENDO O POSICIONAMENTO**

### **backgroundPosition explicado:**

```
0%  ←────── 25% ────── 50% ────── 75% ──────→ 100%
(esquerda)          (centro)             (direita)
```

**Primeira Faixa (60%):**
- Mostra mais da parte direita da imagem
- Ideal para a imagem médica, pois os equipamentos estão à direita

**Segunda Faixa (50%):**
- Centralizado
- Ideal para o Porsche, mostrando o carro completo

---

## 🔄 **EFEITO PARALLAX**

Ambas as faixas mantêm o efeito parallax:
- A imagem se move em velocidade diferente do scroll
- Cria profundidade e dinamismo
- Scale de 1.15 para cobrir todo o espaço durante o movimento

---

## 📋 **ARQUIVOS AFETADOS**

```
✅ src/components/LuxuryGrid.tsx
   - Primeira faixa parallax
   - Nova imagem: medical-parallax-1.jpg.png

✅ src/components/OurMission.tsx
   - Segunda faixa parallax
   - Nova imagem: porshe.jpg.png

✅ src/assets/
   - medical-parallax-1.jpg.png (nova)
   - porshe.jpg.png (nova)
```

---

## 🎨 **COMBINAÇÃO COM PALETA AZUL**

As novas imagens combinam perfeitamente com a nova paleta azul (#008896):
- ✅ Tema médico/saúde alinha com seguros de saúde
- ✅ Porsche de luxo alinha com seguros premium
- ✅ Ambas mantêm a estética Dark Luxury Editorial

---

## ⚙️ **AJUSTES DE POSICIONAMENTO**

Se precisar ajustar o enquadramento:

### **Primeira Faixa (Médica):**
```typescript
// Mostrar mais à esquerda
backgroundPosition: '40% center' ou '30% center'

// Mostrar mais à direita (ATUAL)
backgroundPosition: '60% center'

// Mostrar muito mais à direita
backgroundPosition: '70% center' ou '80% center'
```

### **Segunda Faixa (Porsche):**
```typescript
// Mostrar mais à esquerda
backgroundPosition: '30% center' ou '40% center'

// Centralizado (ATUAL)
backgroundPosition: '50% center'

// Mostrar mais à direita
backgroundPosition: '60% center' ou '70% center'
```

---

## 🚀 **COMO TESTAR**

### **Acesse:**
```
http://localhost:8080
```

### **Primeira Faixa:**
1. Role a página após o Hero
2. Veja a primeira faixa horizontal azul
3. Deve aparecer a imagem médica com equipamentos
4. Efeito parallax ao rolar

### **Segunda Faixa:**
1. Continue rolando a página
2. Entre as seções, aparece outra faixa horizontal
3. Deve aparecer o Porsche
4. Efeito parallax ao rolar

---

## 📊 **RESUMO DAS MUDANÇAS**

| Faixa | Imagem Antiga | Imagem Nova | Posicionamento |
|-------|---------------|-------------|----------------|
| **1ª** | luxury-parallax-banner.jpeg | medical-parallax-1.jpg.png | 60% center |
| **2ª** | mercado-parallax.jpeg | porshe.jpg.png | 50% center |

---

## ✅ **STATUS FINAL**

```
✅ Primeira faixa parallax: Imagem médica
✅ Segunda faixa parallax: Porsche
✅ Posicionamento ajustado
✅ Efeito parallax mantido
✅ Paleta azul preservada
✅ Zero erros
```

---

## 🎉 **TRANSFORMAÇÃO COMPLETA!**

As duas faixas parallax agora exibem imagens premium que combinam perfeitamente com:
- ✅ Tema de seguros e saúde
- ✅ Paleta azul #008896
- ✅ Design Dark Luxury Editorial
- ✅ Público premium/corporativo

---

**Última atualização:** 16/12/2025
**Componentes modificados:** 2
**Imagens adicionadas:** 2
**Bugs introduzidos:** 0 ✅

---

## 🔗 **ACESSO RÁPIDO**

```bash
cd C:\Users\Usuario\lifepalns-vision-launch
npm run dev
```

```
http://localhost:8080
```

**Role a página para ver as duas novas faixas parallax!** 🚀📸


