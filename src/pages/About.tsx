import { Box, Container, Grid, Text } from '@radix-ui/themes';
import * as React from 'react';

export const About = () => {
  return (
    <div className="flex items-center justify-center px-80 py-20 mt-16 w-screen">

      <Box style={{
        background: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
      }}>

        <Container size="1">
          <Grid columns="2" gap="3" width="auto" style={{ alignItems: "center" }}>
            {/* Primeira linha: texto à esquerda e imagem à direita */}
            <Box height="auto" className="flex items-center justify-center">
              <Text
                className="text-lg text-gray-700"
                align="center"
                as="div"
                 wrap="balance"
              >
                A Humanize visa promover o bem-estar e o desenvolvimento pessoal dos clientes e funcionários, oferecendo um ambiente seguro, acolhedor e respeitoso. Todos os profissionais estão comprometidos com práticas alinhadas aos princípios éticos e ao bem-estar do cliente.
              </Text>
            </Box>
            <Box height="auto" className="flex items-center justify-center">
              <img
                src="https://placehold.co/600x400"
                alt="Missão"
                className="object-cover w-full h-auto"
              />
            </Box>

            {/* Segunda linha: imagem à esquerda e texto à direita */}
            <Box height="auto" className="flex items-center justify-center">
              <img
                src="https://placehold.co/600x400"
                alt="Visão"
                className="object-cover w-full h-auto"
              />
            </Box>
            <Box height="auto" className="flex items-center ">
              <Text
                className="text-lg text-gray-700"
                align="center"
                as="div"
              >
                A Humanize se posiciona com um olhar focado no desenvolvimento contínuo do ser humano, visando a criação de um ambiente terapêutico que seja seguro e acolhedor para todos os indivíduos. Nosso compromisso com a dignidade e o respeito ao cliente são pilares essenciais de nossa visão.
              </Text>
            </Box>

            {/* Terceira linha: texto à esquerda e imagem à direita */}
            <Box height="auto" className="flex items-center">
              <Text
                className="text-lg text-gray-700"
                align="center"
                as="div"
              >
                A recepção desempenha um papel fundamental no primeiro contato com os clientes e deve adotar uma postura acolhedora, cordial e profissional. Profissionais da recepção devem atender com um tom de voz calmo e amigável, garantindo que o cliente se sinta à vontade e respeitado desde o momento da chegada.
              </Text>
            </Box>
            <Box height="auto" className="flex items-center justify-center">
              <img
                src="https://placehold.co/600x400"
                alt="Diretrizes para Atendimento"
                className="object-cover w-full h-auto"
              />
            </Box>

            {/* Quarta linha: imagem à esquerda e texto à direita */}
            <Box height="auto" className="flex items-center justify-center">
              <img
                src="https://placehold.co/600x400"
                alt="História da Humanize"
                className="object-cover w-full h-auto"
              />
            </Box>
            <Box height="auto" className="flex items-center">
              <Text
                className="text-lg text-gray-700"
                align="center"
                as="div"
              >
                A clínica nasceu de um sonho genuíno, compartilhado por Alexandra Alves e Kaio Rocha, dois psicólogos que acreditavam profundamente em um espaço de terapia onde cada pessoa pudesse se sentir verdadeiramente acolhida. Mais do que uma clínica, eles queriam criar um lugar em que o ser humano fosse sempre a prioridade, onde ninguém se sentisse julgado, e onde cada atendimento fosse feito com ética, respeito e empatia.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
