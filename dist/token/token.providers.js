"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenProviders = void 0;
const token_entity_1 = require("./token.entity");
exports.tokenProviders = [
    {
        provide: 'TOKEN_REPOSITORY',
        useFactory: (connection) => connection.getRepository(token_entity_1.Token),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=token.providers.js.map