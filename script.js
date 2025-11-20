// Banco de questões
const questions = {  

EstadoDeDefesaESitioConstituiçao: [
  {
    "question": "Qual é um dos pressupostos constitucionais para a decretação do **Estado de Defesa** pelo Presidente da República, conforme o Art. 136 da Constituição Federal?",
    "options": [
      "Comprovação de grave comoção nacional ou ineficácia do Estado de Defesa.",
      "Agressão armada por força estrangeira.",
      "Preservação ou pronto restabelecimento da ordem ou paz social, ameaçadas por calamidades de grandes proporções na natureza.",
      "Necessidade de manter, em local determinado, a presença de forças militares federais."
    ],
    "correct": 2
  },
  {
    "question": "Antes de decretar o **Estado de Defesa**, o Presidente da República deve ouvir o Conselho da República e qual outro órgão?",
    "options": [
      "O Supremo Tribunal Federal.",
      "A Câmara dos Deputados.",
      "O Conselho Nacional de Justiça.",
      "O Conselho de Defesa Nacional."
    ],
    "correct": 3
  },
  {
    "question": "Qual é o prazo máximo de duração inicial do **Estado de Defesa** e por quanto tempo ele pode ser prorrogado, se persistirem as razões que o justificaram?",
    "options": [
      "60 dias, prorrogável por igual período.",
      "30 dias, prorrogável por até mais 30 dias.",
      "90 dias, prorrogável por 60 dias.",
      "Tempo indeterminado, a depender da permanência da situação de emergência."
    ],
    "correct": 1
  },
  {
    "question": "Conforme o Art. 136, § 3º, durante a vigência do **Estado de Defesa**, apenas uma das seguintes medidas poderá ser restringida nos termos da lei, sendo as demais reservadas ao Estado de Sítio ou não passíveis de restrição neste contexto:",
    "options": [
      "O sigilo da correspondência e da comunicação telegráfica e telefônica.",
      "A liberdade de reunião.",
      "A liberdade de expressão, independentemente de censura prévia.",
      "A inviolabilidade do domicílio."
    ],
    "correct": 1
  },
  {
    "question": "Após a decretação do **Estado de Defesa**, a quem o Presidente da República deve submeter o ato, com a respectiva justificação, e qual é o quórum para aprovação?",
    "options": [
      "Ao Senado Federal, por maioria simples.",
      "Ao Congresso Nacional, que decidirá por maioria absoluta.",
      "Ao Supremo Tribunal Federal, que avalia sua constitucionalidade por dois terços de seus membros.",
      "À Câmara dos Deputados, por maioria simples."
    ],
    "correct": 1
  },
  {
    "question": "Em qual das seguintes hipóteses o Presidente da República pode solicitar ao Congresso Nacional autorização para decretar o **Estado de Sítio**?",
    "options": [
      "Calamidade pública de grandes proporções na natureza.",
      "Grave comoção de repercussão nacional ou ocorrência de fatos que comprovem a ineficácia de medida tomada durante o Estado de Defesa.",
      "Perturbação da ordem pública por manifestações pacíficas.",
      "Ameaça à ordem pública ou paz social."
    ],
    "correct": 1
  },
  {
    "question": "Quem tem a competência constitucional para autorizar o Presidente da República a decretar o **Estado de Sítio** ou prorrogar sua vigência?",
    "options": [
      "O Supremo Tribunal Federal, após provocação do Procurador-Geral da República.",
      "O Conselho de Defesa Nacional, em reunião conjunta com o Conselho da República.",
      "O Congresso Nacional.",
      "O Senado Federal, em votação secreta."
    ],
    "correct": 2
  },
  {
    "question": "De acordo com o Art. 138, § 2º, se o Congresso Nacional estiver em recesso quando for solicitada a autorização para o **Estado de Sítio**, o Presidente do Senado Federal convocará extraordinariamente o Congresso Nacional no prazo de:",
    "options": [
      "5 dias.",
      "48 horas.",
      "24 horas.",
      "72 horas."
    ],
    "correct": 2
  },
  {
    "question": "O pedido de autorização do Presidente da República para decretar o **Estado de Sítio** deve indicar, **obrigatoriamente**, qual dos seguintes elementos:",
    "options": [
      "O rol de autoridades públicas que serão destituídas e processadas.",
      "O programa a ser executado, o prazo de duração, e as normas necessárias a sua execução.",
      "A manifestação favorável do Supremo Tribunal Federal e do Tribunal de Contas da União.",
      "A suspensão imediata de todos os direitos e garantias individuais."
    ],
    "correct": 1
  },
  {
    "question": "Qual das seguintes medidas **pode** ser adotada durante o **Estado de Sítio**, conforme o Art. 139 da Constituição Federal?",
    "options": [
      "Restrição à liberdade de reunião.",
      "Restrição ao sigilo da correspondência e das comunicações telegráficas e telefônicas.",
      "Obrigação de permanência em localidade determinada.",
      "Todas as anteriores."
    ],
    "correct": 3
  },
  {
    "question": "Durante o **Estado de Sítio**, a requisição de bens pode ocorrer, com a observância de qual condição fundamental, conforme o Art. 139, VII?",
    "options": [
      "Indenização prévia em dinheiro, garantido o preço de mercado.",
      "Indenização anterior ou posterior, assegurado o preço justo e atualizado.",
      "Indenização ulterior, se houver dano.",
      "Indenização em títulos da dívida pública, a serem resgatados após o término do estado de sítio."
    ],
    "correct": 2
  },
  {
    "question": "Qual das seguintes vedações ou garantias é mantida mesmo durante a vigência do **Estado de Sítio**, não podendo ser incluída nas restrições listadas no Art. 139?",
    "options": [
      "A incomunicabilidade do preso.",
      "A prisão por crime comum, desde que apurado por inquérito policial regular.",
      "O direito de petição aos poderes públicos.",
      "A liberdade de locomoção em todo o território nacional."
    ],
    "correct": 0
  },
  {
    "question": "Durante o **Estado de Defesa** ou **Estado de Sítio**, as imunidades materiais dos Deputados Federais e Senadores são mantidas?",
    "options": [
      "Sim, em todas as hipóteses, em respeito à soberania popular.",
      "Não, todas as imunidades são suspensas durante o período.",
      "Não, mas somente as que se referem a atos estranhos à função parlamentar.",
      "Sim, mas as imunidades materiais podem ser suspensas por voto de dois terços dos membros da respectiva Casa em caso de atos praticados fora do recinto do Congresso Nacional, incompatíveis com a execução das medidas."
    ],
    "correct": 3
  },
  {
    "question": "Terminada a vigência do **Estado de Defesa** ou do **Estado de Sítio**, cessam seus efeitos. Conforme o Art. 141, quem é responsabilizado por excessos ou desvios de poder?",
    "options": [
      "Exclusivamente o Presidente da República, por crime de responsabilidade.",
      "O Presidente da República e os que houverem colaborado na execução das medidas.",
      "Apenas os agentes públicos de execução direta que cometerem ilícitos.",
      "O Supremo Tribunal Federal, que avaliará a conduta das autoridades mediante provocação."
    ],
    "correct": 1
  },
  {
    "question": "Após o término do **Estado de Defesa** ou **Estado de Sítio**, qual é a obrigação constitucional do Presidente da República perante o Congresso Nacional, conforme o Art. 141, parágrafo único?",
    "options": [
      "Conceder anistia a todos os atingidos pelas medidas.",
      "Indenizar previamente as pessoas que sofreram restrições.",
      "Relatar as medidas aplicadas, com a justificação das providências e a indicação das responsabilidades apuradas.",
      "Solicitar a prorrogação das medidas por mais 30 dias para a conclusão de inquéritos."
    ],
    "correct": 2
  }
],





PenasRestritivasDeDireitos:[
  {
    "question": "A Seção II do Código Penal trata das Penas Restritivas de Direitos (PRD), as quais, em regra, são autônomas e substituem as penas privativas de liberdade. Assinale a alternativa **INCORRETA** quanto às espécies de PRD expressamente previstas no Art. 43 do CP.",
    "options": [
      "Prestação de serviço à comunidade ou a entidades públicas.",
      "Perda de bens e valores.",
      "Interdição temporária de direitos.",
      "Prisão domiciliar."
    ],
    "correct": 3
  },
  {
    "question": "Conforme o Art. 44 do CP, a substituição da pena privativa de liberdade por restritivas de direitos depende do preenchimento de requisitos objetivos e subjetivos. Assinale a alternativa **INCORRETA** acerca desses requisitos.",
    "options": [
      "A pena aplicada não seja superior a quatro anos, se o crime for culposo.",
      "O crime não seja cometido com violência ou grave ameaça à pessoa, quando a pena aplicada não for superior a quatro anos.",
      "A culpabilidade, os antecedentes, a conduta social e a personalidade do condenado, bem como os motivos e as circunstâncias, indiquem que a substituição é suficiente.",
      "O condenado não seja reincidente em crime doloso, salvo se a substituição for socialmente recomendável e a reincidência não se houver operado em virtude da prática do mesmo crime."
    ],
    "correct": 0
  },
  {
    "question": "A respeito da Prestação Pecuniária, espécie de Pena Restritiva de Direitos regulamentada pelo Art. 45, § 1º, do CP, assinale a alternativa **INCORRETA**.",
    "options": [
      "Consiste no pagamento em dinheiro à vítima, a seus dependentes, ou a entidade pública ou privada com destinação social.",
      "O valor pago é deduzido do montante de eventual condenação a título de reparação do dano a que se refere o inciso IV do caput do Art. 91 do CP.",
      "O valor da prestação pecuniária deve ser fixado em, no mínimo, 1 (um) salário mínimo e, no máximo, 500 (quinhentos) salários mínimos.",
      "O juiz pode autorizar que o valor seja descontado do salário ou da remuneração, observados os limites previstos em lei."
    ],
    "correct": 2
  },
  {
    "question": "A Perda de Bens e Valores é a PRD em que o condenado perde em favor do Fundo Penitenciário Nacional o montante correspondente ao prejuízo causado ou ao proveito obtido com o crime. Assinale a alternativa **INCORRETA** sobre esta espécie de pena.",
    "options": [
      "A perda de bens e valores terá como teto o que for apurado como proveito auferido pelo agente com o delito.",
      "Os bens e valores perdidos reverterão ao Fundo Penitenciário Nacional.",
      "A perda de bens e valores é fixada pelo juiz da execução, após trânsito em julgado da sentença condenatória.",
      "Esta pena consiste na transferência ao Fundo Penitenciário Nacional de bens e valores que pertençam ao condenado."
    ],
    "correct": 2
  },
  {
    "question": "Sobre a Prestação de Serviço à Comunidade ou a Entidades Públicas, disciplinada pelo Art. 46 do CP, assinale a alternativa **INCORRETA**.",
    "options": [
      "A pena de serviço à comunidade não poderá ser cumprida em tempo inferior à metade da pena privativa de liberdade fixada na sentença.",
      "O local do cumprimento deve ser em entidades assistenciais, hospitais, escolas, orfanatos e outros estabelecimentos congêneres, em programas comunitários ou estatais.",
      "A prestação de serviço à comunidade é aplicável a condenações iguais ou inferiores a um ano.",
      "A jornada de trabalho semanal não pode ser superior a oito horas, salvo se o condenado preferir cumpri-la em menor tempo."
    ],
    "correct": 2
  },
  {
    "question": "A Interdição Temporária de Direitos é uma espécie de PRD que impede o condenado de exercer certos direitos por um período. Assinale a alternativa **INCORRETA** sobre as interdições temporárias previstas no Art. 47 do CP.",
    "options": [
      "Proibição do exercício de cargo, função ou atividade pública, bem como de mandato eletivo.",
      "Suspensão de autorização ou de habilitação para dirigir veículo.",
      "Proibição de frequentar determinados lugares.",
      "Proibição de inscrever-se em concurso, avaliação ou exame públicos."
    ],
    "correct": 0
  },
  {
    "question": "A Limitação de Fim de Semana, embora regulamentada no Art. 48 (fora da Seção II), é listada como espécie de PRD no Art. 43, V. Sobre essa PRD, assinale a alternativa **INCORRETA**.",
    "options": [
      "Consiste na obrigação de permanecer, aos sábados e domingos, por 5 (cinco) horas diárias, em casa do albergado ou outro estabelecimento adequado.",
      "Durante a permanência, o condenado estará sujeito a palestras ou atividades educativas.",
      "A Limitação de Fim de Semana será aplicada em penas de prisão simples, mas não em condenações por reclusão ou detenção.",
      "Os horários de permanência devem ser fixados pelo juiz, de modo a não prejudicar a jornada normal de trabalho ou estudo do condenado."
    ],
    "correct": 2
  },
  {
    "question": "Quanto às regras gerais de substituição da pena privativa de liberdade por restritivas de direitos, estabelecidas no Art. 44 do CP, assinale a alternativa **INCORRETA**.",
    "options": [
      "Se a pena for igual ou inferior a um ano, a substituição pode ser feita por multa ou por uma PRD.",
      "Se superior a um ano, a pena privativa de liberdade pode ser substituída por duas PRD ou por uma PRD e multa.",
      "A substituição é vedada ao reincidente em crime doloso, em qualquer hipótese.",
      "A substituição não é cabível se a pena privativa de liberdade for superior a quatro anos."
    ],
    "correct": 2
  },
  {
    "question": "A respeito da aplicação das Penas Restritivas de Direitos pelo juiz na sentença condenatória, assinale a alternativa **INCORRETA**.",
    "options": [
      "Na condenação por crime doloso, a prestação de serviço à comunidade só é aplicável se a pena privativa de liberdade for superior a seis meses.",
      "A pena de interdição temporária de direitos deve ter duração idêntica à da pena privativa de liberdade substituída.",
      "Em caso de Prestação Pecuniária, o valor total da prestação deverá ser quitado integralmente antes do início do cumprimento da pena.",
      "A Prestação de Serviços à Comunidade deve ser cumprida em tarefas compatíveis com as aptidões do condenado e com sua jornada normal de trabalho."
    ],
    "correct": 2
  },
  {
    "question": "Sobre a Prestação de Serviço à Comunidade ou a Entidades Públicas, assinale a alternativa **INCORRETA**.",
    "options": [
      "A jornada de trabalho será de 8 (oito) horas semanais, no máximo.",
      "O tempo de serviço não é computado na contagem da pena privativa de liberdade substituída.",
      "Poderá ser exigido o cumprimento em finais de semana e feriados, desde que compatível com as aptidões do condenado.",
      "O juiz pode determinar que a pena seja cumprida em menor tempo, não inferior à metade da pena privativa de liberdade substituída."
    ],
    "correct": 1
  },
  {
    "question": "A Interdição Temporária de Direitos, em sua modalidade de proibição de exercício de profissão, atividade ou ofício, é aplicável nas hipóteses previstas no Art. 47, I, do CP. Assinale a alternativa **INCORRETA** sobre esta modalidade.",
    "options": [
      "A interdição deve ser aplicada quando houver compatibilidade entre o crime praticado e a profissão, atividade ou ofício.",
      "A proibição de exercício abrange cargo, função ou atividade pública, mas não se estende a mandato eletivo.",
      "A interdição de direitos aplica-se somente a atividades públicas, sendo vedada a proibição de exercício de profissão, atividade ou ofício privado.",
      "A proibição de inscrever-se em concurso público também é uma interdição de direitos prevista no rol legal."
    ],
    "correct": 2
  },
  {
    "question": "O juiz, ao sentenciar, deve observar a pena privativa de liberdade aplicada para determinar o regime e a forma de substituição por PRD. Assinale a alternativa **INCORRETA** que trata da obrigatoriedade da substituição, conforme o Art. 44 do CP.",
    "options": [
      "A substituição por PRD é um direito subjetivo do réu, não cabendo ao juiz recusá-la se preenchidos os requisitos objetivos e subjetivos.",
      "Se a pena for de reclusão de 4 anos e o crime tiver sido cometido com grave ameaça, a substituição não é cabível.",
      "No caso de crime culposo, a pena máxima de 4 anos deve ser observada para que haja substituição.",
      "O juiz deve analisar a culpabilidade, os antecedentes, a conduta social e a personalidade do condenado para verificar a suficiência da substituição."
    ],
    "correct": 2
  },
  {
    "question": "No que concerne à Prestação Pecuniária e à Perda de Bens e Valores, disciplinadas pelo Art. 45 do CP, assinale a alternativa **INCORRETA**.",
    "options": [
      "O desconto no salário do condenado para o pagamento da Prestação Pecuniária é limitado a um quarto da remuneração, independentemente de outras dívidas.",
      "A Prestação Pecuniária pode ser destinada a entidade pública ou privada com destinação social, desde que indicada pelo juiz.",
      "A Perda de Bens e Valores é limitada ao montante do prejuízo causado ou ao do proveito auferido pelo agente ou por terceiro, em consequência do crime.",
      "A Prestação Pecuniária consiste no pagamento em dinheiro, enquanto a Perda de Bens e Valores consiste na transferência de patrimônio ao Fundo Penitenciário Nacional."
    ],
    "correct": 0
  },
  {
    "question": "O Art. 46 do CP trata da Prestação de Serviço à Comunidade ou a Entidades Públicas. Assinale a alternativa **INCORRETA** que versa sobre o cumprimento dessa pena.",
    "options": [
      "O serviço será prestado gratuitamente e pelo tempo da condenação, à razão de uma hora de tarefa por dia de condenação.",
      "O juiz pode determinar a execução da pena de forma concentrada, autorizando o cumprimento em tempo superior ao da pena privativa de liberdade substituída.",
      "As tarefas a serem atribuídas ao condenado deverão ser compatíveis com suas aptidões e com sua jornada normal de trabalho.",
      "A prestação de serviço à comunidade é obrigatória na condenação a pena privativa de liberdade superior a seis meses, desde que por crime doloso."
    ],
    "correct": 1
  },
  {
    "question": "Dentre as Interdições Temporárias de Direitos previstas no Art. 47 do CP, assinale a alternativa **INCORRETA**.",
    "options": [
      "A proibição de frequentar determinados lugares é uma interdição que pode ser aplicada, conforme a peculiaridade do crime e as características pessoais do condenado.",
      "A suspensão de autorização ou de habilitação para dirigir veículo é uma interdição, desde que o crime esteja relacionado ao uso do veículo.",
      "A interdição de direitos tem prazo máximo de 2 (dois) anos, independentemente da duração da pena privativa de liberdade substituída.",
      "A interdição que proíbe o exercício de profissão, atividade ou ofício é aplicada quando o crime está relacionado à função exercida."
    ],
    "correct": 2
  },
  {
    "question": "O Art. 44, § 2º, do CP define como deve ocorrer a substituição da pena privativa de liberdade. Assinale a alternativa **INCORRETA** sobre as regras de cumulação das penas restritivas de direitos.",
    "options": [
      "Se a pena aplicada for de 1 (um) ano, a substituição pode ser por uma única Pena Restritiva de Direitos, como a Prestação de Serviços à Comunidade.",
      "Se a pena for superior a 1 (um) ano, a substituição pode ser por duas Penas Restritivas de Direitos, como Prestação Pecuniária e Interdição de Direitos.",
      "Se a pena for superior a 1 (um) ano, a substituição deve ser necessariamente por duas PRD, sendo vedada a substituição por uma PRD e multa.",
      "No caso de crime culposo com pena de 2 (dois) anos, a substituição deve ser feita por, no mínimo, duas Penas Restritivas de Direitos ou uma PRD e multa."
    ],
    "correct": 2
  },
  {
    "question": "Sobre a Prestação Pecuniária, prevista no Art. 45, § 1º, do CP, assinale a alternativa **INCORRETA**.",
    "options": [
      "Se houver vários condenados pelo mesmo crime, cada um responderá pelo pagamento da prestação pecuniária de forma solidária.",
      "O montante fixado deve ser revertido à vítima ou a seus dependentes, se possível.",
      "O valor da prestação pecuniária, se houver condenação a reparação do dano, deve ser deduzido do montante total da reparação civil.",
      "A fixação do valor deve levar em conta a situação econômica do condenado."
    ],
    "correct": 0
  },
  {
    "question": "A Perda de Bens e Valores possui limites claros no Art. 45, § 3º, do CP. Assinale a alternativa **INCORRETA**.",
    "options": [
      "A perda de bens e valores destina-se ao Fundo Penitenciário Nacional.",
      "O valor da perda não pode ultrapassar o valor do prejuízo causado à vítima ou ao Estado, quando for o caso.",
      "O juiz pode determinar a perda de bens do condenado, ainda que o valor ultrapasse o proveito auferido com o crime, como forma de punição exemplar.",
      "A Perda de Bens e Valores transfere bens e valores do condenado, e não bens de terceiros, salvo se comprovado que o terceiro se beneficiou indevidamente."
    ],
    "correct": 2
  },
  {
    "question": "Sobre a Prestação de Serviço à Comunidade ou a Entidades Públicas (Art. 46 do CP), no que se refere ao modo de cumprimento, assinale a alternativa **INCORRETA**.",
    "options": [
      "A execução da pena de serviço à comunidade exige a prévia celebração de convênio entre a entidade e o juízo da execução penal.",
      "As tarefas devem ser cumpridas de maneira a não prejudicar a jornada normal de trabalho ou estudo do condenado.",
      "O juiz da execução deve escolher as tarefas levando em conta a maior dificuldade para o condenado, como forma de maior punição e repressão.",
      "A pena é aplicada pelo tempo da condenação, mas sua execução pode ser reduzida até a metade, mediante esforço concentrado do condenado."
    ],
    "correct": 2
  },
  {
    "question": "O Art. 47, IV, do CP, prevê a Interdição de Direitos na modalidade de proibição de frequentar determinados lugares. Assinale a alternativa **INCORRETA** sobre essa interdição.",
    "options": [
      "A proibição de frequentar determinados lugares pode ser determinada, por exemplo, em casos de crimes sexuais (proibição de frequentar parques infantis).",
      "Essa interdição deve ter como finalidade afastar o condenado de locais onde possa cometer novas infrações ou ter contato com outros criminosos.",
      "A proibição deve ser genérica, abrangendo, por exemplo, a vedação de frequência a todos os bares e casas noturnas da cidade.",
      "A duração dessa interdição será idêntica à da pena privativa de liberdade substituída, conforme a regra geral do Art. 47, parágrafo único."
    ],
    "correct": 2
  }
] ,




DasPenasCodigoPenal:[
{
    "question": "Sobre a **Prestação Pecuniária**, prevista no Art. 45, § 1º, é correto afirmar que o valor pago será deduzido do montante de eventual reparação civil a que for condenado o infrator:",
    "options": [
      "Sempre que houver condenação em danos morais, mas não em danos materiais.",
      "Se coincidentes os beneficiários (vítima ou seus dependentes).",
      "Independentemente de quem seja o beneficiário, pois a natureza jurídica é sancionatória.",
      "Apenas se o valor da prestação pecuniária for superior a 100 salários mínimos."
    ],
    "correct": 1
  },
  {
    "question": "O Art. 45, § 1º, estabelece limites para a fixação da importância da **Prestação Pecuniária**. Quais são esses limites, em termos de salários mínimos?",
    "options": [
      "Não inferior a 1 (um) nem superior a 360 (trezentos e sessenta) salários mínimos.",
      "Não inferior a 1/30 (um trinta avos) nem superior a 50 (cinquenta) salários mínimos.",
      "Não inferior a 10 (dez) nem superior a 100 (cem) salários mínimos.",
      "Não há limite máximo fixado em lei, dependendo apenas da capacidade econômica do réu."
    ],
    "correct": 0
  },
  {
    "question": "No que tange à pena de **Perda de Bens e Valores** (Art. 45, § 3º), os valores arrecadados serão destinados a quem? E qual é o teto máximo dessa perda?",
    "options": [
      "Destinados à vítima; o teto é o valor total do patrimônio lícito do condenado.",
      "Destinados ao Fundo Penitenciário Nacional; o teto é o montante do prejuízo causado ou do provento obtido pelo agente, o que for maior.",
      "Destinados a entidades assistenciais; o teto é o valor da fiança arbitrada.",
      "Destinados ao Tesouro Nacional; o teto é fixado em 360 dias-multa."
    ],
    "correct": 1
  },
  {
    "question": "A **Prestação de Serviços à Comunidade ou a Entidades Públicas** (Art. 46) possui um requisito objetivo temporal para sua aplicação. Ela é aplicável somente às condenações privativas de liberdade:",
    "options": [
      "Iguais ou inferiores a 6 (seis) meses.",
      "Superiores a 6 (seis) meses.",
      "Superiores a 1 (um) ano.",
      "Qualquer que seja a pena aplicada, desde que em regime aberto."
    ],
    "correct": 1
  },
  {
    "question": "O Art. 46, § 4º, traz uma faculdade ao condenado quanto ao tempo de cumprimento da prestação de serviços à comunidade. É correto afirmar que:",
    "options": [
      "Se a pena substituída for superior a 1 (um) ano, é facultado ao condenado cumprir a pena substitutiva em menor tempo, nunca inferior à metade da pena privativa de liberdade fixada.",
      "O condenado pode sempre optar por cumprir a pena em metade do tempo, desde que dobre a carga horária diária, independentemente do total da pena.",
      "Se a pena for inferior a 1 (um) ano, o condenado pode cumpri-la em até 30 dias, mediante trabalho intensivo.",
      "A antecipação do cumprimento da pena depende exclusivamente de autorização do diretor da entidade assistencial, sem limites mínimos de tempo."
    ],
    "correct": 0
  },
  {
    "question": "Sobre a **Interdição Temporária de Direitos** (Art. 47), a proibição do exercício de profissão, atividade ou ofício (Inciso I) depende de qual circunstância específica?",
    "options": [
      "Que o condenado seja reincidente em crime doloso.",
      "Que a profissão dependa de habilitação especial, de licença ou autorização do poder público.",
      "Que o crime cometido seja hediondo ou equiparado.",
      "Que o juiz determine a cassação permanente do diploma profissional."
    ],
    "correct": 1
  },
  {
    "question": "Analise as seguintes modalidades de Interdição Temporária de Direitos previstas no Art. 47. Qual das alternativas **NÃO** corresponde a uma modalidade prevista expressamente neste artigo?",
    "options": [
      "Proibição de inscrever-se em concurso, avaliação ou exame públicos.",
      "Suspensão de autorização ou de habilitação para dirigir veículos.",
      "Proibição de frequentar determinados lugares.",
      "Proibição do uso de redes sociais e internet."
    ],
    "correct": 3
  },
  {
    "question": "Conforme o Art. 46, § 3º, como é atribuída a carga horária das tarefas na prestação de serviços à comunidade?",
    "options": [
      "À razão de 1 (uma) hora de tarefa por dia de condenação, fixadas de modo a não prejudicar a jornada normal de trabalho.",
      "À razão de 8 (oito) horas semanais, a serem cumpridas exclusivamente aos sábados.",
      "À razão de 2 (duas) horas de tarefa por dia de condenação, podendo prejudicar a jornada de trabalho se necessário.",
      "Conforme a disponibilidade da entidade beneficiada, sem vinculação direta com os dias de condenação."
    ],
    "correct": 0
  },
  {
    "question": "A **Limitação de Fim de Semana** (Art. 48) tem um viés educativo. Durante as 5 horas diárias de permanência aos sábados e domingos, o que poderá ser ministrado ao condenado?",
    "options": [
      "Apenas trabalhos manuais forçados para reparação do dano.",
      "Cursos e palestras ou atribuição de atividades educativas.",
      "Sessões de terapia psicológica obrigatória.",
      "Atividades esportivas de alta intensidade."
    ],
    "correct": 1
  },
  {
    "question": "Considerando o Art. 45, § 2º, se houver aceitação do beneficiário, a prestação pecuniária pode ser substituída por:",
    "options": [
      "Prestação de serviços à comunidade em dobro.",
      "Prestação de outra natureza (bens ou serviços).",
      "Perda de bens em favor da União.",
      "Pagamento de cesta básica em valor inferior ao estipulado."
    ],
    "correct": 1
  },
{
    "question": "De acordo com o Art. 32 do Código Penal, as penas são divididas em três categorias principais. Quais são elas?",
    "options": [
      "Privativas de liberdade, restritivas de direitos e multa.",
      "Privativas de liberdade, restritivas de movimento e pecuniárias.",
      "Reclusão, detenção e prisão simples.",
      "Privativas de liberdade, corporais e multa."
    ],
    "correct": 0
  },
  {
    "question": "Segundo o Art. 33 do Código Penal, qual a distinção principal entre a pena de **reclusão** e a de **detenção** quanto ao regime inicial de cumprimento?",
    "options": [
      "A reclusão deve ser cumprida em regime fechado, enquanto a detenção é cumprida apenas em regime aberto.",
      "A reclusão deve ser cumprida em regime fechado, semiaberto ou aberto; a detenção, em regime semiaberto ou aberto, salvo necessidade de transferência a regime fechado.",
      "Ambas podem iniciar em regime fechado, mas apenas a detenção permite progressão para o aberto.",
      "A detenção inicia-se sempre no regime aberto, enquanto a reclusão inicia-se sempre no semiaberto."
    ],
    "correct": 1
  },
  {
    "question": "Conforme o Art. 33, § 2º, alínea 'a', o condenado a pena privativa de liberdade superior a **8 (oito) anos** deverá começar a cumpri-la em qual regime?",
    "options": [
      "Regime semiaberto.",
      "Regime disciplinar diferenciado.",
      "Regime fechado.",
      "Regime aberto, se for réu primário."
    ],
    "correct": 2
  },
  {
    "question": "Sobre o **Regime Aberto**, descrito no Art. 36 do Código Penal, é correto afirmar que:",
    "options": [
      "Baseia-se na autodisciplina e senso de responsabilidade do condenado, que deverá trabalhar, frequentar curso ou exercer outra atividade autorizada, permanecendo recolhido durante o repouso noturno e dias de folga.",
      "O condenado fica sujeito a trabalho em comum durante o período diurno, em colônia agrícola ou industrial.",
      "É cumprido em estabelecimento de segurança máxima ou média.",
      "Não admite o trabalho do condenado fora do estabelecimento penal."
    ],
    "correct": 0
  },
  {
    "question": "O Art. 38 do Código Penal dispõe sobre os direitos do preso. O que o artigo estabelece explicitamente?",
    "options": [
      "O preso perde todos os direitos políticos e civis durante o cumprimento da pena.",
      "O preso conserva todos os direitos não atingidos pela perda da liberdade, impondo-se a todas as autoridades o respeito à sua integridade física e moral.",
      "O preso mantém apenas o direito à integridade física, perdendo os direitos patrimoniais.",
      "O preso conserva seus direitos políticos, sendo obrigado a votar nas eleições mesmo em regime fechado."
    ],
    "correct": 1
  },
  {
    "question": "O instituto da **Detração**, previsto no Art. 42 do Código Penal, consiste em:",
    "options": [
      "Aumentar a pena final com base no comportamento carcerário inadequado.",
      "Descontar, na pena privativa de liberdade e na medida de segurança, o tempo de prisão provisória, de prisão administrativa e de internação.",
      "Substituir a pena privativa de liberdade por restritiva de direitos.",
      "Suspender a execução da pena de multa quando o réu for insolvente."
    ],
    "correct": 1
  },
  {
    "question": "Qual das alternativas abaixo **NÃO** é uma pena restritiva de direitos prevista no Art. 43 do Código Penal?",
    "options": [
      "Prestação de serviços à comunidade ou a entidades públicas.",
      "Perda de bens e valores.",
      "Limitação de fim de semana.",
      "Banimento do território nacional."
    ],
    "correct": 3
  },
  {
    "question": "Para a substituição da pena privativa de liberdade por restritiva de direitos em crimes dolosos, o Art. 44, I, exige que a pena aplicada não seja superior a:",
    "options": [
      "2 (dois) anos.",
      "4 (quatro) anos.",
      "8 (oito) anos.",
      "1 (um) ano."
    ],
    "correct": 1
  },
  {
    "question": "Ainda sobre a substituição da pena (Art. 44), é requisito cumulativo que:",
    "options": [
      "O crime não tenha sido cometido com violência ou grave ameaça à pessoa.",
      "O réu seja reincidente específico em crime doloso.",
      "O réu tenha reparado o dano antes do julgamento, independentemente da violência.",
      "A pena seja superior a 4 anos, desde que o réu seja primário."
    ],
    "correct": 0
  },
  {
    "question": "A prestação de serviços à comunidade (Art. 46) é aplicável apenas às condenações privativas de liberdade superiores a:",
    "options": [
      "1 (um) mês.",
      "3 (três) meses.",
      "6 (seis) meses.",
      "1 (um) ano."
    ],
    "correct": 2
  },
  {
    "question": "Como são calculadas as tarefas na prestação de serviços à comunidade segundo o Art. 46, § 3º?",
    "options": [
      "Uma hora de tarefa por dia de condenação.",
      "Duas horas de tarefa por dia de condenação.",
      "Oito horas semanais, independentemente da pena.",
      "Uma hora de tarefa para cada semana de condenação."
    ],
    "correct": 0
  },
  {
    "question": "A **Limitação de Fim de Semana** (Art. 48) consiste na obrigação de permanecer, aos sábados e domingos, por 5 horas diárias, em:",
    "options": [
      "Delegacia de polícia mais próxima da residência.",
      "Casa de Albergado ou outro estabelecimento adequado.",
      "Sua própria residência (prisão domiciliar).",
      "Instituição de caridade para trabalho forçado."
    ],
    "correct": 1
  },
  {
    "question": "Sobre a pena de **Multa** (Art. 49), o Código Penal estabelece que esta consiste no pagamento ao fundo penitenciário de uma quantia fixada em dias-multa. Quais são os limites mínimo e máximo da quantidade de dias-multa?",
    "options": [
      "Mínimo de 5 e máximo de 100 dias-multa.",
      "Mínimo de 10 e máximo de 360 dias-multa.",
      "Mínimo de 30 e máximo de 365 dias-multa.",
      "Mínimo de 1 e máximo de 30 dias-multa."
    ],
    "correct": 1
  },
  {
    "question": "Qual é o valor unitário mínimo e máximo do dia-multa, conforme o Art. 49, § 1º?",
    "options": [
      "Mínimo de 1/30 do salário mínimo e máximo de 5 vezes o salário mínimo.",
      "Mínimo de 1/10 do salário mínimo e máximo de 10 vezes o salário mínimo.",
      "Mínimo de 1 salário mínimo e máximo de 100 salários mínimos.",
      "Mínimo de 1/30 do salário mínimo e máximo de 3 vezes o salário mínimo."
    ],
    "correct": 0
  },
  {
    "question": "De acordo com o Art. 51 do Código Penal, o que ocorre se a multa não for paga pelo condenado?",
    "options": [
      "Será convertida em pena privativa de liberdade.",
      "Será considerada dívida de valor, aplicando-se as normas da legislação relativa à dívida ativa da Fazenda Pública.",
      "Será perdoada se o réu comprovar insolvência.",
      "Será convertida em prestação de serviços à comunidade."
    ],
    "correct": 1
  }


],



 RouboCodigoPenal:[
  {
    "question": "Qual é a pena prevista no *caput* do Art. 157 do Código Penal para o crime de **Roubo Simples**?",
    "options": [
      "Reclusão, de 2 (dois) a 8 (oito) anos, e multa.",
      "Reclusão, de 4 (quatro) a 10 (dez) anos, e multa.",
      "Detenção, de 3 (três) a 6 (seis) anos, e multa.",
      "Reclusão, de 5 (cinco) a 12 (doze) anos, e multa."
    ],
    "correct": 1
  },
  {
    "question": "O crime de roubo, conforme o *caput* do Art. 157, exige quais elementos cumulativos na conduta nuclear?",
    "options": [
      "Subtrair coisa móvel, com destruição ou rompimento de obstáculo.",
      "Subtrair coisa móvel alheia, com o emprego de violência ou grave ameaça.",
      "Apropriar-se de coisa móvel que estava em sua posse legítima.",
      "Constranger alguém a fazer, tolerar ou deixar de fazer algo, com o intuito de obter vantagem econômica."
    ],
    "correct": 1
  },
  {
    "question": "No **Roubo Impróprio** (Art. 157, § 1º), em que momento o agente emprega a violência ou grave ameaça?",
    "options": [
      "A violência ou grave ameaça é empregada antes da subtração do bem.",
      "A violência ou grave ameaça é empregada no momento da abordagem inicial.",
      "A violência ou grave ameaça é empregada logo depois de subtraída a coisa, para assegurar a impunidade do crime ou a detenção da coisa.",
      "O agente nunca emprega violência, apenas fraude para reduzir a vigilância da vítima."
    ],
    "correct": 2
  },
  {
    "question": "O Art. 157, § 2º, prevê causas de aumento de pena (majorantes) que elevam a pena de **um terço até a metade**. Qual das seguintes circunstâncias se enquadra nesta majoração?",
    "options": [
      "Se o roubo for praticado com o emprego de arma de fogo.",
      "Se o roubo resultar em lesão corporal grave.",
      "Se há concurso de duas ou mais pessoas.",
      "Se o roubo resultar em morte (Latrocínio)."
    ],
    "correct": 2
  },
  {
    "question": "Qual é a fração de aumento de pena aplicada ao roubo se houver o **emprego de arma de fogo** (Art. 157, § 2º-A, I)?",
    "options": [
      "A pena aumenta-se de um terço à metade.",
      "A pena aumenta-se de um a dois terços.",
      "A pena aumenta-se de dois terços.",
      "A pena é duplicada."
    ],
    "correct": 2
  },
  {
    "question": "Qual é a principal distinção entre o crime de Roubo (Art. 157) e o de Furto (Art. 155), em termos de execução?",
    "options": [
      "O Roubo é contra bens móveis e o Furto, contra bens imóveis.",
      "O Roubo exige o dolo específico de obter a coisa, e o Furto não.",
      "O Roubo se consuma com o prejuízo da vítima, e o Furto, com a mera subtração.",
      "O Roubo exige o emprego de violência ou grave ameaça à pessoa, enquanto o Furto não."
    ],
    "correct": 3
  },
  {
    "question": "O crime de **Roubo Qualificado pelo resultado Lesão Corporal Grave** (Art. 157, § 3º, I) é apenado com:",
    "options": [
      "Reclusão, de 4 (quatro) a 10 (dez) anos, e multa.",
      "Reclusão, de 7 (sete) a 18 (dezoito) anos, e multa.",
      "Reclusão, de 10 (dez) a 20 (vinte) anos, e multa.",
      "Reclusão, de 8 (oito) a 15 (quinze) anos, e multa."
    ],
    "correct": 1
  },
  {
    "question": "No roubo com **restrição da liberdade da vítima** (Art. 157, § 2º, V), por quanto tempo a liberdade deve ser restringida para a aplicação da majorante?",
    "options": [
      "Por mais de 24 horas, caracterizando sequestro.",
      "Por tempo suficiente para que o agente tenha êxito na fuga.",
      "Pelo tempo necessário para a subtração e a fuga do local, desde que seja considerável.",
      "Por mais de 6 (seis) horas, conforme entendimento sumulado."
    ],
    "correct": 2
  },
  {
    "question": "O crime de **Latrocínio** (Roubo Qualificado pelo resultado Morte - Art. 157, § 3º, II) é classificado como qual o tipo de crime, conforme a Súmula 610 do STF?",
    "options": [
      "Crime preterdoloso, consumado com o evento morte.",
      "Crime qualificado pelo resultado, de natureza complexa.",
      "Crime contra a pessoa, não patrimonial.",
      "Crime hediondo, de natureza material, consumado com a morte, independentemente da subtração."
    ],
    "correct": 3
  },
  {
    "question": "A pena para o **Latrocínio** (Roubo Qualificado pelo resultado Morte - Art. 157, § 3º, II) é:",
    "options": [
      "Reclusão, de 12 (doze) a 30 (trinta) anos, e multa.",
      "Reclusão, de 20 (vinte) a 30 (trinta) anos, e multa.",
      "Reclusão, de 15 (quinze) a 25 (vinte e cinco) anos, e multa.",
      "Reclusão, de 8 (oito) a 20 (vinte) anos, e multa."
    ],
    "correct": 1
  },
  {
    "question": "A pena para o roubo com **emprego de explosivo ou de artefato análogo** (Art. 157, § 2º-A, II) é aumentada em qual proporção?",
    "options": [
      "Aumenta-se de um terço até a metade.",
      "Aumenta-se de dois terços.",
      "Aumenta-se de metade a dois terços.",
      "A pena é a mesma do Latrocínio."
    ],
    "correct": 1
  },
  {
    "question": "O roubo com **restrição de liberdade da vítima por tempo superior a 15 (quinze) horas** (Art. 157, § 2º-B) possui qual fração de aumento de pena?",
    "options": [
      "A pena aumenta-se de um terço até a metade.",
      "A pena aumenta-se de dois terços.",
      "A pena é aplicada em dobro.",
      "A pena aumenta-se de metade a dois terços."
    ],
    "correct": 1
  },
  {
    "question": "Qual é a principal distinção entre o crime de Roubo (Art. 157) e o de Extorsão (Art. 158)?",
    "options": [
      "No Roubo, a violência ou grave ameaça é exercida contra coisa; na Extorsão, contra pessoa.",
      "No Roubo, a subtração é feita pelo agente (o bem é retirado); na Extorsão, a vítima é forçada a agir (o bem é entregue).",
      "O Roubo é crime qualificado e a Extorsão é crime simples.",
      "O Roubo só se consuma com a posse mansa e pacífica da coisa; a Extorsão, com a violência."
    ],
    "correct": 1
  },
  {
    "question": "O roubo de **veículo automotor** que venha a ser transportado para outro Estado ou para o exterior (Art. 157, § 2º, III) é apenado com a majoração de:",
    "options": [
      "Aumento de um terço até a metade.",
      "Aumento de dois terços.",
      "Aumento de metade.",
      "Aumento da pena em dobro."
    ],
    "correct": 0
  },
  {
    "question": "Qual das seguintes ações *não* se enquadra como Roubo Majorado (com aumento de pena) nos termos do Art. 157, § 2º e § 2º-A?",
    "options": [
      "A subtração de valores de carro-forte, com uso de violência.",
      "O roubo praticado em concurso de três pessoas, com restrição da liberdade da vítima.",
      "O roubo simples tentado, sem resultado de lesão corporal ou morte.",
      "O emprego de arma branca para ameaçar a vítima."
    ],
    "correct": 2
  }
],



  FurtoCodigoPenal: [

{
    "question": "Qual é a pena prevista no *caput* do Art. 155 do Código Penal para o crime de **Furto Simples**?",
    "options": [
      "Reclusão, de 2 (dois) a 8 (oito) anos, e multa.",
      "Detenção, de 6 (seis) meses a 2 (dois) anos, e multa.",
      "Reclusão, de 1 (um) a 4 (quatro) anos, e multa.",
      "Detenção, de 1 (um) a 3 (três) anos, e multa."
    ],
    "correct": 2
  },
  {
    "question": "O **Furto Qualificado**, previsto no Art. 155, § 4º (ex: por concurso de pessoas ou destruição de obstáculo), é apenado com:",
    "options": [
      "Reclusão, de 1 (um) a 4 (quatro) anos, e multa.",
      "Reclusão, de 4 (quatro) a 8 (oito) anos, e multa.",
      "Reclusão, de 2 (dois) a 8 (oito) anos, e multa.",
      "Detenção, de 6 (seis) meses a 3 (três) anos, e multa."
    ],
    "correct": 2
  },
  {
    "question": "No caso do **Furto Privilegiado** (Art. 155, § 2º), se o juiz optar por diminuir a pena de reclusão ou detenção, qual é o limite de redução permitido?",
    "options": [
      "De um quarto à metade.",
      "De um terço à metade.",
      "De um a dois terços.",
      "De metade a dois terços."
    ],
    "correct": 2
  },
  {
    "question": "Em que consiste uma das faculdades do juiz ao aplicar o **Furto Privilegiado** (Art. 155, § 2º), além da redução da pena ou aplicação de multa?",
    "options": [
      "Aumentar a pena em até um terço.",
      "Substituir a pena de multa pela de prestação de serviços à comunidade.",
      "Substituir a pena de reclusão pela de detenção.",
      "Substituir a pena privativa de liberdade pela de interdição de direitos."
    ],
    "correct": 2
  },
  {
    "question": "A pena para o **Furto Noturno** (Art. 155, § 1º) é aumentada em qual proporção?",
    "options": [
      "Aumenta-se a pena de metade.",
      "Aumenta-se a pena de um terço.",
      "Aumenta-se a pena de dois terços.",
      "Aumenta-se a pena de um quarto."
    ],
    "correct": 1
  },
  {
    "question": "Qual é a pena cominada para o **Furto mediante fraude eletrônica** (Art. 155, § 4º-B) se a subtração for cometida com o uso de dispositivo eletrônico ou informático, conectado ou não à internet?",
    "options": [
      "Reclusão, de 4 (quatro) a 8 (oito) anos, e multa.",
      "Reclusão, de 3 (três) a 6 (seis) anos, e multa.",
      "Reclusão, de 2 (dois) a 5 (cinco) anos, e multa.",
      "Reclusão, de 5 (cinco) a 10 (dez) anos, e multa."
    ],
    "correct": 0
  },
  {
    "question": "Se o furto mediante fraude eletrônica (Art. 155, § 4º-B) for praticado **contra idoso ou vulnerável** (Art. 155, § 4º-C), qual é o acréscimo de pena previsto?",
    "options": [
      "A pena aumenta-se de um quarto a metade.",
      "A pena aumenta-se de um terço à metade.",
      "A pena aumenta-se de um terço a dois terços.",
      "A pena é duplicada."
    ],
    "correct": 1
  },
  {
    "question": "O **Furto com Emprego de Explosivo** (Art. 155, § 4º-A) possui a mais alta pena-base de todo o Título II do Furto. Qual é a sua cominação legal?",
    "options": [
      "Reclusão, de 6 (seis) a 12 (doze) anos, e multa.",
      "Reclusão, de 4 (quatro) a 10 (dez) anos, e multa.",
      "Reclusão, de 5 (cinco) a 12 (doze) anos, e multa.",
      "Reclusão, de 3 (três) a 8 (oito) anos, e multa."
    ],
    "correct": 1
  },
  {
    "question": "Qual é a pena específica prevista para o **Furto de Semovente Domesticável de Produção (Abigeato)**, conforme o Art. 155, § 6º?",
    "options": [
      "Reclusão, de 1 (um) a 4 (quatro) anos, e multa.",
      "Reclusão, de 2 (dois) a 5 (cinco) anos, e multa.",
      "Reclusão, de 3 (três) a 8 (oito) anos, e multa.",
      "Reclusão, de 4 (quatro) a 10 (dez) anos, e multa."
    ],
    "correct": 1
  },
  {
    "question": "No caso de **tentativa de furto** (Art. 14, II c/c Art. 155), como o juiz deve aplicar a pena, segundo a regra geral do Código Penal?",
    "options": [
      "A pena deve ser a do crime consumado, diminuída de um a dois terços.",
      "A pena deve ser a do crime consumado, diminuída de um terço à metade.",
      "A pena deve ser a do crime consumado, diminuída de um terço a dois terços.",
      "A pena deve ser aplicada em seu grau mínimo, com a exclusão da multa."
    ],
    "correct": 2
  },

	{
    "question": "Qual é a conduta nuclear (o verbo) do crime de **furto simples**, previsto no *caput* do Art. 155 do Código Penal Brasileiro?",
    "options": [
      "Subtrair coisa móvel alheia, mediante grave ameaça ou violência à pessoa.",
      "Apropriar-se de coisa alheia móvel, de que tem a posse ou a detenção.",
      "Subtrair, para si ou para outrem, coisa móvel alheia.",
      "Constranger alguém, mediante violência ou grave ameaça, a fazer, tolerar que se faça, ou deixar de fazer alguma coisa."
    ],
    "correct": 2
  },
  {
    "question": "O Art. 155, § 1º do Código Penal estabelece uma **causa de aumento de pena** para o crime de furto. Qual é a circunstância que, se presente, aumenta a pena de um terço?",
    "options": [
      "Se o crime é cometido com destruição ou rompimento de obstáculo à subtração da coisa.",
      "Se o furto for de veículo automotor que venha a ser transportado para outro Estado ou para o exterior.",
      "Se o crime é cometido durante o repouso noturno.",
      "Se a subtração for de substâncias explosivas ou de acessórios que, conjunta ou isoladamente, possibilitem sua fabricação, comércio ou emprego."
    ],
    "correct": 2
  },
  {
    "question": "O **furto privilegiado**, previsto no Art. 155, § 2º do CP, exige que o agente preencha quais requisitos, cumulativamente, para ser reconhecido?",
    "options": [
      "Que o agente seja reincidente e o valor da coisa furtada seja de pequeno valor.",
      "Que o agente seja primário e o valor da coisa furtada seja superior a 10 salários mínimos.",
      "Que o crime seja cometido durante o repouso noturno e o valor da coisa seja de pequeno valor.",
      "Que o agente seja primário e a coisa furtada seja de pequeno valor."
    ],
    "correct": 3
  },
  {
    "question": "Conforme o Art. 155, § 3º do CP, qual elemento é expressamente equiparado à **coisa móvel** a ser subtraída no crime de furto, para fins penais?",
    "options": [
      "O animal silvestre, caçado sem a devida permissão.",
      "A água, quando armazenada em reservatório para uso particular.",
      "A energia elétrica ou qualquer outra que tenha valor econômico.",
      "O crédito ou valor virtual depositado em conta bancária."
    ],
    "correct": 2
  },
  {
    "question": "O que a jurisprudência e a doutrina entendem por 'escalada' para a configuração do **furto qualificado** (Art. 155, § 4º, II)?",
    "options": [
      "O uso de chave falsa ou de instrumento para abrir a fechadura.",
      "Qualquer ingresso em local não aberto ao público, independentemente do meio empregado.",
      "O emprego de meio ou esforço físico incomum para transpor um obstáculo, como muro, cerca ou telhado.",
      "A entrada no local por uma janela aberta ou porta destrancada."
    ],
    "correct": 2
  },
  {
    "question": "Qual é a principal diferença entre o **furto mediante fraude** (Art. 155, § 4º, II) e o crime de estelionato (Art. 171)?",
    "options": [
      "No furto mediante fraude, o prejuízo deve ser superior a 5 salários mínimos; no estelionato, não há limite de valor.",
      "No furto mediante fraude, a fraude visa burlar a vigilância da vítima, que não tem intenção de entregar o bem; no estelionato, a vítima é induzida a entregar o bem.",
      "A fraude no furto é sempre eletrônica, e no estelionato, sempre presencial.",
      "O estelionato só se consuma com o prejuízo da vítima; o furto mediante fraude, com a simples subtração."
    ],
    "correct": 1
  },
  {
    "question": "Um indivíduo utiliza uma 'chave mestra' não autorizada para abrir a porta de um apartamento e subtrair objetos de valor. Qual qualificadora do Art. 155, § 4º, é aplicável a essa conduta?",
    "options": [
      "Abuso de confiança.",
      "Destreza.",
      "Com o emprego de chave falsa.",
      "Mediante fraude."
    ],
    "correct": 2
  },
  {
    "question": "No crime de furto qualificado pelo **concurso de duas ou mais pessoas** (Art. 155, § 4º, IV), o fundamento para o aumento da pena reside em quê?",
    "options": [
      "O valor da coisa subtraída ser necessariamente superior a 10 salários mínimos.",
      "A maior violência empregada pelos agentes, dado o seu número.",
      "A maior dificuldade de vigilância por parte da vítima e a maior ousadia dos agentes pela união de esforços.",
      "A maior periculosidade dos agentes, que agem em bando, independentemente da união de esforços."
    ],
    "correct": 2
  },
  {
    "question": "O furto qualificado pelo **emprego de explosivo** ou artefato análogo (Art. 155, § 4º-A) possui uma das penas mais altas. Qual é a pena de reclusão prevista para esta modalidade?",
    "options": [
      "Reclusão de 1 (um) a 4 (quatro) anos, e multa.",
      "Reclusão de 2 (dois) a 8 (oito) anos, e multa.",
      "Reclusão de 4 (quatro) a 10 (dez) anos, e multa.",
      "Reclusão de 6 (seis) a 12 (doze) anos, e multa."
    ],
    "correct": 2
  },
  {
    "question": "O **furto de semovente domesticável de produção (abigeato)**, previsto no Art. 155, § 6º, admite a aplicação do **furto privilegiado** (§ 2º), segundo o entendimento do Superior Tribunal de Justiça (STJ)?",
    "options": [
      "Não, pois o furto qualificado, em regra, afasta a aplicação do privilégio.",
      "Sim, pois o STJ pacificou que o privilégio é compatível com o furto qualificado, desde que a qualificadora seja de ordem objetiva (como o § 6º).",
      "Não, pois o furto de semovente é considerado crime hediondo, o que veda o privilégio.",
      "Sim, desde que o agente seja primário e o valor da rês seja de pequeno valor, mas somente se o juiz aplicar exclusivamente a pena de multa."
    ],
    "correct": 1
  }
  ],   


   CrimesHediondos: [
	
	{
    "question": "Conforme a Lei nº 8.072/90, que trata dos Crimes Hediondos, qual dos crimes abaixo é expressamente considerado hediondo, mesmo em sua forma tentada, em razão de sua natureza e potencial ofensivo?",
    "options": [
      "Roubo, quando o agente é primário e a vítima não sofre lesão corporal de natureza grave.",
      "Furto qualificado pelo emprego de explosivo ou de artefato análogo que cause perigo comum.",
      "Tráfico de drogas, em qualquer de suas modalidades previstas na Lei nº 11.343/06.",
      "Homicídio simples praticado no exercício de atividade típica de grupo de extermínio."
    ],
    "correct": 1
  },
  {
    "question": "Assinale a alternativa que apresenta crimes que a Constituição Federal e a Lei dos Crimes Hediondos (Lei nº 8.072/90) consideram como **equiparados** a hediondos, submetendo-os aos mesmos rigores legais:",
    "options": [
      "Extorsão, Latrocínio e Estupro.",
      "Tráfico Ilícito de Entorpecentes e Drogas Afins, Tortura e Terrorismo.",
      "Homicídio Qualificado, Genocídio e Extorsão Mediante Sequestro.",
      "Associação Criminosa e Posse Irregular de Arma de Fogo de Uso Restrito."
    ],
    "correct": 1
  },
  {
    "question": "Qual é a principal alteração trazida pela Lei nº 13.964/2019 (Pacote Anticrime) em relação ao regime inicial de cumprimento de pena para os condenados por crimes hediondos ou equiparados?",
    "options": [
      "Determinou que a pena será cumprida integralmente em regime fechado, vedada a progressão.",
      "Estabeleceu que a progressão de regime de cumprimento de pena ocorrerá após o cumprimento de 2/5 (dois quintos) da pena, se o apenado for primário, e de 3/5 (três quintos), se reincidente.",
      "Revogou a vedação ao livramento condicional e à prisão temporária para esses crimes.",
      "Aumentou os requisitos temporais para a progressão de regime, fixando percentuais mais altos (de 40% a 70% da pena), a depender da primariedade, reincidência, uso de violência e resultado morte."
    ],
    "correct": 3
  },
  {
    "question": "O crime de Estupro de Vulnerável é classificado como hediondo. Caso o condenado por este crime seja primário e tenha cumprido 40% da pena, ele poderá progredir de regime? (Considere a ausência de morte da vítima).",
    "options": [
      "Sim, pois a Lei de Crimes Hediondos exige 3/5 (60%) da pena para primários, sendo 40% suficiente.",
      "Não, pois o estupro de vulnerável é crime hediondo com resultado morte, exigindo o cumprimento de 70% da pena.",
      "Sim, desde que a progressão não seja para o regime aberto, que é vedado para crimes sexuais.",
      "Não, pois para os crimes hediondos praticados contra criança ou adolescente (como é o caso), o condenado primário deve cumprir 50% (metade) da pena para progredir de regime."
    ],
    "correct": 3
  },
  {
    "question": "Qual é a implicação direta da inafiançabilidade dos crimes hediondos e equiparados, conforme previsto na Constituição Federal e na Lei nº 8.072/90?",
    "options": [
      "O réu deve cumprir a pena em regime inicial fechado, independentemente da quantidade da pena aplicada.",
      "Impede que o réu responda ao processo em liberdade, devendo ser decretada, obrigatoriamente, sua prisão preventiva.",
      "É vedada a concessão de fiança para o autor do crime, mesmo que a pena mínima seja igual ou inferior a 4 (quatro) anos.",
      "Proíbe a aplicação de penas alternativas à privação de liberdade, como as penas restritivas de direitos."
    ],
    "correct": 2
  },
  {
    "question": "O homicídio, em regra, não é crime hediondo. No entanto, qual das qualificadoras, quando presente no Homicídio Qualificado, não o torna hediondo?",
    "options": [
      "Homicídio Qualificado praticado mediante pagamento ou promessa de recompensa (motivo torpe).",
      "Homicídio Qualificado praticado contra menor de 14 (quatorze) anos.",
      "Homicídio Qualificado Funcional (contra autoridade ou agente das Forças Armadas, Força Nacional de Segurança Pública e Polícia Federal), em razão da função.",
      "Homicídio Qualificado por feminicídio, quando praticado contra mulher maior de 60 anos."
    ],
    "correct": 3
  },
  {
    "question": "O crime de Epidemia com Resultado Morte é considerado hediondo. Qual das sanções abaixo é vedada, conforme o Art. 2º da Lei nº 8.072/90, aos condenados por crimes hediondos e equiparados?",
    "options": [
      "Comutação de pena.",
      "Livramento Condicional.",
      "Progressão de Regime.",
      "Substituição da pena privativa de liberdade por restritivas de direitos."
    ],
    "correct": 0
  },
  {
    "question": "Um dos crimes listados como hediondo é o de Extorsão Qualificada pela Restrição da Liberdade da Vítima. Qual é o fundamento para que, mesmo na forma tentada, os crimes hediondos sejam puníveis?",
    "options": [
      "O Direito Penal brasileiro pune toda e qualquer forma de tentativa com a mesma pena do crime consumado.",
      "A Lei dos Crimes Hediondos impõe essa regra para desestimular a prática de crimes de maior potencial ofensivo.",
      "O Art. 1º, Parágrafo único, da Lei nº 8.072/90 expressamente estabelece que os crimes nela previstos serão punidos, tentados ou consumados, com as mesmas regras de regime de cumprimento de pena, mas a pena da tentativa é reduzida.",
      "A tentativa dos crimes hediondos é considerada um crime autônomo e não uma causa de diminuição de pena."
    ],
    "correct": 2
  },
  {
    "question": "A Lei nº 8.072/90 estabelece que, em caso de condenação por crime hediondo, a progressão de regime dependerá da realização de exame criminológico. Qual o entendimento majoritário do Supremo Tribunal Federal (STF) sobre a obrigatoriedade desse exame após as alterações do Pacote Anticrime?",
    "options": [
      "O exame criminológico é obrigatório para todos os condenados por crimes hediondos, independentemente da fundamentação do juiz.",
      "O exame criminológico é sempre facultativo, e o juiz não precisa fundamentar sua decisão de requisitá-lo.",
      "O exame criminológico não é obrigatório, sendo a decisão do juiz de exigência ou dispensa do laudo sujeita a fundamentação, indicando a necessidade no caso concreto.",
      "O Pacote Anticrime tornou o exame criminológico totalmente irrelevante, prevalecendo apenas o bom comportamento carcerário para a progressão."
    ],
    "correct": 2
  },
  {
    "question": "Um indivíduo cometeu o crime de lesão corporal gravíssima dolosa (Art. 129, § 2º do CP), que é considerado crime hediondo quando praticado contra autoridade ou agente de segurança pública no exercício da função. Ele é condenado e cumpre pena. Para que ele possa obter o livramento condicional, qual a exigência temporal mínima da pena cumprida?",
    "options": [
      "Cumprimento de mais de 1/3 (um terço) da pena, por se tratar de crime doloso, sem reincidência específica.",
      "Cumprimento de mais de 1/2 (metade) da pena, se for primário e ostentar bons antecedentes, e de 2/3 (dois terços) se for reincidente, exceto se for reincidente específico.",
      "Cumprimento de mais de 2/3 (dois terços) da pena, se o apenado não for reincidente específico em crime hediondo ou equiparado.",
      "O livramento condicional é vedado para os crimes hediondos e equiparados."
    ],
    "correct": 2
  }

   ],	

   
    EstatutoDesarmamento: [
	

{
    "question": "Conforme o Estatuto do Desarmamento, o crime de POSSE irregular de arma de fogo de uso permitido é caracterizado por qual das seguintes condutas?",
    "options": [
      "Manter a arma de fogo, no interior de residência ou no local de trabalho do titular, sem autorização legal e em desacordo com determinação regulamentar.",
      "Portar a arma de fogo em via pública, municiada ou desmuniciada, sem o Certificado de Registro e a autorização de porte da autoridade competente.",
      "Disparar arma de fogo em local habitado ou em suas adjacências, em via pública ou em direção a ela.",
      "Vender, alugar, expor à venda ou manter em depósito arma de fogo, acessório ou munição, sem autorização e em desacordo com determinação legal ou regulamentar."
    ],
    "correct": 0
  },
  {
    "question": "Qual é a idade mínima estabelecida pelo Estatuto do Desarmamento para a aquisição de arma de fogo no Brasil, ressalvadas as exceções para integrantes das Forças Armadas, órgãos de segurança pública e colecionadores, atiradores e caçadores (CACs) devidamente registrados?",
    "options": [
      "18 (dezoito) anos completos.",
      "21 (vinte e um) anos completos.",
      "25 (vinte e cinco) anos completos.",
      "30 (trinta) anos completos."
    ],
    "correct": 2
  },
  {
    "question": "Qual dos requisitos abaixo é necessário para a concessão do Certificado de Registro de Arma de Fogo (CRAF) pela Polícia Federal, nos termos da Lei 10.826/03?",
    "options": [
      "Comprovação de emprego formal registrado em Carteira de Trabalho e Previdência Social.",
      "Apresentação de Carteira Nacional de Habilitação (CNH) válida.",
      "Comprovação de idoneidade, com a apresentação de certidões negativas de antecedentes criminais das Justiças Federal, Estadual, Militar e Eleitoral.",
      "Demonstração de efetiva necessidade por meio de processo administrativo simplificado."
    ],
    "correct": 2
  },
  {
    "question": "De acordo com a legislação, o Sistema Nacional de Armas (SINARM) tem como um de seus principais objetivos:",
    "options": [
      "Realizar a fiscalização e o controle de armas de fogo pertencentes às Forças Armadas e auxiliares.",
      "Emitir o Certificado de Registro de Colecionador, Atirador Desportivo e Caçador (CAC).",
      "Cadastrar as armas de fogo produzidas, importadas e vendidas no País, resguardando as informações de interesse da segurança pública e da defesa nacional.",
      "Conceder a autorização de porte de arma de fogo para os agentes de segurança privada."
    ],
    "correct": 2
  },
  {
    "question": "Considerando o crime de Omissão de Cautela (art. 13), assinale a alternativa que descreve corretamente o seu sujeito ativo e a conduta típica:",
    "options": [
      "Qualquer pessoa que for flagrada portando arma de fogo de forma descuidada em via pública, colocando a si ou a outrem em perigo.",
      "O proprietário ou diretor responsável de empresa de segurança e transporte de valores, que não registra as armas de sua propriedade no SINARM.",
      "O proprietário ou diretor responsável de empresa de segurança e transporte de valores que deixa de observar as cautelas necessárias para impedir que arma de fogo sob sua posse seja subtraída.",
      "Deixar de observar as cautelas necessárias para impedir que menor de 18 (dezoito) anos ou pessoa com deficiência mental se apodere de arma de fogo que esteja sob sua posse ou de sua propriedade."
    ],
    "correct": 3
  },
  {
    "question": "A respeito do crime de Porte Ilegal de Arma de Fogo de uso permitido (art. 14), a jurisprudência dominante do Superior Tribunal de Justiça (STJ) e do Supremo Tribunal Federal (STF) entende que, para sua consumação, a arma de fogo precisa estar:",
    "options": [
      "Necessariamente municiada e carregada, para demonstrar o potencial de perigo concreto.",
      "Acompanhada do respectivo Certificado de Registro e Guia de Tráfego, caso contrário não se configura o crime.",
      "Em perfeitas condições de funcionamento e com aptidão para deflagrar projéteis, independentemente de estar municiada.",
      "Comprovadamente utilizada com a intenção de praticar outro crime (dolo específico), caso contrário é mera infração administrativa."
    ],
    "correct": 2
  },
  {
    "question": "Qual das alternativas a seguir é considerada uma circunstância legal que exclui a tipicidade do crime de Disparo de Arma de Fogo (art. 15)?",
    "options": [
      "Disparo em local público, mas em legítima defesa de patrimônio.",
      "Disparo em via pública, desde que a arma esteja registrada e o agente tenha porte legal.",
      "Disparo em lugar desabitado (ermo), desde que comprovada a ausência de risco à incolumidade pública.",
      "Disparo em estande de tiro privado, sem o devido acompanhamento de instrutor."
    ],
    "correct": 2
  },
  {
    "question": "O Certificado de Registro de Arma de Fogo (CRAF) expedido pela Polícia Federal terá validade em todo o território nacional, devendo ser renovado antes do seu termo final. Qual é o prazo de validade atual do CRAF para o proprietário de arma de fogo de uso permitido?",
    "options": [
      "3 (três) anos.",
      "5 (cinco) anos.",
      "10 (dez) anos.",
      "Prazo indeterminado, desde que o proprietário mantenha os requisitos."
    ],
    "correct": 2
  },
  {
    "question": "A Lei n° 10.826/03 prevê a possibilidade de os integrantes das Guardas Municipais portarem arma de fogo. Em relação ao porte de arma por Guarda Municipal, é correto afirmar que:",
    "options": [
      "É concedido aos Guardas Municipais de municípios com mais de 50.000 (cinquenta mil) e menos de 500.000 (quinhentos mil) habitantes, somente quando em serviço.",
      "É concedido aos Guardas Municipais de capitais de Estado e municípios com mais de 500.000 (quinhentos mil) habitantes, em serviço ou fora dele, em todo o território nacional.",
      "É vedado o porte de arma de fogo aos Guardas Municipais de municípios com menos de 20.000 (vinte mil) habitantes, sob qualquer hipótese.",
      "O porte de arma de fogo é permitido a todo Guarda Municipal, independentemente da população do município, desde que esteja devidamente treinado e avaliado."
    ],
    "correct": 1
  },
  {
    "question": "O crime de Comércio Ilegal de Arma de Fogo (art. 17) e o crime de Tráfico Internacional de Arma de Fogo (art. 18) são classificados legalmente como crimes:",
    "options": [
      "Hediondos e afiançáveis.",
      "Não hediondos e afiançáveis.",
      "Hediondos e inafiançáveis.",
      "Não hediondos, mas inafiançáveis."
    ],
    "correct": 2
  }


   ],
	
    LeiExecucaoPenal: [

    {
    "question": "Qual é o objetivo principal da Lei de Execução Penal (LEP), conforme o Art. 1º?",
    "options": [
      "Apenas garantir a segurança e a ordem nos estabelecimentos prisionais.",
      "Efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado e do internado.",
      "Aplicar a lei penal posterior que, de qualquer modo, favorecer o condenado.",
      "Apenas promover a reeducação profissional e o ensino médio do apenado."
    ],
    "correct": 1
  },
  {
    "question": "Conforme a LEP, a quem se destina a assistência jurídica integral e gratuita, e por quem ela deve ser prestada, nos termos do Art. 15 e 16?",
    "options": [
      "Destina-se a todos os presos, devendo ser prestada por advogados credenciados pelo Conselho Penitenciário.",
      "Destina-se aos presos e internados sem recursos financeiros, e deve ser prestada pela Defensoria Pública.",
      "Destina-se apenas aos presos provisórios, sendo prestada pelo Ministério Público.",
      "Destina-se aos presos em regime fechado, sendo prestada pelo Juiz da Execução."
    ],
    "correct": 1
  },
  {
    "question": "Qual das seguintes atribuições é competência do Juiz da Execução, conforme a Lei nº 7.210/84?",
    "options": [
      "Presidir a Comissão Técnica de Classificação e realizar o exame criminológico obrigatório.",
      "Decidir sobre progressão ou regressão nos regimes e emitir anualmente o atestado de pena a cumprir.",
      "Aplicar as sanções disciplinares leves e médias no cumprimento da pena privativa de liberdade.",
      "Fiscalizar o banco de dados de identificação de perfil genético e requer o acesso aos dados."
    ],
    "correct": 1
  },
  {
    "question": "Em qual regime de cumprimento de pena privativa de liberdade a submissão do condenado ao exame criminológico é **obrigatória**, segundo a redação atual do Art. 8º?",
    "options": [
      "Regime aberto.",
      "Regime semiaberto.",
      "Regime fechado.",
      "Regime fechado e regime semiaberto."
    ],
    "correct": 2
  },
  {
    "question": "De acordo com o Art. 9º-A da LEP (com redação dada pela Lei nº 13.964/2019), o condenado por qual tipo de crime será submetido, obrigatoriamente, à identificação do perfil genético (DNA) por ocasião do ingresso no estabelecimento prisional?",
    "options": [
      "Crime culposo praticado com violência grave contra a pessoa.",
      "Crime doloso praticado com violência grave contra a pessoa, bem como por crime contra a vida, contra a liberdade sexual ou por crime sexual contra vulnerável.",
      "Qualquer crime que resulte em pena privativa de liberdade superior a 8 (oito) anos.",
      "Apenas o condenado por crime hediondo, independentemente do tipo."
    ],
    "correct": 1
  },
  {
    "question": "Qual é a classificação disciplinar da recusa do condenado em submeter-se ao procedimento de identificação do perfil genético (DNA), conforme o Art. 50, VIII, da LEP?",
    "options": [
      "Falta leve.",
      "Falta média.",
      "Falta gravíssima.",
      "Falta grave."
    ],
    "correct": 3
  },
  {
    "question": "O Art. 11 da LEP elenca seis tipos de assistência que serão oferecidas ao preso e ao internado. Qual das opções abaixo NÃO constitui um tipo de assistência prevista neste artigo?",
    "options": [
      "Assistência material.",
      "Assistência à saúde.",
      "Assistência familiar.",
      "Assistência religiosa."
    ],
    "correct": 2
  },
  {
    "question": "Qual nível de ensino é considerado **obrigatório** na assistência educacional ao preso e ao internado, integrando-se no sistema escolar da Unidade Federativa?",
    "options": [
      "O ensino profissionalizante de nível técnico.",
      "O ensino de 1º grau (ensino fundamental).",
      "O ensino médio, regular ou supletivo.",
      "O ensino superior."
    ],
    "correct": 1
  },
  {
    "question": "Qual das seguintes sanções disciplinares é expressamente vedada na execução penal, de acordo com o Art. 45, § 2º e § 3º, da LEP?",
    "options": [
      "O isolamento na própria cela por até 30 dias.",
      "O emprego de cela escura e as sanções coletivas.",
      "A suspensão ou restrição do direito de visita íntima.",
      "A perda de até um terço dos dias remidos, em caso de falta grave."
    ],
    "correct": 1
  },
  {
    "question": "A Lei nº 14.994/2024 alterou o Art. 41 da LEP para restringir o direito de visita íntima ou conjugal. Para qual tipo de crime o preso condenado **não** poderá usufruir desse direito?",
    "options": [
      "Crime de tráfico de drogas, em qualquer modalidade.",
      "Crime contra a mulher por razões da condição do sexo feminino (Feminicídio).",
      "Crime de roubo majorado pelo uso de arma de fogo.",
      "Qualquer crime hediondo que resulte em morte."
    ],
    "correct": 1
  },
  {
    "question": "Conforme o Art. 50, VII da LEP, qual conduta do condenado à pena privativa de liberdade é classificada como falta grave?",
    "options": [
      "Não usar corretamente o uniforme ou vestuário fornecido pela Administração.",
      "Recusar-se a frequentar o ensino profissional ou a participar de atividades educacionais.",
      "Possuir, indevidamente, instrumento capaz de ofender a integridade física de outrem ou tiver em sua posse aparelho telefônico.",
      "Descumprir, no regime semiaberto, as condições impostas para o trabalho externo."
    ],
    "correct": 2
  },
  {
    "question": "A Comissão Técnica de Classificação (CTC) é responsável pela classificação dos condenados. Quem a preside em cada estabelecimento penal, quando se tratar de condenado à pena privativa de liberdade?",
    "options": [
      "O Juiz da Execução.",
      "O Ministério Público.",
      "O Diretor do estabelecimento.",
      "O psicólogo, que é o profissional com expertise em personalidade."
    ],
    "correct": 2
  },
  {
    "question": "A assistência ao egresso consiste, entre outras coisas, na concessão, se necessária, de alojamento e alimentação, em estabelecimento adequado. Qual é o prazo máximo de duração desse benefício?",
    "options": [
      "Pelo prazo de 6 (seis) meses, sem possibilidade de prorrogação.",
      "Pelo prazo de 2 (dois) meses, prorrogável uma única vez, comprovada a necessidade.",
      "Pelo prazo de 3 (três) meses, prorrogável por igual período.",
      "Pelo prazo de 1 (um) mês, sem possibilidade de prorrogação."
    ],
    "correct": 1
  },
  {
    "question": "No que concerne à remição de pena pelo trabalho, qual é a proporção de dias trabalhados para a redução da pena privativa de liberdade, conforme o Art. 126 da LEP?",
    "options": [
      "1 (um) dia de pena a cada 2 (dois) dias de trabalho.",
      "1 (um) dia de pena a cada 3 (três) dias de trabalho.",
      "1 (um) dia de pena a cada 4 (quatro) dias de trabalho.",
      "1 (um) dia de pena a cada 12 (doze) horas de trabalho."
    ],
    "correct": 1
  },
  {
    "question": "O Art. 42 da LEP estabelece que as disposições sobre direitos do preso (Seção II) aplicam-se, no que couber, a quem?",
    "options": [
      "Apenas ao condenado em regime fechado e semiaberto.",
      "Apenas ao egresso e ao liberado condicionalmente.",
      "Ao preso provisório e ao submetido à medida de segurança.",
      "Apenas ao condenado à pena restritiva de direitos."
    ],
    "correct": 2
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
            <label for="q${index}o${optIndex}">${option}</label>
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