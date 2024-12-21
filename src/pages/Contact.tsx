import { Box, Container, Grid, Text } from '@radix-ui/themes';
import { Button } from "@/components/ui/button";
import { PhoneIcon as WhatsappIcon } from 'lucide-react'

export const Contact = () => {
  return (
    <div className="flex items-center justify-center px-80 py-20 mt-16 w-screen">
      <Box className="flex flex-col items-center justify-center">
        <Container size="1">
          <Grid columns="2" gap="3" width="auto" style={{ alignItems: "center" }}>
            {/* Primeira linha: texto à esquerda e imagem à direita */}
            <Box height="auto" className="flex items-center justify-center flex-col">
              <Text
                className="text-4xl text-gray-700 mb-8"
                align="center"
                as="div"
                wrap="balance"
              >
                Fale com a gente!
              </Text>
              <Text
                className="text-xl text-gray-700 text-left"
                align="left"
                as="div"
                wrap="balance"
              >
                <span className="block">
                  Entre em contato conosco. Nosso canal de atendimento irá auxiliá-lo a identificar as melhores soluções para seus objetivos e necessidades.
                </span>
                <span className="block mb-4">(11) 9876-5432</span>
                <span className="block mb-4">contato@solucaosupport.com.br</span>
                <span className="block">
                  Avenida Paulista, 1500 - Sala 301, Bela Vista
                </span>
                <span className="block">São Paulo - SP CEP 01310-000</span>
              </Text>
            </Box>

            <Box height="auto" className="flex items-center justify-center flex-col" style={{ display: "flex" , alignItems: "center"  }}>
              <Text
                className="text-4xl text-gray-700 mb-8"
                align="center"
                as="div"
                wrap="balance"
              >
                Nos envie um whatsapp!
              </Text>

              <Button
              
                asChild
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
              >
                <a
                  href={`https://api.whatsapp.com/send?phone=559191267386&text=Olá!%20gostaria%20de%20conhecer%20a%20humanize!`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon className="w-full h-5 mr-2" />
                  <span>Whatsapp</span>
                </a>
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
