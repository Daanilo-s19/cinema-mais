# cinema-mais

API para um Cinema utilizando Design Patterns.

[Clique aqui para ver os requisitos.](assets/pas_trabalho.pdf)

## Padrões escolhidos

### Factory

Para supri as heranças acima, utilizamos `CustomerFactory` e `RoomFactory`

### Facade

A lógica de cancelamento e aquisição do `Ticket` foram condensados em uma classe que facilita a reutilização dessa lógica de negócio na aplicação.

### Strategy

O `Ticket` pode ser visualizado em vários modos, seja `JSON` (padrão REST) ou via `HTML`, `YAML` ou `XML`.

### Outros padrões

- Software em camadas (Controller -> Service -> Repository -> Data Source)
- Injeção de dependências
- Stateless
- Repository pattern
