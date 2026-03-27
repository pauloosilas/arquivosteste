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