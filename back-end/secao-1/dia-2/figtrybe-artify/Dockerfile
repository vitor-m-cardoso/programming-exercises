# Crie um Dockerfile utilizando a imagem betrybe/figtrybe-artify.
FROM betrybe/figtrybe-artify AS figtrybe-artify
# Defina um ENTRYPOINT para a execução do comando.
  # Observe que o executável figtrybe-artify está nos caminhos "node", "app.js";
ENTRYPOINT [ "node", "app.js" ]

# Utilize o CMD para definir uma mensagem padrão.
CMD [ "Funcionando!" ]

# Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.
  # docker image build ./ -t figtrybe-artify
# docker build -t figtrybe-artify .