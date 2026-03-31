// Banco de questões
const questions = {  

  "PortuguesSintaxe":[
    {
    "question": "Na frase 'A execução do projeto foi um sucesso', o termo 'do projeto' classifica-se como:",
    "options": [
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Objeto Indireto",
      "Predicativo do Sujeito"
    ],
    "correct": 1,
    "explanation": "'Execução' é um substantivo abstrato derivado de um verbo. 'Do projeto' recebe a ação (o projeto é executado), o que caracteriza o sentido passivo próprio do Complemento Nominal."
  },
  {
    "question": "Assinale a alternativa onde o termo sublinhado é um Adjunto Adnominal:",
    "options": [
      "A resposta ao aluno foi clara.",
      "A leitura do livro é prazerosa.",
      "O livro do professor sumiu.",
      "Ele estava consciente de tudo."
    ],
    "correct": 2,
    "explanation": "'Do professor' indica posse e acompanha o substantivo concreto 'livro'. Substantivos concretos não admitem complemento nominal, apenas adjunto adnominal."
  },
  {
    "question": "Em 'Os alunos nervosos saíram da sala' e 'Os alunos saíram nervosos da sala', o termo 'nervosos' é, respectivamente:",
    "options": [
      "Adjunto Adnominal e Adjunto Adnominal",
      "Predicativo e Predicativo",
      "Adjunto Adnominal e Predicativo",
      "Predicativo e Adjunto Adnominal"
    ],
    "correct": 2,
    "explanation": "Na primeira, 'nervosos' é uma característica inerente/restritiva (AA). Na segunda, indica um estado momentâneo durante a ação de sair (Predicativo)."
  },
  {
    "question": "O termo sublinhado em 'Ele agiu favoravelmente aos amigos' é um:",
    "options": [
      "Adjunto Adnominal",
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adverbial"
    ],
    "correct": 2,
    "explanation": "'Favoravelmente' é um advérbio. Termos preposicionados que completam o sentido de adjetivos ou advérbios são sempre Complementos Nominais."
  },
  {
    "question": "Qual a função de 'do jornalista' em: 'A crítica do jornalista foi ácida'?",
    "options": [
      "Complemento Nominal",
      "Adjunto Adnominal",
      "Objeto Direto",
      "Predicativo do Sujeito"
    ],
    "correct": 1,
    "explanation": "'Crítica' é substantivo abstrato, mas o jornalista é o AGENTE da ação de criticar. Se o termo tem valor ativo, é Adjunto Adnominal."
  },
  {
    "question": "Identifique a frase que contém um Predicativo do Objeto:",
    "options": [
      "O juiz considerou o réu inocente.",
      "O réu inocente saiu do tribunal.",
      "O juiz agiu com inocência.",
      "A inocência do réu foi provada."
    ],
    "correct": 0,
    "explanation": "'Inocente' é uma qualidade atribuída ao objeto direto ('o réu') pelo sujeito, através do verbo 'considerar'."
  },
  {
    "question": "Em 'A invenção da lâmpada mudou o mundo', o termo destacado é:",
    "options": [
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Sujeito",
      "Agente da Passiva"
    ],
    "correct": 1,
    "explanation": "A lâmpada foi inventada (sentido passivo). 'Invenção' é substantivo abstrato. Logo, temos um Complemento Nominal."
  },
  {
    "question": "Na oração 'O café frio estava ruim', as palavras 'frio' e 'ruim' são, respectivamente:",
    "options": [
      "Adjunto Adnominal e Predicativo",
      "Predicativo e Adjunto Adnominal",
      "Adjunto Adnominal e Adjunto Adnominal",
      "Predicativo e Predicativo"
    ],
    "correct": 0,
    "explanation": "'Frio' está junto ao nome caracterizando o substantivo dentro do sujeito (AA). 'Ruim' é o núcleo do predicado ligado pelo verbo de ligação (Predicativo)."
  },
  {
    "question": "Marque a opção em que o termo preposicionado é Complemento Nominal:",
    "options": [
      "A casa de madeira caiu.",
      "O medo da escuridão é comum.",
      "As luzes da cidade brilham.",
      "Comprei o anel de ouro."
    ],
    "correct": 1,
    "explanation": "'Escuridão' sofre a ação de ser temida. 'De madeira', 'da cidade' e 'de ouro' indicam matéria ou posse ligados a substantivos concretos (AA)."
  },
  {
    "question": "Qual a função do termo destacado: 'O povo elegeu-o deputado'?",
    "options": [
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Predicativo do Objeto",
      "Objeto Direto"
    ],
    "correct": 2,
    "explanation": "'Deputado' é uma qualidade/estado atribuído ao objeto direto 'o' (que representa ele)."
  },
  {
    "question": "A diferença fundamental entre o Adjunto Adnominal e o Complemento Nominal com substantivos abstratos é:",
    "options": [
      "O AA é paciente e o CN é agente.",
      "O AA é agente e o CN é paciente.",
      "O AA vem sempre com preposição 'a'.",
      "O CN nunca vem com preposição."
    ],
    "correct": 1,
    "explanation": "Regra de ouro: Substantivo Abstrato + Termo Agente = Adjunto Adnominal. Substantivo Abstrato + Termo Paciente = Complemento Nominal."
  },
  {
    "question": "Em 'Aqueles dois meninos estudiosos chegaram', os termos destacados são:",
    "options": [
      "Complementos Nominais",
      "Adjuntos Adnominais",
      "Predicativos do Sujeito",
      "Adjuntos Adverbiais"
    ],
    "correct": 1,
    "explanation": "Artigos, numerais, pronomes adjetivos e adjetivos que acompanham o substantivo dentro de uma função sintática são Adjuntos Adnominais."
  },
  {
    "question": "Na frase 'Os alunos chegaram cansados à escola', qual é o tipo de predicado?",
    "options": [
      "Predicado Nominal",
      "Predicado Verbal",
      "Predicado Verbo-Nominal",
      "Predicado Adjetival"
    ],
    "correct": 2,
    "explanation": "É um predicado verbo-nominal porque possui dois núcleos: um verbo de ação ('chegaram') e um predicativo do sujeito ('cansados')."
  },
  {
    "question": "Em 'Acreditamos em dias melhores', o termo destacado 'em dias melhores' exerce a função de:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adnominal"
    ],
    "correct": 1,
    "explanation": "O verbo 'acreditar' é transitivo indireto, exigindo a preposição 'em'. Portanto, o termo que o completa é um objeto indireto."
  },
  {
    "question": "Assinale a alternativa em que o termo sublinhado é um Complemento Nominal:",
    "options": [
      "A leitura do livro foi rápida.",
      "O livro do aluno sumiu.",
      "Comprei o livro ontem.",
      "Gosto de livros antigos."
    ],
    "correct": 0,
    "explanation": "'Do livro' completa o sentido do substantivo abstrato 'leitura' (sofre a ação de ser lido), caracterizando um complemento nominal."
  },
  {
    "question": "Qual é a classificação do predicado na oração 'O mar está revolto'?",
    "options": [
      "Predicado Verbal",
      "Predicado Nominal",
      "Predicado Verbo-Nominal",
      "Predicado Transitivo"
    ],
    "correct": 1,
    "explanation": "O predicado é nominal porque é formado por um verbo de ligação ('está') e um predicativo do sujeito ('revolto')."
  },
  {
    "question": "Na frase 'Entreguei o prémio ao vencedor', os termos destacados são, respetivamente:",
    "options": [
      "Objeto Indireto e Objeto Direto",
      "Complemento Nominal e Objeto Direto",
      "Objeto Direto e Complemento Nominal",
      "Objeto Direto e Objeto Indireto"
    ],
    "correct": 3,
    "explanation": "O verbo 'entregar' é transitivo direto e indireto. 'O prémio' é o objeto direto e 'ao vencedor' é o objeto indireto."
  },
  {
    "question": "A oração 'O diretor considerou a proposta inviável' possui predicado:",
    "options": [
      "Verbal",
      "Nominal",
      "Verbo-Nominal",
      "Complexo"
    ],
    "correct": 2,
    "explanation": "É verbo-nominal pois apresenta um verbo transitivo ('considerou') e um predicativo do objeto ('inviável')."
  },
  {
    "question": "Em 'Ela tem medo de altura', o termo 'de altura' classifica-se como:",
    "options": [
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adnominal",
      "Objeto Direto Preposicionado"
    ],
    "correct": 1,
    "explanation": "'Medo' é um substantivo que necessita de complemento para ter sentido completo; logo, 'de altura' é complemento nominal."
  },
  {
    "question": "Identifique a frase que contém um Objeto Direto:",
    "options": [
      "Duvido das tuas intenções.",
      "Eles moram em Lisboa.",
      "Nós vencemos a partida.",
      "Ela parece triste hoje."
    ],
    "correct": 2,
    "explanation": "O verbo 'vencer' é transitivo direto, e 'a partida' completa o seu sentido sem o auxílio de preposição obrigatória."
  },
  {
    "question": "Na frase 'A execução do projeto foi adiada', o termo 'do projeto' é:",
    "options": [
      "Complemento Nominal",
      "Adjunto Adnominal",
      "Objeto Indireto",
      "Sujeito Paciente"
    ],
    "correct": 0,
    "explanation": "'Execução' é um substantivo abstrato derivado de um verbo. 'Do projeto' recebe a ação de ser executado, sendo um complemento nominal."
  },
  {
    "question": "Qual a função sintática do pronome 'lhe' em 'Enviei-lhe os documentos'?",
    "options": [
      "Objeto Direto",
      "Adjunto Adnominal",
      "Objeto Indireto",
      "Complemento Nominal"
    ],
    "correct": 2,
    "explanation": "O pronome 'lhe', quando substitui um termo regido pela preposição 'a' (a ele/a ela), exerce a função de objeto indireto."
  },
  {
    "question": "O predicado da frase 'Os pássaros voam alto' é:",
    "options": [
      "Verbal",
      "Nominal",
      "Verbo-Nominal",
      "Indeterminado"
    ],
    "correct": 0,
    "explanation": "O núcleo do predicado é o verbo intransitivo 'voam'. O termo 'alto' é um advérbio (adjunto adverbial), não um adjetivo."
  },
  {
    "question": "Diferencie: 'Amor de mãe' vs 'Amor à mãe'. Os termos destacados são, respectivamente:",
    "options": [
      "Adjunto Adnominal e Complemento Nominal",
      "Complemento Nominal e Adjunto Adnominal",
      "Ambos são Complementos Nominais",
      "Ambos são Adjuntos Adnominais"
    ],
    "correct": 0,
    "explanation": "'De mãe' indica posse/origem (agente), sendo adjunto adnominal; 'à mãe' indica o alvo do sentimento (paciente), sendo complemento nominal."
  },
  {
    "question": "Na oração 'Os alunos saíram da prova exaustos', como se classifica o predicado?",
    "options": [
      "Predicado Nominal",
      "Predicado Verbal",
      "Predicado Verbo-Nominal",
      "Predicado Adjetival"
    ],
    "correct": 2,
    "explanation": "O predicado é verbo-nominal porque possui dois núcleos: um verbo de ação ('saíram') e um predicativo do sujeito ('exaustos')."
  },
  {
    "question": "Em 'O povo necessita de alimentos', o termo destacado 'de alimentos' exerce a função de:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adnominal"
    ],
    "correct": 1,
    "explanation": "O verbo 'necessitar' é transitivo indireto, exigindo a preposição 'de' para ligar-se ao seu complemento (objeto indireto)."
  },
  {
    "question": "Assinale a alternativa em que o termo sublinhado é um Complemento Nominal:",
    "options": [
      "A construção do prédio demorou anos.",
      "O prédio do centro é antigo.",
      "Comprei o prédio ontem.",
      "Ele mora no prédio."
    ],
    "correct": 0,
    "explanation": "'Do prédio' é complemento nominal pois completa o sentido do substantivo abstrato 'construção' (o prédio foi construído - sentido passivo)."
  },
  {
    "question": "Qual é o tipo de predicado na frase 'A natureza é bela'?",
    "options": [
      "Predicado Verbal",
      "Predicado Nominal",
      "Predicado Verbo-Nominal",
      "Predicado de Ligação"
    ],
    "correct": 1,
    "explanation": "O predicado é nominal porque é formado por um verbo de ligação ('é') e um predicativo do sujeito ('bela'), que indica um estado ou qualidade."
  },
  {
    "question": "Na frase 'Entreguei o relatório ao diretor', os termos sublinhados são, respetivamente:",
    "options": [
      "Objeto Indireto e Objeto Direto",
      "Complemento Nominal e Objeto Direto",
      "Objeto Direto e Objeto Indireto",
      "Objeto Direto e Complemento Nominal"
    ],
    "correct": 2,
    "explanation": "O verbo 'entregar' é transitivo direto e indireto; 'o relatório' é o objeto direto e 'ao diretor' é o objeto indireto."
  },
  {
    "question": "Em 'Ela tem medo de altura', o termo 'de altura' classifica-se como:",
    "options": [
      "Objeto Indireto",
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Aposto"
    ],
    "correct": 2,
    "explanation": "'Medo' é um substantivo abstrato que exige complemento. Como 'de altura' completa o sentido de um nome (substantivo), é um complemento nominal."
  },
  {
    "question": "O predicado na frase 'O professor considera o aluno brilhante' é:",
    "options": [
      "Predicado Verbal",
      "Predicado Nominal",
      "Predicado Verbo-Nominal",
      "Predicado Composto"
    ],
    "correct": 2,
    "explanation": "É verbo-nominal pois apresenta um verbo transitivo ('considera') e um predicativo do objeto ('brilhante')."
  },
  {
    "question": "Na frase 'Assisti ao filme ontem', o termo 'ao filme' é:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adverbial"
    ],
    "correct": 1,
    "explanation": "O verbo 'assistir' no sentido de ver é transitivo indireto e rege a preposição 'a', tornando 'ao filme' um objeto indireto."
  },
  {
    "question": "Qual a função sintática do termo sublinhado em 'A confiança em si é vital'?",
    "options": [
      "Objeto Indireto",
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Sujeito"
    ],
    "correct": 2,
    "explanation": "'Em si' completa o sentido do substantivo 'confiança'. Complementos de substantivos, adjetivos ou advérbios são complementos nominais."
  },
  {
    "question": "Identifique a frase com Predicado Verbal:",
    "options": [
      "O dia está ensolarado.",
      "Os pássaros voam alto.",
      "Ela parece triste.",
      "Nós permanecemos calados."
    ],
    "correct": 1,
    "explanation": "No predicado verbal, o núcleo é um verbo que indica ação ou processo ('voam'), sem a presença de um predicativo."
  },
  {
    "question": "Diferencie o termo sublinhado: 'Amor de mãe' (1) e 'Amor à mãe' (2). Eles são:",
    "options": [
      "1- Adjunto Adnominal; 2- Complemento Nominal",
      "1- Complemento Nominal; 2- Adjunto Adnominal",
      "Ambos são Complementos Nominais",
      "Ambos são Adjuntos Adnominais"
    ],
    "correct": 0,
    "explanation": "No primeiro, a mãe pratica a ação (agente = adjunto); no segundo, a mãe recebe o amor (paciente = complemento)."
  },
  {
    "question": "Em 'O juiz julgou o réu culpado', o termo 'culpado' é:",
    "options": [
      "Predicativo do Sujeito",
      "Adjunto Adnominal",
      "Predicativo do Objeto",
      "Objeto Direto"
    ],
    "correct": 2,
    "explanation": "'Culpado' refere-se ao estado do objeto direto ('o réu') atribuído pelo verbo, sendo, portanto, um predicativo do objeto."
  },
  {
    "question": "Na frase 'A ponte foi construída por engenheiros estrangeiros', qual a função sintática de 'por engenheiros estrangeiros'?",
    "options": [
      "Objeto Indireto",
      "Agente da Passiva",
      "Adjunto Adnominal",
      "Complemento Nominal"
    ],
    "correct": 1,
    "explanation": "Em orações na voz passiva analítica, o termo que executa a ação verbal (precedido geralmente pela preposição 'por') é o Agente da Passiva."
  },
  {
    "question": "Em 'Os jogadores andavam cansados após o treino', o termo 'cansados' classifica-se como:",
    "options": [
      "Adjunto Adnominal",
      "Objeto Direto",
      "Predicativo do Sujeito",
      "Adjunto Adverbial de Modo"
    ],
    "correct": 2,
    "explanation": "'Cansados' é um predicativo do sujeito porque atribui um estado/qualidade ao sujeito 'Os jogadores' por meio de um verbo de ligação ('andavam')."
  },
  {
    "question": "Assinale a alternativa que contém um Objeto Direto Preposicionado:",
    "options": [
      "Eles necessitam de ajuda.",
      "Amo a Deus sobre todas as coisas.",
      "Entreguei o livro ao professor.",
      "Acredito em você."
    ],
    "correct": 1,
    "explanation": "O verbo 'amar' é transitivo direto, mas em contextos de ênfase ou nomes próprios sagrados, utiliza-se a preposição 'a', caracterizando o objeto direto preposicionado."
  },
  {
    "question": "Na oração 'O presente foi dado a ela por mim', o termo 'por mim' é:",
    "options": [
      "Sujeito",
      "Objeto Indireto",
      "Agente da Passiva",
      "Adjunto Adverbial"
    ],
    "correct": 2,
    "explanation": "Na voz passiva, quem pratica a ação de dar é 'mim' (agente da passiva), enquanto 'O presente' é o sujeito paciente."
  },
  {
    "question": "Qual a função sintática do pronome 'o' em 'Não o vimos na festa'?",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Sujeito",
      "Predicativo do Objeto"
    ],
    "correct": 0,
    "explanation": "Os pronomes oblíquos o, a, os, as (e variações lo/la) exercem tipicamente a função de Objeto Direto."
  },
  {
    "question": "Na frase 'Ela permanece feliz', o verbo é de ligação. Se mudarmos para 'Ela permanece em casa', a função de 'em casa' é:",
    "options": [
      "Predicativo do Sujeito",
      "Objeto Indireto",
      "Adjunto Adverbial de Lugar",
      "Agente da Passiva"
    ],
    "correct": 2,
    "explanation": "Cuidado! No segundo exemplo, 'permanecer' indica localização (verbo intransitivo), e 'em casa' é um adjunto adverbial, não um estado (predicativo)."
  },
  {
    "question": "Em 'Oferecemos flores às mães', o termo 'às mães' é um:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Complemento Nominal",
      "Agente da Passiva"
    ],
    "correct": 1,
    "explanation": "O verbo 'oferecer' é transitivo direto e indireto. 'Flores' é o objeto direto e 'às mães' (com preposição) é o objeto indireto."
  },
  {
    "question": "Identifique a frase que possui Predicativo do Sujeito:",
    "options": [
      "O menino quebrou o vaso.",
      "O artista pintou um quadro.",
      "A prova estava difícil.",
      "O cão correu pelo jardim."
    ],
    "correct": 2,
    "explanation": "'Difícil' é uma característica do sujeito 'A prova', ligada pelo verbo de estado 'estava'."
  },
  {
    "question": "O termo sublinhado em 'As terras foram desapropriadas pelo governo' exerce a função de:",
    "options": [
      "Sujeito Agente",
      "Objeto Direto",
      "Agente da Passiva",
      "Adjunto Adnominal"
    ],
    "correct": 2,
    "explanation": "O governo é quem pratica a ação na voz passiva analítica, logo, é o agente da passiva."
  },
  {
    "question": "Na frase 'Ninguém lhe obedece', a função de 'lhe' é:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Predicativo do Sujeito",
      "Agente da Passiva"
    ],
    "correct": 1,
    "explanation": "O verbo 'obedecer' é transitivo indireto (quem obedece, obedece A alguém). O pronome 'lhe' substitui o objeto indireto."
  },
  {
    "question": "Qual a classificação de 'vitoriosos' em 'Os candidatos saíram vitoriosos do debate'?",
    "options": [
      "Adjunto Adnominal",
      "Predicativo do Sujeito",
      "Objeto Direto",
      "Adjunto Adverbial"
    ],
    "correct": 1,
    "explanation": "Embora o verbo 'sair' indique ação, 'vitoriosos' qualifica o sujeito no momento da ação, sendo um predicativo do sujeito (num predicado verbo-nominal)."
  },
  {
    "question": "Em 'Tudo foi resolvido pelo diretor', se passarmos para a voz ativa, o Agente da Passiva passará a ser:",
    "options": [
      "Objeto Direto",
      "Sujeito",
      "Objeto Indireto",
      "Predicativo"
    ],
    "correct": 1,
    "explanation": "Na conversão da voz passiva para a ativa, o Agente da Passiva ('pelo diretor') assume a função de Sujeito ('O diretor resolveu tudo')."
  },
  {
    "question": "Na frase 'Os atletas correram muito ontem', os termos destacados indicam, respectivamente:",
    "options": [
      "Modo e Tempo",
      "Intensidade e Tempo",
      "Lugar e Modo",
      "Afirmação e Intensidade"
    ],
    "correct": 1,
    "explanation": "'Muito' intensifica a ação de correr (Intensidade) e 'ontem' localiza a ação no tempo (Tempo)."
  },
  {
    "question": "Em 'Ele cortou a árvore com um machado', o termo sublinhado classifica-se como:",
    "options": [
      "Adjunto Adverbial de Meio",
      "Adjunto Adverbial de Modo",
      "Adjunto Adverbial de Instrumento",
      "Objeto Direto Preposicionado"
    ],
    "correct": 2,
    "explanation": "'Com um machado' indica a ferramenta/objeto utilizado para realizar a ação, caracterizando um adjunto adverbial de instrumento."
  },
  {
    "question": "Assinale a alternativa que apresenta um Adjunto Adverbial de Causa:",
    "options": [
      "Trabalhou para sobreviver.",
      "Tremia de frio durante a noite.",
      "Falava com clareza.",
      "Chegou cedo ao compromisso."
    ],
    "correct": 1,
    "explanation": "'De frio' indica o motivo ou a causa de o sujeito estar tremendo."
  },
  {
    "question": "Na oração 'Talvez ele venha para a festa', o termo 'Talvez' expressa:",
    "options": [
      "Dúvida",
      "Afirmação",
      "Negação",
      "Modo"
    ],
    "correct": 0,
    "explanation": "Advérbios como 'talvez', 'quiçá' e 'provavelmente' indicam incerteza ou dúvida sobre o fato verbal."
  },
  {
    "question": "Em 'O projeto era muito ambicioso', o adjunto adverbial de intensidade modifica um:",
    "options": [
      "Verbo",
      "Advérbio",
      "Substantivo",
      "Adjetivo"
    ],
    "correct": 3,
    "explanation": "O adjunto adverbial pode modificar verbos, advérbios ou, neste caso, o adjetivo 'ambicioso'."
  },
  {
    "question": "Identifique a circunstância do termo destacado: 'Eles caminhavam em silêncio'.",
    "options": [
      "Lugar",
      "Modo",
      "Companhia",
      "Assunto"
    ],
    "correct": 1,
    "explanation": "'Em silêncio' indica a maneira (o modo) como a caminhada era realizada."
  },
  {
    "question": "Na frase 'Viajei com meus pais', o termo sublinhado é um:",
    "options": [
      "Adjunto Adnominal",
      "Objeto Indireto",
      "Adjunto Adverbial de Companhia",
      "Complemento Nominal"
    ],
    "correct": 2,
    "explanation": "Indica quem acompanha o sujeito na realização da ação verbal."
  },
  {
    "question": "Qual a função sintática de 'em casa' em: 'Devido à chuva, permanecemos em casa'?",
    "options": [
      "Adjunto Adverbial de Lugar",
      "Objeto Indireto",
      "Predicativo do Sujeito",
      "Adjunto Adnominal"
    ],
    "correct": 0,
    "explanation": "'Em casa' indica o local onde se desenvolve a ação de permanecer."
  },
  {
    "question": "Em 'Ele fala muito bem', temos dois adjuntos adverbiais. O primeiro ('muito') modifica o segundo ('bem'). Quais são as classificações?",
    "options": [
      "Ambos de Modo",
      "Tempo e Modo",
      "Intensidade e Modo",
      "Intensidade e Intensidade"
    ],
    "correct": 2,
    "explanation": "'Bem' é o modo como ele fala; 'Muito' intensifica o advérbio de modo 'bem'."
  },
  {
    "question": "Na frase 'Falamos sobre política ontem', o termo 'sobre política' é um adjunto adverbial de:",
    "options": [
      "Modo",
      "Causa",
      "Assunto",
      "Meio"
    ],
    "correct": 2,
    "explanation": "A preposição 'sobre' (ou a locução 'a respeito de') introduz frequentemente a circunstância de assunto."
  },
  {
    "question": "Marque a alternativa que contém um Adjunto Adverbial de Meio:",
    "options": [
      "Viajaremos de navio.",
      "Ficamos de pé.",
      "Estudei com atenção.",
      "Morreu de pneumonia."
    ],
    "correct": 0,
    "explanation": "'De navio' indica o veículo ou transporte utilizado para realizar a viagem (meio)."
  },
  {
    "question": "Diferencie: 'Chegamos ao banco' (1) e 'Precisamos do banco' (2). Os termos são:",
    "options": [
      "1- Adjunto Adverbial de Lugar; 2- Objeto Indireto",
      "1- Objeto Direto; 2- Objeto Indireto",
      "1- Objeto Indireto; 2- Adjunto Adverbial de Lugar",
      "Ambos são Objetos Indiretos"
    ],
    "correct": 0,
    "explanation": "Verbos de movimento (chegar, ir, vir) regem adjuntos adverbiais de lugar. Verbos transitivos indiretos (precisar) regem objetos indiretos."
  }
  
],
"OracoesSubordinadas":[
  {
    "question": "Na frase 'É necessário <b>que todos participem da reunião</b>', a oração destacada classifica-se como:",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva",
      "Substantiva Predicativa",
      "Substantiva Completiva Nominal"
    ],
    "correct": 1,
    "explanation": "A oração exerce a função de sujeito do verbo 'é'. Quando a oração principal começa com verbo de ligação + predicativo (É necessário, é bom, é urgente), a subordinada é subjetiva."
  },
  {
    "question": "Em 'Os homens <b>que são honestos</b> vivem felizes', a oração subordinada é:",
    "options": [
      "Adjetiva Explicativa",
      "Adjetiva Restritiva",
      "Substantiva Predicativa",
      "Adverbial Causal"
    ],
    "correct": 1,
    "explanation": "A oração restringe o sentido do substantivo 'homens' (não são todos os homens, apenas os honestos) e não está separada por vírgulas, sendo, portanto, restritiva."
  },
  {
    "question": "Qual a classificação da oração destacada em: '<b>Como estava chovendo muito</b>, não fomos ao parque'?",
    "options": [
      "Adverbial Conformativa",
      "Adverbial Comparativa",
      "Adverbial Causal",
      "Adverbial Consecutiva"
    ],
    "correct": 2,
    "explanation": "A conjunção 'como' no início da frase introduz o motivo, a causa de não terem ido ao parque."
  },
  {
    "question": "Na oração 'Desejo <b>que você seja muito feliz</b>', o termo destacado exerce função de:",
    "options": [
      "Sujeito",
      "Objeto Indireto",
      "Objeto Direto",
      "Aposto"
    ],
    "correct": 2,
    "explanation": "Quem deseja, deseja algo. A oração completa o sentido do verbo transitivo direto 'desejo', sendo uma substantiva objetiva direta."
  },
  {
    "question": "Assinale a alternativa que apresenta uma oração subordinada adverbial concessiva:",
    "options": [
      "Se você estudar, passará.",
      "<b>Embora estivesse cansado</b>, continuou trabalhando.",
      "Estudou tanto que adormeceu.",
      "Fiz a tarefa como o professor pediu."
    ],
    "correct": 1,
    "explanation": "A conjunção 'embora' introduz uma ideia de oposição ou ressalva que não impede a ação principal, característica da concessiva."
  },
  {
    "question": "Em 'Meu maior desejo é <b>que todos alcancem seus objetivos</b>', a oração classifica-se como:",
    "options": [
      "Substantiva Predicativa",
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva",
      "Substantiva Completiva Nominal"
    ],
    "correct": 0,
    "explanation": "A oração vem após um verbo de ligação ('é') e funciona como predicativo do sujeito 'meu maior desejo'."
  },
  {
    "question": "Na frase 'O aluno, <b>que era muito dedicado</b>, tirou nota dez', a oração adjetiva é explicativa porque:",
    "options": [
      "Generaliza uma característica própria do antecedente e vem entre vírgulas.",
      "Restringe o grupo de alunos que tiraram nota dez.",
      "Completa o sentido de um substantivo abstrato.",
      "Indica a causa de o aluno ter tirado nota dez."
    ],
    "correct": 0,
    "explanation": "As orações adjetivas explicativas apenas acrescentam uma nota esclarecedora sobre o antecedente e são obrigatoriamente isoladas por pontuação."
  },
  {
    "question": "A oração em destaque em 'Tenho medo <b>de que você me esqueça</b>' é:",
    "options": [
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Predicativa",
      "Adverbial Causal"
    ],
    "correct": 1,
    "explanation": "A oração completa o sentido do substantivo 'medo' (um nome). Quando a oração completa um nome com preposição, é completiva nominal."
  },
  {
    "question": "Em 'Choveu tanto <b>que as ruas ficaram alagadas</b>', a oração indica:",
    "options": [
      "Causa",
      "Consequência",
      "Condição",
      "Finalidade"
    ],
    "correct": 1,
    "explanation": "A estrutura 'tanto... que' indica uma oração subordinada adverbial consecutiva (consequência do que foi dito antes)."
  },
  {
    "question": "Qual a classificação da oração: 'Fizemos tudo <b>para que eles ficassem confortáveis</b>'?",
    "options": [
      "Adverbial Causal",
      "Adverbial Proporcional",
      "Adverbial Final",
      "Adverbial Temporal"
    ],
    "correct": 2,
    "explanation": "A locução 'para que' indica a intenção, o objetivo ou a finalidade da ação principal."
  },
  {
    "question": "Na frase '<b>Desde que você chegou</b>, não paramos de rir', a oração destacada é:",
    "options": [
      "Adverbial Condicional",
      "Adverbial Temporal",
      "Adverbial Conformativa",
      "Adverbial Proporcional"
    ],
    "correct": 1,
    "explanation": "Neste contexto, 'desde que' indica o momento em que a ação de rir começou (tempo). Vale lembrar que 'desde que' também pode ser condicional, dependendo do verbo."
  },
  {
    "question": "Em 'Ele age <b>conforme as regras determinam</b>', a oração subordinada é:",
    "options": [
      "Adverbial Conformativa",
      "Adverbial Comparativa",
      "Substantiva Objetiva Direta",
      "Adverbial de Modo"
    ],
    "correct": 0,
    "explanation": "A conjunção 'conforme' expressa um acordo ou conformidade com o que está estabelecido na oração principal."
  }
],

