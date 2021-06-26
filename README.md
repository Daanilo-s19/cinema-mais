# cinema-mais

API para um Cinema utilizando Design Patterns.

[Clique aqui para ver os requisitos.](assets/pas_trabalho.pdf)

## Padrões escolhidos

### Factory

Utilizamos [MovieRoomFactory](src/movie-room/factories/movie-room.factory.ts) e [CustomerFactory](src/customer/factories/customer.factory.ts)

### Facade

A lógica de cancelamento e aquisição do [Ticket](src/ticket/entities/ticket.entity.ts) foram condensados em uma classe que facilita a reutilização dessa lógica de negócio na aplicação. [BuyTicketFacade](src/ticket/services/buy-ticket-facade.service.ts) e [CancelTicketFacade](src/ticket/services/cancel-ticket-facade.service.ts)

### Strategy

O `Ticket` pode ser visualizado em vários modos, seja `JSON` (padrão REST) ou via `HTML`, `YAML` ou `XML`.

- [Strategy](src/ticket/providers/ticket-viewer-strategy.provider.ts)
- [HTML](src/ticket/providers/ticket-viewer-html.provider.ts)
- [YAML](src/ticket/providers/ticket-viewer-yaml.provider.ts)
- [XML](src/ticket/providers/ticket-viewer-xml.provider.ts)

### Outros padrões

- [Arquitetura modular](https://docs.nestjs.com/modules)
- Software em camadas (Controller -> Service -> Repository -> Data Source)
- [Injeção de dependências](https://docs.nestjs.com/modules#dependency-injection)
- Stateless
- [Repository pattern]()
