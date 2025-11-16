import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PlanoSaudeIndividual from "./pages/PlanoSaudeIndividual";
import PlanoSaudeFamiliar from "./pages/PlanoSaudeFamiliar";
import PlanoSaudeEmpresarial from "./pages/PlanoSaudeEmpresarial";
import PlanoOdontologico from "./pages/PlanoOdontologico";
import SeguroVida from "./pages/SeguroVida";
import SeguroAuto from "./pages/SeguroAuto";
import SeguroResidencial from "./pages/SeguroResidencial";
import SeguroEmpresarial from "./pages/SeguroEmpresarial";
import PlanosSaude from "./pages/PlanosSaude";
import Seguros from "./pages/Seguros";
import Sobre from "./pages/Sobre";
import PlanosOdontologicos from "./pages/PlanosOdontologicos";
import TrabalheConosco from "./pages/TrabalheConosco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/plano-saude-individual" element={<PlanoSaudeIndividual />} />
          <Route path="/plano-saude-familiar" element={<PlanoSaudeFamiliar />} />
          <Route path="/plano-saude-empresarial" element={<PlanoSaudeEmpresarial />} />
          <Route path="/plano-odontologico" element={<PlanoOdontologico />} />
          <Route path="/seguro-vida" element={<SeguroVida />} />
          <Route path="/seguro-auto" element={<SeguroAuto />} />
          <Route path="/seguro-residencial" element={<SeguroResidencial />} />
          <Route path="/seguro-empresarial" element={<SeguroEmpresarial />} />
          <Route path="/planos-saude" element={<PlanosSaude />} />
          <Route path="/seguros" element={<Seguros />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/planos-odontologicos" element={<PlanosOdontologicos />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
