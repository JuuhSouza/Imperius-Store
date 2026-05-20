export const produtos = [
    {
        id: '001',
        nome: "Coleira sem engate com regulagem para cães e gatos",
        preco: 18.9,
        descricao: "Coleira para pescoço estampada para cães, feita com material resistente e confortável, ideal para passeios e atividades ao ar livre.",
        variacoes: [
            { cor: 'Vermelho', hex: '#FF0000', url: new URL('../assets/img/coleira-sem-engate-vermelho.png', import.meta.url).href },
            { cor: 'Amarelo', hex: '#FFD700', url: new URL('../assets/img/coleira-sem-engate-amarela.png', import.meta.url).href },
            { cor: 'Preto camuflado', hex: '#333333', url: new URL('../assets/img/coleira-sem-engate-camuflado-preto.png', import.meta.url).href },
            { cor: 'Azul claro', hex: '#41d2e6', url: new URL('../assets/img/coleira-sem-engate-azul.png', import.meta.url).href }
        ],
        midia: [
            {
                tipo: 'foto',
                url: new URL('../assets/img/dog-sem-engate-vermelho.png', import.meta.url).href,
                descricaoMidia: 'Vídeo mostrando a coleira em uso durante um passeio'
            },
            {
                tipo: 'foto',
                url: new URL('../assets/img/dog-sem-engate-camuflado-preto.png', import.meta.url).href
            }
        ]
    },
    {
        id: '002',
        nome: "Coleira com engate rápido e regulagem para cães",
        preco: 29.9,
        descricao: "Coleira para pescoço estampada para cães, feita com material resistente e confortável, ideal para passeios e atividades ao ar livre.",
        variacoes: [
            { cor: 'Azul claro', hex: '#41d2e6', url: new URL('../assets/img/coleira-com-engate-azul.png', import.meta.url).href },
            { cor: 'Amarelo', hex: '#FFD700', url: new URL('../assets/img/coleira-com-engate-amarela.png', import.meta.url).href },
            { cor: 'Vermelho', hex: '#FF0000', url: new URL('../assets/img/coleira-com-engate-vermelho.png', import.meta.url).href }
        ],
        midia: [
            {
                tipo: 'foto',
                url: new URL('../assets/img/medidas-pescoco.png', import.meta.url).href
            },
            {
                tipo: 'foto',
                url: new URL('../assets/img/dog-coleira-com-engate-azul.png', import.meta.url).href
            }
        ]
    },
    {
        id: '003',
        nome: "Coleira com duas argolas para cães",
        preco: 29.9,
        descricao: "Coleira para pescoço estampada para cães, feita com material resistente e confortável, ideal para passeios e atividades ao ar livre.",
        variacoes: [
            { cor: 'Preto camuflado', hex: '#333333', url: new URL('../assets/img/coleira-2-argolas-camuflado-preto.png', import.meta.url).href },
            { cor: 'Vermelho', hex: '#FF0000', url: new URL('../assets/img/coleira-2-argolas-vermelho.png', import.meta.url).href },
            { cor: 'Amarelo', hex: '#FFD700', url: new URL('../assets/img/coleira-2-argolas-amarelo.png', import.meta.url).href },
            { cor: 'Azul claro', hex: '#41d2e6', url: new URL('../assets/img/coleira-2-argolas-azul.png', import.meta.url).href }
        ],
        midia: [
            {
                tipo: 'foto',
                url: new URL('../assets/video/coleira-passeio.mp4', import.meta.url).href
            },
            {
                tipo: 'foto',
                url: new URL('../assets/video/coleira-passeio.mp4', import.meta.url).href
            }
        ],
        midia: [
            {
                tipo: 'foto',
                url: new URL('../assets/video/coleira-passeio.mp4', import.meta.url).href
            },
            {
                tipo: 'foto',
                url: new URL('../assets/video/coleira-passeio.mp4', import.meta.url).href
            }
        ]
    },
    {
        id: '004',
        nome: "Enforcados para cães",
        preco: 24.9,
        descricao: "Coleira para pescoço estampada para cães, feita com material resistente e confortável, ideal para passeios e atividades ao ar livre.",
        variacoes: [
            { cor: 'Vermelho', hex: '#FF0000', url: new URL('../assets/img/enforcador-pet-vermelho.png', import.meta.url).href }
        ],
        midia: [
            {
                tipo: 'foto',
                url: new URL('../assets/video/coleira-passeio.mp4', import.meta.url).href
            },
            {
                tipo: 'foto',
                url: new URL('../assets/video/coleira-passeio.mp4', import.meta.url).href
            }
        ]
    },
]