"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicoModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const token_module_1 = require("../token/token.module");
const database_module_1 = require("../database/database.module");
const servico_controller_1 = require("./servico.controller");
const servico_providers_1 = require("./servico.providers");
const servico_service_1 = require("./servico.service");
let ServicoModule = class ServicoModule {
};
ServicoModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule, token_module_1.TokenModule],
        controllers: [servico_controller_1.ServicoController],
        providers: [
            ...servico_providers_1.servicoProviders,
            servico_service_1.ServicoService,
        ],
        exports: [servico_service_1.ServicoService]
    })
], ServicoModule);
exports.ServicoModule = ServicoModule;
//# sourceMappingURL=servico.module.js.map