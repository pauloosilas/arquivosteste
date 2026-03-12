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
  
]
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
    questionDiv.innerHTML = `<h3>${index + 1}. ${q.question}</h3>`;

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