"OracoesCoordenadas":[
  {
    "question": "Na frase 'Ela não só foi a primeira a chegar, <b>mas também</b> ajudou na organização', a oração destacada é uma coordenada sindética:",
    "options": [
      "Adversativa",
      "Aditiva",
      "Conclusiva",
      "Explicativa"
    ],
    "correct": 1,
    "explanation": "Embora utilize 'mas', a locução 'mas também' estabelece uma relação de soma (adição) em relação à primeira oração."
  },
  {
    "question": "Em 'Estudei muito para a prova, <b>porém</b> não obtive o resultado esperado', a conjunção expressa:",
    "options": [
      "Conclusão",
      "Explicação",
      "Oposição",
      "Alternância"
    ],
    "correct": 2,
    "explanation": "'Porém' é uma conjunção adversativa, utilizada para indicar contraste ou oposição entre duas ideias."
  },
  {
    "question": "Assinale a alternativa que apresenta uma oração coordenada sindética <b>alternativa</b>:",
    "options": [
      "Ora ria, ora chorava de nervoso.",
      "Não estudou, nem trabalhou hoje.",
      "Estude, pois a prova é amanhã.",
      "Chegou, viu e venceu."
    ],
    "correct": 0,
    "explanation": "A estrutura 'ora... ora' indica exclusão ou alternância de eventos, característica das orações alternativas."
  },
  {
    "question": "Na oração 'O céu está repleto de nuvens escuras, <b>portanto</b> deve chover logo', o termo destacado introduz uma:",
    "options": [
      "Explicação",
      "Adição",
      "Conclusão",
      "Oposição"
    ],
    "correct": 2,
    "explanation": "'Portanto' é uma conjunção conclusiva, indicando que a chuva é uma consequência lógica da observação das nuvens."
  },
  {
    "question": "Qual a classificação da oração: 'Venha agora, <b>que</b> o jantar já está na mesa'?",
    "options": [
      "Coordenada Sindética Explicativa",
      "Subordinada Adverbial Causal",
      "Coordenada Sindética Conclusiva",
      "Coordenada Assindética"
    ],
    "correct": 0,
    "explanation": "O 'que' aqui equivale a 'porque'. Após orações imperativas (venha), a oração seguinte costuma ser uma coordenada explicativa."
  },
  {
    "question": "Em 'Você agiu mal; deve, <b>pois</b>, pedir desculpas', a conjunção destacada é:",
    "options": [
      "Explicativa",
      "Conclusiva",
      "Adversativa",
      "Aditiva"
    ],
    "correct": 1,
    "explanation": "Quando a conjunção 'pois' aparece deslocada (entre vírgulas e após o verbo), ela tem valor conclusivo."
  },
  {
    "question": "Identifique a frase que possui uma oração coordenada sindética <b>adversativa</b>:",
    "options": [
      "Não faça barulho, que o bebê dorme.",
      "Tudo estava pronto, contudo ninguém apareceu.",
      "Ou você entra, ou você sai.",
      "Penso, logo existo."
    ],
    "correct": 1,
    "explanation": "'Contudo' é uma conjunção que indica oposição ou ressalva, classificando a oração como adversativa."
  },
  {
    "question": "Na frase 'Não fomos ao cinema, <b>nem</b> ficamos em casa', o termo destacado indica:",
    "options": [
      "Negação simples",
      "Adição de ideias negativas",
      "Alternância de fatos",
      "Oposição de ações"
    ],
    "correct": 1,
    "explanation": "A conjunção 'nem' é usada para somar duas orações de valor negativo."
  },
  {
    "question": "Assinale a frase em que a conjunção <b>pois</b> tem valor explicativo:",
    "options": [
      "Ele está feliz, pois ganhou o prêmio.",
      "O time venceu; está, pois, classificado.",
      "Estudamos muito; seremos, pois, aprovados.",
      "Não saia agora, pois chove muito."
    ],
    "correct": 0,
    "explanation": "O 'pois' é explicativo quando aparece no início da oração (antes do verbo) e justifica a oração anterior."
  },
  {
    "question": "Em 'Quer chova, <b>quer</b> faça sol, iremos ao campo', a oração é:",
    "options": [
      "Sindética Aditiva",
      "Sindética Alternativa",
      "Sindética Adversativa",
      "Sindética Conclusiva"
    ],
    "correct": 1,
    "explanation": "A repetição do termo 'quer... quer' estabelece uma relação de alternância ou escolha."
  },
  {
    "question": "Na frase 'Ele era muito rico, <b>todavia</b> vivia de forma simples', o termo em negrito pode ser substituído sem perda de sentido por:",
    "options": [
      "Portanto",
      "Mas também",
      "Entretanto",
      "Porquanto"
    ],
    "correct": 2,
    "explanation": "'Todavia' e 'entretanto' são conjunções adversativas sinônimas."
  },
  {
    "question": "A oração 'Leve o guarda-chuva, <b>porque</b> vai chover' é classificada como:",
    "options": [
      "Explicativa",
      "Conclusiva",
      "Adversativa",
      "Causal"
    ],
    "correct": 0,
    "explanation": "Ela justifica a ordem/recomendação dada na oração anterior, caracterizando a coordenação explicativa."
  },
  {
    "question": "Em 'O projeto foi aprovado, <b>por isso</b> as obras começarão', a oração destacada é:",
    "options": [
      "Sindética Aditiva",
      "Sindética Conclusiva",
      "Sindética Explicativa",
      "Sindética Adversativa"
    ],
    "correct": 1,
    "explanation": "A locução 'por isso' introduz a consequência ou conclusão lógica do fato anterior."
  },
  {
    "question": "Assinale a alternativa que <b>não</b> apresenta uma oração coordenada sindética:",
    "options": [
      "Estudei muito, mas não aprendi.",
      "Cheguei, sentei, comecei a ler.",
      "Siga o mapa, ou se perderá.",
      "O diretor saiu, portanto a reunião acabou."
    ],
    "correct": 1,
    "explanation": "Esta alternativa apresenta apenas orações coordenadas assindéticas (separadas por vírgula, sem conjunção)."
  }
],

