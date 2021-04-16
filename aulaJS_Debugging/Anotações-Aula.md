### Aula JavaScript - Debugging

## Ferramenta desenvolvedor do browser)


# Aba Network :

O browser funciona atravéz do protocolo http, que pode estar na versão 1 ou 2, onde a principal diferença é a performance e como os dados são transferidos.
O conteúdo é mesmo, composto por:

Headers : Tem informações como URL, Metódo, Status Code, IP, Server, cache, tipo de dados, request,  etc.
Response : Normalmente consta o html da página.
Timing : Tempo para que seja executada a requisição.
Preview: -
Cookies: - 

Essas informações são importantes para fazer o debugging e análisar o comportamento da página. Ao analisar os status é possível identificar o motiva de uma requisição
não ocorrer ou ainda o erro ocorrido.

# Aba Souce :

Mostra o documentos vinculados a execução.
Nessa aba é possível colocar break points onde podemos para o código no local em que ocorreu o erro. E apartir deste ponto gerar no Console comandos dentro deste cenário
para avaliar o motivo de ocorrer estas situações. Nesta aba é possível pular steps do script e manipular a execução pelo botões de ação.

Você pode usar do comando debugging no seu JS para forçar a parada (equivalente ao breakpoint) ou ainda usar o console.log para monitarar variáveis, obj, parametros.

# Aba Elements :

Nesta aba é possível inspecionar os objetos do front (html, css). Assim é possível ver como está construido o layout, e também fazer alteração de stilo habilitando
ou desabilitando as declarações css pela sub aba Styles. Na sub-aba Computed pode-se monitorar todos estilos aplicados na página.

# Aba Console :

Nesta aba é onde torna-se possível executar comandos para teste no escopo atual ou de execução do métodos.