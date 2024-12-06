import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Box, Container, Flex, Text } from "@radix-ui/themes"
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { PhoneIcon as WhatsappIcon } from 'lucide-react'

const offeredServices = [
  {
    "name": "Psicoterapia Individual",
    "img": "https://placehold.co/50",
    "description": "A psicoterapia individual permite ao cliente explorar questões pessoais em um ambiente seguro, utilizando técnicas para compreender sentimentos, comportamentos e pensamentos, promovendo autoconhecimento e desenvolvimento pessoal."
  },
  {
    "name": "Psicoterapia de Casal",
    "img": "https://placehold.co/50",
    "description": "Voltada para casais, a psicoterapia de casal trabalha questões relacionais como conflitos, comunicação e intimidade, fortalecendo o vínculo afetivo e promovendo uma convivência harmoniosa."
  },
  {
    "name": "Psicoterapia em Grupo",
    "img": "https://placehold.co/50",
    "description": "A psicoterapia em grupo oferece um espaço para interação entre pessoas com experiências similares, promovendo apoio mútuo e aprendizado coletivo."
  },
  {
    "name": "Psicoterapia Domiciliar",
    "img": "https://placehold.co/50",
    "description": "Atendimento psicoterápico no conforto da residência do cliente, garantindo continuidade no cuidado e suporte emocional necessário para quem não pode se deslocar até o consultório."
  },
  {
    "name": "Psicoterapia Infantil",
    "img": "https://placehold.co/50",
    "description": "Atendimento especializado para crianças, em um ambiente lúdico, que trabalha questões emocionais e comportamentais de forma sensível e adequada ao universo infantil."
  },
  {
    "name": "Avaliação Psicológica Humanizada",
    "img": "https://placehold.co/50",
    "description": "Avaliação psicológica humanizada para diversos casos, incluindo TEA, TDAH, burnout, depressão e ansiedade, com foco no bem-estar emocional e psicológico do paciente."
  },
  {
    "name": "Orientação Vocacional",
    "img": "https://placehold.co/50",
    "description": "Ajuda jovens e adultos a explorarem habilidades, interesses e valores, auxiliando na escolha de uma profissão que esteja alinhada com suas aspirações e potencialidades."
  },
  {
    "name": "Treinamentos e Palestras",
    "img": "https://placehold.co/50",
    "description": "Oferecemos treinamentos e palestras sobre temas relacionados ao bem-estar mental, desenvolvimento pessoal e profissional, com o objetivo de promover saúde mental e conscientização."
  },
  {
    "name": "Plantão Psicológico",
    "img": "https://placehold.co/50",
    "description": "Atendimento imediato e breve para suporte emocional urgente, ideal para situações de crise ou quando a pessoa necessita ser ouvida e acolhida no momento."
  },
  {
    "name": "Supervisão Clínica",
    "img": "https://placehold.co/50",
    "description": "Serviço de orientação para profissionais e estagiários da psicologia, focando no desenvolvimento de competências clínicas e apoio técnico em casos práticos."
  }
];


export const Services = () => {

  const [currentCard, setCurrentCard] = useState();

  const handleShowServiceInformation = () => {

  }

  return (
    <div className="flex items-center justify-center 
    px-80 
    py-20
    mt-16 
    w-screen">

      <Box style={{
        background: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
      }}>

        <Container size="1">
          <Carousel
            opts={{
              active: true,
              align: "center"
            }}
            className="w-screen max-w-5xl max-h-120"
          >
            <CarouselContent>
              {offeredServices.map((service) => (
                <CarouselItem key={service.name} className="basis-1/5 min-w-[400px] ">
                  <Card className="max-h-50 min-w-100 overflow-hidden justify-center">
                    <CardHeader className="items-center justify-center">
                      <img src={service.img} height={150} width={150} />
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center p-6 h-100">
                      <span className="font-semibold text-2xl">{service.name}</span>
                      <Flex maxWidth="270px">
                        <Text wrap="pretty" align="center" className="text-xl font-light text-justify">
                          {service.description.length > 100 ? service.description.substring(0, 100) + "..." : service.description}
                        </Text>
                      </Flex>
                      <Dialog>
                        <DialogTrigger style={{ color: "white" }}>Saiba mais</DialogTrigger>
                        <DialogContent>
                          <DialogHeader className=" items-center justify-center">
                            <DialogTitle className="text-2xl">
                              <img src={service.img} height={150} width={150} />
                              {service.name}

                            </DialogTitle>
                            <DialogDescription className="text-xl items-center justify-center">
                              {service.description}
                            </DialogDescription>
                          </DialogHeader>
                          <Button
                            asChild
                            className=" w-1/2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-2 px-4 rounded-full inline-flex items-center justify-center transition-colors duration-300"
                          >
                            <a href="#" target="_blank" rel="noopener noreferrer">
                              <WhatsappIcon className="w-full h-5 mr-2" />
                              <span>WhatsApp</span>
                            </a>
                          </Button>
                        </DialogContent>
                      </Dialog>

                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </Box>
    </div>
  )
}