"pronomes":[
  {
    "question": "1. (IBGE) Assinale a opção que apresenta o emprego correto do pronome, de acordo com a norma culta:",
    "options": [
      "O diretor mandou eu entrar na sala.",
      "Preciso falar consigo o mais rápido possível.",
      "Cumprimentei-lhe assim que cheguei.",
      "Ele só sabe elogiar a si mesmo.",
      "Após a prova, os candidatos conversaram entre eles."
    ],
    "correct": 3,
    "explanation": "a) Errado. Em construções com verbos causativos (mandar, fazer, deixar) seguidos de infinitivo, a norma culta prefere o uso do pronome oblíquo átono como objeto: 'mandou-me entrar'. <br/>b) Errado. O pronome 'consigo' é estritamente reflexivo. Para se dirigir à 2ª pessoa, deve-se usar 'com você' ou 'com o senhor'. <br/>c) Errado. O verbo 'cumprimentar' é transitivo direto (VTD), portanto exige o pronome 'o/a' e não o 'lhe' (usado para objetos indiretos). <br/>d) Correto. O pronome 'si' é reflexivo e refere-se corretamente ao sujeito 'Ele', reforçado por 'mesmo'. <br/>e) Errado. Para indicar reciprocidade em relação ao sujeito da própria oração, a norma culta exige o uso de 'entre si'."
  },
  {
    "question": "2. (IBGE) Assinale a opção em que houve erro no emprego do pronome pessoal em relação ao uso culto da língua:",
    "options": [
      "Ele entregou um texto para mim corrigir.",
      "Para mim, a leitura está fácil.",
      "Isto é para eu fazer agora.",
      "Não saia sem mim.",
      "Entre mim e ele há uma grande diferença."
    ],
    "correct": 0,
    "explanation": "a) Errado. O pronome 'mim' é oblíquo tônico e não pode exercer a função de sujeito. Antes de um verbo no infinitivo que indique uma ação do sujeito, deve-se usar o pronome reto 'eu' ('para eu corrigir'). <br/>b) Correto. Aqui 'para mim' não é sujeito de verbo, mas sim um complemento com valor de opinião ou alvo da percepção. <br/>c) Correto. O pronome 'eu' exerce corretamente a função de sujeito do verbo 'fazer'. <br/>d) Correto. Após preposição, quando não há verbo subsequente do qual o pronome seja sujeito, utiliza-se a forma oblíqua tônica 'mim'. <br/>e) Correto. A regência da preposição 'entre' exige o uso de pronomes oblíquos tônicos ('entre mim e ti/ele'), nunca a forma reta 'eu'."
  },
  {
    "question": "3. (U-UBERLÂNDIA) Assinale o tratamento dado ao reitor de uma Universidade:",
    "options": [
      "Vossa Senhoria",
      "Vossa Santidade",
      "Vossa Excelência",
      "Vossa Magnificência",
      "Vossa Paternidade"
    ],
    "correct": 3,
    "explanation": "a) Errado. <b>Vossa Senhoria</b> é empregado para autoridades de menor escalão, diretores de empresas ou correspondências comerciais. <br/>b) Errado. <b>Vossa Santidade</b> é de uso exclusivo do Papa. <br/>c) Errado. <b>Vossa Excelência</b> é utilizado para altas autoridades do Estado, como ministros, governadores, juízes e oficiais-generais. <br/>d) Correto. <b>Vossa Magnificência</b> é o pronome de tratamento protocolar exclusivo para reitores de universidades. <br/>e) Errado. <b>Vossa Paternidade</b> é um tratamento utilizado para superiores de ordens religiosas."
  },
  {
    "question": "4. (BB) Colocação incorreta:",
    "options": [
      "Preciso que venhas ver-me.",
      "Procure não desapontá-lo.",
      "O certo é fazê-los sair.",
      "Sempre negaram-me tudo.",
      "As espécies se atraem."
    ],
    "correct": 3,
    "explanation": "a) Correto. Com verbos no infinitivo, a ênclise é sempre permitida, mesmo com a presença da conjunção integrante 'que'. <br/>b) Correto. Em locuções verbais com infinitivo precedido de negação, a ênclise ao verbo principal é aceitável. <br/>c) Correto. A ênclise é o padrão culto para verbos no infinitivo ('fazer' + 'os' vira 'fazê-los'). <br/>d) Errado. O advérbio 'Sempre' é uma palavra atrativa que exige a próclise obrigatória. O correto seria: <b>'Sempre me negaram tudo'</b>. <br/>e) Correto. Quando o sujeito está explícito e não há palavras atrativas, a colocação é facultativa, sendo a próclise muito comum no Brasil."
  },
  {
    "question": "5. (EPCAR) Imagine o pronome entre parênteses no lugar devido e aponte onde não deve haver próclise:",
    "options": [
      "Não entristeças. (te)",
      "Deus favoreça. (o)",
      "Espero que faças justiça. (se)",
      "Meus amigos, apresentem em posição de sentido. (se)",
      "Ninguém faça de rogado. (se)"
    ],
    "correct": 3,
    "explanation": "a) Errado. O advérbio 'Não' atrai o pronome: 'Não <b>te</b> entristeças'. <br/>b) Errado. Em frases optativas (que exprimem desejo), a próclise é obrigatória: 'Deus <b>o</b> favoreça'. <br/>c) Errado. A conjunção 'que' é palavra atrativa: 'Espero que <b>se</b> faça justiça'. <br/>d) Correto. Não se inicia oração ou período com pronome oblíquo. Após a vírgula (pausa), deve-se usar a ênclise: 'apresentem-<b>se</b>'. <br/>e) Errado. O pronome indefinido 'Ninguém' é palavra atrativa, exigindo próclise: 'Ninguém <b>se</b> faça'."
  },
  {
    "question": "(CFS/18) Leia: Ernesto não estava bem. Um sentimento de profunda angústia <b>torturava-lhe</b> naquele turbilhão de pensamentos incessantes. Um adeus definitivo não <b>o</b> tornaria menos sofredor, mas ele precisava resolver o seu drama intenso, que <b>o</b> consumia no cotidiano e <b>lhe</b> deixava o sabor amargo do desprezo. Um dos pronomes oblíquos destacados no texto está incorretamente empregado. Qual?",
    "options": [
      "O primeiro.",
      "O segundo.",
      "O terceiro.",
      "O quarto."
    ],
    "correct": 0,
    "explanation": "a) Correto (é o erro). O verbo 'torturar' é transitivo direto (quem tortura, tortura alguém). Por isso, exige o pronome 'o' (torturava-o) e não o 'lhe', que é usado para objetos indiretos. <br/>b) Errado. O verbo 'tornar' (tornar alguém algo) exige objeto direto, logo o uso de 'o' está correto. <br/>c) Errado. O verbo 'consumir' é transitivo direto (consumia o homem), portanto o pronome 'o' está adequadamente empregado. <br/>d) Errado. O verbo 'deixar', neste contexto, é transitivo direto e indireto (deixar algo a alguém). 'Lhe' funciona como objeto indireto (a ele), estando correto."
  },
  {
    "question": "(CFS/17) Leia: <br/>I – Se você precisar, vou <b>te</b> ajudar financeiramente. <br/>II – Trouxeram <b>eu</b> aqui para justificar as falhas cometidas. <br/>III – Não foi comprovada nenhuma relação de parentesco entre <b>mim</b> e <b>ti</b>. <br/>IV – Fui ao shopping e vi sua mãe. Encontrei-<b>a</b> na praça de alimentação. <br/>O emprego dos pronomes pessoais em destaque está correto em:",
    "options": [
      "I – II",
      "III – IV",
      "II – III",
      "I – IV"
    ],
    "correct": 1,
    "explanation": "I - Errado. Há uma mistura de pessoas gramaticais: 'você' (3ª pessoa) não combina com o pronome 'te' (2ª pessoa). O correto seria 'ajudá-lo'. <br/>II - Errado. Pronomes retos (eu, tu) não exercem função de objeto. O correto seria 'Trouxeram-me'. <br/>III - Correto. Após a preposição 'entre', devem-se usar pronomes oblíquos tônicos (mim, ti, si). <br/>IV - Correto. O verbo 'encontrar' é transitivo direto e o pronome 'a' substitui corretamente o substantivo feminino 'mãe'."
  },
  {
    "question": "(CFS/15) Assinale a alternativa que completa, correta e respectivamente, as lacunas: <br/>I – Entre ____ e ____, não há qualquer possibilidade de reconciliação. <br/>II – O aluno ____ redação continha muitas incoerências foi desclassificado. <br/>III – ____ livro que trago nas mãos é o romance A mulher que escreveu a Bíblia. <br/>IV – No sobrado ______ morava, havia duas janelas ovaladas. <br/>V – Ao circular pela obra, o pedreiro constatou que havia ferramentas ____ dono ele desconhecia.",
    "options": [
      "eu, tu, cuja, Este, onde, cujo o",
      "mim, ti, cuja, Este, onde, cujo",
      "eu, ti, que a, Esse, aonde, que o",
      "mim, tu, que a, Esse, aonde, que o"
    ],
    "correct": 1,
    "explanation": "a) Errado. Não se usa pronome reto (eu, tu) após preposição 'entre' sem verbo no infinitivo, e nunca se usa artigo após o pronome cujo (cujo o). <br/>b) Correto. I: 'mim' e 'ti' (oblíquos após preposição); II: 'cuja' (posse: redação do aluno); III: 'Este' (proximidade com quem fala); IV: 'onde' (lugar fixo); V: 'cujo' (posse: dono das ferramentas). <br/>c) Errado. 'Eu' está incorreto no item I; 'Esse' indica proximidade com o ouvinte, não com quem fala; 'Aonde' exige ideia de movimento. <br/>d) Errado. 'Tu' no item I está incorreto; 'Esse' e 'Aonde' não se aplicam aos contextos de posse e lugar fixo apresentados."
  }
],

