FROM node:22.4.0-alpine3.20

ENV NODE_ENV development

COPY --chown=node:node .zshrc /home/node

# Update and install dependencies
RUN apk update && apk add --no-cache \
    zsh \
    starship \
    git \
    openssh \
    && npm install -g pnpm

ENV ZSH_THEME starship

USER node

WORKDIR /webapp

COPY ../ ./

CMD ["tail", "-f", "/dev/null"]