"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicoProviders = void 0;
const servico_entity_1 = require("./servico.entity");
exports.servicoProviders = [
    {
        provide: 'SERVICO_REPOSITORY',
        useFactory: (connection) => connection.getRepository(servico_entity_1.Servico),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=servico.providers.js.map