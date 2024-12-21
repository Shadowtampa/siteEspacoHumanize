import { Box, Container, Grid, Text } from '@radix-ui/themes';

import { Armchair } from 'lucide-react';
import { AirVent } from 'lucide-react';
import { VolumeOff } from 'lucide-react';



export const Ourspace = () => {
    return (
        <div className="flex items-center justify-center px-80 py-20 mt-16 w-screen">

            <Box style={{
                background: "var(--gray-a2)",
                borderRadius: "var(--radius-3)",
            }}>

                <Container size="1">
                    <Grid columns="2" gap="3" width="auto" style={{ alignItems: "center", justifyItems: "center" }}>
                        {/* Primeira linha: texto à esquerda e imagem à direita */}
                        <Box className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-[rgb(223,216,187)] w-full max-w-md ">
                            <Text
                                className="text-lg text-gray-700"
                                align="center"
                                as="div"
                                wrap="balance"
                            >
                                <span className="block text-xl font-semibold text-gray-900 mb-4">Sala 1</span>
                                <span className="flex items-center text-sm text-gray-600 mb-3">
                                    <Armchair className="mr-2 text-gray-700" />
                                    Conforto garantido
                                </span>
                                <span className="flex items-center text-sm text-gray-600 mb-3">
                                    <VolumeOff className="mr-2 text-gray-700" />
                                    As salas possuem uma ótima acústica
                                </span>
                                <span className="flex items-center text-sm text-gray-600">
                                    <AirVent className="mr-2 text-gray-700" />
                                    Salas com ar condicionado
                                </span>
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
                        <Box className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-[rgb(186,179,221)] w-full max-w-md">
                            <Text
                                className="text-lg text-gray-700"
                                align="center"
                                as="div"
                                wrap="balance"
                            >
                                <span className="block text-xl font-semibold text-gray-900 mb-4">Sala 2</span>
                                <span className="flex items-center text-sm text-gray-600 mb-3">
                                    <Armchair className="mr-2 text-gray-700" />
                                    Conforto garantido
                                </span>
                                <span className="flex items-center text-sm text-gray-600 mb-3">
                                    <VolumeOff className="mr-2 text-gray-700" />
                                    As salas possuem uma ótima acústica
                                </span>
                                <span className="flex items-center text-sm text-gray-600">
                                    <AirVent className="mr-2 text-gray-700" />
                                    Salas com ar condicionado
                                </span>
                            </Text>
                        </Box>

                        {/* Terceira linha: texto à esquerda e imagem à direita */}
                        <Box className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-[rgb(224,188,224)] w-full max-w-md">
                            <Text
                                className="text-lg text-gray-700"
                                align="center"
                                as="div"
                                wrap="balance"
                            >
                                <span className="block text-xl font-semibold text-gray-900 mb-4">Sala 3</span>
                                <span className="flex items-center text-sm text-gray-600 mb-3">
                                    <Armchair className="mr-2 text-gray-700" />
                                    Conforto garantido
                                </span>
                                <span className="flex items-center text-sm text-gray-600 mb-3">
                                    <VolumeOff className="mr-2 text-gray-700" />
                                    As salas possuem uma ótima acústica
                                </span>
                                <span className="flex items-center text-sm text-gray-600">
                                    <AirVent className="mr-2 text-gray-700" />
                                    Salas com ar condicionado
                                </span>
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
                        <Box className="flex items-center justify-center p-6 rounded-lg shadow-lg bg-[rgb(253,249,171)] w-full max-w-md">
                            <Text
                                className="text-lg text-gray-700"
                                align="center"
                                as="div"
                                wrap="balance"
                            >
                                <span className="block text-xl font-semibold text-gray-900 mb-4">Sala 4</span>
                                <span className="flex items-center text-sm text-gray-600 mb-3">
                                    <Armchair className="mr-2 text-gray-700" />
                                    Conforto garantido
                                </span>
                                <span className="flex items-center text-sm text-gray-600 mb-3">
                                    <VolumeOff className="mr-2 text-gray-700" />
                                    As salas possuem uma ótima acústica
                                </span>
                                <span className="flex items-center text-sm text-gray-600">
                                    <AirVent className="mr-2 text-gray-700" />
                                    Salas com ar condicionado
                                </span>
                            </Text>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}