"col_pronomes_ob":[
  {
    "question": "Assinale a alternativa que apresenta a colocação correta conforme a norma padrão:",
    "options": [
      "<b>Me</b> empresta o seu caderno?",
      "Empresta-<b>me</b> o seu caderno?",
      "Nunca <b>empresta-me</b> nada.",
      "Sempre <b>vi-o</b> no parque."
    ],
    "correct": 1,
    "explanation": "A) Errado. Não se inicia frase com pronome oblíquo átono na linguagem formal. <br/>B) Correto. Como a frase inicia o período e não há palavra atrativa, utiliza-se a <b>ênclise</b>. <br/>C) Errado. 'Nunca' é palavra negativa e atrai o pronome (próclise obrigatória): 'Nunca <b>me</b> empresta'. <br/>D) Errado. 'Sempre' é advérbio e atrai o pronome: 'Sempre <b>o</b> vi'."
  },
  {
    "question": "Em qual das frases a <b>próclise</b> é obrigatória devido a uma palavra negativa?",
    "options": [
      "Não <b>se</b> esqueça do compromisso.",
      "Espero que <b>se</b> lembre de tudo.",
      "Lembraram-<b>me</b> da data.",
      "Daria-<b>lhe</b> um presente hoje."
    ],
    "correct": 0,
    "explanation": "A) Correto. A palavra 'Não' é um advérbio de negação que exige a <b>próclise</b> (pronome antes do verbo). <br/>B) Errado. Aqui a próclise ocorre por causa da conjunção 'que', não por negação. <br/>C) Errado. Frase iniciada por verbo exige <b>ênclise</b>. <br/>D) Errado. Verbo no futuro do pretérito sem palavra atrativa exige <b>mesóclise</b>: 'Dar-lhe-ia'."
  },
  {
    "question": "Assinale a opção em que o pronome relativo exige a <b>próclise</b>:",
    "options": [
      "Viu-<b>nos</b> o homem que saía.",
      "Este é o livro que <b>me</b> recomendaram.",
      "Entregue-<b>o</b> ao rapaz que chegar.",
      "Falaram-<b>lhe</b> sobre o que aconteceu."
    ],
    "correct": 1,
    "explanation": "A) Errado. 'Viu-nos' está correto por ser início de frase; 'que' não afeta o pronome anterior. <br/>B) Correto. O pronome relativo 'que' é palavra atrativa, puxando o pronome 'me' para antes do verbo. <br/>C) Errado. 'Entregue-o' é ênclise correta em início de oração imperativa. <br/>D) Errado. Início de período sem atração exige <b>ênclise</b>."
  },
  {
    "question": "No futuro do presente, sem palavras atrativas, a forma correta é:",
    "options": [
      "<b>Lhe</b> direi a verdade.",
      "Direi-<b>lhe</b> a verdade.",
      "Dir-<b>lhe</b>-ei a verdade.",
      "<b>Te</b> direi tudo amanhã."
    ],
    "correct": 2,
    "explanation": "A) Errado. Não se inicia frase com oblíquo. <br/>B) Errado. É proibido o uso de ênclise com verbos no futuro do presente ou futuro do pretérito. <br/>C) Correto. Na ausência de palavra atrativa, verbos no futuro exigem a <b>mesóclise</b>. <br/>D) Errado. Início de frase com pronome de 2ª pessoa fere a norma culta."
  },
  {
    "question": "Identifique a alternativa onde o advérbio <b>não</b> seguido de vírgula atrai o pronome:",
    "options": [
      "Ontem, <b>me</b> entregaram o prêmio.",
      "Ontem <b>me</b> entregaram o prêmio.",
      "Ontem entregaram-<b>me</b> o prêmio.",
      "Ontem, entregaram-<b>me</b> o prêmio."
    ],
    "correct": 1,
    "explanation": "A) Errado. A vírgula isola o advérbio; nesse caso, o pronome não pode vir após a pausa (início de oração). <br/>B) Correto. Advérbios sem pausa (vírgula) são palavras atrativas, exigindo <b>próclise</b>. <br/>C) Errado. Pela regra de atração do advérbio, a ênclise é evitada. <br/>D) Correto em outro contexto, mas a questão pede o caso de atração pelo advérbio (que ocorre sem a vírgula)."
  },
  {
    "question": "A oração 'Quem <b>te</b> contou isso?' está correta porque:",
    "options": [
      "Frases interrogativas exigem próclise.",
      "O pronome 'quem' é facultativo.",
      "O verbo está no passado.",
      "Trata-se de uma mesóclise oculta."
    ],
    "correct": 0,
    "explanation": "A) Correto. Pronomes interrogativos (Quem, Qual, Que) iniciam orações que exigem obrigatoriamente a <b>próclise</b>. <br/>B) Errado. O pronome 'quem' é atrativo e não facultativo. <br/>C) Errado. O tempo verbal não é o fator determinante aqui, mas sim o tipo de frase. <br/>D) Errado. Não existe o conceito de mesóclise oculta na gramática."
  },
  {
    "question": "Assinale a alternativa correta quanto ao uso com pronomes indefinidos:",
    "options": [
      "Tudo <b>se</b> resolve com o tempo.",
      "Tudo resolve-<b>se</b> com o tempo.",
      "Alguém viu-<b>me</b> ontem.",
      "Ninguém ajudará-<b>me</b>."
    ],
    "correct": 0,
    "explanation": "A) Correto. Pronomes indefinidos (Tudo, Nada, Alguém, Ninguém) são <b>palavras atrativas</b> que exigem próclise. <br/>B) Errado. Contraria a regra de atração do pronome indefinido 'Tudo'. <br/>C) Errado. 'Alguém' é indefinido e exige próclise: 'Alguém <b>me</b> viu'. <br/>D) Errado. Além de 'Ninguém' ser atrativo, não se usa ênclise em verbos no futuro."
  },
  {
    "question": "Em 'Em <b>se</b> tratando de negócios...', a colocação é:",
    "options": [
      "Ênclise obrigatória.",
      "Próclise obrigatória.",
      "Mesóclise necessária.",
      "Totalmente facultativa."
    ],
    "correct": 1,
    "explanation": "A) Errado. A ênclise não se aplica nessa estrutura fixa. <br/>B) Correto. A estrutura <b>'Em + se + Gerúndio'</b> exige obrigatoriamente a próclise. <br/>C) Errado. Não há futuro para justificar mesóclise. <br/>D) Errado. É uma regra específica e obrigatória da norma culta."
  },
  {
    "question": "Quanto ao uso do infinitivo preposicionado (Ex: 'Para <b>me</b> ver'), a regra diz que:",
    "options": [
      "A próclise é obrigatória.",
      "A ênclise é proibida.",
      "A colocação é facultativa (<b>me</b> ver ou ver-<b>me</b>).",
      "Deve-se usar mesóclise."
    ],
    "correct": 2,
    "explanation": "A) Errado. Não é a única opção. <br/>B) Errado. A ênclise também é permitida com infinitivos. <br/>C) Correto. Com verbos no <b>infinitivo impessoal</b> precedidos de preposição, o uso da próclise ou da ênclise é facultativo. <br/>D) Errado. Mesóclise só ocorre com futuro."
  },
  {
    "question": "Assinale a alternativa que apresenta um erro de colocação pronominal:",
    "options": [
      "Espero que <b>nos</b> ajudem.",
      "Tenho <b>comunicado-lhe</b> os fatos.",
      "Deus <b>o</b> acompanhe!",
      "Nada <b>me</b> foi dito."
    ],
    "correct": 1,
    "explanation": "A) Correto. 'Que' é conjunção subordinativa e atrai o pronome. <br/>B) Errado (Alternativa com erro). <b>Nunca</b> se utiliza ênclise com verbos no <b>particípio</b>. O correto seria 'Tenho-lhe comunicado'. <br/>C) Correto. Em frases optativas (que exprimem desejo), usa-se a próclise. <br/>D) Correto. 'Nada' é pronome indefinido e atrai o oblíquo."
  },
  {
    "question": "Na frase 'Aquilo <b>me</b> deixou triste', a próclise ocorre por:",
    "options": [
      "Presença de pronome demonstrativo.",
      "Início de frase.",
      "Presença de verbo de ligação.",
      "Ser uma frase exclamativa."
    ],
    "correct": 0,
    "explanation": "A) Correto. Pronomes demonstrativos (Aquilo, Isso, Isto) são fatores de <b>próclise</b>. <br/>B) Errado. Se fosse apenas início de frase sem o 'Aquilo', seria ênclise. <br/>C) Errado. 'Deixar' não é verbo de ligação aqui e isso não afetaria a regra. <br/>D) Errado. O fator principal é o pronome demonstrativo no sujeito."
  },
  {
    "question": "Assinale a frase em que a <b>mesóclise</b> é obrigatória:",
    "options": [
      "Não <b>lhe</b> direi nada.",
      "Se pudesse, <b>dir-lhe-ia</b> a verdade.",
      "Alguém <b>me</b> dirá o caminho.",
      "<b>Me</b> dirão o que fazer."
    ],
    "correct": 1,
    "explanation": "A) Errado. A palavra negativa 'Não' tem prioridade sobre a mesóclise, exigindo próclise. <br/>B) Correto. Verbo no futuro do pretérito em início de oração (após a pausa da vírgula) exige <b>mesóclise</b>. <br/>C) Errado. 'Alguém' é palavra atrativa e exige próclise. <br/>D) Errado. Não se inicia frase com pronome oblíquo; o correto seria mesóclise 'Dir-me-ão'."
  }
],
"regras_pronomes":[
{
    "question": "Assinale a alternativa que preenche corretamente a lacuna: 'Esta tarefa é para <b>___</b> terminar ainda hoje.'",
    "options": [
      "mim",
      "<b>eu</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Mim' não pode ser sujeito do verbo 'terminar'.<br/><b>B:</b> <b>Correta.</b> O pronome reto <b>eu</b> deve ser usado quando exerce a função de sujeito de um verbo no infinitivo.<br/><b>C:</b> Incorreta. 'Me' é um pronome oblíquo átono e não funciona como sujeito de infinitivo nesta estrutura.<br/><b>D:</b> Incorreta. 'Mim mesmo' é usado para ênfase, mas não substitui o sujeito 'eu' antes de verbo."
  },
  {
    "question": "Escolha a opção correta: 'Não há mais nenhum segredo entre <b>___</b> e você.'",
    "options": [
      "eu",
      "<b>mim</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Após preposições como 'entre', não se usa o pronome reto 'eu'.<br/><b>B:</b> <b>Correta.</b> Com a preposição 'entre', deve-se utilizar o pronome oblíquo tônico <b>mim</b>.<br/><b>C:</b> Incorreta. 'Me' é átono e não pode ser usado após preposição.<br/><b>D:</b> Incorreta. Embora gramaticalmente possível em contextos reflexivos, a regra básica exige apenas o pronome oblíquo tônico <b>mim</b>."
  },
  {
    "question": "Complete a frase: 'Eles trouxeram esses documentos para <b>___</b>.'",
    "options": [
      "eu",
      "me",
      "<b>mim</b>",
      "ti"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O pronome reto 'eu' não pode aparecer no final da frase após preposição sem um verbo para conjugar.<br/><b>B:</b> Incorreta. 'Me' não pode ser precedido por preposição no final da frase.<br/><b>C:</b> <b>Correta.</b> O pronome oblíquo tônico <b>mim</b> é o termo correto para finalizar a oração após a preposição 'para'.<br/><b>D:</b> Incorreta. 'Ti' refere-se à segunda pessoa, mudando o sentido solicitado implicitamente pela regra de primeira pessoa."
  },
  {
    "question": "Qual das alternativas está correta? 'Emprestou o carro para <b>___</b> viajar no final de semana.'",
    "options": [
      "<b>eu</b>",
      "mim",
      "me",
      "mim mesmo"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O pronome <b>eu</b> é o sujeito do verbo 'viajar'.<br/><b>B:</b> Incorreta. 'Mim' não conjuga verbo, logo não pode ser sujeito de 'viajar'.<br/><b>C:</b> Incorreta. 'Me' não exerce função de sujeito de verbo no infinitivo nesta construção.<br/><b>D:</b> Incorreta. 'Mim mesmo' não é adequado para exercer a função de sujeito simples antes do infinitivo."
  },
  {
    "question": "Assinale a opção que apresenta erro: 'Para <b>___</b>, estudar português é um prazer.'",
    "options": [
      "eu",
      "<b>mim</b>",
      "mim mesmo",
      "minha pessoa"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Incorreta (apresenta erro).</b> Na função de complemento com valor de opinião ('na minha opinião'), deve-se usar <b>mim</b> e não o pronome reto 'eu'.<br/><b>B:</b> Correta. O uso de <b>mim</b> após a preposição em frases intercaladas ou de opinião é o padrão da norma culta.<br/><b>C:</b> Correta. Pode ser usado para dar ênfase à opinião pessoal.<br/><b>D:</b> Correta. Embora menos comum, é gramaticalmente possível, ao contrário do 'eu' isolado como complemento."
  },
  {
    "question": "Indique a forma correta: 'Pediram para <b>___</b> ficar em silêncio durante a palestra.'",
    "options": [
      "mim",
      "<b>eu</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Mim' não pode realizar a ação de 'ficar'.<br/><b>B:</b> <b>Correta.</b> O pronome <b>eu</b> atua como sujeito do verbo 'ficar'.<br/><b>C:</b> Incorreta. O pronome átono 'me' não substitui o sujeito reto antes de infinitivo.<br/><b>D:</b> Incorreta. O uso de 'mim mesmo' é desnecessário e incorreto como sujeito simples neste caso."
  },
  {
    "question": "Complete: 'Sem <b>___</b>, o projeto dificilmente será aprovado pela diretoria.'",
    "options": [
      "eu",
      "<b>mim</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Após a preposição 'sem', deve-se usar a forma oblíqua tônica.<br/><b>B:</b> <b>Correta.</b> <b>Mim</b> é o pronome oblíquo tônico exigido após a preposição 'sem'.<br/><b>C:</b> Incorreta. 'Me' é átono e não admite preposição.<br/><b>D:</b> Incorreta. 'Mim mesmo' seria redundante sem uma necessidade de reflexividade ou ênfase específica."
  },
  {
    "question": "Marque a alternativa correta: 'Entregaram o livro para <b>___</b> ler durante as férias.'",
    "options": [
      "<b>eu</b>",
      "mim",
      "me",
      "mim mesmo"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O pronome <b>eu</b> é o sujeito do verbo 'ler'.<br/><b>B:</b> Incorreta. Regra fundamental: 'mim' não lê, não escreve e não faz nada, pois não conjuga verbo.<br/><b>C:</b> Incorreta. 'Me' não exerce função de sujeito de infinitivo nesta regência.<br/><b>D:</b> Incorreta. 'Mim mesmo' não é o sujeito adequado para o verbo 'ler' nesta estrutura."
  },
  {
    "question": "Preencha corretamente: 'Isto é um problema apenas para <b>___</b> resolver.'",
    "options": [
      "mim",
      "<b>eu</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Mim' não pode ser o agente da ação de 'resolver'.<br/><b>B:</b> <b>Correta.</b> Usa-se <b>eu</b> pois existe um verbo no infinitivo ('resolver') do qual o pronome é o sujeito.<br/><b>C:</b> Incorreta. 'Me' não funciona como sujeito de verbos no infinitivo.<br/><b>D:</b> Incorreta. 'Mim mesmo' não deve ser usado como sujeito simples antes do verbo."
  },
  {
    "question": "Assinale a frase gramaticalmente correta:",
    "options": [
      "Não vá sem <b>eu</b>.",
      "Ele é mais alto do que <b>mim</b>.",
      "Comprei este presente para <b>mim</b>.",
      "Deixe <b>mim</b> ver o resultado."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O correto é 'sem <b>mim</b>', pois não há verbo após o pronome.<br/><b>B:</b> Incorreta. Em comparações, subentende-se um verbo: 'mais alto do que <b>eu</b> (sou)'.<br/><b>C:</b> <b>Correta.</b> <b>Mim</b> é usado corretamente como objeto indireto após a preposição 'para'.<br/><b>D:</b> Incorreta. Com verbos causativos (deixar, fazer, mandar), usa-se o pronome oblíquo átono 'me': 'Deixe-<b>me</b> ver'."
  },
  {
    "question": "Analise as lacunas: 'Para <b>___</b>, viajar é bom; mas, para <b>___</b> viajar, preciso de dinheiro.'",
    "options": [
      "eu - mim",
      "<b>mim - eu</b>",
      "mim - mim",
      "eu - eu"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Inverte a lógica: o primeiro é opinião, o segundo é sujeito.<br/><b>B:</b> <b>Correta.</b> No primeiro caso, <b>mim</b> indica opinião. No segundo, <b>eu</b> é sujeito do verbo 'viajar'.<br/><b>C:</b> Incorreta. O segundo 'mim' não pode conjugar o verbo 'viajar'.<br/><b>D:</b> Incorreta. O primeiro 'eu' não pode ser usado isoladamente após preposição para indicar opinião."
  },
  {
    "question": "Marque a alternativa em que o uso do pronome está <b>incorreto</b>:",
    "options": [
      "Para <b>mim</b>, o café está frio.",
      "Trouxeram a comida para <b>eu</b> comer.",
      "<b>Mim</b> não sabe o que dizer.",
      "Fale tudo para <b>mim</b>."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Correta. <b>Mim</b> indica opinião pessoal perfeitamente.<br/><b>B:</b> Correta. <b>Eu</b> é o sujeito do verbo 'comer'.<br/><b>C:</b> <b>Incorreta.</b> 'Mim' nunca pode ser sujeito de um verbo (neste caso, o verbo 'saber'). O correto é '<b>Eu</b> não sei'.<br/><b>D:</b> Correta. <b>Mim</b> é o objeto indireto após a preposição 'para'."
  }
  ,{
    "question": "Assinale a alternativa que apresenta o uso <b>correto</b> do pronome de acordo com a norma culta:",
    "options": [
      "Eu encontrei <b>ele</b> no shopping ontem à tarde.",
      "O diretor chamou <b>nós</b> para uma reunião de emergência.",
      "Os documentos, o estagiário <b>os</b> entregou ao gerente.",
      "Vi <b>ela</b> atravessando a rua apressadamente."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O pronome <b>ele</b> é reto e não deve ser objeto direto (vi ele); o correto seria <b>encontrei-o</b>.<br/><b>B:</b> Incorreta. <b>Nós</b> é reto e não deve ser objeto direto após o verbo; o correto seria <b>chamou-nos</b>.<br/><b>C:</b> <b>Correta.</b> O pronome <b>os</b> é oblíquo átono e exerce corretamente a função de objeto direto.<br/><b>D:</b> Incorreta. <b>Ela</b> é pronome reto e não deve ocupar posição de objeto; o correto seria <b>vi-a</b>."
  },
  {
    "question": "Complete a frase corretamente: 'Isto é para ___ fazer, não para ___.'",
    "options": [
      "mim - eu",
      "eu - mim",
      "mim - mim",
      "eu - eu"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Mim' não pode ser sujeito do verbo 'fazer'.<br/><b>B:</b> <b>Correta.</b> O pronome reto <b>eu</b> é sujeito do infinitivo 'fazer'. No segundo espaço, o pronome oblíquo <b>mim</b> é usado após a preposição sem verbo seguinte.<br/><b>C:</b> Incorreta. 'Mim' não conjuga verbo.<br/><b>D:</b> Incorreta. O segundo 'eu' ficaria sem função de sujeito, exigindo-se o oblíquo tônico 'mim'."
  },
  {
    "question": "Na frase 'O guarda deteve <b>os suspeitos</b>', ao substituir o termo em destaque, a forma correta é:",
    "options": [
      "O guarda deteve <b>eles</b>.",
      "O guarda deteve-<b>nos</b>.",
      "O guarda deteve-<b>los</b>.",
      "O guarda deteve-<b>os</b>."
    ],
    "correct": 3,
    "explanation": "<b>A:</b> Incorreta. <b>Eles</b> é pronome reto e não pode ser objeto direto na norma culta.<br/><b>B:</b> Incorreta. 'Nos' refere-se à primeira pessoa (nós), alterando o sentido da frase.<br/><b>C:</b> Incorreta. A terminação <b>-los</b> só ocorre se o verbo terminar em R, S ou Z.<br/><b>D:</b> <b>Correta.</b> Como o verbo termina em vogal, utiliza-se o pronome oblíquo <b>-os</b> para substituir o objeto direto."
  },
  {
    "question": "Indique o erro gramatical na seguinte frase: 'Não houve nada entre <b>eu</b> e <b>você</b>.'",
    "options": [
      "O uso de 'nada' está incorreto.",
      "Deveria ser usado 'mim' em vez de 'eu'.",
      "O pronome 'você' deveria ser 'ti'.",
      "A frase está perfeitamente correta."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. O termo 'nada' está bem empregado.<br/><b>B:</b> <b>Correta.</b> Após preposições (como 'entre'), deve-se usar pronomes oblíquos tônicos (<b>mim, ti</b>). O correto é 'entre <b>mim</b> e você'.<br/><b>C:</b> Incorreta. Embora 'ti' seja possível, o erro principal reside no uso do pronome reto 'eu'.<br/><b>D:</b> Incorreta. A norma culta proíbe pronomes retos após a preposição 'entre' quando não há verbo."
  },
  {
    "question": "Em qual das frases o pronome <b>reto</b> exerce corretamente a função de sujeito?",
    "options": [
      "Deixaram <b>eu</b> falar durante a assembleia.",
      "Pediram para <b>mim</b> trazer os relatórios.",
      "É necessário que <b>vós</b> saibais a verdade.",
      "Mandaram <b>ele</b> sair da sala imediatamente."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. Em 'Deixaram-me falar', o pronome deveria ser oblíquo (me) ou o reto 'eu' só se fosse sujeito de 'falar' em estrutura específica, mas soa coloquial.<br/><b>B:</b> Incorreta. 'Para mim trazer' é erro clássico; deve ser 'para <b>eu</b> trazer'.<br/><b>C:</b> <b>Correta.</b> O pronome reto <b>vós</b> é o sujeito da forma verbal 'saibais'.<br/><b>D:</b> Incorreta. 'Ele' está como objeto direto de mandaram; o correto é <b>mandaram-no</b>."
  },
  {
    "question": "Substituindo o objeto direto em 'Eles amam <b>a pátria</b>', obtemos:",
    "options": [
      "Eles amam-<b>na</b>.",
      "Eles amam <b>ela</b>.",
      "Eles amam-<b>la</b>.",
      "Eles <b>lhe</b> amam."
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> Verbos terminados em sons nasais (M) exigem as variações <b>-na, -no</b> do pronome oblíquo.<br/><b>B:</b> Incorreta. <b>Ela</b> é reto e não pode ser objeto direto.<br/><b>C:</b> Incorreta. A forma '-la' é para verbos terminados em R, S ou Z.<br/><b>D:</b> Incorreta. 'Lhe' é objeto indireto, e o verbo amar é transitivo direto."
  },
  {
    "question": "Marque a alternativa onde o pronome <b>não</b> deveria ser reto:",
    "options": [
      "<b>Nós</b> fomos ao cinema.",
      "Diga para <b>eles</b> que o prazo acabou.",
      "O professor trouxe as provas para <b>eu</b> corrigir.",
      "Esperamos <b>tu</b> na saída da escola."
    ],
    "correct": 3,
    "explanation": "<b>A:</b> Correta. <b>Nós</b> é sujeito de 'fomos'.<br/><b>B:</b> Correta. Após a preposição 'para', quando indica direção ou destinatário, 'eles' (que pode ser reto ou oblíquo) é aceito.<br/><b>C:</b> Correta. <b>Eu</b> é sujeito do verbo 'corrigir'.<br/><b>D:</b> <b>Incorreta.</b> O verbo esperar exige objeto direto; o correto seria 'Esperamos-<b>te</b>' ou 'Esperamos <b>você</b>'."
  },
  {
    "question": "Qual opção preenche as lacunas: 'Sempre ___ vi dedicados, por isso ___ confiei a tarefa.'",
    "options": [
      "os - os",
      "lhes - lhes",
      "os - lhes",
      "eles - lhes"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O segundo verbo (confiar) exige objeto indireto (confiar algo A alguém).<br/><b>B:</b> Incorreta. O primeiro verbo (ver) é transitivo direto e não aceita 'lhes'.<br/><b>C:</b> <b>Correta.</b> 'Ver' é VTD (ver <b>os</b> alunos) e 'confiar' é VTDI (confiar a tarefa <b>lhes</b>).<br/><b>D:</b> Incorreta. <b>Eles</b> não deve ser usado como objeto direto do verbo ver."
  },
  {
    "question": "Na oração 'Quero <b>te</b> ver feliz', o pronome <b>te</b> é:",
    "options": [
      "Um pronome reto em função de sujeito.",
      "Um pronome oblíquo em função de objeto direto.",
      "Um pronome de tratamento.",
      "Um pronome reto em função de objeto."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Pronomes retos são eu, tu, ele, etc.<br/><b>B:</b> <b>Correta.</b> <b>Te</b> é a forma oblíqua de 'tu', exercendo função de complemento (objeto direto) de ver.<br/><b>C:</b> Incorreta. Pronomes de tratamento são 'Você', 'Vossa Excelência', etc.<br/><b>D:</b> Incorreta. Não existe pronome reto em função de objeto na norma culta."
  },
  {
    "question": "A frase 'Chamaram <b>eu</b> para depor' apresenta qual desvio?",
    "options": [
      "Uso de pronome reto em vez de oblíquo no sujeito.",
      "Uso de pronome oblíquo em função de sujeito.",
      "Uso de pronome reto em função de objeto direto.",
      "Uso indevido de preposição antes do pronome."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O termo 'eu' não é o sujeito de 'chamaram'.<br/><b>B:</b> Incorreta. 'Eu' não é pronome oblíquo.<br/><b>C:</b> <b>Correta.</b> <b>Eu</b> é reto e está sendo usado como complemento do verbo chamar, o que é um erro. O correto é 'Chamaram-<b>me</b>'.<br/><b>D:</b> Incorreta. Não há preposição na frase original."
  },
  {
    "question": "Substitua o termo em destaque: 'O professor <b>ajudou os alunos</b> na revisão.'",
    "options": [
      "O professor ajudou-<b>lhes</b> na revisão.",
      "O professor <b>os</b> ajudou na revisão.",
      "O professor ajudou <b>eles</b> na revisão.",
      "O professor ajudou-<b>nos</b> na revisão."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. O verbo 'ajudar' é transitivo direto (VTD), logo não aceita o pronome 'lhes'.<br/><b>B:</b> <b>Correta.</b> Como 'ajudar' é VTD, o pronome oblíquo <b>os</b> substitui corretamente o objeto direto 'os alunos'.<br/><b>C:</b> Incorreta. O pronome reto 'eles' não deve ser usado como objeto direto na norma culta.<br/><b>D:</b> Incorreta. 'Nos' refere-se à primeira pessoa (nós), alterando o sentido da frase original."
  },
  {
    "question": "Assinale a frase que utiliza corretamente o pronome <b>lhe</b>:",
    "options": [
      "Eu <b>lhe</b> amo com todas as minhas forças.",
      "Nunca <b>lhe</b> vi tão feliz como hoje.",
      "O filho sempre <b>lhe</b> obedeceu sem questionar.",
      "A empresa <b>lhe</b> contratou na semana passada."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Amar' é VTD; o correto seria 'Eu <b>a/o</b> amo'.<br/><b>B:</b> Incorreta. 'Ver' é VTD; o correto seria 'Nunca <b>o/a</b> vi'.<br/><b>C:</b> <b>Correta.</b> O verbo 'obedecer' é transitivo indireto (VTI) e rege a preposição 'a', permitindo o uso do <b>lhe</b>.<br/><b>D:</b> Incorreta. 'Contratar' é VTD; o correto seria 'A empresa <b>o/a</b> contratou'."
  },
  {
    "question": "Complete a lacuna: 'Os diretores não ___ convocaram para a assembleia.'",
    "options": [
      "<b>os</b>",
      "lhes",
      "a eles",
      "lo"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O verbo 'convocar' é VTD (quem convoca, convoca alguém), exigindo o pronome <b>os</b>.<br/><b>B:</b> Incorreta. 'Lhes' é para objetos indiretos e o verbo em questão não rege preposição para o complemento.<br/><b>C:</b> Incorreta. 'A eles' é uma forma tônica que exigiria preposição e, geralmente, ênfase, não sendo a substituição padrão aqui.<br/><b>D:</b> Incorreta. A forma 'lo' só ocorre após verbos terminados em R, S ou Z."
  },
  {
    "question": "Na oração 'Entreguei <b>o relatório ao chefe</b>', substituindo apenas o termo 'ao chefe', temos:",
    "options": [
      "Entreguei-<b>o</b> o relatório.",
      "Entreguei <b>ele</b> o relatório.",
      "Entreguei-<b>lhe</b> o relatório.",
      "Entreguei-<b>lo</b> o relatório."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'O' substituiria 'o relatório', e não 'ao chefe'.<br/><b>B:</b> Incorreta. 'Ele' é pronome reto e não deve exercer função de objeto indireto.<br/><b>C:</b> <b>Correta.</b> 'Ao chefe' é um objeto indireto; o pronome <b>lhe</b> é o substituto gramatical adequado.<br/><b>D:</b> Incorreta. A forma 'lo' é variação de objeto direto, não indireto."
  },
  {
    "question": "Qual alternativa apresenta erro de regência no uso de <b>o/a</b>?",
    "options": [
      "Ninguém <b>a</b> convidou para a festa.",
      "O médico <b>o</b> assistiu durante a cirurgia.",
      "Eu <b>a</b> perdoei pelo erro cometido.",
      "O público <b>o</b> assistiu no estádio."
    ],
    "correct": 3,
    "explanation": "<b>A:</b> Correta. 'Convidar' é VTD.<br/><b>B:</b> Correta. 'Assistir' no sentido de dar assistência/ajudar é VTD.<br/><b>C:</b> Correta. 'Perdoar' é VTD quando o objeto é uma coisa ('o erro'), mas quando se refere à pessoa ('a ela'), a norma culta prefere VTI (lhe), embora o uso de 'a' seja aceito em certas bancas. Contudo, a D é um erro crasso.<br/><b>D:</b> <b>Incorreta.</b> 'Assistir' no sentido de ver/presenciar é VTI; o correto seria 'O público assistiu <b>a ele</b>' (o pronome 'lhe' é evitado por alguns gramáticos para este verbo, mas 'o' é erro absoluto)."
  },
  {
    "question": "Substitua o termo: 'O palestrante <b>cumprimentou os ouvintes</b>.'",
    "options": [
      "O palestrante cumprimentou-<b>lhes</b>.",
      "O palestrante <b>lhes</b> cumprimentou.",
      "O palestrante cumprimentou-<b>os</b>.",
      "O palestrante cumprimentou <b>eles</b>."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Cumprimentar' é VTD, não aceita 'lhes'.<br/><b>B:</b> Incorreta. Além do erro de 'lhes', a próclise não é obrigatória sem palavra atrativa.<br/><b>C:</b> <b>Correta.</b> <b>Os</b> substitui corretamente o objeto direto 'os ouvintes' em posição de ênclise.<br/><b>D:</b> Incorreta. Uso de pronome reto 'eles' como objeto direto."
  },
  {
    "question": "Escolha a opção que preenche corretamente: 'Desejo-___ muito sucesso, pois ___ admiro muito.'",
    "options": [
      "o - o",
      "lhe - lhe",
      "<b>lhe - o</b>",
      "o - lhe"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Desejar' (algo A alguém) exige objeto indireto (lhe).<br/><b>B:</b> Incorreta. 'Admirar' é VTD (quem admira, admira alguém), não aceita 'lhe'.<br/><b>C:</b> <b>Correta.</b> 'Desejar' é VTDI (lhe = a você) e 'Admirar' é VTD (o = você).<br/><b>D:</b> Incorreta. Inverte as funções sintáticas dos pronomes."
  },
  {
    "question": "Em 'Paguei <b>ao fornecedor</b>', a substituição correta pelo pronome é:",
    "options": [
      "Paguei-<b>o</b>.",
      "Paguei-<b>lhe</b>.",
      "Paguei <b>ele</b>.",
      "Paguei-<b>lo</b>."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Pagar' é VTD para coisas (paguei o boleto) e VTI para pessoas (paguei ao fornecedor).<br/><b>B:</b> <b>Correta.</b> Como o objeto é uma pessoa precedida de preposição (indireto), usa-se <b>lhe</b>.<br/><b>C:</b> Incorreta. 'Ele' é pronome reto.<br/><b>D:</b> Incorreta. 'Lo' é variação de objeto direto."
  },
  {
    "question": "Substituindo o objeto em 'Visitei <b>minha tia</b> no hospital':",
    "options": [
      "Visitei-<b>lhe</b> no hospital.",
      "<b>Lhe</b> visitei no hospital.",
      "Visitei-<b>a</b> no hospital.",
      "Visitei <b>ela</b> no hospital."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Visitar' é VTD, não aceita 'lhe'.<br/><b>B:</b> Incorreta. 'Lhe' é incorreto para o verbo e não se inicia frase com pronome átono.<br/><b>C:</b> <b>Correta.</b> O pronome <b>a</b> exerce a função de objeto direto de 'visitar'.<br/><b>D:</b> Incorreta. Uso coloquial de 'ela' como objeto."
  },
  {
    "question": "Assinale a alternativa onde o pronome <b>o</b> foi usado de forma <b>incorreta</b>:",
    "options": [
      "Espero-<b>o</b> na saída do metrô.",
      "Agradeci-<b>o</b> pelo presente recebido.",
      "Não <b>o</b> conheço muito bem.",
      "Quero-<b>o</b> sempre por perto."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Correta. 'Esperar' é VTD.<br/><b>B:</b> <b>Incorreta.</b> 'Agradecer' é VTI para pessoas (agradecer A alguém); o correto seria 'Agradeci-<b>lhe</b>'.<br/><b>C:</b> Correta. 'Conhecer' é VTD.<br/><b>D:</b> Correta. 'Querer' (no sentido de desejar/estimar) é VTD."
  },
  {
    "question": "No trecho 'O juiz <b>lhe</b> deu a palavra', o pronome em destaque é:",
    "options": [
      "Objeto direto.",
      "Sujeito da oração.",
      "Objeto indireto.",
      "Adjunto adnominal."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O objeto direto é 'a palavra'.<br/><b>B:</b> Incorreta. O sujeito é 'O juiz'.<br/><b>C:</b> <b>Correta.</b> Quem dá, dá algo ('a palavra') A alguém (<b>lhe</b>). O 'lhe' é o objeto indireto.<br/><b>D:</b> Incorreta. Embora o 'lhe' possa ter valor possessivo (adjunto), aqui ele é o destinatário da ação verbal."
  },
  {
    "question": "Complete corretamente: 'Se você ___ encontrar, diga-___ que estou esperando.'",
    "options": [
      "<b>o - lhe</b>",
      "lhe - o",
      "o - o",
      "lhe - lhe"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> 'Encontrar' é VTD (encontrar alguém = <b>o</b>) e 'Dizer' é VTDI (dizer algo A alguém = <b>lhe</b>).<br/><b>B:</b> Incorreta. Inverte as regências verbais.<br/><b>C:</b> Incorreta. 'Dizer' exige objeto indireto para a pessoa a quem se fala.<br/><b>D:</b> Incorreta. 'Encontrar' não rege preposição 'a' para seu objeto."
  },
  {
    "question": "Ao unir o verbo <b>analisar</b> com o pronome <b>o</b>, a forma correta resultante é:",
    "options": [
      "analisar-o",
      "analisá-lo",
      "analisar-no",
      "analisá-no"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Na norma culta, o 'r' final deve ser suprimido antes dos pronomes o/a.<br/><b>B:</b> <b>Correta.</b> Verbos terminados em <b>R, S ou Z</b> perdem a terminação e o pronome vira <b>lo/la</b>. O acento agudo marca a tonicidade da vogal 'a'.<br/><b>C:</b> Incorreta. A terminação 'no' é usada apenas para verbos terminados em sons nasais.<br/><b>D:</b> Incorreta. Mistura a regra do corte da letra 'r' com a terminação nasal inexistente neste verbo."
  },
  {
    "question": "Assinale a alternativa que apresenta a substituição correta para 'Eles <b>fizeram o</b> trabalho':",
    "options": [
      "Eles fizero-lo trabalho.",
      "Eles fizeram-lo.",
      "Eles fizeram-no.",
      "Eles fizê-lo."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Fizeram' termina em som nasal, não em R, S ou Z.<br/><b>B:</b> Incorreta. A forma '-lo' não se aplica após terminações nasais (M, ÃO, ÕE).<br/><b>C:</b> <b>Correta.</b> Verbos terminados em <b>sons nasais (M, ÃO, ÕE)</b> mantêm a terminação e o pronome assume a forma <b>no/na</b>.<br/><b>D:</b> Incorreta. Forma inexistente para a terceira pessoa do plural do pretérito perfeito."
  },
  {
    "question": "Na frase 'Eu <b>fiz a</b> lição', ao substituir o objeto pelo pronome, temos:",
    "options": [
      "Eu fi-la.",
      "Eu fiz-la.",
      "Eu fiz-na.",
      "Eu fi-na."
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O verbo 'fiz' termina em <b>Z</b>. Suprime-se o 'z' e adiciona-se <b>-la</b> (fi-la).<br/><b>B:</b> Incorreta. O 'z' não deve ser mantido na grafia com o pronome oblíquo.<br/><b>C:</b> Incorreta. A terminação em 'z' exige a variação 'la', não 'na'.<br/><b>D:</b> Incorreta. Erro na escolha da variação pronominal (na)."
  },
  {
    "question": "Qual a forma correta da união '<b>propomos</b> + <b>os</b>'?",
    "options": [
      "propomos-nos",
      "propomo-nos",
      "propomo-los",
      "propomos-los"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Propomos-nos' seria o uso do pronome reflexivo (nós a nós mesmos).<br/><b>B:</b> Incorreta. Refere-se à primeira pessoa do plural reflexiva, não à substituição de 'os'.<br/><b>C:</b> <b>Correta.</b> O verbo termina em <b>S</b>. Retira-se o 's' e acrescenta-se <b>-los</b> (propomo-los).<br/><b>D:</b> Incorreta. O 's' final deve ser obrigatoriamente removido."
  },
  {
    "question": "Assinale a alternativa que apresenta erro na variação do pronome:",
    "options": [
      "Vê-lo é um prazer.",
      "Eles dão-no por encerrado.",
      "Quero dizê-lo a verdade.",
      "Puseram-nas sobre a mesa."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Correta. Ver + o = Vê-lo (terminação em R).<br/><b>B:</b> Correta. Dão + o = Dão-no (terminação nasal ÃO).<br/><b>C:</b> <b>Incorreta.</b> O verbo 'dizer' é transitivo indireto para pessoas (dizer <b>lhe</b>). Se fosse objeto direto, seria 'dizê-lo', mas o contexto de 'verdade' exige o indireto.<br/><b>D:</b> Correta. Puseram + as = Puseram-nas (terminação nasal M)."
  },
  {
    "question": "A união do verbo <b>seduzir</b> com o pronome <b>a</b> resulta em:",
    "options": [
      "seduiz-la",
      "seduiz-a",
      "sedu-la",
      "sedu-na"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O 'z' deve ser removido totalmente.<br/><b>B:</b> Incorreta. Após 'z', o pronome deve sofrer a variação para 'la'.<br/><b>C:</b> <b>Correta.</b> Terminação em <b>Z</b>: retira-se a letra e adiciona-se <b>-la</b>.<br/><b>D:</b> Incorreta. 'Na' é exclusivo para terminações nasais."
  },
  {
    "question": "Escolha a opção que completa: 'Se os documentos chegarem, <b>põe-___</b> na pasta.'",
    "options": [
      "los",
      "nos",
      "nas",
      "as"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. O verbo 'põe' termina em ditongo nasal (õe), não em R, S ou Z.<br/><b>B:</b> <b>Correta.</b> Verbos terminados em <b>ÕE</b> (nasal) exigem a variação <b>no/nos/na/nas</b>.<br/><b>C:</b> Incorreta. O objeto 'os documentos' é masculino.<br/><b>D:</b> Incorreta. Após sons nasais, o pronome 'os' deve obrigatoriamente tornar-se 'nos'."
  },
  {
    "question": "Como fica a combinação '<b>querer</b> + <b>as</b>'?",
    "options": [
      "querê-las",
      "querer-as",
      "querê-nas",
      "quere-las"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> Verbo em <b>R</b>: cai o 'r', o 'e' recebe acento circunflexo por ser oxítona terminada em 'e', e o pronome vira <b>-las</b>.<br/><b>B:</b> Incorreta. Não houve a supressão do 'r' nem a modificação do pronome.<br/><b>C:</b> Incorreta. 'Nas' não se aplica a infinitivos.<br/><b>D:</b> Incorreta. Falta o acento tônico obrigatório no 'e' após a queda do 'r'."
  },
  {
    "question": "Na frase 'As meninas <b>compram as</b> flores', a substituição correta é:",
    "options": [
      "compram-las",
      "compram-as",
      "compram-nas",
      "comprá-las"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. '-las' não segue terminações em 'm'.<br/><b>B:</b> Incorreta. É obrigatória a variação para 'n' após som nasal.<br/><b>C:</b> <b>Correta.</b> 'Compram' termina em <b>M</b>, o que atrai a forma <b>-nas</b> do pronome.<br/><b>D:</b> Incorreta. Esta forma seria para o infinitivo 'comprar'."
  },
  {
    "question": "Assinale a alternativa que completa corretamente: 'Vou <b>refazer o</b> teste' $\rightarrow$ 'Vou <b>___</b>.'",
    "options": [
      "refazê-lo",
      "refazer-no",
      "refaze-lo",
      "refa-lo"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> Refazer + o = <b>Refazê-lo</b>. O 'r' cai e a vogal 'e' é acentuada.<br/><b>B:</b> Incorreta. Uso indevido da forma nasal.<br/><b>C:</b> Incorreta. Falta o acento circunflexo para marcar a vogal tônica 'e'.<br/><b>D:</b> Incorreta. Redução excessiva do radical do verbo."
  },
  {
    "question": "A forma '<b>dispõe-no</b>' pode ser a substituição de:",
    "options": [
      "Dispõe o livro.",
      "Dispões o livro.",
      "Dispor o livro.",
      "Dispõe os livros."
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O verbo 'dispõe' termina em ditongo nasal, exigindo <b>-no</b> para o objeto direto singular masculino.<br/><b>B:</b> Incorreta. 'Dispões' termina em S, resultando em 'dispõe-lo'.<br/><b>C:</b> Incorreta. 'Dispor' termina em R, resultando em 'dispô-lo'.<br/><b>D:</b> Incorreta. 'Os livros' exigiria a forma plural 'dispõe-nos'."
  },
  {
    "question": "Qual destas frases apresenta a norma culta de forma <b>impecável</b>?",
    "options": [
      "Quisemos os livros e <b>quisemo-los</b> prontamente.",
      "Disseram a verdade e <b>disseram-la</b> bem.",
      "Vou compor a música e <b>compô-a</b> agora.",
      "Eles dão a notícia e <b>dão-la</b> com alegria."
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> Quisemos termina em <b>S</b>; retira-se o 's' e usa-se <b>-los</b>.<br/><b>B:</b> Incorreta. Disseram termina em M; o correto é 'disseram-na'.<br/><b>C:</b> Incorreta. Compor termina em R; o correto é 'compô-la'.<br/><b>D:</b> Incorreta. Dão termina em som nasal (ÃO); o correto é 'dão-na'."
  },
  {
    "question": "Assinale a alternativa que substitui corretamente o termo destacado: 'Vou vender <b>o carro</b> amanhã'.",
    "options": [
      "Vou vender-o",
      "Vou vendê-lo",
      "Vou vender-no",
      "Vou vender-lhe"
    ],
    "correct": 1,
    "explanation": "A) <b>Vou vender-o</b>: Errado. Quando o verbo termina em -r, -s ou -z, essas letras caem e o pronome assume a forma lo/la. <br/>B) <b>Vou vendê-lo</b>: Correto. O -r de 'vender' cai e acrescenta-se o 'lo' com acento tônico. <br/>C) <b>Vou vender-no</b>: Errado. A forma 'no/na' só ocorre após sons nasais (-am, -em, -ão). <br/>D) <b>Vou vender-lhe</b>: Errado. O verbo 'vender' é transitivo direto (VTD) e 'lhe' é usado para objetos indiretos."
  },
  {
    "question": "Na frase 'Eles <b>fizeram o dever</b> com atenção', a substituição correta do objeto é:",
    "options": [
      "Fizeram-lo",
      "Fizeram-o",
      "Fizeram-no",
      "Fizeram-lhe"
    ],
    "correct": 2,
    "explanation": "A) <b>Fizeram-lo</b>: Errado. 'Lo' não se usa após terminação nasal. <br/>B) <b>Fizeram-o</b>: Errado. A pronúncia exigiria a forma nasal para manter a sonoridade. <br/>C) <b>Fizeram-no</b>: Correto. Verbos terminados em sons nasais (-am, -em, -ão, -õe) exigem as formas 'no, na, nos, nas'. <br/>D) <b>Fizeram-lhe</b>: Errado. 'O dever' é objeto direto; 'lhe' substituiria um objeto indireto preposicionado."
  },
  {
    "question": "Qual a forma correta para 'Nós <b>fizemos as tarefas</b>'?",
    "options": [
      "Fizemos-las",
      "Fizemo-las",
      "Fizemos-nas",
      "Fizemos-as"
    ],
    "correct": 1,
    "explanation": "A) <b>Fizemos-las</b>: Errado. Deve-se retirar o -s final do verbo antes de anexar o 'las'. <br/>B) <b>Fizemo-las</b>: Correto. Verbos terminados em -s perdem essa letra ao se unirem aos pronomes o/a (que viram lo/la). <br/>C) <b>Fizemos-nas</b>: Errado. A forma nasal 'nas' não se aplica a verbos terminados em -s. <br/>D) <b>Fizemos-as</b>: Errado. Gramaticalmente incorreto conforme a norma culta de colocação pronominal."
  },
  {
    "question": "Assinale a frase em que o pronome <b>lhe</b> está empregado incorretamente:",
    "options": [
      "Entreguei-<b>lhe</b> os documentos.",
      "Eu <b>lhe</b> vi no shopping ontem.",
      "Desejamos-<b>lhe</b> muita sorte.",
      "Perdoei-<b>lhe</b> a dívida."
    ],
    "correct": 1,
    "explanation": "A) <b>Entreguei-lhe</b>: Correto. Entregar algo 'a alguém' (Objeto Indireto). <br/>B) <b>Eu lhe vi</b>: Errado. O verbo 'ver' é transitivo direto (VTD). O correto seria 'Eu <b>o</b> vi' ou 'Vi-<b>o</b>'. <br/>C) <b>Desejamos-lhe</b>: Correto. Desejar algo 'a alguém'. <br/>D) <b>Perdoei-lhe</b>: Correto. Perdoar algo 'a alguém' exige objeto indireto de pessoa."
  },
  {
    "question": "Em 'Não <b>os</b> encontramos na sala', a próclise ocorre porque:",
    "options": [
      "O verbo está no plural.",
      "Existe uma palavra negativa.",
      "O pronome termina em -s.",
      "É início de frase."
    ],
    "correct": 1,
    "explanation": "A) <b>Verbo no plural</b>: Errado. O número do verbo não influencia a posição do pronome. <br/>B) <b>Palavra negativa</b>: Correto. O advérbio 'Não' é uma palavra atrativa que exige a próclise (pronome antes do verbo). <br/>C) <b>Pronome em -s</b>: Errado. A terminação do pronome não determina a atração. <br/>D) <b>Início de frase</b>: Errado. A frase começa com o advérbio, não com o pronome."
  },
  {
    "question": "Substituindo o termo '<b>a decisão</b>' em 'Precisamos tomar a decisão', temos:",
    "options": [
      "Tomar-a",
      "Tomar-na",
      "Tomá-la",
      "Tomar-lhe"
    ],
    "correct": 2,
    "explanation": "A) <b>Tomar-a</b>: Errado. O -r final deve cair. <br/>B) <b>Tomar-na</b>: Errado. O verbo não termina em som nasal. <br/>C) <b>Tomá-la</b>: Correto. Verbo em -r perde o -r, ganha acento (se oxítona) e o pronome vira 'la'. <br/>D) <b>Tomar-lhe</b>: Errado. 'A decisão' é objeto direto."
  },
  {
    "question": "Na frase '<b>Puseram as flores</b> no vaso', a substituição do objeto resulta em:",
    "options": [
      "Puseram-nas",
      "Puseram-las",
      "Puseram-as",
      "Pusê-las"
    ],
    "correct": 0,
    "explanation": "A) <b>Puseram-nas</b>: Correto. O verbo termina em som nasal (-am), logo o pronome 'as' vira 'nas'. <br/>B) <b>Puseram-las</b>: Errado. 'Las' só ocorre após -r, -s ou -z. <br/>C) <b>Puseram-as</b>: Errado. A norma culta exige a forma nasal para eufonia. <br/>D) <b>Pusê-las</b>: Errado. Essa forma ocorreria se o verbo fosse 'Puser' (infinitivo), não 'Puseram'."
  },
  {
    "question": "Assinale a alternativa que completa corretamente: 'Nunca ____ visto antes'.",
    "options": [
      "tinha-o",
      "o tinha",
      "tinha-lo",
      "tinha-no"
    ],
    "correct": 1,
    "explanation": "A) <b>tinha-o</b>: Errado. O advérbio 'Nunca' atrai o pronome para antes do verbo. <br/>B) <b>o tinha</b>: Correto. Próclise obrigatória devido à palavra negativa 'Nunca'. <br/>C) <b>tinha-lo</b>: Errado. Não há -r, -s ou -z no verbo para justificar 'lo'. <br/>D) <b>tinha-no</b>: Errado. O verbo não termina em som nasal."
  },
  {
    "question": "Qual a forma correta para 'Eles <b>compram os livros</b>'?",
    "options": [
      "Compram-nos",
      "Compram-los",
      "Compram-os",
      "Comprá-los"
    ],
    "correct": 0,
    "explanation": "A) <b>Compram-nos</b>: Correto. Verbo termina em -am (nasal), o pronome 'os' vira 'nos'. <br/>B) <b>Compram-los</b>: Errado. Forma 'los' é exclusiva para terminações em -r, -s, -z. <br/>C) <b>Compram-os</b>: Errado. Falta a variação nasal exigida pela gramática. <br/>D) <b>Comprá-los</b>: Errado. Esta é a forma do infinitivo 'Comprar'."
  },
  {
    "question": "Em 'Dar-<b>lhe</b>-emos uma resposta', o uso da mesóclise ocorre porque:",
    "options": [
      "O verbo está no futuro do presente e não há atração.",
      "O pronome 'lhe' só pode ser usado no meio do verbo.",
      "Há uma palavra negativa oculta.",
      "O verbo está no passado."
    ],
    "correct": 0,
    "explanation": "A) <b>Futuro do presente</b>: Correto. Sem palavra atrativa, verbos no futuro exigem mesóclise se iniciarem a frase. <br/>B) <b>Uso do 'lhe'</b>: Errado. 'Lhe' pode ser usado em próclise ou ênclise também. <br/>C) <b>Palavra negativa</b>: Errado. Se houvesse negação, seria próclise ('Não lhe daremos'). <br/>D) <b>Verbo no passado</b>: Errado. O verbo 'Daremos' está no futuro."
  },
  {
    "question": "Substitua o termo: 'Encontramos <b>os documentos</b>'.",
    "options": [
      "Encontramo-los",
      "Encontramos-os",
      "Encontramos-nos",
      "Encontramo-nos"
    ],
    "correct": 0,
    "explanation": "A) <b>Encontramo-los</b>: Correto. Retira-se o -s de 'Encontramos' e adiciona-se 'los'. <br/>B) <b>Encontramos-os</b>: Errado. Incorreto segundo as regras de eufonia e gramática. <br/>C) <b>Encontramos-nos</b>: Errado. 'Nos' indicaria a 1ª pessoa do plural (nós), alterando o sentido para 'Encontramos a nós mesmos'. <br/>D) <b>Encontramo-nos</b>: Errado. Novamente, 'nos' é pronome reflexivo/pessoal de 1ª pessoa, não substituto de 'os documentos'."
  },
  {
    "question": "Na frase 'Alguém <b>o</b> chamou na porta', a próclise é:",
    "options": [
      "Facultativa.",
      "Obrigatória, pois 'Alguém' é pronome indefinido.",
      "Errada, deveria ser 'chamou-o'.",
      "Justificada pelo som nasal do verbo."
    ],
    "correct": 1,
    "explanation": "A) <b>Facultativa</b>: Errado. Pronomes indefinidos são atratores fortes. <br/>B) <b>Obrigatória</b>: Correto. Pronomes indefinidos como 'Alguém', 'Tudo', 'Ninguém' exigem próclise. <br/>C) <b>Errada</b>: Errado. A ênclise seria incorreta devido à atração do pronome indefinido. <br/>D) <b>Som nasal</b>: Errado. 'Chamou' não termina em som nasal."
  },
  {
    "question": "Como fica a frase 'Vou <b>pôr o livro</b> na estante' com a substituição do objeto?",
    "options": [
      "Vou pôr-lo",
      "Vou pô-lo",
      "Vou pôr-no",
      "Vou po-lo"
    ],
    "correct": 1,
    "explanation": "A) <b>Vou pôr-lo</b>: Errado. O -r deve ser removido. <br/>B) <b>Vou pô-lo</b>: Correto. O verbo 'pôr' termina em -r, que cai, e o pronome 'o' vira 'lo'. O acento circunflexo se mantém. <br/>C) <b>Vou pôr-no</b>: Errado. Não há terminação nasal. <br/>D) <b>Vou po-lo</b>: Errado. Falta o acento obrigatório do monossílabo tônico 'pô'."
  },
  {
    "question": "Assinale o erro de colocação pronominal:",
    "options": [
      "Me empresta a caneta.",
      "Empreste-me a caneta.",
      "Não me empreste a caneta.",
      "Quero que me empreste a caneta."
    ],
    "correct": 0,
    "explanation": "A) <b>Me empresta</b>: Errado. Pela norma culta, não se inicia frase com pronome oblíquo átono. <br/>B) <b>Empreste-me</b>: Correto. Início de frase exige ênclise. <br/>C) <b>Não me empreste</b>: Correto. 'Não' atrai o pronome (próclise). <br/>D) <b>Que me empreste</b>: Correto. A conjunção 'que' atrai o pronome (próclise)."
  },
  {
    "question": "Substituindo '<b>o resultado</b>' em 'Eles <b>querem saber o resultado</b>', temos:",
    "options": [
      "querem saber-o",
      "querem sabê-lo",
      "querem saber-lhe",
      "querem saber-no"
    ],
    "correct": 1,
    "explanation": "A) <b>saber-o</b>: Errado. O -r deve cair. <br/>B) <b>sabê-lo</b>: Correto. Verbo em -r cai a letra final e o pronome vira 'lo'. <br/>C) <b>saber-lhe</b>: Errado. 'O resultado' é objeto direto. <br/>D) <b>saber-no</b>: Errado. Sem terminação nasal no verbo 'saber'."
  }
],
};

// Elementos do DOM
const subjectSelect = document.getElementById('subject-select');
const quizContent = document.getElementById('quiz-content');
const questionContainer = document.getElementById('question-container');
const answerBtn = document.getElementById('answer-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const correctCountSpan = document.getElementById('correct-count');
const wrongCountSpan = document.getElementById('wrong-count');
const nQuestoes = document.getElementById('nquestoes');


// Estado do quiz
let currentQuestions = [];
let userAnswers = [];
let answeredQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

// Função para embaralhar array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para obter todas as questões
function getAllQuestions() {
    return Object.values(questions).flat();
}

// Função para carregar questões
function loadQuestions(subject) {
    if (subject) {
        currentQuestions = shuffleArray([...questions[subject]]);
    } else {
        currentQuestions = shuffleArray([...getAllQuestions()]);
    }
    userAnswers = new Array(currentQuestions.length).fill(null);
    answeredQuestions = new Array(currentQuestions.length).fill(false);
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    updateScoreCounter();
    questionContainer.innerHTML = '';
    submitBtn.style.display = 'none';
    prevBtn.style.display = currentQuestions.length > 0 ? 'block' : 'none';
    nextBtn.style.display = currentQuestions.length > 0 ? 'block' : 'none';
    answerBtn.style.display = currentQuestions.length > 0 ? 'block' : 'none';

    if (currentQuestions.length === 0) {
        questionContainer.innerHTML = '<p>Nenhuma questão disponível.</p>';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        answerBtn.style.display = 'none';
        return;
    }

    showQuestion(currentQuestionIndex);

    updateNavigation();
    nQuestoes.innerHTML = `Número de Questoes: ${currentQuestions.length}`;
}

// Função para exibir uma questão
function showQuestion(index) {
    questionContainer.innerHTML = '';
    const q = currentQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<h4>${index + 1}. ${q.question}</h4>`;

    q.options.forEach((option, optIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        const isChecked = userAnswers[index] === option;
        optionDiv.innerHTML = `
            <input type="radio" name="q${index}" id="q${index}o${optIndex}" value="${option}" ${isChecked ? 'checked' : ''} ${answeredQuestions[index] ? 'disabled' : ''}>
            <label for="q${index}o${optIndex}">
		${option} 
	    </label>
	<br/><br/>

	 ${answeredQuestions[index] && optIndex === q.correct ? q.explanation : ''} 	
	 
        `;
        if (answeredQuestions[index] && optIndex === q.correct) {
            optionDiv.classList.add('correct');
        }
        optionDiv.querySelector('input').addEventListener('change', () => {
            userAnswers[index] = option;
        });
        questionDiv.appendChild(optionDiv);
    });

    questionContainer.appendChild(questionDiv);
    answerBtn.disabled = answeredQuestions[index];
}

// Função para atualizar botões de navegação
function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.innerText = 'Finalizar';
    } else {
        nextBtn.innerText = 'Próxima';
    }
}

// Função para atualizar contador de pontuação
function updateScoreCounter() {
    correctCountSpan.textContent = correctCount;
    wrongCountSpan.textContent = wrongCount;
}

// Função para verificar resposta
function checkAnswer(index) {
    if (answeredQuestions[index]) return; // Evita verificar novamente
    if (userAnswers[index] === null) {
        resultDiv.innerHTML = 'Por favor, selecione uma resposta!';
        return;
    }

    answeredQuestions[index] = true;
    const q = currentQuestions[index];
    const correctOption = q.options[q.correct]; // Obtém a opção correta pelo índice
    if (userAnswers[index] === correctOption) {
        correctCount++;
    } else {
        wrongCount++;
    }
    updateScoreCounter();
    showQuestion(index); // Reexibe a questão com a resposta correta destacada
    answerBtn.disabled = true;
}

// Função para verificar todas as respostas no final
function checkAnswers() {
    let score = 0;
    const allAnswered = userAnswers.every(answer => answer !== null);

    if (!allAnswered) {
        resultDiv.innerHTML = 'Por favor, responda todas as questões!';
        return;
    }

    currentQuestions.forEach((q, index) => {
        const correctOption = q.options[q.correct]; // Obtém a opção correta pelo índice
        if (userAnswers[index] === correctOption) {
            score++;
        }
    });

    resultDiv.innerHTML = `Você acertou ${score} de ${currentQuestions.length} questões!`;
    questionContainer.innerHTML = '';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    answerBtn.style.display = 'none';
    submitBtn.style.display = 'none';
}

// Evento para mudança de assunto
subjectSelect.addEventListener('change', (e) => {
    resultDiv.innerHTML = '';
    loadQuestions(e.target.value);
});

// Evento para botão Anterior
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateNavigation();
    }
});

// Evento para botão Próxima/Finalizar
nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateNavigation();
    } else {
        checkAnswers();
    }
});

// Evento para botão Responder
answerBtn.addEventListener('click', () => {
    checkAnswer(currentQuestionIndex);
});

// Evento para envio das respostas (opcional)
submitBtn.addEventListener('click', checkAnswers);

// Carregar todas as questões ao iniciar
loadQuestions('');