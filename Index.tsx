import { useState } from "react";
import { Phone, Zap, Shield, Clock, CheckCircle, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const services = [
    { title: "Instalação de Chuveiro", icon: Zap },
    { title: "Instalação de Tomadas 110V/220V", icon: Zap },
    { title: "Instalação de Ventilador de Teto", icon: Zap },
    { title: "Instalação de Luminária/Lustre", icon: Zap },
    { title: "Revisão do Quadro de Disjuntores", icon: Shield },
    { title: "Identificação de Curto-Circuito", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md" role="banner">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-14" role="navigation" aria-label="Navegação principal">
            <h1 className="text-xl md:text-2xl font-bold">Rivelino Soluções em Elétrica</h1>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6">
              <li><button onClick={() => scrollToSection("servicos")} className="hover:text-secondary transition-colors min-h-touch">Serviços</button></li>
              <li><button onClick={() => scrollToSection("sobre")} className="hover:text-secondary transition-colors min-h-touch">Sobre</button></li>
              <li><button onClick={() => scrollToSection("faq")} className="hover:text-secondary transition-colors min-h-touch">Dúvidas</button></li>
              <li><button onClick={() => scrollToSection("contato")} className="hover:text-secondary transition-colors min-h-touch">Contato</button></li>
            </ul>

            <Button 
              variant="secondary" 
              size="lg"
              className="hidden md:flex items-center gap-2 min-h-touch min-w-touch"
              asChild
            >
              <a href="tel:+5511999999999" aria-label="Fale agora com o Rivelino">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-h-touch min-w-touch flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4" role="navigation" aria-label="Menu mobile">
              <ul className="flex flex-col gap-2">
                <li><button onClick={() => scrollToSection("servicos")} className="w-full text-left py-3 hover:text-secondary transition-colors min-h-touch">Serviços</button></li>
                <li><button onClick={() => scrollToSection("sobre")} className="w-full text-left py-3 hover:text-secondary transition-colors min-h-touch">Sobre</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="w-full text-left py-3 hover:text-secondary transition-colors min-h-touch">Dúvidas</button></li>
                <li><button onClick={() => scrollToSection("contato")} className="w-full text-left py-3 hover:text-secondary transition-colors min-h-touch">Contato</button></li>
                <li>
                  <Button variant="secondary" className="w-full min-h-touch" asChild>
                    <a href="tel:+5511999999999" aria-label="Fale agora com o Rivelino">
                      <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
                     WhatsApp
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24" role="region" aria-label="Apresentação">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Soluções Elétricas com Segurança e Qualidade
          </h2>
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Atendimento rápido e profissional para sua casa ou empresa. Eletricista profissional com anos de experiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="text-lg min-h-touch"
              onClick={() => scrollToSection("contato")}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg min-h-touch border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="tel:+5511999999999">
                <MessageCircle className="h-5 w-5 mr-2" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-24 bg-background" role="region" aria-labelledby="servicos-title">
        <div className="container mx-auto px-4">
          <h2 id="servicos-title" className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Nossos Serviços
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <li key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Icon className="h-12 w-12 text-secondary mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">Serviço profissional com garantia e segurança.</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 bg-muted" role="region" aria-labelledby="sobre-title">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="sobre-title" className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Por Que Escolher a Rivelino?
            </h2>
            <p className="text-lg text-foreground mb-8">
              Com anos de experiência no mercado, oferecemos serviços elétricos de qualidade com foco em segurança e satisfação do cliente.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <li className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">Segurança Garantida</h3>
                <p className="text-muted-foreground">Todos os serviços seguem normas técnicas e de segurança.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">Atendimento Rápido</h3>
                <p className="text-muted-foreground">Resposta rápida e agendamento flexível.</p>
              </li>
              <li className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">Qualidade Comprovada</h3>
                <p className="text-muted-foreground">Materiais de qualidade e serviço profissional.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-muted" role="region" aria-labelledby="faq-title">
        <div className="container mx-auto px-4">
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Dúvidas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary min-h-touch">
                  Qual o prazo para atendimento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Oferecemos atendimento rápido, geralmente no mesmo dia ou em até 24 horas, dependendo da disponibilidade e urgência do serviço.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary min-h-touch">
                  Como funciona o orçamento?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O orçamento é gratuito. Entre em contato descrevendo o serviço necessário e forneceremos uma estimativa. Após avaliação presencial, o valor final será confirmado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary min-h-touch">
                  Os serviços têm garantia?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Todos os nossos serviços possuem garantia de 90 dias para a mão de obra e seguem a garantia do fabricante para materiais utilizados.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:text-primary min-h-touch">
                  Atendem em quais regiões?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Atendemos toda a região metropolitana. Entre em contato para confirmar se atendemos sua localidade específica.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24 bg-background" role="region" aria-labelledby="contato-title">
        <div className="container mx-auto px-4">
          <h2 id="contato-title" className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Fale Conosco
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Nome Completo</label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="min-h-touch"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="min-h-touch"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefone</label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="min-h-touch"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px]"
                placeholder="Descreva o serviço que você precisa"
              />
            </div>

            <Button type="submit" variant="secondary" size="lg" className="w-full min-h-touch text-lg">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8" role="contentinfo">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold mb-2">Rivelino Soluções em Elétrica</p>
          <p className="text-sm mb-4">Atendimento profissional com segurança e qualidade</p>
          <nav aria-label="Links do rodapé">
            <ul className="flex justify-center gap-6 flex-wrap">
              <li><a href="tel:+5511999999999" className="hover:text-secondary transition-colors min-h-touch inline-block">Telefone</a></li>
              <li><a href="mailto:contato@rivelino.com" className="hover:text-secondary transition-colors min-h-touch inline-block">E-mail</a></li>
            </ul>
          </nav>
          <p className="text-xs mt-6 text-primary-foreground/80">© 2024 Rivelino Soluções em Elétrica. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
