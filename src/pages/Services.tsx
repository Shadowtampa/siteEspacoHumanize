import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Box, Container, Flex, Text } from "@radix-ui/themes"
import { Button } from "@/components/ui/button";
// import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { PhoneIcon as WhatsappIcon } from 'lucide-react'
import { PageLayout } from "@/components/PageLayout";

const offeredServices = [
  {
    "name": "Psicoterapia Individual",
    "img": "https://placehold.co/50",
    "description": "A psicoterapia individual permite ao cliente explorar questões pessoais em um ambiente seguro, utilizando técnicas para compreender sentimentos, comportamentos e pensamentos, promovendo autoconhecimento e desenvolvimento pessoal."
    , "color": "rgb(223, 216, 187)"
  },
  {
    "name": "Psicoterapia de Casal",
    "img": "https://placehold.co/50",
    "description": "Voltada para casais, a psicoterapia de casal trabalha questões relacionais como conflitos, comunicação e intimidade, fortalecendo o vínculo afetivo e promovendo uma convivência harmoniosa."
    , "color": "rgb(194, 237, 181)"
  },
  {
    "name": "Psicoterapia em Grupo",
    "img": "https://placehold.co/50",
    "description": "A psicoterapia em grupo oferece um espaço para interação entre pessoas com experiências similares, promovendo apoio mútuo e aprendizado coletivo."
    , "color": "rgb(186, 179, 221)"
  },
  {
    "name": "Psicoterapia Domiciliar",
    "img": "https://placehold.co/50",
    "description": "Atendimento psicoterápico no conforto da residência do cliente, garantindo continuidade no cuidado e suporte emocional necessário para quem não pode se deslocar até o consultório."
    , "color": "rgb(222, 185, 194)"
  },
  {
    "name": "Psicoterapia Infantil",
    "img": "https://placehold.co/50",
    "description": "Atendimento especializado para crianças, em um ambiente lúdico, que trabalha questões emocionais e comportamentais de forma sensível e adequada ao universo infantil."
    , "color": "rgb(224, 188, 224)"
  },
  {
    "name": "Avaliação Psicológica Humanizada",
    "img": "https://placehold.co/50",
    "description": "Avaliação psicológica humanizada para diversos casos, incluindo TEA, TDAH, burnout, depressão e ansiedade, com foco no bem-estar emocional e psicológico do paciente."
    , "color": "rgb(178, 199, 238)",
  },
  {
    "name": "Orientação Vocacional",
    "img": "https://placehold.co/50",
    "description": "Ajuda jovens e adultos a explorarem habilidades, interesses e valores, auxiliando na escolha de uma profissão que esteja alinhada com suas aspirações e potencialidades."
    , "color": "rgb(253, 249, 171)"
  },
  {
    "name": "Treinamentos e Palestras",
    "img": "https://placehold.co/50",
    "description": "Oferecemos treinamentos e palestras sobre temas relacionados ao bem-estar mental, desenvolvimento pessoal e profissional, com o objetivo de promover saúde mental e conscientização."
    , "color": 'rgb(218, 236, 173)'
  },
  {
    "name": "Plantão Psicológico",
    "img": "https://placehold.co/50",
    "description": "Atendimento imediato e breve para suporte emocional urgente, ideal para situações de crise ou quando a pessoa necessita ser ouvida e acolhida no momento."
    , "color": "rgb(183, 223, 194)"
  },
  {
    "name": "Supervisão Clínica",
    "img": "https://placehold.co/50",
    "description": "Serviço de orientação para profissionais e estagiários da psicologia, focando no desenvolvimento de competências clínicas e apoio técnico em casos práticos."
    , "color": "rgb(237, 236, 167)"
  }
];


export const Services = () => {

  const addAlphaToRgb = (rgb: string, alpha: number) => {
    return rgb.replace("rgb", "rgba").replace(")", `, ${alpha})`);
  }

  return (
    <PageLayout
      BoxStyle="bg-white rounded-radius-3"
      pageSubTitle="Serviços">
      <Carousel
        opts={{
          active: true,
          align: "center"
        }}
        className="w-screen max-w-5xl mt-0 "
      >
        <CarouselContent>
          {offeredServices.map((service) => (
            <CarouselItem key={service.name} className="basis-1/5 min-w-[400px] ">
              <Card className="min-w-100 overflow-hidden justify-center" style={{
                "height": "35rem"
                , "backgroundColor": addAlphaToRgb(service.color, 0.2)
              }}>
                <CardHeader className="items-center justify-center">
                  <img src={service.img} height={150} width={150} />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center p-6 h-100">
                  <span className="font-semibold text-2xl drop-shadow-sm" style={{
                    "textAlign": "center",
                    "marginBottom": "0.5rem",
                    "marginTop": "-1rem"
                    , "color": addAlphaToRgb(service.color, 1),
                  }}>{service.name}</span>
                  <Flex maxWidth="270px">
                    <Text wrap="pretty" align="center" className="text-xl font-light text-justify drop-shadow-sm">
                      {service.description.length > 100 ? service.description.substring(0, 150) + "..." : service.description}
                    </Text>
                  </Flex>

                  <Dialog >
                    <DialogTrigger
                      className=
                      "absolute bottom-[1.5rem] text-white w-[10rem]"

                      style={{
                        "backgroundColor": addAlphaToRgb(service.color, 1)
                        , "color": "white"
                      }}
                    >Saiba mais</DialogTrigger>
                    <DialogContent className="h-[35rem]" style={{
                      "backgroundColor": addAlphaToRgb(service.color, 1),
                    }}
                    >
                      <DialogHeader className="flex flex-col items-start justify-center gap-4" style={{
                        // "color": addAlphaToRgb(service.color, 1)
                      }}>
                        <DialogTitle className="text-2xl drop-shadow-sm" style={{
                          textShadow: " addAlphaToRgb(service.color, 1)", // Efeito de luz
                        }}>
                          <img src={service.img} height={150} width={150} />
                          <span className="block text-left">{service.name}</span>
                        </DialogTitle>
                        <DialogDescription className="text-xl">
                          {service.description}

                          <br />
                          <br />
                          <span> Gostou? Nos contate no whatsapp!</span>
                        </DialogDescription>
                      </DialogHeader>

                      <DialogFooter className="relative">
                        <Button
                          asChild
                          className="absolute bottom-[1.5rem] left-1/2 transform -translate-x-1/2 w-1/2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-4 rounded-full inline-flex transition-colors duration-300"
                        >
                          <a
                            href={`https://api.whatsapp.com/send?phone=559191267386&text=Olá!%20gostaria%20de%20saber%20mais%20sobre%20${service.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <WhatsappIcon className="w-full h-5 mr-2" />
                            <span>{service.name}</span>
                          </a>
                        </Button>
                      </DialogFooter>


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
    </PageLayout>
  )
}
